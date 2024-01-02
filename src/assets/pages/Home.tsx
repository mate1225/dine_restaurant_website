//images
import HeaderTitle from "../components/HeaderTitle";
import heroBgMobile from "../images/homepage/hero-bg-mobile@2x.jpg";
export default function Home() {
  return (
    <>
      <section className=" font-LeagueSpartan ">
        <header className=" ">
          <img src={heroBgMobile} className=" absolute " />
          <HeaderTitle
            divStyle="px-[1.5rem] top-[18rem] absolute"
            logoStyle="max-w-[82.4px] mb-[36px] mt-[0.75rem]"
            titleStyle="mb-[1.31rem]"
            descriptionStyle="mb-[3.31rem] "
          />
        </header>
      </section>
    </>
  );
}
