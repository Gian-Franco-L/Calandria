'use client'

import Spinner from 'react-bootstrap/Spinner';

function LoaderSpinner() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoaderSpinner;