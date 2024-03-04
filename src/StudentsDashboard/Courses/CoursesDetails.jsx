
import { useNavigate, useParams } from 'react-router-dom';
import StarIcon from '../../components/ui/StarIcon';
import '../Styles/StuDashboard.css'
import { Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CourseCurriculum from '../CourseCurriculum';
import useSingleCourse from '../../hooks/useSingleCourse';
import Loader from '../../utilities/Loader';
import BackBtn from './../../components/ui/BackBtn';


const CoursesDetails = () => {
    const { id } = useParams()
    const { details, isLoading } = useSingleCourse(id)
    const navigate = useNavigate()
    const handlePaynow = (id) => {
        navigate(`/user-db/payment/${id}`)
    }
    if (isLoading) {
        return <Loader />
    }
    return (

        <section>
            <div className='fs-4 text-custom'>
                <BackBtn />
            </div>



            <div className=" col-md-8 mx-auto mb-3 mb-5">
                <video controls width="100%" >
                    <source src={details?.aboutVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>



            <div className="row mx-auto">
                <div className="col-md-7">   <div>
                    <h4>Category  </h4>
                    <div className='align-items-baseline d-flex justify-content-between text-capitalize flex-wrap'>
                        <h3 className='fs-1'>{details?.course_name}</h3>  <h5 className='fs-4 fw-bold text-success-emphasis'>instructor : {details?.instructor}</h5>
                    </div>

                    <p className='fs-5 text-secondary'>
                        {details?.descriptions}
                    </p>
                </div>


                </div>

                <div className="col-md-5">
                    <div className="col-md-10 mx-auto durationbox ">
                        <div className='align-items-center d-flex fs-5 gap-3 justify-content-center my-2'>
                            <div className='d-flex gap-1'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            ({details?.rating} রিভিউ)
                        </div>
                        <div className='align-items-center d-flex gap-2 justify-content-between'>
                            <h2 className=" fw-bold text-custom">ফি {details?.price} টাকা </h2> <h5 className='bg-secondary fw-bold p-2 rounded-4 text-warning'> {Number(details.discount)}% <span className='text-white'> ছাড়</span> </h5>
                        </div>
                        <div className="buttonbox">
                            <div className="text-center">
                                <Button onClick={() => handlePaynow(details?.id)} size='large' type="primary" className="btn-learn w-75 ">
                                    কোর্সটি কিনুন
                                </Button>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <Button size='large' type="danger" className="bg-warning" icon={<HeartOutlined />}>
                                    ফেভারিট
                                </Button>
                                <Button size='large' type="success" className=" bg-black" icon={<ShoppingCartOutlined />}>
                                    কার্টে যুক্ত করুন
                                </Button>
                            </div>
                        </div>
                    </div >
                </div>
            </div >

            <div className="row mx-auto my-3">
                <div className="col-md-6 my-2">
                    <div className='waht-learn-li'>
                        <h3>এই কোর্স থেকে কী কী শিখবেন?</h3>
                        <p className="my-3">
                            <div className='border lh-base mb-2 p-2 rounded-1 text-secondary'
                                dangerouslySetInnerHTML={{
                                    __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                                ${details?.what_you_learn}:</span></p>`
                                }}
                            />
                        </p>

                    </div>
                </div >
                <div className="col-md-6 my-2">
                    <div>
                        <h4>কোর্স  শেষ করে আমাদের সার্টিফিকেট তো থাকছেই</h4>

                        <img loading='lazy' className='img-fluid mt-3 rounded' src={details?.demoCertificate} alt="" />
                    </div>
                </div>
            </div >

            <CourseCurriculum modules={details.modules} />

            <div>
                <h3> এই কোর্সটি যাদের জন্য</h3>

                <p className="my-3">
                    <div className='border lh-base mb-2 p-2 rounded-1 text-secondary'
                        dangerouslySetInnerHTML={{
                            __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                                ${details?.targeted_audience}:</span></p>`
                        }}
                    />
                </p>

                <h3>     কোর্স রিকুয়ারমেন্ট</h3>

                <p className="my-3">
                    <div className='border lh-base mb-2 p-2 rounded-1 text-secondary'
                        dangerouslySetInnerHTML={{
                            __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                                ${details?.requirements}:</span></p>`
                        }}
                    />
                </p>


            </div>




        </section >
    );
};

export default CoursesDetails;