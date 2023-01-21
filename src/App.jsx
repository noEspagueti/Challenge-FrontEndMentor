
import React from 'react'


const url = '/image-qr-code.png';

export const App = () => {
    return (
        <>
            <ContainerImage url={url} />
            <ContainerText />
        </>
    );
};


const ContainerImage = ({ url }) => {

    return (
        <div className='container__img'>
            <img src={url} alt="" />
        </div>
    );

};

const ContainerText = () => {
    return (
        <div className='container__text'>
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding to the next level</p>
        </div>
    );
};
