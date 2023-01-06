import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { useEffect, useState } from "react";
import logoLight from '../assets/logo/logoLight.svg'
import { authService } from "../auth/authService";


export function Dashboard() {
    const { user } = useAuth()
    const nav = useNavigate()
    useEffect(() => {
        // if (!user) {
        //     console.log(user);
        //     nav('/signIn')
        // }
    }, [user])
    return(
        <div className="dashboard">
            <div className="topDash">
                <DashbordNav/>
            </div>
            <div className="dbottom">
                <div className="sided">
                    <SideNav/>
                </div>
                <div className="othersdout">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

function Dash(){
    return (
        <div className="dashboard">
            <div className="topDash">
                <DashbordNav />
            </div>
            <div className="dbottom">
                <div className="sided">
                    <SideNav />
                </div>
                <div className="othersdout">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

function SideNav() {
    const Nav = useNavigate()
    function logoutU(){
        authService.logout()
        Nav('/signin')
    }
    return (
        <div className="sNanv">
            <div className="sidTop">

                <a href="/dashboard">
                    <div className="navsDD ddactive">
                        <div className="ddnavBox"></div>
                        <p>Dashboard</p>
                    </div>
                </a>
        <br/>
                <a href="/dashboard/package">
                    <div className="navsDD">
                        <div className="ddnavBox"></div>
                        <p>Packages</p>
                    </div>
                </a>
        <br/>

                <a href="/dashboard/transfers">
                    <div className="navsDD">
                        <div className="ddnavBox"></div>
                        <p>Transfers</p>
                    </div>
                </a>
                <br />

                
            </div>
            <div className="sidbottom">
                <a href="" onClick={logoutU}>
                    <div className="navsDD">
                        <div className="ddnavBox"></div>
                        <p>Logout</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
function DashbordNav() {
    return (
        <div className="dnav">
            <div className="dnav-wrap">
                <img src={logoLight} alt="" />
                <p className="Content">
                    Dashboard
                </p>
                <div className="userInfo">
                    <div className="userdbox">

                    </div>
                </div>
            </div>
        </div>
    )
}


export function DashPackage() {
    return (
        <h1 className="Title">
            CommingSoon : Package
        </h1>
    )
}
export function DashTrans() {
    return (
        <h1 className="Title">
            CommingSoon : Trans
        </h1>
    )
}
export function DashSupport() {
    return (
        <h1 className="Title">
            CommingSoon :  Support
        </h1>
    )
}

export function Index() {
    const {  user } = useAuth()
    const [data, setData] = useState({
        name: '',
        amount: '',
        inviteCount: '',

    })
    useEffect(() => {
        GetUserDB()
       
    }, [ user])
    
    async function GetUserDB() {
        let userDD 
        if (!user) return
        await authService.getMe(user.token)
            .then((d) => {
                setData(d.user)
            })
            .catch((err) => {
                // console.log(err);
                // alert(err.response.data.message);
            });
        return (userDD)
    }


    return (
        <div className="dindex">
            <div className="Sidedd">
                <p className="Content">
                    Welcom back,
                </p>
                <h1 className="Title">
                    {data.name}
                </h1>
                <div className="AmountBox">
                    <div className="ddBox">
                        <p className="Content">My Balance</p>
                        <h1 className="Title">
                            ${data.amount}<span className="pin">USD</span>
                        </h1>
                        <div className="buttonsDD">
                            <a href="/dashboard/transfers"><button>Deposit An Amonunt</button></a>
                            <a href="/dashboard/transfers"><button className="bin">Withdraw</button></a>
                            
                        </div>
                    </div>
                    <div className="othBB">
                        <p className="Content">Total Referals</p>
                        <h1 className="Title">
                            0
                        </h1>
                        <br/>
                        <button>My Ref Code</button>
                    </div>
                    <div className="othBB bon">
                        <p className="Content">Active plan</p>
                        <h1 className="Title bon">
                            Starter Pack
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}