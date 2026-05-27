export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="eyebrow">
          <span className="num">01 / About</span>
          <span className="bar" />
          <span>The Instructor</span>
        </div>
        <h2 className="h-section">
          제품을 만들 줄 아는 사람이<br />
          <span className="grad">AI 를 가르칩니다.</span>
        </h2>

        <div className="about-grid">
          <div className="bio">
            <p>
              IBM Application Development &amp; Innovation 에서 Sr. PM 으로, 그리고 현대오토에버
              AI Technology 팀에서 UX/UI 기획으로 — 실제 제품과 서비스를 시장에 내보내 온
              사람입니다. 이화여자대학교에서 UX 디자인 석사를 마친 후, 관점을 쓰는 행위와
              만들어내는 일을 교차시켜 왔습니다.
            </p>
            <p>
              이 강의는{" "}
              <b style={{ color: "#fff" }}>단순한 ChatGPT 사용법</b>이 아닙니다. AI 시대에{" "}
              <b style={{ color: "#fff" }}>기획자·디자이너·PM 이 어떻게 일의 방식을 다시 설계해야 하는지</b>,
              그 한가운데에서 직접 체득한 방법론을 나눕니다.
            </p>
            <div className="pull">
              "AX 는 AI 를 쓰는 것이 아니라, AI 와 함께 사고하는 새로운 직무 역량입니다."
            </div>
            <p>
              스타트업 PO부터 글로벌 엔터프라이즈 PM까지 다양한 환경에서 검증된 워크플로우를,
              4단계 커리큘럼으로 압축해 전달합니다.
            </p>
          </div>

          <div className="career">
            <div className="career-card featured">
              <div className="diamond-tag" aria-hidden="true" />
              <div className="career-period">Previous</div>
              <div className="career-role">Senior Project Manager</div>
              <div className="career-org">Application Development &amp; Innovation · IBM</div>
            </div>
            <div className="career-card">
              <div className="diamond-tag" aria-hidden="true" />
              <div className="career-period">Now · 2024 → Present</div>
              <div className="career-role">UX/UI 기획</div>
              <div className="career-org">Artificial Intelligence Technology Team · Hyundai AutoEver</div>
            </div>
            <div className="career-card">
              <div className="diamond-tag" aria-hidden="true" />
              <div className="career-period">Lecturer · 2024 → Present</div>
              <div className="career-role">AX 강사 · 기업/대학 출강</div>
              <div className="career-org">Generative AI × Product Workshops</div>
            </div>
            <div className="career-card">
              <div className="diamond-tag" aria-hidden="true" />
              <div className="career-period">Education</div>
              <div className="career-role">UX Design, 석사 (M.A.)</div>
              <div className="career-org">이화여자대학교 · Ewha Womans University</div>
            </div>
          </div>
        </div>

        <div className="stats" aria-label="주요 통계">
          <div className="stat">
            <div className="d" aria-hidden="true" />
            <div className="v"><span className="grad">12+</span></div>
            <div className="l">Years · PM &amp; UX</div>
          </div>
          <div className="stat">
            <div className="d" aria-hidden="true" />
            <div className="v"><span className="grad">40+</span></div>
            <div className="l">기업·대학 강의 세션</div>
          </div>
          <div className="stat">
            <div className="d" aria-hidden="true" />
            <div className="v"><span className="grad">1,200+</span></div>
            <div className="l">누적 수강생</div>
          </div>
          <div className="stat">
            <div className="d" aria-hidden="true" />
            <div className="v">
              <span className="grad">
                4.9<span style={{ fontSize: ".5em", color: "var(--fg-3)" }}>/5</span>
              </span>
            </div>
            <div className="l">평균 만족도</div>
          </div>
        </div>
      </div>
    </section>
  );
}
