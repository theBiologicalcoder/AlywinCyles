"use client";

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div>
        <p className="section-tag">Find Us</p>
        <h2 className="section-title">Come Say Hello</h2>
        <p className="section-body">
          We are at Teck Whye Shopping Centre — a short bus or MRT ride from most parts of
          Singapore. Pop in, take a look around, and let us know how we can help.
        </p>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Address</div>
              <span className="contact-value">Teck Whye Shopping Centre, Singapore</span>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:+6583224331" className="contact-value">+65 8322 4331</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="contact-label">Hours</div>
              <span className="contact-value">Call ahead to confirm opening hours</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="map-block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6898578413826!2d103.76417247475773!3d1.3719369986391247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106d4bb3b10b%3A0x6a14e6a13a6a3f5e!2sTeck%20Whye%20Shopping%20Centre!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Teck Whye Shopping Centre Map"
          />
          <div className="map-label">
            <span>Teck Whye Shopping Centre</span>
            <a href="https://maps.google.com/?q=Teck+Whye+Shopping+Centre+Singapore" target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}