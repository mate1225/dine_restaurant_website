//images

import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import MainComponent from "../components/main/MainComponent";
export default function Home() {
  return (
    <>
      <section className=" font-LeagueSpartan ">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </section>
    </>
  );
}
