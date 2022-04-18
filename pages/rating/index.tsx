import React, { useEffect, useState } from "react";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import App from "../../components/organisms/RatingSystem";
import { useRouter } from "next/router";

export default function rating() {
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
      <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Rating</h2>
      </div>
      <div className="row">
          <App />

      </div>
  </div>
</section>
<Footer/>
</>
)
}