"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartCount from '@/components/CartCount';
import { HeaderContainer, HeaderContent, LogoContainer, CartContainer, CartIcon } from './styles';
import { HeaderProps } from '@/types/header-types';

/**
 * Header Component
 * 
 * Responsive header with logo and shopping cart
 * 
 * @prop {string} className - Optional CSS class name
 * @prop {number} cartCount - Optional number to display in the cart counter (defaults to 0)
 */
const Header: React.FC<HeaderProps> = ({ className, cartCount = 0 }) => {
  return (
    <HeaderContainer className={className}>
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
