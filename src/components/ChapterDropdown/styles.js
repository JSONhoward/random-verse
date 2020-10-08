import styled from 'styled-components'

export const DropdownDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    height: 4rem;
    width: 10rem;
    padding-left: 1rem;
    margin: 2px;
    box-shadow: 2px 2px 5px black;
    background-color: white;
    font-size: 1.5rem;

    @media (max-width: 500px) {
        height: 3rem;
        width: 5rem;
        font-size: .75rem;
        padding-left: .5rem;
    }
    `

export const OptionsDiv = styled.div`
    position: absolute;
    top: 65px;
    left: 0px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: left;
    justify-content: top;
    height: fit-content;
    max-height: 10rem;
    width: 7.8rem;
    background-color: white;
    animation: fadeIn linear .5s;
    box-shadow: 2px 2px 5px black;
    padding: 2px;
    overflow-y: scroll;
    z-index: 5;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 5rem;
        font-size: 1rem;
        top: 50px;
    }
    `

export const ListItem = styled.div`
    margin-bottom: 2px;
    text-align: center;
    font-style: italic;
    `

export const Caret = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 2rem;
    background: linear-gradient(to bottom, whitesmoke, lightgrey);
    cursor: pointer;

    @media (max-width: 500px) {
        width: 1rem;
    }
    `