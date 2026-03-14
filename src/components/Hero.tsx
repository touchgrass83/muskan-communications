import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <div className="badge">DROP 04 NOW LIVE</div>

          <h1>
            VIBE <br />
            <span>WITH TECH</span>
          </h1>

          <p>
            Level up your digital game with the latest gear and lightning-fast
            repairs.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">SHOP THE DROP</button>
            <button className="btn-outline">TRADE-IN</button>
          </div>
        </div>

        <img
          src="/phone.png"
          alt="phone"
          style={{ width: "420px", borderRadius: "20px" }}
        />
      </div>
    </section>
  );
}
