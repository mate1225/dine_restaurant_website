import Line from "./Line";

export default function EventsButton(props: {
  text: string;
  style: string;
  buttonStyle: string;
  lineWidth: string;
}) {
  const { style, buttonStyle, text, lineWidth } = props;
  return (
    <div className={`${style} `}>
      <div>
        <button
          className={`text-[1.0625rem] font-semibold text-GrayText hover:opacity-[100%] ${buttonStyle}`}
        >
          {text}
        </button>
      </div>
      <div>
        <Line lineWidth={lineWidth} />
      </div>
    </div>
  );
}
