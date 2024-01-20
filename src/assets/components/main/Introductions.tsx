import imagesDecoration from "../../images/images decoration.svg";
import lines from "../../images/patterns/pattern-lines.svg";
import pattern_curve_top_right from "../../images/patterns/pattern-curve-top-right.svg";
import pattern_curve_top_left from "../../images/patterns/pattern-curve-top-left.svg";

export default function Introductions(props: {
  title: string;
  text: string;
  style: string;
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  linesStyle: string;
  rightCurveStyle: string;
  leftCurveStyle: string;
}) {
  const {
    title,
    text,
    style,
    mobileImg,
    tabletImg,
    desktopImg,
    linesStyle,
    rightCurveStyle,
    leftCurveStyle,
  } = props;
  return (
    <>
      <div
        className={` flex  flex-col items-center justify-center pb-[6.31rem] text-center text-EbonyClay ${style}`}
      >
        <div className=" relative">
          <div>
            {/* line */}
            <img
              src={lines}
              className={`absolute right-[-5rem] top-[15rem] hidden tablet:block ${linesStyle}`}
            />
            {/* top */}
            <div className=" hidden tablet:block desktop:hidden">
              <img
                src={pattern_curve_top_right}
                className={`absolute left-[-18rem] top-[12rem] z-[-1]  h-[20rem] 
                 ${rightCurveStyle}`}
              />
              <img
                src={pattern_curve_top_left}
                className={` absolute left-[-53.8rem] top-[12rem] z-[-1] h-[20rem]
                 ${rightCurveStyle}`}
              />
            </div>
            {/* bottom */}
            <div className=" hidden tablet:block desktop:hidden">
              <img
                src={pattern_curve_top_left}
                className={`absolute left-[18rem] top-[29.5rem]   z-[-1] h-[20rem]   ${leftCurveStyle} `}
              />
              <img
                src={pattern_curve_top_right}
                className={`absolute left-[53.85rem] top-[29.5rem]   z-[-1] h-[20rem]   ${leftCurveStyle} `}
              />
            </div>
          </div>

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

{
  /* <img
            src={pattern_curve_top_right}
            className=" absolute left-[-24rem] top-[55.5rem] z-0 hidden h-[20rem] w-[49rem]  tablet:block "
          /> */
}
