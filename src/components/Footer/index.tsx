"use client";

import React from "react";
import { FooterContainer, FooterContent, FooterText } from "./styles";
import { FooterProps } from "@/types/footer-types";

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
          STARSOFT © TODOS OS DIREITOS RESERVADOS
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
