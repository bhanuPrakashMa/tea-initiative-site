// src/components/SubMenu.jsx

import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import "../styles/submenu.css";  

/**
 * A reusable component that functions as a hover-activated dropdown menu, 
 * using state to reliably control visibility.
 */
function SubMenu({ title, items }) {
    // State to control the visibility of the dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Handlers to show/hide the menu on hover events
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        // The main container that triggers the hover effect
        <div 
            className="submenu-container"
            onMouseEnter={handleMouseEnter} // Show menu when mouse enters container
            onMouseLeave={handleMouseLeave} // Hide menu when mouse leaves container
        >
            {/* The visible title/trigger element */}
            {/* Note: In React, you often use Link for routing, but we keep 'a href="#"' 
               to act as a non-navigating button for the dropdown title. */}
            <a href="#" className="submenu-title">
                {title}
            </a>

            {/* The content that appears on hover, conditionally rendered based on 'isOpen' */}
            {isOpen && (
                <aside className="sub-menu-content">
                    <nav>
                        <ul>
                            {/* Map over the passed items to create dynamic links */}
                            {items.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            )}
        </div>
    );
}

export default SubMenu;