import { useState } from "react";
import CongratulationForm from "./CongratulationForm";

const CreateCongratulation = ({ setData }) => {
  const [selectedColor, setSelectedColor] = useState("#FFF960");

  return (
    <section style={{ background: selectedColor }}>
      <div className="container">
        <CongratulationForm
          setData={setData}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </section>
  );
};

export default CreateCongratulation;
