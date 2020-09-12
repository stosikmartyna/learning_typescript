import { css } from 'emotion';

export const navbarContainer = css({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '.5rem',
    position: 'fixed',
    width: '100vw',

    '& a': {
        color: 'white',
        fontSize: '1.5rem',
        textDecoration: 'none',        
    },

    '& a:hover': {
        color: '#e8f0f0'
    },
})