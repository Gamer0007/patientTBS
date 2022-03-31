import Image from "next/image"
import SignInForm from "../components/organisms/SignInForm"
import Link from "next/link"
export default function SignIn() {
    return (
        <section className="sign-in mx-auto">
        <div className="row  ">
            <div className="col-xxl-5 col-lg-6  my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
                <form action="">
                    <div className="container mx-auto">
                        <div className="pb-50">
                            <Link href="/"> 
                            <a className="navbar-brand" >
                                <Image src = "/icon/TBS5LOGO.png" width={160} height={160} alt="logo"/>
                            </a>
                            </Link>
                         
                        </div>
                    <SignInForm />
                    </div>
                </form>
            </div>
            <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
                <img src="/icon/fotoluar.png" width="402" height="291.21" className="img-fluid pb-50" alt=""/>
                <h2 className="text-4xl fw-bold text-white mb-30">Tukad Banyusari 5 <br/>
                    Physiotherapy & Massage.</h2>
                <p className="text-white m-0">We provide digital-based registration and consultation services 
                <br/>to improve patient health services<br/>
                </p>
            </div>
        </div>
    </section>

    )
}
