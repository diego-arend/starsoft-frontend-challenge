"use client";

import React from "react";
import { FooterContainer, FooterContent, FooterText } from "./styles";

interface FooterProps {
  className?: string;
}

/**
 * Footer Component
 *
 * Site footer with copyright and additional information
 */
const Footer: React.FC<FooterProps> = ({ className }) => {

  return (
    <FooterContainer className={className}>
      <FooterContent>
        <FooterText>
          STARSOFT © TODOS OS DIRETIOS RESERVADOS
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
