export default function Description(props: {
  title: string;
  text: string;
  style: string;
}) {
  const { title, text, style } = props;
  return (
    <div className={`${style} mx-6 flex flex-col items-center `}>
      <h2 className=" mb-[0.81rem]  text-[2rem] font-bold leading-[2.5rem]">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
