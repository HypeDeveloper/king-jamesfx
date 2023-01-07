import { Button } from "./components/Form";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

import act1 from '../assets/images/icon2.png'
import act2 from '../assets/images/icon3.png'
import Bullish from '../assets/images/bullimage.png'
import phone from '../assets/images/wallet-interest.png'
import legal from '../assets/images/cert04.png'
import mg2 from '../assets/images/mg09.jpg'
import ax2 from '../assets/images/ax2.png'
import pin1 from '../assets/images/pin1.jpg'
import pin2 from '../assets/images/pin2.jpg'
import pin3 from '../assets/images/pin3.jpg'
import grr from '../assets/images/sh6.png'

export function Home() {
    const { user } = useAuth()
    const nav = useNavigate()
    useEffect(() => {
        if (user) {
            console.log(user);
            nav('/dashboard')
        }
    }, [user])
    return(
        <>
        
            <div className="Hero mk">
                <div className="Home-Top">
                    <div className="Home-Top-wrap">
                        <h1 className="Title Home-Header">
                            The Best Growing Blockchain  Investment Platform
                        </h1>
                        <p className="Content Home-subText">
                            The best in blockchain investments
                            making it fast and easy to trade
                        </p>
                        <div className="Home-Wrap-other">
                            <a href="signUp"><Button>Get Started</Button></a>
                            <p>Get to Know Us</p>
                        </div>
                    </div>
                </div>
                {/* <img className={'Guaranteed'} src={grr}/> */}
            </div>

            {/* Others */}

            {/* <div className="CryptoLine">

            </div> */}


            <div className="infoUs">
                <h1 className="Title info-title">
                    What Are We Known For
                </h1>
                <div className="infoUs-wrap">
                    <div className="infoLeft-wrap">
                        <div className="info-box">
                            <div className="infoWrap-Icon">
                                <img src={act1}/>
                            </div>
                            <div className="infoWrap-Text">
                                <h2 className="Subtext Info-wrap-text-head">
                                    Industry best practices
                                </h2>
                                <p className="Content infoUs-subText">
                                    KingJamesFx supports a variety of the most popular digital currencies.
                                </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="infoWrap-Icon">
                                <img src={act2}/>
                            </div>
                            <div className="infoWrap-Text">
                                <h2 className="Subtext Info-wrap-text-head">
                                    Amazing Support
                                </h2>
                                <p className="Content infoUs-subText">
                                    Powered by an amazing customer service
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="infoRight-wrap">
                        <div className="infoRight-box">
                            <img src={mg2} alt="" /> 
                        </div>
                    </div>
                </div>
                <div className="moreInfo">
                    <div className="bullishImg">
                        <img src={Bullish} alt="" />
                    </div>
                    <div className="moreInfo-Texts">
                        <h1 className="Title morInfo-title">
                            Focused, Active Management of High-Growth Digital Assets.
                        </h1>
                        <p className="Content moreInfo-Content">
                            King James Fx is a registered investment platform providing digital asset investment management services to individuals. We provide a dynamic investment solution to clients in need of a self-operating portfolio, as well as a smart fund with flexible time and investment amount.
                        </p>
                    </div>
                </div>
            </div>

            <div className="features">
                <h1 className="Title fet-title">
                    Our Core Features
                </h1>
                <p className="Content fet-title">
                    We give the best in the following areas
                </p>
                <div className="fet-stuff">
                    <div className="fet-stuffbox">
                        <div className="fet-wrapStuffbox">
                            <h2 className="Subtext fet-bText">
                                Security
                            </h2>
                            <p className="Content fet-bText">
                                You can seat back and be rest
                                assured that your investments are save
                            </p>
                        </div>
                    </div>
                    <div className="fet-stuffbox">
                        <div className="fet-wrapStuffbox">
                            <h2 className="Subtext fet-bText">
                                Transperency
                            </h2>
                            <p className="Content fet-bText">
                                You can seat back and be rest
                                assured that your investments are save
                            </p>
                        </div>
                    </div>
                    <div className="fet-stuffbox">
                        <div className="fet-wrapStuffbox">
                            <h2 className="Subtext fet-bText">
                                Protection
                            </h2>
                            <p className="Content fet-bText">
                                You can seat back and be rest
                                assured that your investments are save
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="some-OtherSTF">
                <h2 className="Subtitle">
                    Also we don't just Secure and Increase Performance
                </h2>
                <p className="Content some-text">
                    we are regulated by the MiFDII Investment firm, PSD2 payment institution, and trusted by many happy users
                </p>
            </div>


            <div className="justInfo">
                <div className="justInfo-wrap">
                    <div className="juustInfo-Text">
                        <h1 className="Title justInfo-title">
                            Investment Platform with Purpose
                        </h1>
                        <p className="Content justInfo-sub">
                            We make sure our website is easy,fast & securel so your investment is always available to accessed and profit Guaranteed.
                        </p>
                        <a href="#plan"><Button>See Our Plans</Button></a>
                    </div>
                    <div className="juustInfo-Img">
                        <div className="justInfo-wrapImg">
                            <img src={phone}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comt">
                <div className="comtWrap">
                    <h2 className="Subtitle">
                        Commitment To Security
                    </h2>
                    <p className="Content cont-sub">
                        We Strives To Be Worthy Of Our Client's Trust By Providing Them With Services Which Are Economically Beneficial To Them And To Create Awareness Regarding Reliable And Highly Profitable Investment Platform Among Our Clients Around The Globe. All You Need To Do Is Sit Back And Enjoy How Your Profit Grows On A Daily.
                    </p>
                </div>
                <div className="comtImg">
                    <img src={legal}/>
                </div>
            </div>
            

            <div className="testi">
                <h2 className="Title testiTitle">
                    Our Amazing Testimonials
                </h2>
                <p className="Content testiSu">
                    What keeps us going is the smiles we put on the faces of our customers 
                </p>
                <div className="testi-wrap">
                    <div className="testiBox">
                        <div className="testiBoxWrap">
                            <div className="testiImg">
                                <img src={pin1}/>
                            </div>
                            <h2 className="Subtitle testiTit">Thomas Doe</h2>
                            <p className="Content testiSub">The best exchange that i have used so far</p>
                        </div>
                    </div>

                    <div className="testiBox">
                        <div className="testiBoxWrap">
                            <div className="testiImg">
                                <img src={pin2}/>
                                
                            </div>
                            <h2 className="Subtitle testiTit">Thomas Doe</h2>
                            <p className="Content testiSub">The best exchange that i have used so far</p>
                        </div>
                    </div>

                    <div className="testiBox">
                        <div className="testiBoxWrap">
                            <div className="testiImg">
                                <img src={pin3}/>

                            </div>
                            <h2 className="Subtitle testiTit">Thomas Doe</h2>
                            <p className="Content testiSub">The best exchange that i have used so far</p>
                        </div>
                    </div>
                    <div className="testiBox">
                        <div className="testiBoxWrap">
                            <div className="testiImg">
                                <img src={pin3} />

                            </div>
                            <h2 className="Subtitle testiTit">Thomas Doe</h2>
                            <p className="Content testiSub">The best exchange that i have used so far</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="plan" id="plan">
                <div className="plans">
                    <div className="fx">
                        <div className="planBox">
                            <div className="planBox-wrap">
                                <div className="planBox-wrapIco">
                                    <div className="planBox-icon">
                                <img src={ax2}/>

                                    </div>
                                    <p className="Content">10%</p>
                                </div>
                                <div className="planRange">
                                    <h2 className="Subtitle">Stater</h2>

                                    <p className="Content">
                                        MIN : $100 <br />
                                        Max : $499
                                    </p>
                                </div>
                                <a href="/SignIn"><Button>Select</Button></a>
                            </div>
                        </div>
                        <div className="planBox">
                            <div className="planBox-wrap">
                                <div className="planBox-wrapIco">
                                    <div className="planBox-icon">
                                <img src={ax2}/>

                                    </div>
                                    <p className="Content">20%</p>
                                </div>
                                <div className="planRange">
                                    <h2 className="Subtitle">Gold</h2>

                                    <p className="Content">
                                        MIN : $500 <br />
                                        Max : $4999
                                    </p>
                                </div>
                                <a href="/SignIn"><Button>Select</Button></a>

                            </div>
                        </div>
                    </div>
                    <div className="fx">
                        <div className="planBox">
                            <div className="planBox-wrap">
                                <div className="planBox-wrapIco">
                                    <div className="planBox-icon">
                                <img src={ax2}/>

                                    </div>
                                    <p className="Content">30%</p>
                                </div>
                                <div className="planRange">
                                    <h2 className="Subtitle">Diamond</h2>

                                    <p className="Content">
                                        MIN : $5000 <br />
                                        Max : $19999
                                    </p>
                                </div>
                                <a href="/SignIn"><Button>Select</Button></a>

                            </div>
                        </div>
                        <div className="planBox">
                            <div className="planBox-wrap">
                                <div className="planBox-wrapIco">
                                    <div className="planBox-icon">
                                <img src={ax2}/>

                                    </div>
                                    <p className="Content">40%</p>
                                </div>
                                <div className="planRange">
                                    <h2 className="Subtitle">Master</h2>

                                    <p className="Content">
                                        MIN : $5000 <br />
                                        Max : $19999
                                    </p>
                                </div>
                                <a href="/SignIn"><Button>Select</Button></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="planText">
                    <h1 className="Title planTi">
                        Our Amazing
                        Plans
                    </h1>
                    <p className="Content planSu">
                        Plans that suits all levels, get it
                        while its till hot
                    </p>
                </div>
            </div>

            <div className="Last">
                <h1 className="Title">
                    What are you waiting for
                    join others who are earning massive on our platform
                </h1>
                <div className="">
                    <a href="/SignIn"><Button>JoinUs</Button></a>

                </div>
            </div>

            <Footer/>
        </>
    )
}

import logoLight from '../assets/logo/logoLight.svg'
import { useEffect } from "react";

export function Footer() {
    return(
        <div className="footer">
            <div className="icon">
                <img src={logoLight} alt="" />
            </div>
            <div className="footerInfo">
                <h2 className="Subtitle">
                    Contact Us
                </h2>
                <p className="Content">
                    Address: Carmelite House, 50 Victoria <br/> Embankment, Temple, London EC4Y 0DZ, United <br/> Kingdom
                    <br/>Email: Kingjamesfx63@gmail.com
                </p>
                <br/>
                
            </div>
        </div>
    )
}