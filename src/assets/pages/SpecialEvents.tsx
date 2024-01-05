//desktop layout
//components
import BookingButton_Black from "../components/BookingButton_Black";
import EventsDescription from "../components/EventsDescription";
import EventsButtons from "../components/EventButtons";
//images
import specialEvent from "../images/homepage/special-events-desktop.jpg";
import lines from "../images/patterns/pattern-lines.svg";
import patternCurve from "../images/patterns/pattern-curve-top-left.svg";

export default function SpecialEvents() {
  return (
    <section className=" flex ">
      <div>
        <div>
          <img src={lines} alt="" />
          <img src={patternCurve} alt="" />
        </div>
        <img src={specialEvent} />
      </div>
      <div className=" flex h-screen items-center justify-center">
        <div className=" ml-[5rem] mr-[10.31rem]  ">
          <EventsDescription
            title="Special Events"
            text="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
            style="mb-[1.18rem]"
          />
          <BookingButton_Black divStyle="mr-[12.5rem]" />
          <EventsButtons
            FamilyLine="hidden"
            SpecialLine=""
            SocialLine="hidden"
            FamilyButtonStyle="opacity-[0.5]"
            SpecialButtonStyle=""
            SocialButtonStyle="opacity-[0.5]"
          />
        </div>
      </div>
    </section>
  );
}
