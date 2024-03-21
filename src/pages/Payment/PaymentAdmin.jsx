import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { callApi } from '../../utilities/functions';
import { Link, useLocation } from 'react-router-dom';
import Paginate from '../../components/Paginate';
import Loader from '../../utilities/Loader';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import BackBtn from '../../components/ui/BackBtn';
const PaymentAdmin = () => {
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [per_page, setPer_page] = useState()
    const [totalitems, setTotalitems] = useState()
    const location = useLocation();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1
            const data = await callApi("get", `/api/students?perpage=10&page=${page}`);
            setStudents(data.data);
            setTotalPages(data.links)
            setPer_page(data.per_page)
            setTotalitems(data.total)
            if (page == 1) {
                setPageNo(1);
            } else {
                setPageNo((page - 1) * data.per_page + 1);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>

            <BackBtn />
            <hr />
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> name</th>
                        <th> name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>balance</th>
                        <th>refer_count</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + pageNo}</td>
                                <td>{student.founder_name}</td>
                                <td>{student.company_name}</td>
                                <td>{student.founder_email}</td>



                                <td>{student.founder_phone}</td>
                                <td>{student.balance}</td>
                                <td>{student.refer_count}</td>
                                <td className='d-flex justify-content-around gap-2'>
                                    <Link className='btn btn-primary text-decoration-none' to={`/dashboard/student/show/${student.id}`}>Show</Link>

                                    <Link className='btn btn-info text-decoration-none' to={`/dashboard/student/edit/${student.id}`}>Edit</Link>

                                    <button
                                        onClick={() => handleStudentDelete(student.id)}
                                        className='btn btn-danger'> Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">
                                <Loader />
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Paginate
                Totalpageprops={totalPages}
                per_page={per_page}
                totalitems={totalitems}
                route='/dashboard/student'
            />
        </>


    );
};

export default PaymentAdmin;
