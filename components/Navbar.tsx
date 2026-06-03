"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        Alywin <span>Cycles</span>
      </a>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#offer">What We Offer</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#visit" className="navbar-cta">Visit Us</a></li>
      </ul>
    </nav>
  );
}