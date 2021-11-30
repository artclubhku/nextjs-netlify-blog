import Head from "next/head";
import Navigation from "./Navigation";
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      
      <Navigation />
      
      <main>{children}</main>
    
      <Footer />
    </>
  );
}
