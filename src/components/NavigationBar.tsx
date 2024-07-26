import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/dashboard" className="nav-link">Films</Link>
      <Link to="/scenes" className="nav-link">Scenes</Link>
      <Link to="/characters" className="nav-link">Characters</Link>
    </nav>
  );
}

export default NavigationBar;
