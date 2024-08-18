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
            gap: '12%',
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
            backgroundImage: `url(${vector1})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '15rem 5.5rem',
        },
        button:{
            display: 'flex',
            backgroundColor: '#CB8461',
            border: 'none',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '20px',
            paddingRight: '30px',
            paddingLeft: '20px',
            fontWeight: 700,
            width: '210px',
            height: '40px',
        },
        p:{
            textAlign: 'left',
            fontSize: '20px',
            fontWeight: 400,
            marginLeft: '57px',
            paddingRight: '6.5rem',
        },
        buttonImg:{
            marginLeft: '10px',
            marginTop: '14px',
            width: '12px',
            height: '12px',

        },
        logos:{
            display: 'flex',
            gap: '20px',
            marginTop: '6px',
        },
        logo:{
            width: '30px',
            height: '30px',
        },
        part_3:{
            marginLeft: '58px',
            display: 'flex',
            gap: '20px',
            marginBottom: '4rem',
        },
        button_head:{
            marginTop: '5px',
            marginBottom: '0px',
            fontSize: '20px',
        },
        rightside:{
            marginRight: '8rem',
            marginTop: '3rem',
        },
    }

  return (
    <div style={styles.container}>
        <div style={styles.left}>
            <h1 style={styles.h1}>There is always something  new for us to learn</h1>
            <p style={styles.p}>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
            <div style={styles.part_3}>
                <button style={styles.button}>
                    <h6 style={styles.button_head}>Start Journey</h6>
                    <img style={styles.buttonImg} src={ic} alt="button" />
                </button>
                <div style={styles.logos}>
                    <img src={insta} style={styles.logo} alt="logos" />
                    <img src={x} style={styles.logo} alt="logos" />
                    <img src={disco} style={styles.logo} alt="logos" />
                </div>
            </div>
        </div>
        <div>
            <img style={styles.rightside} src={hg} alt="lady" />
        </div>
    </div>
  )
}
