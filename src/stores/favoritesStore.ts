import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface FavoritesState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  toggleFavorite: (product) =>
    set((state) => {
      const exists = state.favorites.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return {
          favorites: state.favorites.filter(
            (item) => item.id !== product.id
          ),
        };
      }

      return {
        favorites: [...state.favorites, product],
      };
    }),

  isFavorite: (productId) => {
    return get().favorites.some(
      (item) => item.id === productId
    );
  },

  clearFavorites: () => {
    set({ favorites: [] });
  },
}));