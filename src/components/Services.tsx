import "../styles/services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <h2>
          THE PLUG FOR <span>EVERYTHING</span>
        </h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>EXPRESS REPAIR</h3>
            <p>Cracked screen? Battery dead? Fixed in under 60 minutes.</p>

            <ul>
              <li>Same-day service</li>
              <li>Genuine parts</li>
              <li>6-month warranty</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>PRO TRADE-IN</h3>
            <p>Upgrade without breaking the bank.</p>

            <ul>
              <li>Instant valuation</li>
              <li>Cash / credit</li>
              <li>Secure data wipe</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>CERTIFIED PRE-LOVED</h3>
            <p>Tested flagship tech at lower prices.</p>

            <ul>
              <li>50-point inspection</li>
              <li>100% battery health</li>
              <li>Clean history</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
