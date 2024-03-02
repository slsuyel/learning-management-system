import { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';
import { useLocation } from 'react-router-dom';

const useAllCourses = (id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const location = useLocation()
    // const ad = location.pathname





    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi("GET", `/api/courses?type=courselist`);
                setData(response.data);
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
