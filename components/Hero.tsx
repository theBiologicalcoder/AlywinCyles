"use client";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-tag">Teck Whye Shopping Centre - Singapore</p>
          <h1 className="hero-title">
            Your Ride.<br />
            Our <em>Passion.</em>
          </h1>
          <p className="hero-sub">
            Alywin Cycles has been serving Singapore's cycling community with quality bikes,
            expert servicing, and genuine care - from kids' first rides to serious street machines.
          </p>
          <div className="hero-actions">
            <a href="#visit" className="btn-primary">Find Us</a>
            <a href="#offer" className="btn-ghost">What We Offer</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src="/acycles.png" alt="Alywin Cycles shop" className="hero-shop-img" />
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}