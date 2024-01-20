//components
import BookingButton_Black from "./BookingButton_Black.tsx";
import Description from "./Description.tsx";
//img
import lines from "../images/patterns/pattern-lines.svg";
import pattern_curve_top_right from "../images/patterns/pattern-curve-top-right.svg";
import EventsButton from "./main/EventsButton";
export default function Events(props: {
  mobileImg: string;
  tabletImage: string;
  desktopImg: string;
  title: string;
  description: string;
  FamilyEventStyle: string;
  FamilyButtonStyle: string;
  FamilyLineWidth: string;
  specialEventStyle: string;
  SpecialButtonStyle: string;
  SpecialLineWidth: string;
  socialEventStyle: string;
  SocialButtonStyle: string;
  SocialLineWidth: string;
}) {
  const {
    mobileImg,
    tabletImage,
    desktopImg,
    title,
    description,
    FamilyEventStyle,
    FamilyButtonStyle,
    FamilyLineWidth,
    specialEventStyle,
    SpecialButtonStyle,
    SpecialLineWidth,
    socialEventStyle,
    SocialButtonStyle,
    SocialLineWidth,
  } = props;

  return (
    <section>
      <div className=" relative">
        <div>
          <img
            src={lines}
            className=" absolute left-[2rem] top-[-2.4rem] hidden tablet:block "
          />
          <img
            src={pattern_curve_top_right}
            className=" absolute left-[-26.2rem] top-[-8rem] z-[-1] hidden h-[20rem] tablet:block "
          />
        </div>
        <div className="   mx-6 mb-8  mt-[8rem] flex items-center justify-center  ">
          <img src={mobileImg} className=" w-screen shadow-2xl tablet:hidden" />
          <img
            src={tabletImage}
            className="  hidden  max-h-[54.7rem] shadow-2xl tablet:block desktop:hidden"
          />
          <img
            src={desktopImg}
            className=" hidden max-h-[54.7rem]  shadow-2xl desktop:block"
          />
        </div>
      </div>
      <div className=" flex  flex-col  items-center justify-center px-[2.5rem] tablet:w-screen tablet:flex-row tablet:items-baseline tablet:justify-between tablet:gap-[0.63rem] desktop:flex-col">
        <EventsButton
          text="FAMILY GATHERING"
          style={`mb-[1rem]${FamilyEventStyle}`}
          buttonStyle={FamilyButtonStyle}
          lineWidth={FamilyLineWidth}
        />
        <EventsButton
          text="SPECIAL EVENTS"
          style={`mb-[1rem] ${specialEventStyle}`}
          buttonStyle={SpecialButtonStyle}
          lineWidth={SpecialLineWidth}
        />

        <EventsButton
          text="SOCIAL EVENTS"
          style={`${socialEventStyle}`}
          buttonStyle={SocialButtonStyle}
          lineWidth={SocialLineWidth}
        />
      </div>
      <Description title={title} text={description} style=" my-[1.69rem]  " />
      <BookingButton_Black divStyle=" mb-[6rem] tablet:mx-[16.4rem] mx-[4.06rem] " />
    </section>
  );
}
