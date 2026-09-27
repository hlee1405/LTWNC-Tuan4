import { useFavoritesStore } from "../stores/favoritesStore";

export default function FavoriteList() {
  const favorites = useFavoritesStore(
    (state) => state.favorites
  );

  const clearFavorites = useFavoritesStore(
    (state) => state.clearFavorites
  );

  return (
    <section className="favorites">
      <div className="favorite-header">
        <h2>
          ❤️ Sản phẩm yêu thích ({favorites.length})
        </h2>

        {favorites.length > 0 && (
          <button onClick={clearFavorites}>
            Xóa tất cả
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p>Chưa có sản phẩm yêu thích.</p>
      ) : (
        <div className="favorite-list">
          {favorites.map((product) => (
            <div className="favorite-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h3>{product.name}</h3>
                <p>
                  {product.price.toLocaleString()} VNĐ
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}