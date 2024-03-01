// // import { useQuery } from '@tanstack/react-query';
// // import { callApi } from '../utilities/functions';

// // const useCategoryData = () => {
// //     const { data: responseData, isLoading, refetch } = useQuery('categoryData', async () => {
// //         try {
// //             const response = await callApi("GET", `/api/courses/categories`);
// //             console.log(response); // Log the entire response object for inspection
// //             return response.data.data; // Access the nested data property
// //         } catch (error) {
// //             console.error('Error fetching category data:', error);
// //             throw new Error('Failed to fetch category data');
// //         }
// //     });

// //     return { data: responseData, isLoading, refetch };
// // };

// // export default 


// import { useQuery } from "@tanstack/react-query";
// import { callApi } from "../utilities/functions";
// const useCategoryData = async () => {
//     const { refetch, data: categories = [], isLoading } = useQuery({
//         queryKey: ["categories",],
//         queryFn: async () => {
//             const res = await await callApi("GET", `/api/courses/categories`)
//             console.log(res.data.data);
//         },
//     })
//     return [categories, refetch, isLoading]
// };



// export default useCategoryData;
import { useQuery } from "@tanstack/react-query";
import { callApi } from "../utilities/functions";

const useCategoryData = () => {
    const { refetch, data: categories = [], isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            try {
                const res = await callApi("GET", `/api/courses/categories`);
                return res.data.data;
            } catch (error) {
                console.error("Error fetching categories:", error);
                throw new Error("Failed to fetch categories");
            }
        },
    });

    return { categories, refetch, isLoading, isError };
};

export default useCategoryData;
