import { LayoutPageWrapper } from "@/components/layout";
import "@/styles/globals.css";

//const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",], subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (<LayoutPageWrapper>
    <Component {...pageProps} />
  </LayoutPageWrapper>)
}
