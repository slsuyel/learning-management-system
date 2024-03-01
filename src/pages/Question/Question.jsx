import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

const Question = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: "28a1066f-1882-404e-9b3c-e33a506adaca",
            name: "ডিজাইন",
            slug: 'Design',
            description: "প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের . . ",
            subCategories: [
                { "id": 1, "name": "লোগো ডিজাইন" },
                { "id": 2, "name": "প্রিন্ট ডিজাইন" },
                { "id": 3, "name": "গ্রাফিক্স ডিজাইন" },
                { "id": 4, "name": "মোশন গ্রাফিক্স" }
            ]
        },
    ];

    const handleEdit = (id) => {
        // Handle edit action
        console.log(id);
    };

    const handleView = (id) => {
        navigate(`/dashboard/courses/view/${id}`);
        console.log(id);
    };

    const handleDelete = (id) => {
        // Handle delete action
        console.log(id);
    };

    return (
        <div>
            <div className='m-2 text-end'>
                <Link className='add-question-btn px-3 py-1 text-decoration-none' to='/dashboard/courses/add'>Add Courses</Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Sub Categories</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td><p>{item.description.slice(0, 100)}</p></td>
                                <td>
                                    <ul>
                                        {item.subCategories.map(subCategory => (
                                            <li key={subCategory.id}>{subCategory.name}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id={`dropdownMenuButton${index}`}>
                                            Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <button className="dropdown-item" onClick={() => handleView(item.id)}>View</button>
                                            <button className="dropdown-item" onClick={() => handleEdit(item.id)}>Edit</button>
                                            <button className="dropdown-item" onClick={() => handleDelete(item.id)}>Delete</button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Question;
