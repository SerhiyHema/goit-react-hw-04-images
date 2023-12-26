const Button = ({ onClick }) => {
  return (
    <button type="button" className="button-Load" onClick={onClick}>
      <span className="button-load__text">Load more</span>
    </button>
  );
};

export default Button;
