import { Chain } from "@rainbow-me/rainbowkit";

export const filecoinChain: Chain = {
    id: 3141,
    name: 'Filecoin Hyperspace',
    network: 'filecoin',
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'filecoin',
      symbol: 'tFIL',
    },
    rpcUrls: {
      default: {
        http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
      },
    },
    blockExplorers: {
      default: { name: 'filfox', url: 'https://hyperspace.filfox.info/en' },
    },
    testnet: true,
  };