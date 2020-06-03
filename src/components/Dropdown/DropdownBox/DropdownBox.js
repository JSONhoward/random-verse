import React, {useContext} from 'react'
import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'

import style from './DropdownBox.module.scss'
import {StateContext} from '../../../store/state'

const DropdownDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 4rem;
    width: ${props => props.width || '15rem'};
    margin: 2px;
    box-shadow: 2px 2px 5px black;
    background-color: white;
    font-size: 1.5rem;
    border-top-left-radius: ${props => props.left ? '.5rem' : 'none'};
    border-bottom-left-radius: ${props => props.left ? '.5rem' : 'none'};
    border-top-right-radius: ${props => props.right ? '.5rem' : 'none'};
    border-bottom-right-radius: ${props => props.right ? '.5rem' : 'none'};
    `

const OptionsDiv = styled.div`
    position: absolute;
    top: 65px;
    left: 0px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: left;
    justify-content: top;
    height: fit-content;
    max-height: 10rem;
    width: ${props => props.width ? '7.8rem' : 'calc(13rem - 4px)'};
    background-color: white;
    animation: fadeIn linear .5s;
    box-shadow: 2px 2px 5px black;
    padding: 2px;
    overflow-y: scroll;
    z-index: 5;
    `

const DropdownBox = props => {
    const [state, dispatch] = useContext(StateContext)

    let dropdownList
    if (props.type === 'book') {
        dropdownList = props.list.map((item, i) => {
            return (
                <div tabIndex={1} id={i} onClick={(e) => {
                    props.choice(item.name)
                    props.toggleOpen()
                }} key={i} className={style['list-item']} onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === 'Space') {
                        props.choice(item.name)
                        props.toggleOpen()
                    }
                }}>
                    {item.name}
                </div>
            )
        })
    } else if (props.type === 'chapter') {

        dropdownList = props.list.map((item, i) => {
            return (
                <div tabIndex={1} id={i} onClick={() => {
                    props.choice(i + 1)
                    props.toggleOpen()
                }} key={i} className={style['list-item']} onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === 'Space') {
                        props.choice(i + 1)
                        props.toggleOpen()
                    }
                }}>
                    Ch. {i + 1}
                </div>
            )
        })
    } else {
        dropdownList = props.list.map((item, i) => {
            return (
                <div tabIndex={1} id={i} onClick={() => {
                    props.choice(item)
                    props.toggleOpen()
                }} key={i} className={style['list-item']} onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === 'Space') {
                        props.choice(item)
                        props.toggleOpen()
                    }
                }}>
                    {item}
                </div>
            )
        })
    }

    const keyOpen = (e) => {
        if (e.key === 'Enter') {
            props.toggleOpen()
        }
    }

    return (
        <>
            <DropdownDiv onKeyDown={e => keyOpen(e)} tabIndex={1} width={props.width && props.width} left={props.left} right={props.right}>
                <p>{props.text}</p>
                <div onClick={props.toggleOpen} className={style.caret}>
                    <FaCaretDown size={'1.5rem'} />
                </div>
                <OptionsDiv width={props.width && props.width} isOpen={props.isOpen}>
                    {dropdownList}
                </OptionsDiv>>
            </DropdownDiv>
        </>
    )
}

export default DropdownBox
