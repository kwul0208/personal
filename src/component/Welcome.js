import React from "react";
import './Welcome.css';
import pdf from '../img/02TPLE012-AHMAD WAHYU AWALUDIN-201011400908-UTS.pdf';

function Welcome() {
    return (
        <>
            <div className='welcome'>
                <h3 className='hallo'>Hallo I'm</h3>
                <h1 className='nama'>AHMAD WAHYU AWALUDIN</h1>
                <h4 className='position'>FULLSTACK WEB DEVELOPER</h4>
                <hr className='hr-welcome' />
                <p className='desc-welcome'>A professional fullstack developer from Tangerang, Indonesia. I always give the best effort for each projects I did. I give a solution with my creative app.</p>
                <p className='number'> <a href="https://web.whatsapp.com/send?phone=6283839178650" className="text-decoration-none" style={{ color: 'teal' }}>+62 83839178650</a> </p>
                <p className='email'> <a href="mailto:kwul0208@gmail.com" className="text-decoration-none" style={{ color: 'teal' }}>kwul0208@gmail.com</a></p>
                <a href={pdf} download className='btn btn-outline mt-3'>Download CV</a>
            </div>

        </>
    )
}

export default Welcome;