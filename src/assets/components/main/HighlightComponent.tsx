import Line from "./Line";

export default function HighlightComponent(props: {
  img: string;
  title: string;
  text: string;
  style: string;
  divStyle: string;
}) {
  const { img, title, text, style, divStyle } = props;
  return (
    <div
      className={` pb-6  tablet:ml-[6.06rem]  tablet:mr-[4rem] tablet:flex tablet:text-start ${divStyle} `}
    >
      <div className=" flex   justify-center">
        <img src={img} className="tablet:max-h-[7rem] tablet:max-w-[8rem]" />
      </div>

      <div className=" mr-[1.87rem] mt-[1.12rem] hidden tablet:block ">
        <Line lineWidth="w-[2rem]" />
      </div>
      <div>
        <h2 className=" mb-[0.38rem] mt-[2rem] text-[1.25rem] font-bold tablet:mt-0 ">
          {title}
        </h2>
        <p
          className={` ${style} border-opacity-[0.1494] pb-[3.38rem] tablet:border-none  tablet:pb-0`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
