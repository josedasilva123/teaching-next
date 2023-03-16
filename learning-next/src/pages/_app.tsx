import type { AppProps } from "next/app";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['400'],
  style: ["normal"],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={`${roboto.className} ${inter.className}`}>
         <Component {...pageProps} />
      </main>
   );
}
