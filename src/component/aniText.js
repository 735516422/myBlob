import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
const MyText = styled.div`
    position: relative;
    top:200px;
    left:50%;
    z-index:20;
`
const AniText = ({text,type}) => {
    const textRef = useRef()
    useEffect(()=>{
        init()
    },[])
    const init = () => {
        // let mySplitText = new SplitText(textRef, {type:"words"});
        // let splitTextTimeline = new TimelineLite();
        // TweenLite.set(textRef, {perspective:400});
        // mySplitText.split({type:"chars, words"}) 
        // splitTextTimeline.staggerFrom(mySplitText.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
    }
    return (
        <MyText ref={textRef}>
            {text}
        </MyText>
    )
}
export default AniText  