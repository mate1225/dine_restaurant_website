export default function EventsDescription(props: {
  title: string;
  text: string;
  style: string;
}) {
  const { title, text, style } = props;
  return (
    <div className={`${style} `}>
      <h2 className=" mb-[1.19rem]  text-[3rem] font-bold leading-[2.5rem]">
        {title}
      </h2>
      <p className=" text-[1.25rem]">{text}</p>
    </div>
  );
}
