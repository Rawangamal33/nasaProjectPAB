import { useEffect, useState } from "react";
import useGetData from "./Hooks/useGetData";
import axios from "axios";

const SearchFilters = ({ searchData, setSearchData }) => {
  const { categories } = useGetData();

  const [variables, setVariables] = useState({
    title: "",
    keyword: "",
    author: "",
    category: "",
  });
  useEffect(() => {
    const postSearchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/pmc/search?title=${variables.title}&keyword=${variables.keyword}&author=${variables.author}&category=${variables.category}`
      );
      setSearchData(response?.data?.content);
    };
    postSearchData();
  }, [variables]);

  return (
    <div className="bg-[#141c2a] py-3.5  px-4  rounded-md border border-[#bcbaba] sm:text-lg  flex flex-col gap-3.5 h-fit lg:mb-0 mb-6">
      <h1>Filters & Controls</h1>
      <hr className="border-t border-t-[#8f8d8d]" />
      <input
        className="bg-[#3a4a5a] rounded-sm py-1 px-3"
        type="text"
        value={variables.title}
        onChange={(e) => setVariables({ ...variables, title: e.target.value })}
        placeholder="Search: Title"
      />
      <input
        className="bg-[#3a4a5a] rounded-sm py-1 mt-4 px-3"
        type="text"
        value={variables.keyword}
        onChange={(e) =>
          setVariables({ ...variables, keyword: e.target.value })
        }
        placeholder="Search: keyword"
      />
      <input
        className="bg-[#3a4a5a] rounded-sm py-1 mt-4 px-3"
        type="text"
        value={variables.author}
        onChange={(e) => setVariables({ ...variables, author: e.target.value })}
        placeholder="Search: Author"
      />

      <div className="text-[#d7d7d7] mt-2 flex flex-col gap-2">
        <h1>Categories</h1>
        <div className="all">
          {categories?.map((item, i) => (
            <div key={i} className="mt-1">
              <input
                type="radio"
                id={`${item.name}`}
                name="category"
                value={item.name}
                checked={variables.category === item.name}
                onChange={(e) =>
                  setVariables({ ...variables, category: e.target.value })
                }
                className="accent-blue-400"
              />
              <label htmlFor={`${item.name}`} className="ml-1.5">
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
