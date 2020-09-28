import { css } from 'emotion';

export const homeContainer = css({
    backgroundAttachment: 'fixed', 
    backgroundImage: "url('img/home_background_1.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height:'100vh',
    justifyContent: 'center'
})

export const text = css({
    backgroundColor: '#262626',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    padding: '0 2rem',
    maxWidth: '30vw',
    
    '& h1': {
        color: 'white',
        fontSize: '3.5rem',
        letterSpacing: '.5rem',
    },

    '& span': {
        color: 'white',
        fontSize: '.8rem'
    }
})