import imagesDecoration from "../../images/images decoration.svg";

export default function Introductions(props: {
  title: string;
  text: string;
  style: string;
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
}) {
  const { title, text, style, mobileImg, tabletImg, desktopImg } = props;
  return (
    <>
      <div
        className={` flex  flex-col items-center justify-center pb-[6.31rem] text-center text-EbonyClay ${style}`}
      >
        <div>
          <img src={mobileImg} className="mb-[3.5rem] tablet:hidden  " />
          <img
            src={tabletImg}
            className="mb-[3.5rem] hidden tablet:block desktop:hidden "
          />
          <img src={desktopImg} className="mb-[3.5rem] hidden desktop:block " />
          <div className=" flex items-center justify-center">
            <img
              src={imagesDecoration}
              className=" mb-[2.25rem] w-[4.4375rem]"
            />
          </div>
        </div>

        <h2 className=" mx-[3.5rem] mb-[0.81rem]  text-[2rem] font-bold leading-[2.5rem] tablet:mx-[9.75rem] tablet:text-[3rem] tablet:leading-[3rem]">
          {title}
        </h2>
        <p className=" mx-6 tablet:mx-[9.75rem] tablet:text-[1.25rem] ">
          {text}
        </p>
      </div>
    </>
  );
}
/* tablet:hidden */
