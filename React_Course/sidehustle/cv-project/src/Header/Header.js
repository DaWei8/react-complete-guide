
import React from 'react';

const Header = () => {

    const style = {
        fontSize: 60,
    };

    return (
        <header className="Header">
            <div className='Header-logo'>
                <p style={style}>KD</p>
                <h1 className='My-name'>King David</h1></div>
            <SideElements />
        </header>
    );
}

const SideElements = () => {
    return (
        <div className='Side-element'>
            <SideElementItem heading='Address' text='12 King Street' />
            <SideElementItem heading="Phone" text="08123456789" />
            <SideElementItem heading="E-mail" text="kingdavid@gmail.com" />
        </div>
    );
}

const SideElementItem = (props) => {
    return (
        <div className='Side-element-item'>
            <p className='Side-element-heading'>{props.heading}</p>{props.text}
        </div>
    );
}

export default Header;