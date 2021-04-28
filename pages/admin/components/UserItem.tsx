import * as React from "react";
import { Event } from "types/event.type";
import { Link } from "@components/Link";
import { UserItemContainer, UserItemAvatar, SkillTag, IronhackerUserBadge } from "../styles";
import { User } from "types/user.type";





function UserItem(props: {user:User}) {
    const {name, isIronhacker, skills} = props.user;
    return (
        <UserItemContainer className="row">
            <UserItemAvatar></UserItemAvatar>
            <div>
                {name}
            </div>
                {isIronhacker && <IronhackerUserBadge>Ironhacker</IronhackerUserBadge>}
            <div className="row">
                {skills.map((skill, i) => <SkillTag key={i} className={skill.toLowerCase().split(' ')[0]}>{skill}</SkillTag> )}
            </div>
        </UserItemContainer>
        )
}


export default UserItem;