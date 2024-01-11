export default function BookingButton_Black(props: { divStyle: string }) {
  const { divStyle } = props;
  return (
    <div className={` grid ${divStyle}`}>
      <button className="    border-[1px] border-solid border-CodGray bg-CodGray pb-[1.44rem] pt-[1.56rem] text-[1.0625rem] font-semibold text-PureWhite   hover:bg-white hover:text-Mirage">
        BOOK A TABLE
      </button>
    </div>
  );
}
