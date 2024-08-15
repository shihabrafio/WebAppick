import React, { useState, useEffect } from 'react';
import menu_icon from '../assets/ep_menu.png';

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false); 
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#245D51',
      color: '#fff',
    },
    navbarLogo: {
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '2.6rem',
    },
    span: {
      color: '#CB8461',
    },
    navbarMenu: {
      listStyle: 'none',
      display: isMobile ? 'none' : 'flex',
      flexDirection: isMobile ? 'column' : 'row', 
      gap: '45px',
      margin: '0',
      padding: '0',
    },
    navbarMenuItem: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '15px',
    },
    navbarAuth: {
      display: 'flex',  
      alignItems: 'center',
      gap: '15px',
    },
    navbarRegisterBtn: {
      padding: '10px 28px',
      backgroundColor: '#CB8461',
      border: 'none',
      color: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: 400,
    },
    navImage: {
      width: '30px',
      height: '30px', 
      display: isMobile ? 'block' : 'none',
      cursor: 'pointer', 
    },
    loginskill: {
      fontSize: '16px',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.navbarContainer}>
      <div style={styles.navbarLogo}>
        <h1>Skill <span style={styles.span}>Shoot</span></h1>
      </div>
      <ul style={styles.navbarMenu}>
        <li><a href="#" style={styles.navbarMenuItem}>Home</a></li>
        <li><a href="#" style={styles.navbarMenuItem}>Course</a></li>
        <li><a href="#" style={styles.navbarMenuItem}>Subscribe</a></li>
        <li><a href="#" style={styles.navbarMenuItem}>About</a></li>
        <li><a href="#" style={styles.navbarMenuItem}>Testimoni</a></li>
      </ul>
      <div style={styles.navbarAuth}>
        {!isMobile && (
          <>
            <h1 style={styles.loginskill}>Login</h1>
            <button
              style={styles.navbarRegisterBtn}
            >
              Register
            </button>
          </>
        )}
        {isMobile && (
          <img
            src={menu_icon}
            alt="Menu Icon"
            style={styles.navImage}
            onClick={toggleMenu}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
