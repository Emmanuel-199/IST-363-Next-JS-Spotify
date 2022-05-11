import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './nav.module.scss'

let cx = classNames.bind(styles)

const navLinks = [
    {
        label: "Premium",
        slug: "premium"
    },
    {
        label: "Support",
        slug: "support"
    },
    {
        label: "Download",
        slug: "download"
    },
    {
        label: "Account",
        slug: "account"
    },
    {
        label: "Logout",
        slug: "logout"
    }
];


const Nav = ({ mobile, flexDirection }) => {
    let navClasses = cx({
        nav : true,
        mobile : mobile
    });
    let listClasses = cx({
        list: true,
        [`flex-direction-${flexDirection}`] : flexDirection
    });
    return <nav className={navClasses}>
      <ul className={listClasses}>
          {navLinks.map((navLink, index) => {
              return <l1 key={index} className={styles.
              listItem}>
                  <Link 
                  href={`/${navLink.slug}`}
                  
                  >
                     <a className={styles.link}>
                     {navLink.label}   
                     </a>
                  </Link>
                </l1>
          })}
          
      </ul>
   </nav>
}
export default Nav;