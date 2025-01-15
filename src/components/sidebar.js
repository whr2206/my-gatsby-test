import * as React from 'react'
import {
  sideNav,
  sideHeading
} from './sidebar.module.css'

  const Sidebar = () => {
    return (
      <div className={sideNav}>
        <h4 className={sideHeading}>About Me</h4>
          <p>Culpa labore sunt deserunt consectetur. Esse quis laborum tempor ea fugiat occaecat mollit id aliquip sunt. Ipsum nisi ullamco cupidatat minim dolore id nulla qui veniam consectetur nisi.</p>
        <h4 className={sideHeading}>Stay in Touch</h4>
          <p>Know when I make something new!</p>
        <h4 className={sideHeading}>My Favorite Posts</h4>
      </div>
    );
  };
  
// Step 3: Export your component
export default Sidebar;
