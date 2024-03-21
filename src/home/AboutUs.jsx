import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in-down " className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="https://www.bootdey.com/image/241x362/FFB6C1/000000" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mt-4 pt-2 text-right">
                                        <a href="#" className="btn btn-info">Read More <i className="mdi mdi-chevron-right" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="https://www.bootdey.com/image/337x450/87CEFA/000000" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="https://www.bootdey.com/image/600x401/FF7F50/000000" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                    <div className="section-title ml-lg-5">
                        <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
                        <h4 className="title mb-4">
                            Our mission is to <br />
                            make your life easier.
                        </h4>
                        <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>
                        <div className="row">
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-play h4 mb-0 text-custom" />
                                    <h6 className="ml-3 mb-0"><a href="javascript:void(0)" className="text-dark">Responsive</a></h6>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-file-download h4 mb-0 text-custom" />
                                    <h6 className="ml-3 mb-0"><a href="javascript:void(0)" className="text-dark">Free Download</a></h6>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-user h4 mb-0 text-custom" />
                                    <h6 className="ml-3 mb-0"><a href="javascript:void(0)" className="text-dark">Support</a></h6>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-image h4 mb-0 text-custom" />
                                    <h6 className="ml-3 mb-0"><a href="javascript:void(0)" className="text-dark">Development</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default AboutUs;