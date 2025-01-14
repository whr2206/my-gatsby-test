import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navBar,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

import { FaGithub } from 'react-icons/fa';
import { CgDarkMode } from "react-icons/cg";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      
      <nav className={navBar}>
        <ul className={navLinks}>
        <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/resources" className={navLinkText}>
              Resources
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#" className={navLinkText}>
              <CgDarkMode size={24} />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="https://github.com/whr2206" target="_blank" className={navLinkText}>
              <FaGithub size={24} />
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

    </div>
  )
}

export default Layout