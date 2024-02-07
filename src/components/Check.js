import React, { useState } from "react";

const Check = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {checked ? null : (
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          I am not a robot
        </label>
      )}
    </div>
  );
};

export default Check;
