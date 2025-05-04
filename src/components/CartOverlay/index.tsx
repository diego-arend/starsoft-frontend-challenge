"use client";

import React, { useRef } from "react";
import CircularButton from "@/components/CircularButton";
import CardCheckoutItemNFT from "@/components/CardCheckoutItemNFT";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  selectCartItems,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/redux/slices/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "@/types/cartSlice-types";
import CryptoValue from "@/components/CryptoValue";
import toast from "react-hot-toast";
import {
  Overlay,
  OverlayBackdrop,
  CartHeader,
  BackButtonContainer,
  CartTitle,
  CartContent,
  EmptyCartMessage,
  EmptyCartIcon,
  EmptyCartText,
  CartFooter,
  TotalSection,
  TotalLabel,
  CartTotal,
  CheckoutButton,
} from "./styles";
import { CartOverlayProps } from "@/types/cartOverlay-types";

/**
 * CartOverlay Component
 * 
 * A sliding overlay that displays the shopping cart contents and checkout functionality.
 * 
 */
const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const cartItems = useAppSelector(selectCartItems) as CartItem[];
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);
  const cartTotal = cartItems.reduce((total, item) => {
    return total + (item.price || 0) * item.quantity;
  }, 0);


  const handleRemoveItem = (id: number | string) => {
    dispatch(removeFromCart(id));
    toast.success("Item removido da mochila!");
  };

  const handleQuantityChange = (id: number | string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));

    if (quantity > 0) {
      toast.success("Quantidade atualizada!");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Sua mochila está vazia!");
      return;
    }

    // Simulação de checkout
    toast.success(`Compra finalizada! Total: ${cartTotal.toFixed(2)} ETH`, {
      icon: "🚀",
      duration: 4000,
    });

    dispatch(clearCart());

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <>
      <OverlayBackdrop
        id="cart-overlay-backdrop"
        $isOpen={isOpen}
        onClick={onClose}
      />
      <AnimatePresence>
        {isOpen && (
          <Overlay
            as={motion.div}
            ref={overlayRef}
            $isOpen={isOpen}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <CartHeader>
              <BackButtonContainer>
                <CircularButton
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19L5 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onClick={onClose}
                  ariaLabel="Voltar"
                  size="small"
                />
              </BackButtonContainer>
              <CartTitle>Mochila de Compras</CartTitle>
            </CartHeader>

            <CartContent>
              {cartItems.length === 0 ? (
                <EmptyCartMessage>
                  <EmptyCartIcon>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </EmptyCartIcon>
                  <EmptyCartText>Sua mochila está vazia</EmptyCartText>
                </EmptyCartMessage>
              ) : (
                <>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardCheckoutItemNFT
                        id={item.id}
                        title={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        cryptoSymbol={item.crypto_symbol || "ETH"}
                        cryptoIconPath={
                          item.crypto_icon_path || "/eth_symbol.png"
                        }
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                      />
                    </motion.div>
                  ))}
                </>
              )}
            </CartContent>

            <CartFooter>
              <TotalSection>
                <TotalLabel>Total</TotalLabel>
                <CartTotal>
                  <CryptoValue
                    value={cartTotal.toFixed(2)}
                    iconPath="/eth_symbol.png"
                    symbol="ETH"
                  />
                </CartTotal>
              </TotalSection>
              <CheckoutButton
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Finalizar Compra
              </CheckoutButton>
            </CartFooter>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartOverlay;
