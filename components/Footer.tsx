"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-logo">Alywin <span>Cycles</span></div>
      <p>Copyright {year} Alywin Cycles. Teck Whye Shopping Centre, Singapore</p>
      <p>+65 8322 4331</p>
    </footer>
  );
}