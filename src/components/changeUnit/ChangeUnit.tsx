import React, { Dispatch } from "react";

interface ChangeUnitProps {
  unit: string;
  setUnit: Dispatch<string>;
}

const ChangeUnit: React.FC<ChangeUnitProps> = ({ unit, setUnit }) => {
  return (
    <div className="change-unit">
      <button
        style={unit === "C" ? { color: "#fff" } : {}}
        type="button"
        onClick={() => setUnit("C")}
      >
        C
      </button>
      <button
        style={unit === "F" ? { color: "#fff" } : {}}
        type="button"
        onClick={() => setUnit("F")}
      >
        F
      </button>
    </div>
  );
};

export default ChangeUnit;
