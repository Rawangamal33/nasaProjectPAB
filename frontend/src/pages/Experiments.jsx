import PublishExp from "@/components/PublishExp";
import SearchFilters from "@/components/SearchFilters";
import { useState } from "react";

const Experiments = () => {
  const [searchData, setSearchData] = useState([]);
  return (
    <div className="lg:flex justify-between gap-6">
      <SearchFilters searchData={searchData} setSearchData={setSearchData} />
      <PublishExp searchData={searchData} setSearchData={setSearchData} />
    </div>
  );
};

export default Experiments;
