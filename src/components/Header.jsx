import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../styles/header.css";

// Define the data for the dropdown menus
const eventsLinks = [
    { name: 'Upcoming Events', path: '/event' },
    { name: 'Past Webinars', path: '/event' },
];

const initiativesLinks = [
    { name: 'Overview', path: '/initiatives/overview' },
    { name: 'Current Projects', path: '/initiatives/projects' },
];

function SubMenu({ title, items, sectionPath }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="nav-item-has-submenu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to={sectionPath} className="nav-main-link">{title}</Link>
      {isOpen && (
        <ul className="submenu">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">TEA</Link>
      </div>
      <nav className="top-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          
          <li className="nav-item-has-submenu">
            <SubMenu 
              title="Events" 
              items={eventsLinks} 
              sectionPath="/events"
            />
          </li>
          
          {/* <li className="nav-item-has-submenu">
            <SubMenu 
              title="Initiatives" 
              items={initiativesLinks}
              sectionPath="/initiatives" 
            />
          </li> */}

          {/* <li><Link to="/event">Hike</Link></li> */}
          <li><Link to="/contact">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;