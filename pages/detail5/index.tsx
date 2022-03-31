import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import { getDetailVoucher } from "../../services/player";
// import TopUpItem1 from "../../components/organisms/TopUpItem/index2";
import PhysiotherapistDetailItem5 from "../../components/organisms/PhysiotherapistDetailItem5";
import PhysiotherapistDetailForm5 from "../../components/organisms/PhysiotherapistDetailForm5";

export default function Detail5() {
        const {query, isReady} = useRouter();
    
        // const {dataItem, setDataItem} = useState({
        //     name: '',
        //     thumbnail: '',
        //     category: {
        //         name: '',
        //     },
        // });
    
        // const getVoucherDetailAPI= useCallback(async (id) => {
        //     const data = await getDetailVoucher(id);
        //     console.log('data: ', data);
        //     // setDataItem(data.detail);
        // }, []);
    
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
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Physiotherapist</h2>
                <p className="text-lg color-palette-1 mb-0">Detail</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                   <PhysiotherapistDetailItem5 type='mobile'/>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                    <PhysiotherapistDetailItem5  type='abhi'/>
                    <hr/>
                <PhysiotherapistDetailForm5 />
 
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>


    )
}
