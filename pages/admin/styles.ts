import styled from 'styled-components';

export const AdminMainContainer = styled.div`
color: #3e3e3e;
    width: 100vw;
    height: 100%;
font-size: .8rem;

    flex: 1;
    // background-color: red;
    padding: .5rem;
    & > .col {
        flex:1;
    }
    & > .col:first-of-type {
        padding-right: .5rem
    }
`


export const EventContainer = styled.div`
    background-color: #ddd;
    margin-bottom: .3rem;
    padding: .7rem;
    border-radius: .3rem;
    transition: background-color ease .3s;
    &:hover {
        background-color: #eee
    }
    & > h3 {
        padding:0;
        margin:0;
    }
`

export const UserItemAvatar = styled.div`
    background-color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const UserItemContainer = styled.div`
background-color: #ddd;
margin-bottom: .3rem;
padding: .7rem;
border-radius: .3rem;
align-items: center;
transition: background-color ease .3s;
    &:hover {
        background-color: #eee
    }
& > div {
    margin-right: .3rem
}
`

export const SkillTag = styled.div`
    background-color: #ccefff;
    border-radius: .3rem;
    padding: .1rem .2rem;
    margin-right: .1rem;
    font-variant: all-petite-caps;
    font-weight: 500;
    opacity: .7;
    + .react {
        background-color: red;
    }
    + .python {
        background-color: green;
    }
`

export const IronhackerUserBadge = styled.div`
color: #0089ff;
font-weight: 500;
`