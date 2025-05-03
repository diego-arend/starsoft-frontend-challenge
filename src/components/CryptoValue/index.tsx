"use client";

import React from "react";
import Image from "next/image";
import { CryptoContainer, CryptoIcon, CryptoText } from "./styles";

interface CryptoValueProps {
  value: number | string;
  symbol: string;
  iconPath?: string;
  className?: string;
}

/**
 * CryptoValue Component
 *
 * Displays a cryptocurrency value with its symbol and corresponding icon
 */
const CryptoValue: React.FC<CryptoValueProps> = ({
  value,
  symbol,
  iconPath = "/eth_symbol.png",
  className,
}) => {
  return (
    <CryptoContainer className={className}>
      <CryptoIcon>
        <Image
          src={iconPath}
          alt={`${symbol} icon`}
          width={29}
          height={29}
          priority
        />
      </CryptoIcon>
      <CryptoText>
        {value} {symbol}
      </CryptoText>
    </CryptoContainer>
  );
};

export default CryptoValue;
