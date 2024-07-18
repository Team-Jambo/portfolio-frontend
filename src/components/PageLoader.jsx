import { Triangle } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Triangle
        visible={true}
        height="90"
        width="80"
        color="#2286C9"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default PageLoader;
