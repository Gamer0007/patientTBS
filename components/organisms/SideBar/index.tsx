import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings' | 'Log Out';
  }
export default function SideBar(props:SideBarProps) {
    const {activeMenu} = props;
    return ( 
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
            <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} href="/member" /> 
                    <MenuItem title="Transactions" icon="ic-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" /> 
                    <MenuItem title="Recommendation" icon="ic-menu-messages" href="/member"/> 
                    <MenuItem title="Treatment History" icon="ic-menu-card" href="/member"/> 
                    <MenuItem title="Booking" icon="ic-menu-rewards" href="/member"/> 
                    <MenuItem title="Settings" icon="ic-menu-settings" active={activeMenu === 'settings'} href="/member/edit-profile" /> 
                    <MenuItem title="Log Out" icon="ic-menu-logout" active={activeMenu === 'Log Out'} href="/sign-in"/> 
                    {/* <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member"/>
                    <MenuItem title="Transactions" icon="icon-menu-transaction" active={activeMenu === 'transactions'} href="/member/transaction"/>
                    <MenuItem title="Messages" icon="icon-menu-messages" href="/member"/>
                    <MenuItem title="Card" icon="icon-menu-card" href="/member"/>
                    <MenuItem title="Rewards" icon="icon-menu-rewards" href="/member"/>
                    <MenuItem title="Setting" icon="icon-menu-settings" active={activeMenu === 'settings'} href="/member/editProfile"/>
                    <MenuItem title="Log Out" icon="icon-menu-logout" href="/signin"/> */}
                </div>
            <Footer />
            </div>
        </section>
    )
}
