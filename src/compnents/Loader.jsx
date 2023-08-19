const Loader = () => {
  return (
    <div className="container  mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          {/* <progress className="progress w-56"></progress> */}
          {/* <span className="loading loading-ring loading-lg"></span> */}
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
