import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { callApi } from '../../utilities/functions';

const Waiting = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const paymentID = queryParams.get('paymentID');
    console.log(paymentID);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await callApi('Post', "/api/check/payment", { paymentID: paymentID });
                if (res.transactionStatus == 'Completed') {
                    navigate(`/success/${res.paymentID}`)
                }
                else {
                    navigate('/')
                }
                setLoading(false);

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [paymentID]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {/* {
    "paymentID": "TR0011LZf0sKA1709709391963",
    "trxID": "BC690GXCDF",
    "transactionStatus": "Completed",
    "amount": "3654",
    "currency": "BDT",
    "intent": "sale",
    "paymentExecuteTime": "2024-03-06T13:17:26:824 GMT+0600",
    "merchantInvoiceNumber": "Inv-1709709391",
    "payerReference": "01700000000",
    "customerMsisdn": "01619777283",
    "statusCode": "0000",
    "statusMessage": "Successful"
} */}
                    Waiting
                </div>
            )}
        </div>
    );
};

export default Waiting;