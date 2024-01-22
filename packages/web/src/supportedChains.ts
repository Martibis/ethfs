import {
  base,
  baseGoerli,
  baseSepolia,
  Chain,
  goerli,
  holesky,
  mainnet,
  optimism,
  optimismGoerli,
  optimismSepolia,
  sepolia,
  zora,
  zoraSepolia,
  zoraTestnet,
} from "viem/chains";

// TODO: combine with deploys

type SupportedChain = {
  readonly chain: Chain;
  readonly slug: string;
  readonly group: string;
  readonly rpcUrl: string;
};

export const supportedChains = [
  /* Ethereum */
  {
    chain: mainnet,
    slug: "mainnet",
    group: "Ethereum",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_1!,
  },
  {
    chain: goerli,
    slug: "goerli",
    group: "Ethereum",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_5!,
  },
  {
    chain: sepolia,
    slug: "sepolia",
    group: "Ethereum",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_11155111!,
  },
  {
    chain: {
      ...holesky,
      // TODO: update viem to include this
      blockExplorers: {
        default: {
          name: "Etherscan",
          url: "https://holesky.etherscan.io",
        },
      },
    },
    slug: "holesky",
    group: "Ethereum",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_17000!,
  },
  /* Base */
  {
    chain: base,
    slug: "base",
    group: "Base",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_8453!,
  },
  {
    chain: baseGoerli,
    slug: "base-goerli",
    group: "Base",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_84531!,
  },
  {
    chain: baseSepolia,
    slug: "base-sepolia",
    group: "Base",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_84532!,
  },
  /* Optimism */
  {
    chain: optimism,
    slug: "optimism",
    group: "Optimism",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_10!,
  },
  {
    chain: optimismGoerli,
    slug: "optimism-goerli",
    group: "Optimism",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_420!,
  },
  {
    chain: optimismSepolia,
    slug: "optimism-sepolia",
    group: "Optimism",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_11155420!,
  },
  /* Zora */
  {
    chain: zora,
    slug: "zora",
    group: "Zora",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_7777777!,
  },
  {
    chain: zoraTestnet,
    slug: "zora-goerli",
    group: "Zora",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_999!,
  },
  {
    chain: zoraSepolia,
    slug: "zora-sepolia",
    group: "Zora",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_999999999!,
  },
  /* Arbitrum */
  // {
  //   chain: arbitrum,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_42161!,
  // },
  // {
  //   chain: arbitrumGoerli,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_421613!,
  // },
  // {
  //   chain: arbitrumSepolia,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_421614!,
  // },
  /* TODO: Arbitrum Nova? */
  /* Polygon */
  // {
  //   chain: polygon,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_137!,
  // },
  // {
  //   chain: polygonMumbai,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_80001!,
  // },
  // {
  //   chain: polygonZkEvm,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_1101!,
  // },
  // {
  //   chain: polygonZkEvmTestnet,
  //   rpcUrl: process.env.NEXT_PUBLIC_RPC_HTTP_URL_1442!,
  // },
] as const satisfies readonly SupportedChain[];

export type SupportedChainIds = (typeof supportedChains)[number]["chain"]["id"];
