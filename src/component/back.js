import React from 'react'
import wave from '../utils/wave'
import styles from '../assets/css/back.module.scss'
export default class myCanvas extends React.Component{
    componentWillMount(){
        this.setState({
            width:document.querySelector('body').offsetWidth,
            height:document.querySelector('body').offsetHeight
        })
    }
    componentDidMount(){
        this.init()
    }
    init(){
        var settings = {
            image: 'https://img.smartnail.cn/shuibowen/1.jpg',//image path
            dropRadius: 3,//radius of the ripple
            width: 800,//width
            height: 500,//height
            delay: 1,//if auto param === true. 1 === 1 second delay for animation
            auto: 0//if auto param === true, animation starts on it´s own
        }
        let cvs = document.getElementById("canvas") 
        let w = new wave(cvs,settings)
        this.setState({
            w:w
        })
        w.init()
        document.getElementById( 'holder' ).addEventListener( 'click', function( e ) {
            var mouseX = e.layerX;
            var mouseY = e.layerY;
            w.disturb( mouseX, mouseY );     
        } );
        //on mousemove
        document.getElementById( 'holder' ).addEventListener( 'mousemove', function( e ) {
            var mouseX = e.layerX;
            var mouseY = e.layerY;
            w.disturb( mouseX, mouseY );
        } );
    }
    render(){
        return (
            <div id="holder" className={styles.back}>
                <canvas id="canvas" width={this.state.width} height={this.state.height}></canvas>
            </div>
        )
    }
}