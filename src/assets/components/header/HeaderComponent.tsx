import HeaderTitle from "./HeaderTitle";
import heroBgMobile from "../../images/homepage/hero-bg-mobile@2x.jpg";

export default function HeaderComponent() {
  return (
    <>
      <header className="  ">
        <div className=" relative z-[-2] flex justify-center bg-CodGray ">
          <img
            src={heroBgMobile}
            className=" relative left-0 top-0 z-[-1] h-[39.75rem]  "
          />
        </div>

        <HeaderTitle
          divStyle="px-[1.5rem] mt-[-28rem]"
          logoStyle="max-w-[82.4px] mb-[36px] mt-[0.75rem]"
          titleStyle="mb-[1.31rem]"
          descriptionStyle="mb-[3.31rem] "
        />
      </header>
    </>
  );
}
