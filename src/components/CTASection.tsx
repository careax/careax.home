"use client";
import { useState, useRef } from "react";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");
  const submitting = useRef(false);

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요";
    else if (!/^[\d\-+\s()]{7,20}$/.test(form.phone.trim())) e.phone = "올바른 연락처를 입력해주세요";
    if (!form.email.trim()) e.email = "이메일을 입력해주세요";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "이메일 형식이 올바르지 않습니다";
    if (!form.message.trim()) e.message = "문의 내용을 입력해주세요";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting.current) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    submitting.current = true;
    setStatus("loading");

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || supabaseUrl === "https://placeholder.supabase.co") {
        throw new Error("DB가 설정되지 않았습니다. careax.rana@gmail.com으로 직접 이메일 보내주세요.");
      }

      const res = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey!,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({
          name: form.name.trim().slice(0, 100),
          phone: form.phone.trim().slice(0, 20),
          email: form.email.trim().slice(0, 200),
          message: form.message.trim().slice(0, 2000),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }

      setStatus("ok");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("err");
      setErrMsg(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      submitting.current = false;
    }
  }

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
            aria-label="워크숍 예약 이메일 보내기"
          >
            <span className="d" aria-hidden="true" />
            Book a workshop
          </a>
          <button
            className="btn"
            onClick={handlePdfDownload}
            aria-label="커리큘럼 PDF 다운로드"
          >
            <span className="d" aria-hidden="true" />
            Curriculum PDF
          </button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="문의 신청 폼">
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">이름 *</label>
              <input
                id="name" type="text" placeholder="홍길동"
                value={form.name} maxLength={100}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">연락처 *</label>
              <input
                id="phone" type="tel" placeholder="010-0000-0000"
                value={form.phone} maxLength={20}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <span style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.phone}</span>}
            </div>
            <div className="field full">
              <label htmlFor="email">이메일 *</label>
              <input
                id="email" type="email" placeholder="your@email.com"
                value={form.email} maxLength={200}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.email}</span>}
            </div>
            <div className="field full">
              <label htmlFor="message">문의 내용 *</label>
              <textarea
                id="message" placeholder="강의 문의 내용을 입력해주세요 (강의 목적, 인원, 희망 일정 등)"
                value={form.message} maxLength={2000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.message}</span>}
            </div>
          </div>

          <button type="submit" className="form-submit" disabled={status === "loading"}>
            {status === "loading" ? "전송 중..." : "문의 보내기"}
          </button>

          {status === "ok" && (
            <p className="form-msg ok" role="status">✓ 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
          )}
          {status === "err" && (
            <p className="form-msg err" role="alert">✕ {errMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
