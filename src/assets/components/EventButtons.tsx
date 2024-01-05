import EventsButton from "./main/EventsButton";

export default function EventsButtons(props: {
  FamilyLine: string;
  SpecialLine: string;
  SocialLine: string;
  FamilyButtonStyle: string;
  SpecialButtonStyle: string;
  SocialButtonStyle: string;
}) {
  const {
    FamilyLine,
    SpecialLine,
    SocialLine,
    FamilyButtonStyle,
    SpecialButtonStyle,
    SocialButtonStyle,
  } = props;
  return (
    <>
      <EventsButton
        text="FAMILY GATHERING"
        style="mb-[1rem]"
        LineVisibility={FamilyLine}
        buttonStyle={FamilyButtonStyle}
      />
      <EventsButton
        text="SPECIAL EVENTS"
        style="mb-[1rem]"
        LineVisibility={SpecialLine}
        buttonStyle={SpecialButtonStyle}
      />
      <EventsButton
        text="SOCIAL EVENTS"
        style=""
        LineVisibility={SocialLine}
        buttonStyle={SocialButtonStyle}
      />
    </>
  );
}
