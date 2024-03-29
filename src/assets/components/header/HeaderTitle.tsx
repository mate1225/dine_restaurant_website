//components
import BookingButton from "../BookingButton_White";
//images
import logo from "../../images/logo.svg";

export default function HeaderTitle(props: {
  logoStyle: string;
  divStyle: string;
  titleStyle: string;
  descriptionStyle: string;
}) {
  const { logoStyle, divStyle, titleStyle, descriptionStyle } = props;
  return (
    <>
      <div
        className={`${divStyle}   flex-col items-center bg-[#0e0d0d] text-center text-PureWhite`}
      >
        <div className=" flex justify-center">
          <img src={logo} className={`${logoStyle}`} />
        </div>

        <div
          className={`mx-8 text-[2rem]  font-light tablet:mx-[10rem] tablet:text-[3rem] ${titleStyle}`}
        >
          <h2>Exquisite dining since 1989</h2>
        </div>

        <p
          className={`${descriptionStyle} text-[1rem] font-normal tablet:px-[4rem] tablet:text-[1.25rem]  `}
        >
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <BookingButton divStyle="pb-[9.5rem] mx-[2.56rem] tablet:mx-[14rem] " />
      </div>
    </>
  );
}
