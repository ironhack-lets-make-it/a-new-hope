import * as React from "react";
import { Event } from "types/event.type";
import { Link } from "@components/Link";
import { EventContainer } from "../styles";




function EventItem(props: {event:Event}) {
    const {title, id} = props.event;
    return (
        <Link href={`/admin/event/${id}`}>
            <EventContainer>
                {title}
            </EventContainer>
        </Link>
        )
}


export default EventItem;