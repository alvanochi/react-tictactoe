const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-1/4 h-10 mt-5 ml-6 text-xl font-bold text-white transition duration-200 rounded-full hover:opacity-50 bg-sky-300"
    >
      Play again!
    </button>
  );
};

export default Button;
