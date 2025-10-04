import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetData = (categoryName = null, page = 0, size = 20) => {
  // Fetch experiments with pagination
  const {
    data: experimentsData,
    isLoading: experimentsLoading,
    error: experimentsError,
  } = useQuery({
    queryKey: ["experiments", page, size],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/pmc/experiments?page=${page}&size=${size}`
        );
        return response.data;
      } catch (error) {
        throw new Error(`Failed to fetch experiments: ${error.message}`);
      }
    },
  });
  //GetCategories
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/pmc/categories`
        );
        return response.data;
      } catch (error) {
        throw new Error(`Failed to fetch experiments: ${error.message}`);
      }
    },
  });

  // Fetch category items with pagination
  const {
    data: categoryItems,
    isLoading: categoryItemsLoading,
    error: categoryItemsError,
  } = useQuery({
    queryKey: ["categoryItems", categoryName, page, size],
    queryFn: async () => {
      if (!categoryName) {
        throw new Error("Category name is required");
      }
      try {
        const response = await axios.get(
          `http://localhost:8080/pmc/category/${categoryName}?page=${page}&size=${size}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          `Failed to fetch ${categoryName} items: ${error.message}`
        );
      }
    },
    enabled: !!categoryName,
  });

  return {
    experimentsData,
    experimentsLoading, // Fixed typo: ExperiemntsLoading → experimentsLoading
    experimentsError,
    categoryItems,
    categoryItemsLoading,
    categoryItemsError,
    categories,
    categoriesLoading,
    categoriesError,
  };
};

export default useGetData;
