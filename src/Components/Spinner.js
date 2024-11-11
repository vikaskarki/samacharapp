import React  from 'react';
import loadingGif from './loadinggif.gif';
const Spinner = () => {
  
    return (
      <div className='text-center'>
        < img src= {loadingGif} alt='loadinggif.gif' />
      </div>
    );
  
};

export default Spinner;
