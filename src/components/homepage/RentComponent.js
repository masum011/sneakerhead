import React, { useState } from 'react';

function RentComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select onClick={handleSelect}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default RentComponent;
