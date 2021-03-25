import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/test?200x200' />
            <div>
                <h2>John Doe</h2>
                <p>john.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;