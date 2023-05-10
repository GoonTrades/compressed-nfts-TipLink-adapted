import {
  MetadataArgs,
  TokenProgramVersion,
  TokenStandard,
} from "@metaplex-foundation/mpl-bubblegum";
import { Keypair, PublicKey } from "@solana/web3.js";

export type NFTMetadata = {
  name: string;
  uri: string;
  symbol: string;
  // ...other properties...
};


export const nftMetadatas: NFTMetadata[] = [
  {
    name: "Compressed NFT 1",
    //This is example JSON metadata for the NFTs
    uri: "https://shdw-drive.genesysgo.net/91uEGv2pFyc3nZPgya6L41FKaoD6GoTcGDHqhokHe7Hw/Frame%205%20(3).png",
    symbol:"Testy Test"
  },
  {
    name: "Compressed NFT 2",
    //This is example JSON metadata for the NFTs
    uri: "https://shdw-drive.genesysgo.net/91uEGv2pFyc3nZPgya6L41FKaoD6GoTcGDHqhokHe7Hw/Frame%205%20(4).png",
    symbol:"Testy Test"
  },
  // ...more NFT metadata...
];




export const createCompressedNFTMetadata = (nftMetadata: NFTMetadata, payer: Keypair, tipLinkPubKey: PublicKey): MetadataArgs => {
  return {
    name: nftMetadata.name,
    symbol: nftMetadata.symbol,
    // specific json metadata for each NFT
    uri: nftMetadata.uri,
    creators: [
      {
        address: payer.publicKey,
        verified: false,
        share: 100,
      },

    ],
    editionNonce: 0,
    uses: null,
    collection: null,
    primarySaleHappened: false,
    sellerFeeBasisPoints: 0,
    isMutable: false,
    // values taken from the Bubblegum package
    tokenProgramVersion: TokenProgramVersion.Original,
    tokenStandard: TokenStandard.NonFungible,
  };
};
