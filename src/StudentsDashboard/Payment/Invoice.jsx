// import React, { useState } from 'react';
// import '../../assets/css/style.css'
// const Invoice = ({ invoiceData }) => {
//     const [qr, setQr] = useState(null)

//     if (!invoiceData) {
//         return null
//     }



//     return (
//         <div className="">
//             <div className="row">
//                 <div className="text-center">

//                     <h2>Invoice for purchase {invoiceData.payment.trxid}</h2>
//                 </div>
//                 <hr />
//                 <div className="row mb-5">
//                     <div className="col-md-6">
//                         <div>
//                             <strong>Name : {invoiceData.payment.student.founder_name}</strong>
//                             <br />
//                             Email : {invoiceData.payment.student.founder_email}
//                             <br />
//                             Phone : {invoiceData.payment.student.founder_phone}
//                         </div>
//                     </div>
//                     <div className="col-md-6 ">
//                         <div>
//                             <strong>Method : </strong> {invoiceData.bkash ? "Bkash" : ''}
//                             <br />
//                             <strong> Number:</strong> 017**********
//                             <br />
//                             <strong>Time:</strong> {new Date(invoiceData.payment.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' }).replace(",", " at")}
//                         </div>
//                     </div>


//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h3 className="text-center">
//                                 <strong>Order summary</strong>
//                             </h3>
//                         </div>
//                         <div className="panel-body">
//                             <div className="table-responsive">
//                                 <table className="table table-condensed">
//                                     <thead>
//                                         <tr>
//                                             <td>
//                                                 <strong>Course Name</strong>
//                                             </td>
//                                             <td className="text-center">
//                                                 <strong> Price</strong>
//                                             </td>
//                                             <td className="text-center">
//                                                 <strong> Quantity</strong>
//                                             </td>
//                                             <td className="text-right">
//                                                 <strong>Total</strong>
//                                             </td>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>{invoiceData.payment.course.course_name}</td>
//                                             <td className="text-center">{invoiceData.payment.course.price}</td>
//                                             <td className="text-center">1</td>
//                                             <td className="text-center">{invoiceData.payment.course.price}</td>
//                                         </tr>
//                                         <tr>
//                                             <td className="emptyrow" />
//                                             <td className="emptyrow" />
//                                             <td className="emptyrow text-center">
//                                                 <strong></strong>
//                                             </td>
//                                             <td className="emptyrow text-right">-</td>
//                                         </tr>
//                                         <tr>
//                                             <td className="emptyrow">
//                                                 {/* barcode */}
//                                             </td>
//                                             <td className="emptyrow" />
//                                             <td className="emptyrow text-center">
//                                                 <strong>Total</strong>
//                                             </td>
//                                             <td className="emptyrow text-right">{invoiceData.payment.course.price}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Invoice;
import React, { useState, useEffect } from 'react';
import '../../assets/css/style.css';

const Invoice = ({ invoiceData }) => {
    const [qrImageUrl, setQrImageUrl] = useState('');

    useEffect(() => {
        if (invoiceData) {
            const qrText = JSON.stringify(invoiceData.bkash);
            generateQrCode(qrText);
        }
    }, [invoiceData]);

    const generateQrCode = async (text) => {
        try {
            const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`);
            if (response.ok) {
                const qrImageBlob = await response.blob();
                setQrImageUrl(URL.createObjectURL(qrImageBlob));
            } else {
                console.error('Failed to generate QR code');
            }
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    if (!invoiceData) {
        return null;
    }

    return (
        <div className="">
            <div className="row">
                <div className="text-center">
                    <h2>Invoice for purchase {invoiceData.payment.trxid}</h2>
                </div>
                <hr />
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div>
                            <strong>Name : {invoiceData.payment.student.founder_name}</strong>
                            <br />
                            Email : {invoiceData.payment.student.founder_email}
                            <br />
                            Phone : {invoiceData.payment.student.founder_phone}
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div>
                            <strong>Method : </strong> {invoiceData.bkash ? "Bkash" : ''}
                            <br />
                            <strong> Number:</strong> 017**********
                            <br />
                            <strong>Time:</strong> {new Date(invoiceData.payment.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' }).replace(",", " at")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="text-center">
                                <strong>Order summary</strong>
                            </h3>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                        <tr>
                                            <td>
                                                <strong>Course Name</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong> Price</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong> Quantity</strong>
                                            </td>
                                            <td className="text-right">
                                                <strong>Total</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{invoiceData.payment.course.course_name}</td>
                                            <td className="text-center">{invoiceData.payment.course.price}</td>
                                            <td className="text-center">1</td>
                                            <td className="text-center">{invoiceData.payment.course.price}</td>
                                        </tr>
                                        <tr>
                                            <td className="emptyrow" />
                                            <td className="emptyrow" />
                                            <td className="emptyrow text-center">
                                                <strong></strong>
                                            </td>
                                            <td className="emptyrow text-right">-</td>
                                        </tr>
                                        <tr>
                                            <td className="emptyrow">
                                                <img src={qrImageUrl} width={100} alt="QR Code" />
                                            </td>
                                            <td className="emptyrow" />
                                            <td className="emptyrow text-center">
                                                <strong>Total</strong>
                                            </td>
                                            <td className="emptyrow text-right">{invoiceData.payment.course.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
