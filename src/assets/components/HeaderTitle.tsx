import logo from "../images/logo.svg";
import BookingButton from "./BookingButton";

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

        <div className={`mx-8  text-[2rem] font-light ${titleStyle}`}>
          <h2>Exquisite dining since 1989</h2>
        </div>

        <p className={`${descriptionStyle} text-[1rem] font-normal `}>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <BookingButton divStyle="mb-[9.5rem] mx-[2.56rem] " />
      </div>
    </>
  );
}
