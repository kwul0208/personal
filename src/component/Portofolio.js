import React, { useEffect, useState } from 'react';
import './Portofolio.css';

// img
import caffeShop from '../img/caffeShopn.jpg';
import company from '../img/companyn.jpg';
import mygudang from '../img/mygudangn.jpg';
import eOsis from '../img/eOsis.jpg';
import portofolio from '../img/portofolio.jpg';

function Portofolio() {
    return (
        <>
            <div className='profile scrollbar'>
                <h3 className='title-page'>MY<span className='title_bold'>PORTOFOLIO</span></h3>
                <hr className='hr_title_page'></hr>
                <div className='container container-port'>
                    <div className='x'>
                        <img src={caffeShop} className='img-port' />
                        <div className='overlay '>
                            <h5 className='title-img-port'>Ngopi Square Jatra</h5>
                            <p className='desc-img-port' >Caffe Shop Profile</p>
                            <p className='desc-img-port mt-5' >( react.js )</p>
                        </div>
                    </div>
                    <div className='x'>
                        <img src={company} className='img-port' />
                        <div className='overlay '>
                            <h5 className='title-img-port'>BuyHost</h5>
                            <p className='desc-img-port' >Company Profile</p>
                            <p className='desc-img-port mt-5' >( react.js )</p>

                        </div>
                    </div>
                    <div className='x'>
                        <img src={mygudang} className='img-port' />
                        <div className='overlay '>
                            <h5 className='title-img-port'>My Gudang</h5>
                            <p className='desc-img-port' >Manage Package</p>
                            <p className='desc-img-port mt-5' >( Codeigniter 4 )</p>

                        </div>
                    </div>
                </div>
                <div className='container container-port'>
                    <div className='x'>
                        <img src={eOsis} className='img-port' />
                        <div className='overlay '>
                            <h5 className='title-img-port'>E-Osis</h5>
                            <p className='desc-img-port' >Manage Member Osis</p>
                            <p className='desc-img-port mt-5' >( Codeigniter 3 )</p>

                        </div>
                    </div>
                    <div className='x'>
                        <img src={portofolio} className='img-port' />
                        <div className='overlay '>
                            <h5 className='title-img-port'>Personal Profile</h5>
                            <p className='desc-img-port mt-5' >( react.js )</p>
                        </div>
                    </div>
                </div>
                <div className='container myskill'>
                    <h3 className='title-page'>MY<span className='title_bold'>SKILL</span></h3>
                    <hr className='hr_title_page'></hr>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>HTML</p>
                            <p className='present-skill'>2+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill html'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>CSS</p>
                            <p className='present-skill'>2+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill css'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>Javascript</p>
                            <p className='present-skill'>2+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill js'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>Jquery</p>
                            <p className='present-skill'>2+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill jq'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>React</p>
                            <p className='present-skill'>1+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill react'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>Codeigniter</p>
                            <p className='present-skill'>1+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill ci'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>Mysql</p>
                            <p className='present-skill'>1+ year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill lv'></div>
                        </div>
                    </div>
                    <div className='content-skill'>
                        <div className='d-flex justify-content-between'>
                            <p className='name-skill'>Laravel</p>
                            <p className='present-skill'>-1 year</p>
                        </div>
                        <div className='skill-bar'>
                            <div className='skill lv'></div>
                        </div>
                    </div>
                </div>

                <div className='container myservices'>
                    <h3 className='title-page'>MY<span className='title_bold'>SERVICES</span></h3>
                    <hr className='hr_title_page'></hr>

                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <p className=' desc-sc text-center'> I always give the best effort for each projects I did. I give a solution with my creative app</p>
                        </div>
                    </div>

                    <div className='row justify-content-center '>
                        <div className='col-md-5 text-center'>
                            <div className='place-icon-services'>
                                <i class="far fa-lightbulb icon-service"></i>
                            </div>
                            <p className='text-name mt-2'>Inovative Ideas </p>
                            <hr className='hr-myskill' />
                            <p className='desc-sc mt-2'>I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications</p>
                        </div>
                        <div className='col-md-5 text-center'>
                            <div className='place-icon-services'>
                                <i class="fas fa-code icon-service"></i>
                            </div>
                            <p className='text-name mt-2'>Clean Code </p>
                            <hr className='hr-myskill' />
                            <p className='desc-sc mt-2'>I always give a clean code to the consumer so the application is easy to understand and easy to develop.</p>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-md-5 text-center'>
                            <div className='place-icon-services'>
                                <i class="far fa-money-bill-alt icon-service"></i>
                            </div>
                            <p className='text-name mt-2'>Best Price</p>
                            <hr className='hr-myskill' />
                            <p className='desc-sc mt-2'>Tell your great app to me. Adjust your budget. And "BOOM", your app ready to published.</p>
                        </div>
                        <div className='col-md-5 text-center'>
                            <div className='place-icon-services'>
                                <i class="far fa-gem icon-service"></i>
                            </div>
                            <p className='text-name mt-2'>Best Result </p>
                            <hr className='hr-myskill' />
                            <p className='desc-sc mt-2'>I will give you the best applications for your best ideas.</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Portofolio;