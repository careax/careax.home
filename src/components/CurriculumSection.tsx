"use client";
import { useState } from "react";

type Level = "Foundation" | "Practice" | "Leadership" | "All";

const courses = [
  {
    code: "AX · 101",
    levelClass: "l1",
    level: "Foundation" as Level,
    title: "AX 입문: AI 시대의 일하는 법",
    sub: "4 weeks · 16 hours",
    desc: '"왜 우리 팀이 AI 를 도입하면 더 느려질까?" — 이 질문에서 시작합니다. 기획·디자인·PM 직군이 AI 와 협업하기 위해 필요한 멘탈모델, 용어, 기본 워크플로우를 정리합니다.',
    modules: [
      { n: "01", t: "AX 정의와 직무 변화 지도", m: "2h" },
      { n: "02", t: "생성형 AI 도구 매핑 & 한계", m: "4h" },
      { n: "03", t: "프롬프트 설계의 4가지 패턴", m: "4h" },
      { n: "04", t: "팀 워크플로우 재설계 캔버스", m: "6h" },
    ],
    pills: ["Beginner", "On-site", "Online"],
    cta: "Enroll",
    featured: false,
  },
  {
    code: "AX · 201",
    levelClass: "l2",
    level: "Practice" as Level,
    title: "Generative UX Research",
    sub: "6 weeks · 24 hours · Most popular",
    desc: "LLM 을 리서치 파트너로 쓰는 법. 인터뷰 가이드 생성, 트랜스크립트 분석, 페르소나 합성까지 — 신뢰할 수 있는 결과물을 만드는 검증 루틴을 손에 익힙니다.",
    modules: [
      { n: "01", t: "리서치 자동화의 경계와 윤리", m: "3h" },
      { n: "02", t: "인터뷰 가이드 · 페르소나 생성 실습", m: "5h" },
      { n: "03", t: "트랜스크립트 합성 분석 (Affinity 2.0)", m: "8h" },
      { n: "04", t: "신뢰성 검증 프레임 · 환각 방지", m: "4h" },
      { n: "05", t: "팀 리서치 파이프라인 구축", m: "4h" },
    ],
    pills: ["Intermediate", "Hybrid", "팀 단위 4–8명"],
    cta: "Enroll",
    featured: true,
  },
  {
    code: "AX · 301",
    levelClass: "l3",
    level: "Practice" as Level,
    title: "바이브코딩을 통한\nAI 서비스 기획 & 개발",
    sub: "8 weeks · 32 hours · Build-along",
    desc: "기획자·디자이너·PM 이 직접 동작하는 AI 서비스를 만들어보는 코스. 바이브코딩(Vibe Coding) 방식으로 Cursor · Claude · v0 · Lovable 을 연결해, 아이디어에서 실제 배포까지 한 사이클을 손에 익힙니다.",
    modules: [
      { n: "01", t: "AI 서비스 콘셉 정의 · 유즈케이스 매핑", m: "5h" },
      { n: "02", t: "바이브코딩 환경 셋업 (Cursor · Claude Code)", m: "5h" },
      { n: "03", t: "프롬프트로 UI 만들기 · 컴포넌트 합성", m: "7h" },
      { n: "04", t: "LLM API 연동 · 프롬프트 체이닝", m: "8h" },
      { n: "05", t: "배포 · 유저 테스트 · 빠른 이터레이션", m: "7h" },
    ],
    pills: ["Advanced", "Project-based", "No-code OK", "Cohort 12명"],
    cta: "Enroll",
    featured: false,
  },
  {
    code: "AX · 401",
    levelClass: "l4",
    level: "Leadership" as Level,
    title: "AX Leadership for PMs",
    sub: "2 days · Executive workshop",
    desc: "팀장·임원 대상 인텐시브. AI 도입을 KPI 가 아닌 직무 재설계 관점에서 다루며, 조직 단계별 AX 로드맵과 측정 프레임을 함께 만듭니다.",
    modules: [
      { n: "01", t: "AX 성숙도 진단 워크숍", m: "3h" },
      { n: "02", t: "직무별 자동화 우선순위 매트릭스", m: "3h" },
      { n: "03", t: "90일 AX 도입 로드맵", m: "5h" },
      { n: "04", t: "측정 가능한 AX KPI 설계", m: "3h" },
    ],
    pills: ["Executive", "On-site only", "맞춤형"],
    cta: "Inquire",
    featured: false,
  },
];

const tabs: { label: string; filter: Level | "All" | "Custom" }[] = [
  { label: "All", filter: "All" },
  { label: "Foundation", filter: "Foundation" },
  { label: "Practice", filter: "Practice" },
  { label: "Leadership", filter: "Leadership" },
  { label: "Custom", filter: "Custom" },
];

export default function CurriculumSection() {
  const [active, setActive] = useState<string>("All");

  const visible = courses.filter((c) => {
    if (active === "All" || active === "Custom") return true;
    return c.level === active;
  });

  return (
    <section className="section curriculum" id="curriculum">
      <div className="shell">
        <div className="head">
          <div>
            <div className="eyebrow">
              <span className="num">02 / Curriculum</span>
              <span className="bar" />
              <span>4 Programs</span>
            </div>
            <h2 className="h-section">
              한 학기를 한 워크숍에.<br />
              <span className="grad">AX 커리큘럼.</span>
            </h2>
            <p className="lede">
              기획·디자인·PM 직군이 AI 와 함께 일하는 방식을 4단계로 재설계합니다.
              단발성 특강부터 8주 인텐시브까지, 조직 단계에 맞게 결합 가능합니다.
            </p>
          </div>
          <div className="curr-tabs" role="tablist" aria-label="커리큘럼 필터">
            {tabs.map((t) => (
              <button
                key={t.label}
                role="tab"
                aria-selected={active === t.filter}
                className={`curr-tab${active === t.filter ? " active" : ""}`}
                onClick={() => setActive(t.filter)}
              >
                <span className="d" aria-hidden="true" />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="courses">
          {visible.map((c) => (
            <article
              key={c.code}
              className={`course${c.featured ? " featured" : ""}`}
            >
              <div className="corner-diamond" aria-hidden="true" />
              <div className="top">
                <span className="code">{c.code}</span>
                <span className={`level ${c.levelClass}`}>{c.level}</span>
              </div>
              <h3>
                {c.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < c.title.split("\n").length - 1 && <br />}</span>
                ))}
              </h3>
              <div className="sub">{c.sub}</div>
              <p className="desc">{c.desc}</p>
              <div className="modules">
                {c.modules.map((m) => (
                  <div key={m.n} className="module">
                    <span className="n">{m.n}</span>
                    <span className="t">{m.t}</span>
                    <span className="m">{m.m}</span>
                  </div>
                ))}
              </div>
              <div className="course-meta">
                <div className="meta-pills">
                  {c.pills.map((p) => (
                    <span key={p} className="pill">{p}</span>
                  ))}
                </div>
                <a className="course-cta" href="#contact">
                  <span>{c.cta}</span>
                  <span className="arrow" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
