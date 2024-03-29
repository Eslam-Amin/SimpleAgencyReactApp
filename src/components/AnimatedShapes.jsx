
import { styled } from 'styled-components';
import { React } from 'react';

const Square = styled.div`
width: 60px;
height: 60px;
background-color: #4e6bff;
opacity: 0.7;
position: absolute;
top: -60;
left: -60;
z-index: -1;
animation: square 25s linear alternate infinite;

@keyframes square {
    to{
        transform: translate(100vw, 100vh);
    }

    
};
`


const Circle = styled.div`
width: 100px;
height: 100px;
background-color: #ff97af;
position: absolute;
top: 200px;
left: -100px;
z-index: -1;
border-radius: 50%;
animation: circle 25s linear alternate infinite;


@keyframes circle {
    to{
        transform: translate(100vw, -100vh);
    }


};
`

const Rectangle = styled.div`
width: 50px;
height: 100px;
background-color: #669966;
position: absolute;
top: 400px;
left: -50px;
z-index: -1;
opacity: .5;
animation: rect 25s linear alternate infinite;


@keyframes rect {
    to{
        transform: translate(100vw, -50vh);
    }


};
`


function AnimatedShapes() {
    return (
        <>
            <Square />
            <Circle />
            <Rectangle />
        </>
    )
}

export default AnimatedShapes
