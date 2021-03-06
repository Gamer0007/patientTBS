
import Image from "next/image"
import Illustartion from "./Illustartion"
export default function index() {
    return (
        <section className="header pt-lg-60 pb-50">
    <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
                <p className="text-support text-lg color-palette-2">
                    Hello , Welcome to  
                </p>
                <h1 className="header-title color-palette-1 fw-bold">
                    Tukad Banyusari  <span className="d-sm-inline d-none"> </span><span className="d-sm-none d-inline">
                    </span><span className="underline-blue"> Physiotherapy & Massage </span> <br className="d-sm-block d-none"/> <span
                        className="underline-blue"></span> 
                </h1>
                <p className="mt-30 mb-40 text-lg color-palette-1">We provide digital-based registration and consultation services to <br
                        className="d-md-block d-none"/> improve patient health services
                </p>
                <div className="d-flex flex-lg-row flex-column gap-4">
                    <a className="btn btn-get text-lg text-white rounded-pill" href="#feature" role="button">Get
                        Started</a>
                    <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="#" role="button">Learn
                        More</a>
                </div>
            </div>
            <Illustartion />
        </div>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-40d36a8d-bce4-43a3-bea8-06f8d847652b"></div>
    </div>
</section>
    )
}
