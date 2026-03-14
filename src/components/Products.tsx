import "../styles/products.css";

type Product = {
  name: string;
  price: string;
  img: string;
};

const products: Product[] = [
  { name: "iPhone 15 Pro", price: "$999", img: "/p1.png" },
  { name: "AirPods Max", price: "$549", img: "/p2.png" },
  { name: "Neon Keyboard", price: "$129", img: "/p3.png" },
  { name: "Vibe Mouse G2", price: "$89", img: "/p4.png" },
];

export default function Products() {
  return (
    <section className="products">
      <div className="products-header">
        <div>
          <h2>FRESH DROPS</h2>
          <p>The gear everyone's talking about.</p>
        </div>

        <a href="#">VIEW ALL</a>
      </div>

      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} />

            <h3>{p.name}</h3>

            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
