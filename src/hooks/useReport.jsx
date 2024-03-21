import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useReport = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState(null);
    const [paidStudents, setPaidStudents] = useState(null);

    const totalBalance = students ? students.reduce((total, student) => total + parseFloat(student.balance), 0) : 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsResponse = await callApi("get", "/api/students");
                setStudents(studentsResponse);

                const paidStudentsResponse = await callApi("post", "/api/paid/students");
                setPaidStudents(paidStudentsResponse);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return { loading, students, paidStudents, totalBalance };
};

export default useReport;
