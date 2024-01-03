//components
import BookingButton_White from "../BookingButton_White";
//images
import logo from "../../images/logo.svg";

export default function FooterComponent() {
  return (
    <footer>
      <section className=" bg-footerImage bg-cover bg-no-repeat ">
        <h2 className="mx-6 mb-5 pt-[4rem] text-center text-[2rem] leading-[2.5rem] text-PureWhite ">
          Ready to make a reservation?
        </h2>
        <BookingButton_White divStyle="mx-[4.6rem] pb-[5rem]" />
      </section>

      <section className=" bg-black px-6 pb-[4.87rem] text-center text-[0.875rem] font-normal text-PureWhite">
        <div className=" flex justify-center pt-[5rem] ">
          <img src={logo} />
        </div>
        <div className="mb-8 mt-[2.62rem]">
          <p>Marthwaite, Sedbergh</p>
          <p> Cumbria </p>
          <p>+00 44 123 4567</p>
        </div>
        <div>
          <p> OPEN TIMES </p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
        <p></p>
      </section>
    </footer>
  );
}
