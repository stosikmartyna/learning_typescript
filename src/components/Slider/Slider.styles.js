import { css } from 'emotion';

export const slider = css({
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
})

export const slide = css({
    minWidth: '100%',
    overflow: 'hidden',
    transition: '0.5s'
})

export const sliderImg = css({
    height: 'auto',
    width: '100vw'
})

export const buttonLeft = css({
    background: 'none',
    border: 'none',
    height: '80%',
    left: 0,
    outline: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '10%',

    '& :hover': {
        cursor: 'pointer'
    }
})

export const buttonRight = css({
    background: 'none',
    border: 'none',
    height: '80%',  
    outline: 'none',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '5%',

    '& :hover': {
        cursor: 'pointer'
    }
})