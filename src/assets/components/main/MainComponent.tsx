//components
import Introductions from "./Introductions";
import Highlights from "./Highlights";
//images
import enjoyable_place_mobile from "../../images/homepage/enjoyable-place-mobile.jpg";
import enjoyable_place_tablet from "../../images/homepage/enjoyable-place-tablet.jpg";
import enjoyable_place_desktop from "../../images/homepage/enjoyable-place-desktop.jpg";

import locally_sourced_mobile from "../../images/homepage/locally-sourced-mobile.jpg";
import locally_sourced_tablet from "../../images/homepage/locally-sourced-tablet.jpg";
import locally_sourced_desktop from "../../images/homepage/locally-sourced-desktop.jpg";

import FamilyGathering from "./FamilyGathering";

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
        />

        <Introductions
          title="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
          style=""
          mobileImg={locally_sourced_mobile}
          tabletImg={locally_sourced_tablet}
          desktopImg={locally_sourced_desktop}
        />
        <Highlights />
        <FamilyGathering />
      </main>
    </>
  );
}
