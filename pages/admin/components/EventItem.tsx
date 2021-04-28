import * as React from "react";
import { Event } from "types/event.type";
import { Link } from "@components/Link";
import { EventContainer, UserItemAvatar } from "../styles";




function EventItem(props: {event:Event}) {
    const {title, id, description, date, participants} = props.event;
    return (
        <Link href={`/admin/event/${id}`}>
            <EventContainer>
                <div className="row space-btw">
                    <h3>{title}</h3>
                <div>{date}</div>
                </div>
                <p>{description}</p>

                <div className="row align-items">
                <div>{participants.length} participants.</div>
                {participants.length ? participants.map((participant) => <UserItemAvatar key={participant.id}>
                    {participant.name[0].toUpperCase()}
                </UserItemAvatar> ) : null}
                </div>
            </EventContainer>
        </Link>
        )
}


export default EventItem;