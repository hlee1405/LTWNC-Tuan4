import { Product } from "../types/product";
import { useFavoritesStore } from "../stores/favoritesStore";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({
  product,
}: ProductItemProps) {
  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const isFavorite = useFavoritesStore(
    (state) => state.isFavorite(product.id)
  );

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.price.toLocaleString()} VNĐ</p>

      <button
        onClick={() => toggleFavorite(product)}
        className={isFavorite ? "favorite active" : "favorite"}
      >
        {isFavorite ? "❤️ Đã yêu thích" : "♡ Yêu thích"}
      </button>
    </div>
  );
}