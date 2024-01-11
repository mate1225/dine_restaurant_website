//desktop layout
//components
import BookingButton_Black from "../components/BookingButton_Black";
import EventsDescription from "../components/EventsDescription";
import EventsButtons from "../components/EventButtons";
//images
import specialEvent from "../images/homepage/special-events-desktop.jpg";
import lines from "../images/patterns/pattern-lines.svg";
import patternCurve from "../images/patterns/pattern-curve-top-right.svg";

export default function SpecialEvents() {
  return (
    <section>
      <div className=" ml-[10.3125rem] ">
        <div className=" absolute left-0 top-0">
          <div>
            <img
              src={lines}
              className=" absolute left-[8.5rem] top-[7.63rem] "
            />
            <img src={patternCurve} className="h-[20rem] w-[33.875rem]" />
          </div>
        </div>
        <div className=" mr-[9rem] flex h-screen items-center justify-end ">
          <img src={specialEvent} className=" max-h-[37.5rem]" />
          <div className=" ml-[7.9375rem]">
            <EventsDescription
              title="Special Events"
              text="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
              style="mb-[1.88rem] "
            />
            <BookingButton_Black divStyle="mr-[12rem] mb-[4.94rem]" />
            <EventsButtons
              FamilyLine="hidden"
              SpecialLine=""
              SocialLine="hidden"
              FamilyButtonStyle="opacity-[0.5]"
              SpecialButtonStyle="ml-[1.88rem]"
              SocialButtonStyle="opacity-[0.5]"
              FamilyLineWidth=""
              SocialLineWidth=""
              SpecialLineWidth="w-[5.935rem]"
              specialEventStyle="flex flex-row-reverse items-center ml-[-8rem] "
              socialEventStyle=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
