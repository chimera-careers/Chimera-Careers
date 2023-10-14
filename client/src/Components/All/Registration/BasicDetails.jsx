import React from 'react';

function BasicDetails({ nextStep }) {
  // Add form fields and state management for the basic details step here

  return (
    <div>
      <h2>Step 1: Basic Details</h2>
      {/* Basic details form fields */}
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default BasicDetails;
