import ProductList from "./components/ProductList";
import FavoriteList from "./components/FavoriteList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🛍️ Product Store</h1>

      <ProductList />

      <FavoriteList />
    </div>
  );
}

export default App;