import ProductItem from "./ProductItem";
import { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 28000000,
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 6000000,
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "iPad Air",
    price: 16000000,
    image: "https://picsum.photos/300/200?random=4",
  },
];

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}