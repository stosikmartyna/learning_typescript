import { css } from 'emotion';

export const navbarContainer = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100vw',

    '& a': {
        fontSize: '1.5rem',
        textDecoration: 'none'
    }
})