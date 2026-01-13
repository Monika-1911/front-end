import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3FOdxuXFp5f8EugkBcNT1Wr_wiivj1l62w&s"
        className="hero-img"
        alt="hero"
      />
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;