const Features = () => {
  return (
    <div className="mt-8 flex justify-evenly flex-wrap gap-4.5">
      <div className="bg-[#161823] shadow-md shadow-cyan-500/50 py-2 px-4 sm:w-fit w-[200px] rounded-md flex flex-col gap-2">
        <h1 className="font-semibold">Key Metrics</h1>
        <hr className="w-full" />
        <p>Total Publications Analyzed</p>
        <p className="text-cyan-500  text-2xl font-semibold">7,000+</p>
      </div>
      {/*  */}
      <div className="bg-[#161823] shadow-md shadow-cyan-500/50 py-2 px-4 sm:w-fit w-[200px] rounded-md flex flex-col gap-2">
        <h1 className="font-semibold">Key Metrics</h1>
        <hr className="w-full" />
        <p>Number of Experiments</p>
        <p className="text-cyan-500  text-2xl font-semibold">700+</p>
      </div>
      {/*  */}
      <div className="bg-[#161823] shadow-md shadow-cyan-500/50 py-2 px-4 sm:w-fit w-[200px] rounded-md flex flex-col gap-2">
        <h1 className="font-semibold">Key Discoveries</h1>
        <hr className="w-full" />
        <p>Total Publications Analyzed</p>
        <p className="text-cyan-500  text-2xl font-semibold">608+</p>
      </div>
    </div>
  );
};

export default Features;
