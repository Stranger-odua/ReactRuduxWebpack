import React from 'react';


const Card = (props) => {
  return (
    <div>
      <button onClick={() => props.history.goBack()} className='back-btn'>BACK</button>
      Card repo
    </div>
  );
};

export default Card;
