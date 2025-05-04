import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product-types";
import { RootState } from "../store";
import { CartItem, CartState } from "@/types/cartSlice-types";

/**
 * Redux slice for managing shopping cart functionality
 * 
 * This slice handles:
 * - Adding, removing, and updating cart items
 * - Persisting cart data to localStorage
 * - Syncing cart state between browser sessions
 * - Managing cart visibility state
 * 
 * @module cartSlice
 */

/**
 * Loads cart items from localStorage
 * 
 * @returns {CartItem[]} Array of cart items from localStorage or empty array if not found or on server
 */
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

/**
 * Saves current cart items to localStorage
 * 
 * @param {CartItem[]} items - Current cart items to be saved
 * @returns {void}
 */
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

/**
 * Initial state for the cart
 * 
 * @type {CartState}
 */
const initialState: CartState = {
  items: loadCartFromStorage(),
  isOpen: false,
};

/**
 * Cart slice with reducers for managing cart state
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Initializes the cart from localStorage on client-side
     * Used to hydrate the cart state after SSR
     * 
     * @param {CartState} state - Current cart state
     */
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

    /**
     * Adds a product to the cart
     * If product already exists, increases its quantity
     * 
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<Product>} action - Action containing product to add
     */
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

    /**
     * Removes an item from the cart by id
     * 
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<string|number>} action - Action containing item id to remove
     */
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },

    /**
     * Clears all items from the cart
     * 
     * @param {CartState} state - Current cart state
     */
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    /**
     * Updates the quantity of a specific item in the cart
     * If quantity <= 0, removes the item from cart
     * 
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<{id: string|number, quantity: number}>} action - Action with item id and new quantity
     */
    updateQuantity: (state, action: PayloadAction<{id: string | number, quantity: number}>) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      
      if (itemIndex >= 0) {
        if (quantity <= 0) {
          // Se a quantidade for 0 ou negativa, remova o item
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // Caso contrário, atualize a quantidade
          state.items[itemIndex].quantity = quantity;
        }
        
        saveCartToStorage(state.items);
      }
    }
  },
});

// Export actions
export const { addToCart, removeFromCart, clearCart, initializeCart, updateQuantity } =
  cartSlice.actions;

/**
 * Selector to get all cart items
 * 
 * @param {RootState} state - The Redux store state
 * @returns {CartItem[]} Array of items in cart
 */
export const selectCartItems = (state: RootState) => state.cart.items;

/**
 * Selector to get the number of unique products in cart
 * 
 * @param {RootState} state - The Redux store state
 * @returns {number} Number of unique items in cart
 */
export const selectCartCount = (state: RootState) => state.cart.items.length;

/**
 * Selector to check if cart is initialized
 * 
 * @param {RootState} state - The Redux store state
 * @returns {boolean} Whether cart is initialized
 */
export const selectCartInitialized = (state: RootState) => state.cart.isOpen;

export default cartSlice.reducer;
