const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="box-border m-1 bg-sky-300 text-white font-sans text-4xl w-20 font-bold cursor-pointer h-20"
    >
      {value}
    </button>
  );
};
export default Square;
