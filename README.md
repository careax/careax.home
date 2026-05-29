# 제품 요구사항 정의서 (PRD) 및 개발 명세서 (v1.0)

## 프로젝트명: CareAX 개인 강사 프로필 사이트 전면 재구축 (Neon DB & 다국어 지원 & 배포 모니터링 UI & 보안 환경 구축)

## 프로젝트 목적 및 배경
- **배경**: 기존 배포 프로세스의 치명적인 오류 수정, 연동 인프라를 Neon PostgreSQL로 변경, 한국어/영어 다국어 버전 동시 지원을 위한 전면 재구축.
- **목적**: `https://careax.github.io/careax-home/` 사이트의 디자인, 스타일, 레이아웃을 100% 완벽히 복제하되, 클로드의 잘못된 배포에도 즉각 롤백 및 복구가 가능하도록 완전무결한 버전 관리, 배포 사후 고지, **웹 UI 상에서 버전 이력을 직접 탐색할 수 있는 실시간 모니터링 환경**, 그리고 **DB 자격 증명 유출을 방지하는 철저한 `.gitignore` 보안 시스템**을 구축함.

---

## 1. 버전 관리, 변경 관리 및 배포 모니터링 지침

### 1.1 Git 브랜치 운용 및 변경 관리
- **`main` 브랜치**: 프로덕션 배포 전용. 안정 버전만 유지.
- **`dev` 브랜치**: 모든 개발 작업 브랜치.
- **변경 관리**: 모든 수정은 `dev`에서 검증 후 `main`으로 PR 병합.

### 1.2 배포 자동화 및 즉각 롤백 시스템
- **GitHub Actions 모니터링**: 커밋/PR 병합 시 빌드 성공/실패 실시간 모니터링. 실패 시 배포 즉시 중단.
- **버전 태깅**: 안정 배포 시마다 `v1.0.0`, `v1.0.1` 등 태그 발행. 오작동 시 이전 태그로 즉시 롤백.

### 1.3 [필수] 배포 완료 후 사후 고지 의무
클로드는 배포 완료 즉시 아래 세 항목을 고지한다:
1. **버전명** (예: `v1.0.1`)
2. **배포 코드 (Commit Hash)** (예: `Commit: a1b2c3d`)
3. **배포 URL** (예: `https://careax.github.io/home/`)

---

## 2. 인프라, 데이터베이스 셋업 및 보안

### 2.1 Neon 프로젝트 초기화
```bash
npx neonctl@latest init
```

### 2.2 연결 문자열 환경 변수 매핑
실제 자격증명은 `.env` 파일로만 관리하며 절대 코드에 하드코딩하지 않는다.

- **Development**:
```text
postgresql://neondb_owner:[YOUR_PASSWORD]@ep-billowing-boat-aozwh69o.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
```

- **Production (Connection Pooler)**:
```text
postgresql://neondb_owner:[YOUR_PASSWORD]@ep-billowing-boat-aozwh69o-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 2.3 ⭐ [필수] .gitignore 보안 설정

```text
# 환경변수 (DB 비밀번호 및 API 키)
.env
.env.local
.env.*.local

# Neon DB CLI 설정
.neon/
neonctl/

# OS 및 개발툴 캐시
.DS_Store
Thumbs.db
.vscode/
.idea/

# 디펜던시 및 로그
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## 3. 소스코드 디렉토리 구조

```text
careax-home/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── rana-profile-cutout.png
│   └── favicon.ico
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── i18n.js
│   ├── version-viewer.js
│   └── db-handler.js
├── api/
│   └── inquire.js
├── CHANGELOG.md
├── .env.example
├── .gitignore
└── README.md
```

---

## 4. 핵심 요구사항 및 기능 명세

### 4.1 정밀 데이터 및 텍스트 매핑 (절대 수정 금지)

| 항목 | AS-IS (잘못된 예시) | TO-BE (정답) |
| --- | --- | --- |
| **브라우저 타이틀** | CareAX | Senior PM & AI... | **`CareAX \| Senior PM & AI Technology Instructor`** |
| **로고** | Rana Lee AX Instructor (텍스트) | **CareAX** ✅ (SVG 다이아몬드 1개) |
| **Hero Role 1** | Sr. PM | **Senior PM** |
| **Hero Role 2** | UX/UI 기획 · Artificial Intelligence... | **UX/UI 기획 · AI Technology Team** |
| **Hero 이미지** | `rana-profile.webp` | **`public/assets/rana-profile-cutout.png`** |
| **Method Heading** | 강의 X. / 함께 만드는 워크숍 O. | **일방향 강의 X. / 참여형 실무 강의 O.** |
| **디자인/텍스트 전반** | 임의 가공 | **100% 동일 유지** |

### 4.2 한국어/영어 다국어(i18n) 시스템
- 내비게이션 바에 `KO | EN` 토글 상시 배치
- 언어 설정 `localStorage` 저장 (새로고침 유지)
- `data-i18n="key_name"` 속성 + Vanilla JS `textContent` 스위칭
- 외부 다국어 라이브러리 사용 금지

### 4.3 UI 버전 및 Changelog 탐색 기능
- **버전 배지**: 우측 하단 반투명 배지 (`v1.0.0`)
- **클릭 시 모달**: 현재 버전, Commit Hash, 버전별 변경 이력 타임라인 표시

### 4.4 Contact 문의하기 파이프라인
1. `fetch('/api/inquire')` → 서버리스 핸들러로 JSON 전송
2. `process.env.DATABASE_URL`로 Neon DB `inquiries` 테이블에 적재
3. 이메일 알림 → `careax.rana@gmail.com`
   - 제목: `[CareAX 문의알림] {이름}님으로부터 새로운 문의가 접수되었습니다.`

### 4.5 DOM 구조, 섹션 앵커 및 커리큘럼 인터랙션
- `#hero`, `#about`, `#curriculum`, `#contact` 앵커 스무스 스크롤
- 커리큘럼 타임라인 활성화 + 페이드인 Vanilla JS 애니메이션

---

## 5. AI(클로드) 가이드라인

1. **버전 동기화**: 코드 수정·배포 시마다 변경 데이터 객체 업데이트 필수
2. **보안 엄수**: DB 자격증명 절대 하드코딩 금지. `.env` + `.gitignore` 준수
3. **배포 직후 고지**: 버전명, Commit Hash, 배포 URL 즉시 보고
