//components
import Description from "../Description";
import HighlightComponent from "./HighlightComponent";
//images
import imagesDecoration from "../../images/images decoration.svg";
import salmon_mobile from "../../images/homepage/salmon-mobile.jpg";
import beef_mobile from "../../images/homepage/beef-mobile.jpg";
import chocolate_mobile from "../../images/homepage/chocolate-mobile.jpg";

export default function Highlights() {
  return (
    <section className=" bg-black px-6 text-center text-white">
      <div className=" flex justify-center">
        <img src={imagesDecoration} className="pt-[4.5rem]" />
      </div>

      <Description
        title="A few highlights from our menu"
        text="We cater for all dietary requirements, but here’s a glimpse at some of
        our diner’s favourites. Our menu is revamped every season."
        style="pb-[5.31rem] mt-[2.25rem]"
      />
      <HighlightComponent
        img={salmon_mobile}
        title="Seared Salmon Fillet"
        text="Our locally sourced salmon served 
with a refreshing buckwheat summer salad."
        style="border-b-[0.0625rem] border-solid border-white"
      />
      <HighlightComponent
        img={beef_mobile}
        title="Rosemary Filet Mignon"
        text="Our prime beef served to your taste 
        with a delicious choice of seasonal 
        sides."
        style="border-b-[0.0625rem] border-solid border-white"
      />
      <HighlightComponent
        img={chocolate_mobile}
        title="Summer Fruit Chocolate Mousse"
        text="Creamy mousse combined with 
        summer fruits and dark chocolate shavings."
        style=""
      />
    </section>
  );
}
