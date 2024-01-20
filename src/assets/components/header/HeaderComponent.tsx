import heroBgMobile from "../../images/homepage/hero-bg-mobile@2x.jpg";
import BookingButton_White from "../BookingButton_White";
import logo from "../../images/logo.svg";
export default function HeaderComponent() {
  return (
    <>
      <header>
        <div className=" relative z-[-2] flex justify-center bg-CodGray ">
          <img
            src={heroBgMobile}
            className=" relative left-0 top-0 z-[-1] h-[39.75rem]"
          />
        </div>
        <div className="mt-[-28rem] flex-col  items-center bg-[#0e0d0d] px-[1.5rem] text-center text-PureWhite">
          <div className=" flex justify-center">
            <img
              src={logo}
              className="mb-[36px] mt-[0.75rem] max-w-[82.4px] "
            />
          </div>

          <div className="mx-8 mb-[1.31rem]  text-[2rem] font-light tablet:mx-[10rem]  tablet:text-[3rem]">
            <h2>Exquisite dining since 1989</h2>
          </div>

          <p className=" mb-[3.31rem] text-[1rem] font-normal tablet:px-[4rem] tablet:text-[1.25rem]">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>

          <BookingButton_White divStyle="pb-[9.5rem] tablet:mx-[14rem] " />
        </div>
      </header>
    </>
  );
}
