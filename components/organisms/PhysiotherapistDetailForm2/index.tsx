

export default function PhysiotherapistDetailForm2() {
    return (
        <form action="./checkout.html" method="POST">
        <div className="pt-md-50 pt-30">
            <div className="">
                <label for="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Information</label>
                {/* <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                    aria-describedby="verifyID" placeholder="Enter your ID"/> */}
                    <p className="mt-10 mb-20 text-lg color-palette-1">We provide digital-based registration and consultation services to <br
                        className="d-md-block d-none"/> improve patient health services and in order to do so, my name is <br
                        className="d-md-block d-none"/> I Putu Gede Arya Ramadika Utama and i will be the one who is <br
                        className="d-md-block d-none"/> to be your doctor in curing mobility related problem that bla.
                </p>
            </div>
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
            <a href="./" type="submit"
                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Back to Homepage</a>
        </div>
    </form>
    )
}
