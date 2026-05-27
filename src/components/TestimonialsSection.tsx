const voices = [
  {
    quote: "AI 도구를 배우는 줄 알았는데, 일하는 방식 자체가 바뀌었습니다. 4주 만에 팀의 리서치 리드타임이 절반.",
    name: "Junseo P.",
    org: "Product Lead · Fintech",
  },
  {
    quote: "PM 출신이 가르치는 AX 라서 강의 내용이 우리 회의실 풍경과 같았습니다. 다음날부터 바로 적용했어요.",
    name: "Hyemin K.",
    org: "UX Manager · Mobility",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="tnt" id="voices">
      <div className="shell">
        <div className="eyebrow">
          <span className="num">04 / Voices</span>
          <span className="bar" />
          <span>From cohorts</span>
        </div>
        <h2 className="h-section">
          현장의 PM 들이<br />
          <span className="grad">남긴 말.</span>
        </h2>

        <div className="tnt-grid">
          {voices.map((v) => (
            <div key={v.name} className="testimonial">
              <blockquote>"{v.quote}"</blockquote>
              <div className="who">
                <div className="avatar" aria-hidden="true" />
                <div>
                  <div className="name">{v.name}</div>
                  <div className="org">{v.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
