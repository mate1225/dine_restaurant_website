import Line from "./Line";

export default function EventsButton(props: {
  text: string;
  style: string;
  LineVisibility: string;
  buttonStyle: string;
}) {
  const { style, buttonStyle, text, LineVisibility } = props;
  return (
    <div className={` ${style}`}>
      <button
        className={`text-[1.0625rem] font-semibold text-GrayText  ${buttonStyle}`}
      >
        {text}
      </button>
      <div className={LineVisibility}>
        <Line />
      </div>
    </div>
  );
}
