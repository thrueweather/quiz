import React from 'react';

const Logo = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <div className="logo">
            <h3>Your</h3>
            <h1>Spirit</h1> 
            <div
                style={style}>
                <span>helloworldloremipsum</span><h3>Grilled Chesse</h3><span>helloworldloremipsum</span>
            </div>
        </div>
    )
}

export default Logo;