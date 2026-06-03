"use client";

export default function About() {
  return (
    <section className="about" id="about">
      <div>
        <p className="section-tag">Who We Are</p>
        <h2 className="section-title">A Neighbourhood Shop With Heart</h2>
        <p className="section-body">
          Tucked inside Teck Whye Shopping Centre, Alywin Cycles is a family-run bicycle shop
          known for its genuine warmth and deep expertise. Whether you are gearing up your
          child&apos;s first bike or hunting for a quality city bike, uncle and auntie are here
          to help — patiently, honestly, and without the attitude.
        </p>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">166+</div>
            <div className="stat-label">Google Reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3.7★</div>
            <div className="stat-label">Google Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Kids</div>
            <div className="stat-label">Bikes &amp; Gear</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Free</div>
            <div className="stat-label">1-Year Servicing</div>
          </div>
        </div>
      </div>
      <div className="about-visual">
        <div className="about-card">
          <div className="about-card-icon">🚲</div>
          <h3 className="about-card-title">Expert Servicing, Genuine People</h3>
          <div className="about-card-divider" />
          <p className="about-card-body">
            From puncture repairs to full tune-ups, our team handles your bike like their own.
            Every new purchase comes with complimentary accessories and a year of free servicing
            — because a good ride starts with a good relationship.
          </p>
        </div>
      </div>
    </section>
  );
}