const statsItems = [
  { v: "15+", l: "Years · PM & UX" },
  { v: "40+", l: "기업·대학 강의 세션" },
  { v: "1,200+", l: "누적 수강생" },
  { v: "4.9/5", l: "평균 만족도" },
];

const doubled = [...statsItems, ...statsItems];

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
          AI 플랫폼 기획 실무형.<br />
          <span className="grad">기획 PM 실무형 강사.</span>
        </h2>

        <div className="about-grid">
          <div className="bio">
            <p>
              IBM Application Development &amp; Innovation에서 Sr. PM으로, 현대오토에버
              AI Technology팀에서 UX/UI 기획자로 활동하며 실제 AI 제품과 서비스를 기획부터
              개발, 출시까지 경험해온 실무자입니다. 또한 이화여자대학교에서 UX 디자인 석사를
              마치며 사용자 경험과 서비스 설계에 대한 전문성을 쌓았습니다.
            </p>
            <p>
              제 강의는{" "}
              <b style={{ color: "#fff" }}>단순히 ChatGPT 활용법을 배우는 데 그치지 않습니다.</b>{" "}
              AI 시대에 기획자·디자이너·PM이 어떤 방식으로 문제를 정의하고, 협업하며, 일을 설계해야
              하는지 실무 중심으로 다룹니다. 특히 AI 플랫폼을 기획하고 개발하는 과정에서 실무자들이
              가장 궁금해하는 지점들을 실제 사례와 경험을 바탕으로 쉽게 풀어내며,{" "}
              <b style={{ color: "#fff" }}>현업에 바로 적용할 수 있는 실용적인 인사이트</b>를 전달하고자 합니다.
            </p>
            <div className="pull">
              "AI 와 함께 기획, 디자인, 개발이 융합되는 생산성 높은 AX 직무 역량을 키웁니다."
            </div>
            <p>
              스타트업 PO부터 글로벌 기업 UX/UI 기획, PM까지 다양한 환경에서 검증된 워크플로우를,
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
              <div className="career-period">Previous</div>
              <div className="career-role">UX/UI 기획</div>
              <div className="career-org">AI Technology Team · Hyundai AutoEver</div>
            </div>
            <div className="career-card">
              <div className="diamond-tag" aria-hidden="true" />
              <div className="career-period">Lecturer → Present</div>
              <div className="career-role">CareAX 대표 · 기업 및 정부 기관 출강</div>
              <div className="career-org">Generative AI × Product Workshops</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-ticker" aria-label="주요 통계">
        <div className="stats-ticker-track">
          {doubled.map((s, i) => (
            <span key={i} className="stats-ticker-item">
              <span className="stats-ticker-v">{s.v}</span>
              <span className="stats-ticker-l">{s.l}</span>
              <span className="stats-ticker-star" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
