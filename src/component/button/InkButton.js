import React from 'react'
import styled from 'styled-components'
import Svg  from '../svg'
/*水墨画按钮 */
const Button = styled.div`
    display: inline-block;
    overflow:hidden;
    width:${props => props.width}px;
    height:${props => props.height}px;
    border-radius:5px;
    background:${props => props.backColor};
    text-align: center;
    line-height:${props =>props.height}px;
    position: relative;
    top:200px;
    left:50%;
    z-index:2;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        z-index:11;
    }
    span{
        color:${props => props.color};
        z-index:10;
        position:relative;
    }
    .back{
        position: absolute;
        width:0px;
        height:0px;
        filter: url(#filter);
        border-radius: 50%;
        z-index: 5;
        transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
        left: -50%;
        top: -50%;
        background: ${props => props.hoverColor};
    }
    &:hover{
        .back{
            width:${props => props.width*2.5}px;
            height:${props => props.height*2.5}px;
        }
    }
`
const InkButton = ({
    width = '120',
    height = '40',
    color = '#fff',
    backColor = '#2379E2',
    text = 'button',
    hoverColor = '#27ae60'
}) => {
    return (
        <Button width={width} height={height} color={color} backColor={backColor} hoverColor={hoverColor}> 
            <Svg></Svg>
            <span>{text}</span>
            <div className="back"></div>
        </Button>
    )
}
export default InkButton