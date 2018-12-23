import React from 'react';
import './Card.css';

// export const Card = ({ id, name, email}) =>{
const Card = ({ id, name, username, email}) =>{


    return (
        // <h1>RoboFriend</h1>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div id='div2' className='w5 h4'>
                <h2 className='f5 adjustxt'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;