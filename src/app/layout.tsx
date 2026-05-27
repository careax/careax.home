import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RANA LEE · 이라나 · AX Instructor",
  description: "AI × UX = AX. 기획자·디자이너·PM을 위한 AX 워크숍. IBM / Hyundai AutoEver 출신 Rana Lee의 커리큘럼.",
  openGraph: {
    title: "RANA LEE · 이라나 · AX Instructor",
    description: "AI × UX = AX. 기획자·디자이너·PM을 위한 AX 워크숍.",
    url: "https://careax.vercel.app",
    siteName: "CareAX",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
