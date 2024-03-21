import { Button, Card, message, Table } from "antd";
import useStudent from "../../hooks/useStudent";
import Loader from "../../utilities/Loader";
import { Link } from "react-router-dom";

const Affiliate = () => {

    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)

    const copyReferralLink = () => {
        navigator.clipboard.writeText(`https://s2a-e.shop/signup?ref=${studentData.ref_code || ''}`)
        message.success('Referral link copied to clipboard');
    }

    if (isLoading) {
        return <Loader />
    }

    const columns = [
        {
            title: ' Name',
            dataIndex: 'founder_name',
            key: 'founder_name',
        },
        // {
        //     title: 'Company Name',
        //     dataIndex: 'company_name',
        //     key: 'company_name',
        // },
        {
            title: 'Email',
            dataIndex: 'founder_email',
            key: 'founder_email',
        },
        // {
        //     title: 'Location',
        //     dataIndex: 'location',
        //     key: 'location',
        // },
    ];

    // console.log(studentData);


    return (
        <div>
            <h3 className='fs-1 fw-semibold '>অ্যাফিলিয়েশন প্রোগ্রাম</h3>

            <div className="align-items-baseline d-flex gap-4 justify-content-center mb-4 py-3 text-bg-light">
                <h5>Your ref link : <span className="text-decoration-underline text-primary">
                    {`https://s2a-e.shop/signup?ref=${studentData?.ref_code || ''}`}

                </span>
                </h5>
                <Button type="primary" onClick={copyReferralLink}>Copy</Button>
            </div>

            <div className="row">
                <div className="col-md-4">

                    <h5>Total members</h5>
                    <Table dataSource={studentData.referrals} columns={columns} />

                </div>
                <div className="col-md-4">
                    <h5>Active members</h5>
                    <>
                        <Table dataSource={studentData.referred_paid_students} columns={columns} />
                    </>
                </div>
                <div className="col-md-4">
                    <h5>Total Earnings</h5>
                    <Card>
                        {studentData.balance}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;
