import logo from "../images/logo.svg";
import BookingButton from "./BookingButton";

export default function HeaderTitle(props: {
  logoStyle: string;
  title: string;
  description: string;
  divStyle: string;
  titleStyle: string;
  descriptionStyle: string;
}) {
  const {
    logoStyle,
    title,
    description,
    divStyle,
    titleStyle,
    descriptionStyle,
  } = props;
  return (
    <>
      <div
        className={`${divStyle} flex  flex-col items-center bg-black text-center text-PureWhite`}
      >
        <img src={logo} className={`${logoStyle}`} />
        <div className={`mx-8  text-[2rem] font-light ${titleStyle}`}>
          <h2>{title}</h2>
        </div>

        <p className={`${descriptionStyle} text-[1rem] font-normal `}>
          {description}
        </p>
        <div>
          <BookingButton divStyle="mb-[9.5rem] " />
        </div>
      </div>
    </>
  );
}
