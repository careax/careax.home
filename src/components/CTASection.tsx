"use client";

export default function CTASection() {
  function handlePdfDownload() {
    window.print();
  }

  return (
    <section className="cta" id="contact">
      <div className="shell cta-inner">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="num">05 / Contact</span>
          <span className="bar" />
          <span>2026 Cohort</span>
        </div>
        <h2>
          Let&apos;s build<br />
          your <span className="grad">AX team.</span>
        </h2>
        <p className="sub">
          2026년 상반기 기업/대학 출강, 비공개 코호트 (8–16명) 일정을 받고 있습니다.
          조직의 AX 성숙도에 맞춰 커리큘럼을 조립해 드립니다.
        </p>

        <div className="cta-actions">
          <a
            className="btn primary"
            href="mailto:careax.rana@gmail.com"
          >
            <span className="d" aria-hidden="true" />
            Book a workshop
          </a>
          <button className="btn" onClick={handlePdfDownload}>
            <span className="d" aria-hidden="true" />
            Curriculum PDF
          </button>
        </div>
      </div>
    </section>
  );
}
