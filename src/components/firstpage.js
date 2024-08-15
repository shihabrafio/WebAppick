import React from 'react'
import vector1 from '../assets/first_page_vector_1.png';
import hg from '../assets/header_girl.png';
import insta from '../assets/instagram.png'
import x from '../assets/x.png'
import disco from '../assets/discord.png'
import ic from '../assets/Icon.png'

export const Firstpage = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '19%',
            backgroundColor: '#245D51',
            color: '#fff',
        },
        left: {
            alignItems: 'left',
        },
        h1: {
            fontSize: '65px',
            fontWeight: 600,
            textAlign: 'left',
            marginLeft: '57px',
        },
        button:{
            display: 'flex',
            backgroundColor: '#CB8461',
            border: 'none',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 700,
        },
        p:{
            textAlign: 'left',
            fontSize: '20px',
            fontWeight: 400,
            marginLeft: '57px',
            paddingRight: '6.5rem',
        }

    }

  return (
    <div style={styles.container}>
        <div style={styles.left}>
            <h1 style={styles.h1}>There is always something new for us to learn</h1>
            <img src={vector1} alt="" />
            <p style={styles.p}>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
            <div>
                <button style={styles.button}>
                    <h6>Start Journey</h6>
                    <img src={ic} alt="button" />
                </button>
                <img src={insta} alt="logos" />
                <img src={x} alt="logos" />
                <img src={disco} alt="logos" />
            </div>
        </div>
        <div>
            <img src={hg} alt="lady" />
        </div>
    </div>
  )
}
