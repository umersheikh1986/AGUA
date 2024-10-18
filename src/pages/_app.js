"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
const activeChain = "ethereum";


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
       < ThirdwebProvider
       clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
       activeChain={ activeChain }>
      <Component {...pageProps} />;
      </ ThirdwebProvider>
      {/* <Footer /> */}
    </>
  );
}