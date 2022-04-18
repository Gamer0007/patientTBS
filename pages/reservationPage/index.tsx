import Footer from "../../components/organisms/Footer";
import ReservationDetail from "../../components/organisms/ReservationDetail";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";

export default function priceDetail() {
        const {query, isReady} = useRouter();
    
       
    
        useEffect(() => {
            if(isReady){
                console.log('Router is available', query.id);
                // getVoucherDetailAPI(query.id);
            } else{
                console.log('Router is not available');
            }
        }, [isReady]);

    return (
        <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="row">
                <ReservationDetail />
 
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}
