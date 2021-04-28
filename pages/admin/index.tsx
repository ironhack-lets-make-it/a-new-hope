import { allEvents } from "mocks/mockEvents";
import { allUsers } from "mocks/mockUsers";

import { GetServerSideProps } from "next";
import EventItem from "./components/EventItem"
import UserItem from "./components/UserItem"

import * as React from "react";
import { Event } from "types/event.type";
import { User } from "types/user.type";

// import { Link } from "@components/Link";
import { AdminMainContainer } from "./styles";

interface IAdminHomePageProps {
  events: Event[];
  users: User[]
}

function AdminHomePage(props: IAdminHomePageProps) {
  const { events, users } = props;
  // list of events
  return (
    <AdminMainContainer className="row">

      <div className="col">

      {events.map((event) => {
        return ( <EventItem key={event.id} event={event}/>
        );
      })}
      </div>
      
      <div className="col">
        {users.map((user) => {
          return <UserItem key={user.id} user={user}/>
        })}
      </div>
    </AdminMainContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // it allows us to query our db directly

  return {
    props: {
      events: allEvents,
      users: allUsers
    },
  };
};

export default AdminHomePage;
