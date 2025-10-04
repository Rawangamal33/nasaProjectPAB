import mainImg from "../assets/pexels-frank-cone-140140-3214110.jpg";
import dnaImg from "../assets/vecteezy_glorious-playful-avant-garde-a-dna-double-helix-glowing_60053500.png";
const MainPic = () => {
  return (
    <div
      className="w-full h-[250px] border rounded-md border-purple-950 bg-cyan-500 shadow-lg shadow-cyan-500/50 "
      style={{
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="pt-9 px-6 flex-center sm:gap-10">
        <div>
          <h1 className="sm:text-4xl text-xl font-semibold">
            Unlocking the secrets
          </h1>
          <h2 className="sm:text-4xl text-xl font-semibold">
            of Space Biology
          </h2>
          <p className=" sm:tracking-widest mt-2.5 sm:text-base text-[12px]">
            Navigate Decades of NASA Research with AI
          </p>
        </div>
        <img src={dnaImg} alt="bio image" className="sm:w-40 w-20" />
      </div>
    </div>
  );
};

export default MainPic;
