import React from "react";
import Profile from "./Profile"


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

export default function App() {
    return (
     <Profile
name={user.name}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
alt='Аватар пользователя'
nameFollowers='Followers'
nameViews='Views'
nameLikes='Likes'/>

    );
}