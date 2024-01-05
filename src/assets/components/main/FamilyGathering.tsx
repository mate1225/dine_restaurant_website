//images
import family_gathering_mobile from "../../images/homepage/family-gathering-mobile.jpg";
import Description from "../Description";
import BookingButton_Black from "../BookingButton_Black";
import EventsButtons from "../EventButtons";

export default function FamilyGathering() {
  return (
    <div className=" ">
      <div className=" mx-6 mb-8 mt-[8rem] flex items-center justify-center shadow-2xl">
        {/*     itt még meg kell csinálni normálisan a box shadow-t !!! */}
        <img src={family_gathering_mobile} />
      </div>

      <div className=" flex flex-col items-center ">
        <EventsButtons
          FamilyLine=""
          SpecialLine="hidden"
          SocialLine="hidden"
          FamilyButtonStyle=""
          SpecialButtonStyle="opacity-[0.5]"
          SocialButtonStyle="opacity-[0.5]"
        />
      </div>
      <Description
        title="Family Gathering"
        text="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
        style="my-[1.69rem] "
      />
      <BookingButton_Black divStyle="mx-[4.06rem] mb-[6rem]" />
    </div>
  );
}
