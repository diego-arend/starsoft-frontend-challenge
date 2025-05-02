"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContainer, LogoContainer, CartContainer, CartIcon, CartCount } from './styles';

interface HeaderProps {
  cartItemsCount?: number;
}

/**
 * Header Component
 * 
 * Responsive header with logo and shopping cart
 */
const Header: React.FC<HeaderProps> = ({ cartItemsCount = 0 }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <Image
            src="/logo1.svg"
            alt="Starsoft Logo"
            width={101}
            height={38}
            priority
          />
        </Link>
      </LogoContainer>

      <CartContainer>
        <Link href="/cart">
          <CartIcon>
            <Image
              src="/bag.svg"
              alt="Shopping Cart"
              width={33}
              height={33}
              priority
            />
            <CartCount>{cartItemsCount}</CartCount>
          </CartIcon>
        </Link>
      </CartContainer>
    </HeaderContainer>
  );
};

export default Header;
