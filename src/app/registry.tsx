"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

/**
 * StyledComponentsRegistry Component
 * 
 * This component enables server-side rendering (SSR) for styled-components in Next.js.
 * 
 * How it works:
 * 1. Creates a ServerStyleSheet instance which captures all styled-components styles during rendering
 * 2. Uses Next.js's useServerInsertedHTML hook to inject the captured styles into the HTML
 * 3. On the server: wraps children with StyleSheetManager to capture styles
 * 4. On the client: simply renders children without additional wrapping
 * 
 * This implementation prevents styling mismatch between server and client renders,
 * avoiding the common "flash of unstyled content" issue when using styled-components with SSR.
 * 
 * This is the recommended pattern for using styled-components with Next.js App Router.
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize the style sheet only once using lazy initialization
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // Insert collected styles into HTML during server-side rendering
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // In browser, just render children without StyleSheetManager
  if (typeof window !== "undefined") return <>{children}</>;

  // On server, use StyleSheetManager to capture styles
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
