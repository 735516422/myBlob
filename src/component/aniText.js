import React,{useState,useRef,useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
const landIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`
const MyText = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    color: white;
    position: relative;
    z-index:10;
    letter-spacing: 3px;
    white-space: pre;
    span {
        font-size:${props=>props.size}px;
        animation: ${landIn} 0.8s ease-out both;
    }
`
const AniText = ({text,size=16,del=0.1}) => {
    const [spans,setSpans] = useState([])
    useEffect(()=>{
        init()
    },[])
    const init = () => {
        setSpans(text.split(""))
        console.log(text.split(""))
    }
    return (
        <MyText size={size}>
            <span> </span>
            {
                spans.map((item,index)=>{
                    return (
                        <span key={index} style={{animationDelay:`${index * del}s`}}>{item}</span>
                    )
                })
            }
        </MyText>
    )
}
export default AniText  