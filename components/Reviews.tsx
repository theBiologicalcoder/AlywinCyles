"use client";

const reviews = [
  { name: "Wann Roosmo", rating: 5, text: "If I can give 10 stars, I would :) Service was excellent. Aunty and uncle were so patient with us, answering all our questions. We were given free pedals, bottle holder, bell and tube adapter. Much appreciated! Both aunty and uncle are very knowledgeable and really down to earth. Although they are pretty far from where we stay, we will definitely visit again!" },
  { name: "I am Ficko", rating: 5, text: "Happy with my ride after a full servicing. No doubt the price is on the higher side, but the quality of service is awesome. Feel glad to hear I am getting a year of free servicing. Heard about bad reviews of rudeness but in actual fact they are not. I am just hoping their business will flourish." },
  { name: "Bruce", rating: 4, text: "Went there to fix the tyre. Lady boss is being frank and direct. Uncle is knowledgeable on bikes. Will go back again for service." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="review-stars">
      {[1,2,3,4,5].map((i) => (
        <span key={i} className="star">{i <= count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <div>
          <p className="section-tag" style={{ color: "var(--rust-light)" }}>Customer Reviews</p>
          <h2 className="section-title">What Riders Say</h2>
        </div>
        <div className="rating-badge">
          <div className="rating-score">3.7</div>
          <div className="rating-info">
            <div className="rating-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star" style={{ position: "relative", display: "inline-block", color: "#444" }}>
                ★
                <span style={{ position: "absolute", left: 0, top: 0, width: "60%", overflow: "hidden", color: "#f4b400" }}>★</span>
              </span>
              <span className="star" style={{ color: "#444" }}>★</span>
            </div>
            <span className="rating-count">Based on 166 reviews</span>
            <span className="rating-source">Google Reviews</span>
          </div>
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.name}>
            <Stars count={r.rating} />
            <p className="review-text">{r.text}</p>
            <div className="review-author">
              <div className="review-avatar">{r.name[0]}</div>
              <div>
                <div className="review-name">{r.name}</div>
                <div className="review-platform">Google Review</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}