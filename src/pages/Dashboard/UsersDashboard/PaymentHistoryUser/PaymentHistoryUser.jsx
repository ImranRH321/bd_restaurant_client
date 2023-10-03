
// PaymentHistoryUser 
import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment";
import SectionHeadingTitle from "../../../Shared/SectionHeadingTitle/SectionHeadingTitle";
import PageRouteTitle from "../../../Shared/PageRouteTitle/PageRouteTitle";

const PaymentHistoryUser = () => {
    const { currentUser } = useAuth();
    // load
    const [historyData, setHistoryData] = useState([]);
    useEffect(() => {
        if (currentUser && currentUser?.email) {
            fetch(`https://bd-restaurant-server.vercel.app/payment/history/${currentUser.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setHistoryData(data);
                    console.log("history page  dataF", data);
                });
        }
    }, [currentUser]);
    //


    // Sort the payment data in descending order based on the date
    const historySortData = [...historyData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );


    return (
        <div className="w-full h-screen">
            <PageRouteTitle pageTitle={'payment history'}></PageRouteTitle>
            <SectionHeadingTitle sectionTitle={''} sectionHeading={'payment history'} ></SectionHeadingTitle>
            <h1>Payment LSD {historyData?.length} faka || LSX {historySortData?.length}</h1>
            <div className="w-full mt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="border border-3 shadow-sm">
                                <th className="border">NO.</th>
                                <th className="border">Email</th>
                                <th className="border">Category</th>
                                <th className="border">price</th>
                                <th className="border">Payment Date</th>
                                <th className="border">TransactionId</th>

                            </tr>
                        </thead>
                        <tbody>
                            {historySortData.map((c, index) => (
                                <tr className="border  shadow" key={c._id}>
                                    <th className="border w-[5px] fw-semibold">{index + 1}</th>
                                    <td className="border capitalize">{c.emailUser}</td>
                                    <td className="border capitalize">Food Order</td>
                                    <td className="border capitalize "> ${c.price}</td>

                                    <td className="border capitalize">{moment().format(c.data)}</td>
                                    <td className="border capitalize text-primary ">{c.transactionId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistoryUser;

// ;