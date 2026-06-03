"use client";

const offerings = [
  { num: "01", icon: "🚴", name: "Modern Bicycles", desc: "From the GT Avalanche Comp A (2025) to everyday city cruisers — we carry a curated selection of quality bikes for enthusiasts and commuters alike." },
  { num: "02", icon: "👦", name: "Kids Bikes", desc: "Safe, sturdy, and sized right. We will help you find the perfect first bike for your child, and set it up so the learning is fun — not frustrating." },
  { num: "03", icon: "🔧", name: "Servicing and Repairs", desc: "Full tune-ups, tyre replacements, brake adjustments, and more. Quality workmanship at fair prices, and a free year of servicing on every new bike." },
  { num: "04", icon: "⚙️", name: "Gear and Accessories", desc: "Helmets, pedals, bottle holders, bells, adapters — we stock the essentials and more, so you leave fully kitted out and ready to ride." },
  { num: "05", icon: "🛣️", name: "City and Everyday Bikes", desc: "Practical, comfortable, and built for Singapore streets. Great options for daily commuters, weekend riders, or anyone who just wants to get around." },
  { num: "06", icon: "💬", name: "Honest Advice", desc: "No hard sell. Just real talk from people who love bikes. Uncle and auntie will answer every question — and make sure you leave happy." },
];

export default function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="offer-header">
        <div>
          <p className="section-tag">What We Offer</p>
          <h2 className="section-title">Everything You Need to Ride</h2>
        </div>
        <p className="section-body" style={{ margin: 0 }}>
          From your first bike to your tenth tune-up, Alywin Cycles has you covered.
        </p>
      </div>
      <div className="offer-grid">
        {offerings.map((item) => (
          <div className="offer-item" key={item.num}>
            <div className="offer-num">{item.num}</div>
            <div className="offer-icon">{item.icon}</div>
            <h3 className="offer-name">{item.name}</h3>
            <p className="offer-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}