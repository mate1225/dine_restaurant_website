//components
import Introductions from "./Introductions";
import Highlights from "./Highlights";
//images
import enjoyable_place_mobile from "../../images/homepage/enjoyable-place-mobile.jpg";
import locally_sourced_mobile from "../../images/homepage/locally-sourced-mobile.jpg";
import FamilyGathering from "./FamilyGathering";

export default function MainComponent() {
  return (
    <>
      <main>
        <Introductions
          title=" Enjoyable place for all the family"
          text=" Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal."
          style="mt-[-5rem]"
          img={enjoyable_place_mobile}
        />
        <Introductions
          title="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
          style=""
          img={locally_sourced_mobile}
        />
        <Highlights />
        <FamilyGathering />
      </main>
    </>
  );
}
