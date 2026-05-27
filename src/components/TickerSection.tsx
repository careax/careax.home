const items = [
  "AI × UX = AX",
  "Generative Product Thinking",
  "바이브코딩 · Vibe Coding",
  "From Discovery to Delivery",
  "Sr. PM · IBM / Hyundai AutoEver",
];

export default function TickerSection() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className="star" />
          </span>
        ))}
      </div>
    </div>
  );
}
