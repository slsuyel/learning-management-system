
import { useQuery } from '@tanstack/react-query';
import { callApi } from '../utilities/functions';

const useAllCourses = () => {
    const { refetch, data: coursesData = [], isLoading, isError } = useQuery({
        queryKey: ["coursesData"],
        queryFn: async () => {
            try {
                const res = await callApi("GET", `/api/courses?type=courselist`);
                return res.data;
            } catch (error) {
                console.error("Error fetching coursesData:", error);
                throw new Error("Failed to fetch coursesData");
            }
        },
    });

    return { coursesData, refetch, isLoading, isError };
};

export default useAllCourses;
