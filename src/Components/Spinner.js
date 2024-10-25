// Spinner.js
import React from 'react';

const Spinner = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span className="sr-only">Loading...</span>
    </button>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Loading...
    </button>
  </div>
);

export default Spinner;

