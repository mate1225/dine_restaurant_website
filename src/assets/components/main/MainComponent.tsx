//components
import Introductions from "./Introductions";
import Highlights from "./Highlights";
import Events from "../Events";
//images
import enjoyable_place_mobile from "../../images/homepage/enjoyable-place-mobile.jpg";
import enjoyable_place_tablet from "../../images/homepage/enjoyable-place-tablet.jpg";
import enjoyable_place_desktop from "../../images/homepage/enjoyable-place-desktop.jpg";
//
import locally_sourced_mobile from "../../images/homepage/locally-sourced-mobile.jpg";
import locally_sourced_tablet from "../../images/homepage/locally-sourced-tablet.jpg";
import locally_sourced_desktop from "../../images/homepage/locally-sourced-desktop.jpg";
//
import family_gathering_mobile from "../../images/homepage/family-gathering-mobile.jpg";
import family_gathering_tablet from "../../images/homepage/family-gathering-tablet.jpg";
import family_gathering_desktop from "../../images/homepage/family-gathering-desktop.jpg";

export default function MainComponent() {
  return (
    <>
      <main>
        <Introductions
          title=" Enjoyable place for all the family"
          text=" Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal."
          style="mt-[-5rem]  "
          mobileImg={enjoyable_place_mobile}
          tabletImg={enjoyable_place_tablet}
          desktopImg={enjoyable_place_desktop}
          linesStyle="tablet:hidden"
          rightCurveStyle=""
          leftCurveStyle="hidden"
        />

        <Introductions
          title="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
          style=""
          mobileImg={locally_sourced_mobile}
          tabletImg={locally_sourced_tablet}
          desktopImg={locally_sourced_desktop}
          linesStyle=""
          rightCurveStyle="hidden"
          leftCurveStyle=""
        />
        <Highlights />
        <Events
          mobileImg={family_gathering_mobile}
          tabletImage={family_gathering_tablet}
          desktopImg={family_gathering_desktop}
          title="Family Gathering"
          description="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
          FamilyEventStyle=""
          FamilyButtonStyle=""
          FamilyLineWidth="w-[3rem]"
          specialEventStyle=""
          SpecialButtonStyle="opacity-[0.5]"
          SpecialLineWidth=""
          socialEventStyle="opacity-[0.5]"
          SocialButtonStyle=""
          SocialLineWidth=""
        />
      </main>
    </>
  );
}
