import { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useAllCourses = (id) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi("GET", `/api/courses`);
                setData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return { coursesData: data, isLoading };
};

export default useAllCourses;
