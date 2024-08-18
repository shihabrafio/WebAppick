import React from 'react'
import uber from '../assets/uber.png';
import pay from '../assets/paypal.png';
import goo from '../assets/google.png';
import db from '../assets/dribble.png';
import micro from '../assets/microsoft.png';

export const Secondpage = () => {
    const styles = {
        container: {
            marginTop: '5rem',
        },
        h1: {
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 700,
        },
        span: {
            color: '#CB8461',
        },
        p: {
            textAlign: 'center',
            fontSize: '18px',
            marginTop: '1rem',
            marginInline: '29rem',
        },
        logos: {
            display: 'flex',
            justifyContent: 'center',
            gap: '6rem',
            marginTop: '2rem',
        },
        ulogo: {
            width: '100px',
            marginTop: '0.5rem',
            height: '21px',
        },
        logo: {
            width: 'auto',
            height: '40px',
        },

    }
  return (
    <div style={styles.container}>
        <h1 style={styles.h1}>Trusted more than <span style={styles.span}>100+</span>in the world</h1>
        <p style={styles.p}>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
        <div style={styles.logos}>
            <img style={styles.ulogo} src={uber} alt="companies logos" />
            <img style={styles.logo} src={goo} alt="companies logos" />
            <img style={styles.logo} src={pay} alt="companies logos" />
            <img style={styles.logo} src={micro} alt="companies logos" />
            <img style={styles.logo} src={db} alt="companies logos" />
        </div>
    </div>
  )
}

