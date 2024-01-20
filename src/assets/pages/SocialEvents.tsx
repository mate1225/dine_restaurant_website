//components
import Events from "../components/Events";
//images
import social_events_mobile from "../images/homepage/social-events-mobile.jpg";
import social_events_tablet from "../images/homepage/social-events-tablet.jpg";
import social_events_desktop from "../images/homepage/social-events-desktop.jpg";
export default function SpecialEvents() {
  return (
    <section>
      <Events
        mobileImg={social_events_mobile}
        tabletImage={social_events_tablet}
        desktopImg={social_events_desktop}
        title="Social Events"
        description="Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
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
