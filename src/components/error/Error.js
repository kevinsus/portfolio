import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import './error.css'

const Error = ({ handleErrorPopup, handleCloseErrorPopup, resetErrorState }) => {
  const [showErrorPopup, setShowErrorPopup] = useState(handleErrorPopup);

  useEffect(() => {
    setShowErrorPopup(handleErrorPopup);
  }, [handleErrorPopup]);
  
  const handleCloseErrorPopupLocal = () => {
    handleCloseErrorPopup()
    resetErrorState(); // Reset the error state
  };


  return (
    <div className='ErrorTab'>
      {showErrorPopup && (
        <div className="popup_Error">
          <div className="popup_Wrapper">
            <div className="popup_Container">
              <FontAwesomeIcon icon={faTriangleExclamation} bounce size="2xl" style={{color: "#ff0000",}} />
              <div className="message">
                <h1>Error</h1>
                <p>There was an error processing your request.</p>
              </div>
              <div className="action">
                <button onClick={handleCloseErrorPopupLocal}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Error