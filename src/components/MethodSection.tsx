const steps = [
  {
    step: "Step 01",
    title: "Diagnose",
    desc: "현재 워크플로우를 매핑하고 AI 가 실제로 가치를 더할 지점을 찾습니다.",
    shape: (
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <circle cx="21" cy="21" r="20" fill="none" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    step: "Step 02",
    title: "Prototype",
    desc: "아이디어를 즉시 작동하는 결과물로. 매 세션 살아있는 산출물을 만듭니다.",
    shape: (
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect x="21" y="0" width="29.7" height="29.7" transform="rotate(45 21 0)" fill="url(#sg)" />
      </svg>
    ),
  },
  {
    step: "Step 03",
    title: "Validate",
    desc: "AI 결과를 검증하는 루틴을 코호트 내에서 직접 돌려봅니다.",
    shape: (
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <rect x="2" y="2" width="38" height="38" fill="none" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    step: "Step 04",
    title: "Ship",
    desc: "강의실 안에서 끝나지 않습니다. 본인의 실제 업무에 안착시키는 30일 플랜으로 마무리.",
    shape: (
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <polygon points="21,2 40,40 2,40" fill="none" stroke="#FACC15" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function MethodSection() {
  return (
    <section className="section method" id="method">
      <div className="shell">
        <div className="eyebrow">
          <span className="num">03 / Method</span>
          <span className="bar" />
          <span>How we learn</span>
        </div>
        <h2 className="h-section">
          강의 X. <span className="grad">함께 만드는 워크숍 O.</span>
        </h2>
        <p className="lede">
          슬라이드 100장이 아닌, 매 세션 결과물 하나. 12년 차 PM 의 실무 자산을 그대로 옮긴
          4단계 학습 사이클로 진행합니다.
        </p>

        <div className="method-grid">
          {steps.map((s) => (
            <div key={s.step} className="method-cell">
              <div>
                <div className="step">{s.step}</div>
                <div className="shape">{s.shape}</div>
              </div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
