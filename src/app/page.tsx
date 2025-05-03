'use client';

import CardItemNFT from "@/components/CardItemNFT";
import Container from "@/components/Container";

const HomePage = () => {
  return (
    <Container>
      <CardItemNFT
        id="1"
        title="CryptoPunk #1"
        description="This is a description of CryptoPunk #1."
        imageUrl="https://softstar.s3.amazonaws.com/items/backpack.png"  // Imagem local na pasta public
        price={0.5}
        cryptoSymbol="ETH"
        cryptoIconPath="/eth_symbol.png"
        onBuyClick={(id) => console.log(`Buy item with id: ${id}`)}
        className="card-item-nft"
      />
    </Container>
  );
};

export default HomePage;
