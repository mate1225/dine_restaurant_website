//components
import Events from "../components/Events";
//images
import special_events_mobile from "../images/homepage/special-events-mobile.jpg";
import special_events_tablet from "../images/homepage/special-events-tablet.jpg";
import special_events_desktop from "../images/homepage/special-events-desktop.jpg";
export default function SpecialEvents() {
  return (
    <section>
      <Events
        mobileImg={special_events_mobile}
        tabletImage={special_events_tablet}
        desktopImg={special_events_desktop}
        title="Special Events"
        description="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
        FamilyEventStyle=""
        FamilyButtonStyle="opacity-[0.5]"
        FamilyLineWidth=""
        specialEventStyle=""
        SpecialButtonStyle="opacity-[0.5]"
        SpecialLineWidth=""
        socialEventStyle=""
        SocialButtonStyle=""
        SocialLineWidth="w-[3rem]"
      />
    </section>
  );
}
