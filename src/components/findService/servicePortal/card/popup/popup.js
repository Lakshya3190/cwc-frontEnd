import React from 'react';
import './popUp.css';
const popUp = ({description, closePopup}) => {
    
    return(
        <div>
            <div className='popup'>  
            <div className='popup\_inner desc ma6 br4'>  
                <p className = 'f3 pa4 text'>{description}</p>  
                <p className = 'br3 button pa2 pointer' onClick={closePopup}>Close</p>  
            </div>  
            </div> 
        </div>
    )
}

export default popUp;