import * as React from 'react'
import Button from './button'
import {
  sideNav,
  sideHeading,
  postLink,
  smallDivider,
  rssLink,
  favoritePosts
} from './sidebar.module.css'
import {
  sidebarButton
} from './button.module.css'

  const Sidebar = () => {
    return (
      <div className={sideNav}>
        <h4 className={sideHeading}>About Me</h4>
          <p>Culpa labore sunt deserunt consectetur. Esse quis laborum tempor ea fugiat occaecat mollit id aliquip sunt. Ipsum nisi ullamco cupidatat minim dolore id nulla qui veniam consectetur nisi.</p>
          <hr className={smallDivider}/>
        <h4 className={sideHeading}>Stay in Touch</h4>
          <p>Know when I make something new!</p>
          <a className={rssLink} href="#">RSS Feed</a>
          <Button className={sidebarButton} onClick={() => console.log("Button clicked")}>Email Signup</Button>
          <hr className={smallDivider}/>
        <h4 className={sideHeading}>My Favorite Posts</h4>
          <ul className={favoritePosts}>
            <li className={postLink}>Here's a post</li>
            <li className={postLink}>Wow! Yet again, a post</li>
            <li className={postLink}>Amazing! So many posts here.</li>
            <li className={postLink}>Another post is here too. Wow.</li>
          </ul>
      </div>
    );
  };
  
// Step 3: Export your component
export default Sidebar;
