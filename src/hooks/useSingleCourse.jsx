import React, { useEffect, useState } from 'react';
import { callApi } from '../utilities/functions';

const useSingleCourse = (id) => {
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi("GET", `/api/get/courses/${id}`);
                setDetails(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return { details, isLoading };
};

export default useSingleCourse;