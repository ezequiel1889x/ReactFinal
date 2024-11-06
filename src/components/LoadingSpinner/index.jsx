import React from 'react';
import { Container } from 'react-bootstrap';
import ezeLogo from '../../assets/images/EzeLogo.png';

function LoadingSpinner() {
  return (
    <Container><img src={ezeLogo} height="380" width="480" alt="ezeLogo" className="img-fluid" />
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </Container>
  )
}

export default LoadingSpinner