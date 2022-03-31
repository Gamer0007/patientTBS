import Image from "next/image";
import Menu from "./menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";
import priceDetailForm from ""

export default function Navbar() {
    return (
        <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                   <Image src="/icon/TBS5LOGO.png" width={160} height={160} />
                </a>
                <ToggleMenu />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <Menu title ="Home" active href="/"/>
                        <Menu title ="Price Detail" href="/priceDetail"/>
                        <Menu title ="About us" href="#about"/>
                        <Menu title ="Reservation"/>
                        <Menu title ="Staff" href="#fisioterapi"/>
                        {/* <Auth isLogin/> */}
                        <Auth />
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    )
}
