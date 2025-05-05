import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "@/__tests__/test-utils";
import ContainerImage from "@/components/ContainerImage";
import NextImageMock from "@/__tests__/mocks/nextImage.mock";

// Setup Next.js Image mock
NextImageMock.setupNextImageMock();

describe("ContainerImage Component", () => {
  const defaultProps = {
    src: "/test-image.jpg",
    alt: "Test Image",
    width: 400,
    height: 300,
  };

  it("should render with correct attributes", () => {
    renderWithProviders(<ContainerImage {...defaultProps} />);
    
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain("test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test Image");
  });

  it("should handle error state", async () => {
    renderWithProviders(<ContainerImage {...defaultProps} />);
    
    const image = screen.getByRole("img");
    
    // Simulate image error
    fireEvent.error(image);
    
    // Check if fallback element appears
    const fallbackImage = await screen.findByLabelText(/Imagem não disponível/i);
    expect(fallbackImage).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = renderWithProviders(
      <ContainerImage {...defaultProps} className="custom-image-container" />
    );

    const imageContainer = container.firstChild as HTMLElement;
    expect(imageContainer).toHaveClass("custom-image-container");
  });
});
