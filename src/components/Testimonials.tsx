import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>THE SQUAD'S VERDICT</h2>

      <div className="testimonial-grid">
        <div className="testimonial">
          <p>
            "Literally the only place I trust with my phone. Fixed my screen in
            30 minutes."
          </p>
          <strong>Alex Rivera</strong>
        </div>

        <div className="testimonial highlight">
          <p>"Got my trade-in deal and left with a new Pro the same day."</p>
          <strong>Jordan Lee</strong>
        </div>

        <div className="testimonial">
          <p>"Best prices on custom rigs and they actually know their tech."</p>
          <strong>Sam Chen</strong>
        </div>
      </div>
    </section>
  );
}
