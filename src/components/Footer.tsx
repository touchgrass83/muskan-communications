import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>MUSKAN</h3>
          <p>The ultimate destination for tech enthusiasts.</p>
        </div>

        <div>
          <h4>SHOP</h4>
          <p>Smartphones</p>
          <p>Audio Gear</p>
          <p>Gaming</p>
        </div>

        <div>
          <h4>SUPPORT</h4>
          <p>Repair Status</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

        <div>
          <h4>JOIN THE VIBE</h4>
          <input placeholder="Email address" />
        </div>
      </div>
    </footer>
  );
}
