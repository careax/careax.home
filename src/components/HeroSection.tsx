import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="ai-watermark" aria-hidden="true">
        <span className="gradient">AI</span>
      </div>
      <div className="shell">
        <div className="hero-meta">
          <span>AX Instructor</span>
          <span className="bar" aria-hidden="true" />
          <span>Seoul · Remote</span>
          <span className="bar" aria-hidden="true" />
          <span>2026 Cohort Open</span>
        </div>

        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-tag">— Profile / 001</div>
            <h1>
              <span className="row">RANA</span>
              <span className="row">
                <span className="accent-line" aria-hidden="true" />
                <span className="lee">LEE</span>
              </span>
              <span className="kr">이라나 · AX Instructor</span>
            </h1>

            <div className="hero-roles">
              <div className="role-row">
                <span className="diamond fill" aria-hidden="true" />
                <span className="text">
                  <b>Sr. PM</b> · Application Development &amp; Innovation
                  <em>IBM</em>
                </span>
              </div>
              <div className="role-row">
                <span className="diamond" aria-hidden="true" />
                <span className="text">
                  <b>UX/UI 기획</b> · Artificial Intelligence Technology Team
                  <em>Hyundai AutoEver</em>
                </span>
              </div>
              <div className="role-row">
                <span className="diamond" aria-hidden="true" />
                <span className="text">
                  <b>UX Design M.A.</b> · 이화여자대학교 석사
                  <em>Ewha Womans University</em>
                </span>
              </div>
            </div>

            <div className="hero-equation" aria-label="AI × UX = AX">
              <span className="chip">AI</span>
              <span className="op">×</span>
              <span className="chip">UX</span>
              <span className="op">=</span>
              <span className="ax">AX</span>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-bg" aria-hidden="true" />
            <div className="deco-diamond tr" aria-hidden="true" />
            <div className="deco-line h1" aria-hidden="true" />
            <div className="deco-dot gold" aria-hidden="true" />

            <Image
              className="portrait-img"
              src="/rana-profile-cutout.png"
              alt="Rana Lee · 이라나 · AX Instructor"
              width={580}
              height={725}
              priority
            />

            <div className="deco-diamond bl" aria-hidden="true" />
            <div className="deco-line h2" aria-hidden="true" />
            <div className="deco-dot cyan" aria-hidden="true" />
            <div className="portrait-tag">이라나 · <b>Rana Lee</b> · AX Lead</div>
          </div>
        </div>
      </div>
    </section>
  );
}
