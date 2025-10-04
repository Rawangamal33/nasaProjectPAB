import { NavLink } from "react-router-dom";
import logo from "../../assets/ChatGPT Image Oct 3, 2025, 04_41_24 AM.png";
import { TbBrandNexo } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { GiAstronautHelmet } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="py-4 px-3 border-1 border-[#828181] rounded-tl-lg rounded-tr-lg  bg-black/20 flex gap-2 justify-evenly items-center">
      <NavLink to="/">
        {" "}
        <img src={logo} alt="page logo" className="sm:w-40 w-35" />
      </NavLink>
      <hr className="w-12 transform rotate-z-90 " />
      <p className="flex flex-col text-sm hidden sm:block  sm:text-md  lg:text-lg leading-6 font-semibold">
        BioScope{" "}
        <span className="flex-center gap-2">
          Explore Science
          <div className="text-blue-400 text-[28px]">
            <TbBrandNexo />
          </div>
        </span>
      </p>
      <NavLink
        to="/experiments"
        className="navExp py-md:[9px] md:px-[20px] sm:py-[7px] sm:px-[16px] py-[5px]  px-[14px] "
      >
        Experiments
      </NavLink>
      <div className="max-w-[1100p] relative flex-center ">
        <button
          type="submit"
          className="text-2xl hidden sm:block absolute left-7"
        >
          <IoIosSearch />
        </button>

        <input
          type="search"
          className="border hidden sm:block sm:w-[200px] md:w-[250px] lg:w-[450px] rounded-sm text-xl py-1.5 px-3 w-50  "
        />
      </div>
      <div className="text-3xl md:text-5xl">
        <GiAstronautHelmet />
      </div>
    </div>
  );
};

export default Nav;
