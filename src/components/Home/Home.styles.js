import { css } from 'emotion';

export const homeContainer = css({
    alignItems: 'center',
    backgroundAttachment: 'fixed', 
    backgroundImage: "url('/home_background.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height:'100vh',
    justifyContent: 'center'
})

export const text = css({
    width: '50vw',

    '& h1': {
        color: 'white',
        fontSize: '3.5rem',
        letterSpacing: '.3rem',
    },

    '& span': {
        color: 'white',
        textAlign: 'center'
    }
})