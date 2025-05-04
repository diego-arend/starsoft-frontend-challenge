"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartCount from '@/components/CartCount';
import { HeaderContainer, HeaderContent, LogoContainer, CartContainer, CartIcon } from './styles';
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
import { selectCartItems, selectCartInitialized, initializeCart } from '@/redux/slices/cartSlice';

/**
 * Header Component
 * 
 * Responsive header with logo and shopping cart
 */
const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const initialized = useAppSelector(selectCartInitialized);
  const headerRef = useRef<HTMLDivElement>(null);
  const cartCount = initialized ? cartItems.length : 0;
  
  React.useEffect(() => {
    if (!initialized) {
      dispatch(initializeCart());
    }
  }, [dispatch, initialized]);

  return (
    <HeaderContainer ref={headerRef}>
      <HeaderContent>
        <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
          <LogoContainer>
            <Image
              src="/logo.svg"
              alt="Starsoft Logo"
              width={101}
              height={38}
              priority
            />
          </LogoContainer>
        </Link>
        
        <CartContainer>
          <CartIcon>
            <Image
              src="/bag.svg"
              alt="Shopping Cart"
              width={33}
              height={33}
            />
            <CartCount count={cartCount} />
          </CartIcon>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
