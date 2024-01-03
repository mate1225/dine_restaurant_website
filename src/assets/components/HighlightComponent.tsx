export default function HighlightComponent(props: {
  img: string;
  title: string;
  text: string;
  style: string;
}) {
  const { img, title, text, style } = props;
  return (
    <div className=" pb-6 ">
      <img src={img} />
      <h2 className=" mb-[0.38rem] mt-[2rem] text-[1.25rem] font-bold">
        {title}
      </h2>
      <p className={` ${style}    border-opacity-[0.1494] pb-[3.38rem]`}>
        {text}
      </p>
    </div>
  );
}
