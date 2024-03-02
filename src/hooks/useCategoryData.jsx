
// export default useCategoryData;
import { useQuery } from "@tanstack/react-query";
import { callApi } from "../utilities/functions";

const useCategoryData = () => {
    const { refetch, data: categories = [], isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            try {
                const res = await callApi("GET", `/api/courses/categories`);
                return res.data;
            } catch (error) {
                console.error("Error fetching categories:", error);
                throw new Error("Failed to fetch categories");
            }
        },
    });

    return { categories, refetch, isLoading, isError };
};

export default useCategoryData;
