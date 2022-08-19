import CongratulationForm from "./CongratulationForm";

const CreateCongratulation = ({ setData }) => {
  return (
    <section style={{ background: "#f2eb3f" }}>
      <div className="container">
        <CongratulationForm setData={setData} />
      </div>
    </section>
  );
};

export default CreateCongratulation;
