import imagesDecoration from "../images/images decoration.svg";

export default function Introductions(props: {
  title: string;
  text: string;
  style: string;
  img: string;
}) {
  const { title, text, style, img } = props;
  return (
    <>
      <div
        className={` flex  flex-col items-center justify-center pb-[6.31rem] text-center text-EbonyClay ${style}`}
      >
        <img src={img} className="mb-[3.5rem]" />
        <img src={imagesDecoration} className=" mb-[2.25rem] w-[4.4375rem]" />
        <h2 className=" mx-[3.5rem]  mb-[0.81rem] text-[2rem] font-bold leading-[2.5rem]">
          {title}
        </h2>
        <p className=" mx-6">{text}</p>
      </div>
    </>
  );
}
