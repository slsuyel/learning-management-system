import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import Invoice from './Invoice';

const PaymentResult = () => {
    const { paymentID } = useParams();
    const [loading, setLoading] = useState(true);
    const [invoiceData, setInvoiceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!paymentID) {
                console.error('Error: paymentID is not available.');
                return;
            }

            try {
                const res = await callApi('POST', "/api/checkout/payment/status", { paymentID: paymentID });
                if (res && res.bkash && res.bkash.transactionStatus === 'Completed' && res.bkash.verificationStatus === 'Complete') {
                    console.log(res);
                    setInvoiceData(res);
                    setLoading(false);
                } else {
                    console.log('Error: Payment not completed.');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [paymentID]);



    return (
        // <div style={{ textAlign: 'center', padding: '40px 0' }}>
        //     <div className="card" style={{ background: 'white', padding: '60px', borderRadius: '4px', boxShadow: '0 2px 3px #C8D0D8', display: 'inline-block', margin: '0 auto' }}>
        //         <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
        //             <i className="checkmark" style={{ color: '#9ABC66', fontSize: '100px', lineHeight: '200px', marginLeft: '-15px' }}>✓</i>
        //         </div>
        //         <h1 style={{ color: '#88B04B', fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', fontWeight: '900', fontSize: '40px', marginBottom: '10px' }}>Success</h1>
        //         <p style={{ color: '#404F5E', fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', fontSize: '20px', margin: '0' }}>We received your purchase request;<br /> we'll be in touch shortly!</p>
        //         <p>{paymentID}</p>

        //     </div>
        // </div>

        <Invoice invoiceData={invoiceData} />
    );
};

export default PaymentResult;
