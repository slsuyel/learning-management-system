import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { callApi } from '../../utilities/functions';

const Waiting = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const searchParams = new URLSearchParams(location.search);
    const transId = searchParams.get('transId');
    console.log(transId);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await callApi('Post', "/api/re/call/ekpay/ipn", { trnx_id: transId });
                console.log(res);
                // if (res.transactionStatus == 'Completed') {
                //     navigate(`/success/${res.paymentID}`)
                // }
                // else {
                //     navigate('/')
                // }
                setLoading(false);

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [transId]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await callApi('Post', "/api/check/payment", { paymentID: paymentID });
    //             if (res.transactionStatus == 'Completed') {
    //                 navigate(`/success/${res.paymentID}`)
    //             }
    //             else {
    //                 navigate('/')
    //             }
    //             setLoading(false);

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [paymentID]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='d-flex justify-content-center'>

                    Waiting-------------{transId}
                </div>
            )}
        </div>
    );
};

export default Waiting;