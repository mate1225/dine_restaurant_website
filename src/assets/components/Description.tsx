export default function Description(props: {
  title: string;
  text: string;
  style: string;
}) {
  const { title, text, style } = props;
  return (
    <div className={style}>
      <h2 className=" mb-[0.81rem] mt-[2.25rem] text-[2rem] font-bold leading-[2.5rem]">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
