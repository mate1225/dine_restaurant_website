export default function BookingButton_Black(props: { divStyle: string }) {
  const { divStyle } = props;
  return (
    <div className={` grid ${divStyle}`}>
      <button className="    border-[1px] border-solid border-CodGray bg-white pb-[1.44rem] pt-[1.56rem] text-[1.0625rem] font-semibold text-Mirage   hover:bg-CodGray hover:text-PureWhite">
        BOOK A TABLE
      </button>
    </div>
  );
}
