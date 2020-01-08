/*渐变色按钮 */
import React from 'react'
import styled ,{keyframes}from 'styled-components'
const Bubbles = props =>keyframes`
100% {
    box-shadow: inset ${props.width}px 0  0 #0072c4;
    color:${props.hoverColor};
}
`
const Button = styled.button`
    display: inline-block;
    color:${props => props.color};
    width:${props => props.width}px;
    height:${props => props.height}px;
    trasition:all 1s ease-out;
    position: relative;
    z-index:2;
    &:hover{
        -webkit-animation: ${Bubbles} 1s forwards ease-out;
        animation: ${Bubbles} 1s forwards ease-out;
    }
`
const graButton = ({
    width=120,
    height=40,
    color="#000",
    backColor="#2379E2",
    text="button",
    hoverColor="#fff"
})=>{
    return(
        <Button width={width} height={height} color={color} backColor={backColor} hoverColor={hoverColor}>
            {text}
        </Button>
    )
}
export default graButton