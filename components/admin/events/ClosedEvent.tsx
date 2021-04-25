import * as React from "react";
import { Event } from "types/event.type";

export function ClosedEvent({ eventObject }: { eventObject: Event }) {
  const {
    title,
    description,
    participants,
    repo,
    date,
    comments,
  } = eventObject;
  // This display infos of a CLOSED event
  return (
    <div>
      <h2>{title}</h2>
      <p>{new Intl.DateTimeFormat().format(date)}</p>
      <p>{description}</p>
    </div>
  );
}
