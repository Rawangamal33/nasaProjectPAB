import useGetData from "@/components/Hooks/useGetData";

import { truncateWords } from "@/components/UtilityFuncMaxWord";
import { useParams } from "react-router-dom";
const ItemSkeleton = () => (
  <div className="border border-cyan-500/90 bg-[#161823] shadow-sm py-3 px-4 rounded-md flex flex-col gap-2 animate-pulse">
    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    <div className="flex justify-between items-center">
      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
      <div className="h-3 bg-gray-600 rounded w-1/4"></div>
    </div>
  </div>
);
const CategoryItems = () => {
  const { categoryName } = useParams();
  const { categoryItems, categoryItemsLoading, categoryItemsError } =
    useGetData(categoryName);

  if (categoryItemsError)
    return (
      <p className="text-3xl flex-center text-red-500 min-h-screen">
        Error. couldn't get the data. Please try agian.
      </p>
    );
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-4">
          <h1 className="bg-[#141c2a] py-2 px-4 w-fit rounded-md border border-[#bcbaba] text-lg">
            Items under {categoryName.toUpperCase()}
          </h1>
          <span className="bg-[#141c2a] py-2 px-4 w-fit rounded-md border border-[#bcbaba] text-lg">
            {categoryItems?.content?.length}
          </span>
        </div>
        {categoryItemsLoading ? (
          <div className="categoryItems flex flex-col gap-4.5 mt-7">
            {Array.from({ length: 5 }).map((_, i) => (
              <ItemSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="categoryItems flex flex-col gap-4.5 mt-7">
            {categoryItems?.content?.map((item, i) => (
              <div
                key={i}
                className="border border-cyan-500/90 bg-[#161823] shadow-sm hover:shadow-md cursor-pointer shadow-cyan-500/50 py-3 px-4 rounded-md flex flex-col gap-2"
              >
                <h1 className="font-semibold">{item.keywords}</h1>
                <div className="text-sm text-[#ddd] flex justify-between items-center">
                  {" "}
                  <p>{item.title}</p>
                  <p>{truncateWords(item.authors, 2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
