import React from 'react'

export default function Profile({name, tag, location,  avatar, stats, alt, nameFollowers, nameViews, nameLikes}) {
    return(
      <div>
    <div>
    <img src={avatar} alt={alt}/>
    <p>{name}</p>
    <p>{tag}</p>
    <p>{location}</p>
    </div>
    <ul>
    <li>
    <span>{nameFollowers}</span><br/>
    <span>{stats.followers}</span>
    </li>
    <li>
    <span>{nameViews}</span><br/>
    <span>{stats.views}</span>
    </li>
    <li>
    <span>{nameLikes}</span><br/>
    <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}
