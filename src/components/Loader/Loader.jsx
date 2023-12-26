const { RotatingLines } = require('react-loader-spinner');

const Loader = ({ isLoading }) => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={isLoading}
    />
  );
};

export default Loader;
