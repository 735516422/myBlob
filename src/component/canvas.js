import React from 'react'
import { wave } from '../../utils/wave'
export default class myCanvas extends React.Component{
    init(){
        var settings = {
            image: '1.jpg',//image path
            dropRadius: 3,//radius of the ripple
            width: 800,//width
            height: 500,//height
            delay: 1,//if auto param === true. 1 === 1 second delay for animation
            auto: 1//if auto param === true, animation starts on it´s own
        }
        let cvs = document.getElementById("canvas")
        let w = new wave(cvs,settings)
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
        document.onkeydown = function(e) {
            // eslint-disable-next-line no-caller
            var event = e || window.event || arguments.callee.caller.arguments[0];
            if(event && event.keyCode === 13){ // enter 键
                w.disturb( 200, 200);
            }
        }
    }
    render(){
        return (
            <div>
                <canvas></canvas>
            </div>
        )
    }
}