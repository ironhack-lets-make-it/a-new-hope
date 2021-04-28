import * as React from "react";
import { Event } from "types/event.type";
import { GetServerSideProps } from "next";
import { allEvents } from "mocks/mockEvents";
import { ClosedEvent } from "@components/admin/events/ClosedEvent";
import { CurrentEvent } from "@components/admin/events/CurrentEvent";

// interface IAdminHomePageProps {
//   events: Event[];
// }

export default function SingleEventAdminPage({
  eventObject,
}: {
  eventObject: Event;
}) {
  const { isClosed } = eventObject;
  return isClosed ? (
    <ClosedEvent eventObject={eventObject} />
  ) : (
    <CurrentEvent eventObject={eventObject} />
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // it allows us to query our db directly
  const eventOject = allEvents.find((event) => event.id === ctx.params.eventId);
  if (!eventOject) return { redirect: { destination: "/admin" }, props: {} };
  return {
    props: {
      eventObject: eventOject,
    },
  };
};
