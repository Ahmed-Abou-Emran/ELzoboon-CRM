const Input = ({ label, type }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} />
    </>
  );
};
