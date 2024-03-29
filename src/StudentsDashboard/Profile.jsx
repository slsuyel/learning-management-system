
import { Button } from 'antd';
import useStudent from '../hooks/useStudent';
import Loader from '../utilities/Loader';
import { Link } from 'react-router-dom';


const Profile = () => {

    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)


    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={studentData.attachment_file || "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="u" className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4>{studentData.founder_name}</h4>
                                        <p className="text-secondary mb-1">Student ID: {studentData.id}</p>
                                        <p className="text-muted font-size-sm">Location : {studentData.location}</p>

                                        {/* 
                                        <div className="text-center my-2">
                                            <button className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Name :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_phone}
                                    </div>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Gender :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_gender || "N/A"}
                                    </div>
                                </div>
                                <hr />



                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link to='/user-db/edit-profile'>Edit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div></div></div></div>

    );
};

export default Profile;

