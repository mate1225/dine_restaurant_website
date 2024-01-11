export default function Line(props: { lineWidth: string }) {
  return (
    <>
      <div className=" flex justify-center">
        <div className={`h-[0.0625rem]  ${props.lineWidth} bg-Beaver `}></div>
      </div>
    </>
  );
}

/* w-[3rem] */
