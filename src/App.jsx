
import React from 'react'


const url = '/image-qr-code.png';

export const App = () => {
    return (
        <div className='container'>
            <ContainerImage url={url} />
            <ContainerText />
        </div>
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
            <p>Improve your front-end skills by building projects</p>
            <p>Scan the QR code to visit Frontend Mentor and take your coding to the next level</p>
        </div>
    );
};
