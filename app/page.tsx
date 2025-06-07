
import { Banner } from "./Layout/Banner";
import { Descuentos } from "./Layout/Descuentos";
import { Footer } from "./Layout/Footer";
import { Info } from "./Layout/Info";
import { Proveedores } from "./Layout/Proveedores";
import { Slider } from "./Layout/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <Info />
      <Descuentos />
      <Proveedores />
      <Footer />
    </div>
  );
}
