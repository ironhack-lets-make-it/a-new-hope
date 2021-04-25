import { allEvents } from "mocks/mockEvents";
import { GetServerSideProps } from "next";
import * as React from "react";
import { Event } from "types/event.type";
import { Link } from "@components/Link";

interface IAdminHomePageProps {
  events: Event[];
}

function AdminHomePage(props: IAdminHomePageProps) {
  // console.log("props:", props.events[0]);
  const { events } = props;
  // list of events
  return (
    <div>
      {events.map((e) => {
        return (
          <Link key={e.id} href={`/admin/${e.id}`}>
            {e.title}
          </Link>
        );
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // it allows us to query our db directly

  return {
    props: {
      events: allEvents,
    },
  };
};

export default AdminHomePage;
