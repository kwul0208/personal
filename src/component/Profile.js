import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {


    return (
        <div className='profile scrollbar'>
            <h3 className='title-page'>ABOUT<span className='title_bold'>ME</span></h3>
            <hr className='hr_title_page'></hr>
            <div className='container w-75'>
                <div className='row text-center'>
                    <div className='col-5 text-start'>
                        <p className='text-name'> <i class="far fa-user"></i> <span className='ms-1'>Name</span></p>
                        <p className='text-name'> <i class="far fa-calendar-alt"></i> <span className='ms-1'>Birth</span></p>
                        <p className='text-name'> <i class="fas fa-mobile-alt"></i> <span className='ms-2'>Phone</span></p>
                        <p className='text-name'> <i class="far fa-envelope"></i> <span className='ms-1'> Email </span></p>
                        <p className='text-name'> <i class="fas fa-globe-americas"></i> <span className='ms-1'> Web </span></p>
                        <p className='text-name'> <i class="fas fa-map-marker-alt"></i> <span className='ms-2'>Address </span></p>
                    </div>
                    <div className='col-7'>
                        <p className='text-end text-ahmad'>Ahmad Wahyu Awaludin</p>
                        <p className='text-end text-ahmad'>April 22th 2002</p>
                        <p className='text-end text-ahmad'>+62 83839178650</p>
                        <p className='text-end text-ahmad'>kwul0208@gmail.com</p>
                        <p className='text-end text-ahmad'>AhmadWahyu.id</p>
                        <p className='text-end text-ahmad'>Tangerang Indonesia</p>
                    </div>
                </div>
            </div>
            <h3 className='title-page'>MY<span className='title_bold'>EDUCATIOIN</span></h3>
            <hr className='hr_title_page'></hr>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-4 col-edu'>
                        <p className='text-end text-name'><i class="fas fa-circle toga"> <i class="fas fa-graduation-cap fas-link"></i></i></p>
                    </div>
                    <div className='col-8'>
                        <div className='school text-start s1'>
                            <h5 className='text-name'> <sapn class='s-uji'>2019 - 2020</sapn> <i class="fas fa-circle dot"></i> Senior High School / SMA Ma'arif NU Jatinegara</h5>
                            <p className='desc-sc'>Science major. Start learn a programming language Javascript and PHP. Build first website. Starting a computer programming competition on high-school level.</p>
                        </div>
                        <div className='school text-start'>
                            <h5 className='text-name'><sapn class='s-uji'>2019 - 2020</sapn> <i class="fas fa-circle dot"></i> Junior High School / SMP Ma'arif NU Jatinegara</h5>
                            <p className='desc-sc '>Started liked in computer. Almost every day stayed in Warnet
                            </p>
                        </div>
                        <div className='school text-start'>
                            <h5 className='text-name'> <sapn class='s-uji'>2019 - 2020</sapn> <i class="fas fa-circle dot"></i> Elementary School / SDN Pondok Bahar 06</h5>
                            <p className='desc-sc '>SDN Pondok Bahar 6 is the first formal school which I attended. Many achievements were obtained and many experience gained.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='card-hobby'>
                <h3 className='title-page title-hb'>MY<span className='title_bold'>HOBBIES</span></h3>
                <hr className='hr_title_page'></hr>
                <p className='desc-welcome text-center w-75'>Codding is my daily routine. Play the Game to remove stress. Listen the music to relax my mind. Playing Football to connect with other and my friends </p>
                <ul className='ul-hobby'>
                    <li className='li-hobby'>
                        <i class=" fas fa-code icon-hobby"></i> <br />
                        <h5 className='text-name mb-4'> Codding </h5>
                    </li>
                    <li className='li-hobby'>
                        <i class=" fas fa-gamepad icon-hobby"></i> <br />
                        <h5 className='text-name mb-4'> Gamming </h5>
                    </li>
                    <li className='li-hobby'>
                        <i class=" fas fa-music icon-hobby"></i> <br />
                        <h5 className='text-name mb-4'> Music </h5>
                    </li>
                    <li className='li-hobby'>
                        <i class=" fas fa-futbol icon-hobby"></i> <br />
                        <h5 className='text-name mb-4'> Football </h5>
                    </li>
                </ul>



            </div>
        </div >

    )
}

export default Profile;