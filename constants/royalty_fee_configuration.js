// Case 0: No royalty & No Fees
// Case 1: Fees only for all swaps
// Case 2: Roaylty only for NFT <> ETH && NFT + NFT + .. <> ETH.  Other cases have no fees and royalties
// Case 3: Fees and Royalties. Roaylty only for NFT <> ETH && NFT + NFT + .. <> ETH.  Other cases have fees

export const FeeConfiguration =
{
  case: 3,
  royalty_to: ["0x20dC8c1401696b848FafB9b1F1D0e0038f10B978"], // Royalty to address
  royalty_percentage: [6], // Royalty percentage. Current is 6%.
  fee_to: "0x20dC8c1401696b848FafB9b1F1D0e0038f10B978", // Fee to address
  fee_tokenContract: "0x5fEd6B6cd6f1F48028Eb53Fa99b6333642eC8e0f", // Fee token contract
  fee_amount: "0.00000005", // Fee amount
  fee_rate: 3 // Fee rate. Current is 3%. If this value is set, then fee should be bigger value between fixed fee_amount and listed token fee_rate percentage.
};

export const ETHContract = "0x0000000000000000000000000000000000000000"
