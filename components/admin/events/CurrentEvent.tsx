import * as React from "react";
import { Event } from "types/event.type";

export function CurrentEvent({ eventObject }: { eventObject: Event }) {
  // This display infos of a CLOSED event
  const {
    title,
    description,
    participants,
    repo,
    date,
    comments,
  } = eventObject;
  const [displayedTitle, setDisplayedTitle] = React.useState<string>(title);
  const [
    displayedDescription,
    setDisplayedDescription,
  ] = React.useState<string>(description);

  const updateInfos = (e, type) => {
    const newText = e.currentTarget.innerText;
    console.log(newText);
    setDisplayedTitle(newText);
  };

  // This display infos of a CLOSED event
  return (
    <div>
      <h2 contentEditable onKeyUp={(e) => updateInfos(e, "title")}>
        {displayedTitle}
      </h2>
      <p>{new Intl.DateTimeFormat().format(date)}</p>
      <p>{displayedDescription}</p>
    </div>
  );
}
