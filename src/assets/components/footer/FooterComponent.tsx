//components
import BookingButton_White from "../BookingButton_White";
//images
import logo from "../../images/logo.svg";

export default function FooterComponent() {
  return (
    <footer>
      <section className=" bg-footerImage bg-cover bg-no-repeat ">
        <h2 className="mx-6 mb-5 pt-[4rem] text-center text-[2rem] leading-[2.5rem] text-PureWhite tablet:text-[3rem] ">
          Ready to make a reservation?
        </h2>
        <BookingButton_White divStyle="mx-[4.6rem] pb-[5rem] tablet:mx-[16.4rem]" />
      </section>

      <section className=" bg-black px-6 pb-[4.87rem] text-center text-[0.875rem] font-normal text-PureWhite tablet:flex">
        <div className=" flex items-start justify-center pt-[5rem] tablet:ml-[2.4rem] tablet:pt-[4rem]">
          <img src={logo} />
        </div>
        <div className=" tablet:ml-[8.1rem] tablet:pt-[4rem] tablet:text-start">
          <div
            className="mb-8 mt-[2.62rem] leading-[1.75rem] tracking-[0.125rem] tablet:mt-0
 "
          >
            <p>Marthwaite, Sedbergh</p>
            <p> Cumbria </p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p> OPEN TIMES </p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
