import React from "react";
import MapWrapper from "../maps/MapWrapper";
import './Contact.css';

export default function App() {
    return (
        <div className="profile scrollbar">
            <div className="container">
                <h3 className='title-page'>MY<span className='title_bold'>CONTACT</span></h3>
                <hr className='hr_title_page'></hr>
                <MapWrapper />
                <div style={{ height: "300px" }} id="map"></div>
                <h3 className='title-page'><span className='title_bold'>TANGERANG, INDONESIA</span></h3>
                <p className="text-ahmad text-center fw-lighter">gang Damai 2, kp. Bulak Santri, RT04/05, Pondok Pucung, Kec. Karang Tengah</p>
                <h5 className='kode-pos text-center'><span className='title_bold'>15158</span></h5>
                <p className="text-ahmad text-center mt-3 fw-lighter">+62 83839178650 | kwul0208@gmail.com</p>


            </div>
        </div >
    );
}

