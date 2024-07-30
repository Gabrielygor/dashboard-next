import { Main } from "../components/main/Main";
import { Header } from "../components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { LocationProvider } from "@/contexts/LocationContext";


export default function App() {
  return (
    <LocationProvider>
      <Header />
      <Main />
      <Footer />
    </LocationProvider>
  );
}
