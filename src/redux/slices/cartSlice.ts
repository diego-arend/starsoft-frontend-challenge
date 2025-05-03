import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product-types";
import { RootState } from "../store";
import { CartItem, CartState } from "@/types/cartSlice-types";

const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") {
    return []; // SSR - returns empty array if on server
  }

  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Erro ao carregar carrinho do localStorage:", error);
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]): void => {
  if (typeof window === "undefined") {
    return; // SSR - Does nothing if on server
  }

  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
    console.error("Erro ao salvar carrinho no localStorage:", error);
  }
};

const initialState: CartState = {
  items: loadCartFromStorage(), // Now it's being used!
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state) => {
      if (typeof window !== "undefined" && !state.isOpen) {
        try {
          const savedCart = localStorage.getItem("cart");
          if (savedCart) {
            state.items = JSON.parse(savedCart);
          }
          state.isOpen = true;
        } catch (error) {
          console.error("Erro ao carregar carrinho do localStorage:", error);
        }
      }
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1 
        });
      }
      
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, initializeCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) => state.cart.items.length;
export const selectCartInitialized = (state: RootState) => state.cart.isOpen;

export default cartSlice.reducer;
