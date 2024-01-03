export default function BookingButton_White(props: { divStyle: string }) {
  const { divStyle } = props;
  return (
    <div className={` grid ${divStyle}`}>
      <button className="    border-[1px] border-solid border-BorderColor pb-[1.44rem] pt-[1.56rem] text-[1.0625rem] font-semibold text-PureWhite hover:border-PureWhite hover:bg-PureWhite hover:text-Mirage">
        BOOK A TABLE
      </button>
    </div>
  );
}
