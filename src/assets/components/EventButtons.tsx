import EventsButton from "./main/EventsButton";

export default function EventsButtons(props: {
  FamilyLine: string;
  SpecialLine: string;
  SocialLine: string;
  FamilyButtonStyle: string;
  SpecialButtonStyle: string;
  SocialButtonStyle: string;
  SocialLineWidth: string;
  SpecialLineWidth: string;
  FamilyLineWidth: string;
  specialEventStyle: string;
  socialEventStyle: string;
}) {
  const {
    FamilyLine,
    SpecialLine,
    SocialLine,
    FamilyButtonStyle,
    SpecialButtonStyle,
    SocialButtonStyle,
    FamilyLineWidth,
    SpecialLineWidth,
    SocialLineWidth,
    specialEventStyle,
    socialEventStyle,
  } = props;
  return (
    <div className=" flex flex-col items-start justify-start">
      <EventsButton
        text="FAMILY GATHERING"
        style="mb-[1rem]"
        LineStyle={FamilyLine}
        buttonStyle={FamilyButtonStyle}
        lineWidth={FamilyLineWidth}
      />
      <EventsButton
        text="SPECIAL EVENTS"
        style={`mb-[1rem] ${specialEventStyle}`}
        LineStyle={SpecialLine}
        buttonStyle={SpecialButtonStyle}
        lineWidth={SpecialLineWidth}
      />

      <EventsButton
        text="SOCIAL EVENTS"
        style={`${socialEventStyle}`}
        LineStyle={SocialLine}
        buttonStyle={SocialButtonStyle}
        lineWidth={SocialLineWidth}
      />
    </div>
  );
}
