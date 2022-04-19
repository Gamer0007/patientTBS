import { useState } from "react"
import cx from 'classnames';
import { useRouter } from "next/router";

export default function ReservationDetail() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [lementation, setLementation] = useState('');
    const [treatment, setTreatment] = useState('');

    const router = useRouter();
    const className = {
        label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
    };
    const onSubmit = () => {
        const userForm = {
            phoneNumber,
            name, 
            lementation,
            treatment
        }
        localStorage.setItem('user-form', JSON.stringify(userForm));
        router.push('/sign-up-photo');
    }
    return (
        
        <>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Reservation Form</h2>
        </div>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div className="pt-50">
            <label className={className.label}>Full Name</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="name" 
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </div>
        </div>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div className="pt-30">
            <label className={className.label}>Phone Number</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="phoneNumber" 
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            />
        </div>
        </div>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div className="pt-30">
            <label className={className.label}>Lementation</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="password" 
            placeholder="Presenting complaint"
            value={lementation}
            onChange={(event) => setLementation(event.target.value)}
            />
        </div>
        </div>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div className="pt-30">
            <label className={className.label}>Treatment</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="password" 
            placeholder="Presenting complaint"
            value={treatment}
            onChange={(event) => setTreatment(event.target.value)}
            />
        </div>
        </div>
        <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
            <div className="button-group d-flex flex-column mx-auto pt-50" >
                {/* <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
             onClick={onSubmit}>Continue</button> */}
            <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" href="/sign-in"
                    role="button">Reservation</a>
                    </div>
        </div>
        
    
    </>
    )
}
