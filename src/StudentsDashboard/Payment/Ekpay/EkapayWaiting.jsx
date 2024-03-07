import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EkapayWaiting = () => {

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
                navigate(`/success/${res.paymentID}`)
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



    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='d-flex justify-content-center'>

                    Payment Success <br />
                    transId is = {transId}
                </div>
            )}
        </div>
    );
};

export default EkapayWaiting;