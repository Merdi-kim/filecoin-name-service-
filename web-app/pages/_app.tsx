import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { mainnet, localhost } from 'wagmi/chains';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { filecoinChain } from '@/utils';
import { RecoilRoot } from 'recoil';

const { chains, provider } = configureChains(
  [filecoinChain /*localhost*/],
  [alchemyProvider({ apiKey: 'LhltBAHnspBMIgCx1SsxYJqM_rJOeZYe' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Filecoin Name Service',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </RecoilRoot>
  );
}
