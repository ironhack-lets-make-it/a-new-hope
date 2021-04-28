import styled from 'styled-components';

export const AdminMainContainer = styled.div`
    width: 100vw;
    height: 100%;
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
    background-color: blue;
    margin-bottom: .3rem;
    padding: .7rem;
    border-radius: .3rem;
`

export const UserItemAvatar = styled.div`
    background-color: grey;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    // margin-right: .5rem;
`

export const UserItemContainer = styled.div`
background-color: #ddd;
margin-bottom: .3rem;
padding: .7rem;
border-radius: .3rem;
align-items: center;
font-size: .8rem;
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
    // + .python {
    //     background-color: green;
    // }
    //  .react {
    //     background-color: cyan;
    // }
`

export const IronhackerUserBadge = styled.div`
    color: blue
`