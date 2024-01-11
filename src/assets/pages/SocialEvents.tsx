//desktop layout
//components
import BookingButton_Black from "../components/BookingButton_Black";
import EventsDescription from "../components/EventsDescription";
import EventsButtons from "../components/EventButtons";
//images
import socialEvents from "../images/homepage/social-events-desktop.jpg";
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
          <img src={socialEvents} className=" max-h-[37.5rem]" />
          <div className=" ml-[7.9375rem]">
            <EventsDescription
              title="Social Events"
              text="Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
              style="mb-[1.88rem] "
            />
            <BookingButton_Black divStyle="mr-[12rem] mb-[4.94rem]" />
            <EventsButtons
              FamilyLine="hidden"
              SpecialLine="hidden"
              SocialLine=""
              FamilyButtonStyle="opacity-[0.5]"
              SpecialButtonStyle="opacity-[0.5]"
              SocialButtonStyle="ml-[1.88rem]"
              FamilyLineWidth=""
              SocialLineWidth="w-[5.935rem]"
              SpecialLineWidth=""
              specialEventStyle=""
              socialEventStyle="flex flex-row-reverse items-center ml-[-8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
