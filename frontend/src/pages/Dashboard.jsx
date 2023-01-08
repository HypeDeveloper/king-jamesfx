import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { useEffect, useRef, useState } from "react";
import logoLight from '../assets/logo/logoLight.svg'
import { authService } from "../auth/authService";
import { aotherService } from "../auth/otherServices";


export function Dashboard() {
    const nav = useNavigate()
    useEffect(() => {
        if (!authService.getLogedInUser()) {
            nav('/signIn')
            return
        }
    }, [])
    return(
        <>
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
                <MobileButton />
            </div>
        </>
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
                    <div className="navsDD ">
                        <div className="ddnavBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    d="M13 8V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9h-6q-.425 0-.712-.288Q13 8.425 13 8ZM3 12V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v8q0 .425-.287.712Q10.425 13 10 13H4q-.425 0-.712-.288Q3 12.425 3 12Zm10 8v-8q0-.425.288-.713Q13.575 11 14 11h6q.425 0 .712.287q.288.288.288.713v8q0 .425-.288.712Q20.425 21 20 21h-6q-.425 0-.712-.288Q13 20.425 13 20ZM3 20v-4q0-.425.288-.713Q3.575 15 4 15h6q.425 0 .713.287q.287.288.287.713v4q0 .425-.287.712Q10.425 21 10 21H4q-.425 0-.712-.288Q3 20.425 3 20Zm2-9h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"
                                />
                            </svg>
                        </div>
                        <p>Dashboard</p>
                    </div>
                </a>
        <br/>
                <a href="/dashboard/package">
                    <div className="navsDD">
                        <div className="ddnavBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="black"
                                    d="M233.5 68.9c0-.1 0-.1-.1-.2a20.5 20.5 0 0 0-7.5-7.4l-88-49.5a20.1 20.1 0 0 0-19.6 0l-88 49.5a20 20 0 0 0-7.5 7.5h-.1a.3.3 0 0 1-.1.2a20 20 0 0 0-2.5 9.7v98.6a20.2 20.2 0 0 0 10.2 17.5l88 49.5a20.6 20.6 0 0 0 9 2.5h1.8a21.2 21.2 0 0 0 8.8-2.5l88-49.5a20.2 20.2 0 0 0 10.2-17.5V78.7a19.4 19.4 0 0 0-2.6-9.8ZM128.1 33.8l71.6 40.3l-22.5 12.7l-72.4-39.9Zm.9 80.4L56.7 73.9l23.5-13.2l72.5 40.1ZM44.1 94.4L117 135l-.7 80.6L44.1 175Zm96.2 121l.7-80.4l24.1-13.7v31.2a12 12 0 0 0 24 0v-44.8l23-13.1V175Z"
                                />
                            </svg>
                        </div>
                        <p>Packages</p>
                    </div>
                </a>
        <br/>

                <a href="/dashboard/transfers">
                    <div className="navsDD">
                        <div className="ddnavBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    d="M20 2H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.5-4a1.49 1.49 0 0 0-1 .39a1.5 1.5 0 1 0 0 2.22a1.5 1.5 0 1 0 1-2.61ZM16 17a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h1a1 1 0 0 0 0-2H3v-1a1 1 0 0 1 1-1a1 1 0 0 0 0-2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1ZM6 18h1a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z"
                                />
                            </svg>
                        </div>
                        <p>Transfers</p>
                    </div>
                </a>
                <br />

                
            </div>
            <div className="sidbottom">
                <a href="" onClick={logoutU}>
                    <div className="navsDD">
                        <div className="ddnavBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="black"
                                    d="M6 2h9a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V4H6v16h9v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                                />
                                <path
                                    fill="black"
                                    d="M16.795 16.295c.39.39 1.02.39 1.41 0l3.588-3.588a1 1 0 0 0 0-1.414l-3.588-3.588a.999.999 0 0 0-1.411 1.411L18.67 11H10a1 1 0 0 0 0 2h8.67l-1.876 1.884a.999.999 0 0 0 .001 1.411z"
                                />
                            </svg>
                        </div>
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



export function DashTrans() {

const view1 = useRef()
const view2 = useRef()
    const [data, setData] = useState([]);
    const [bdata, setbData] = useState([]);


const [adata, setaData] = useState([]);
    const [showPrompt, setShowPrompt] = useState(false);
    const [transType, setTransType] = useState()
    const [prompt, setPrompt] = useState({
        body: <></>,
        button: "",
    });

useEffect(() => {
    getMyTrans()
    GetUserDB()
}, [])

    async function GetUserDB() {
        let userDD
        if (!authService.getLogedInUser()) return
        await authService.getMe(authService.getLogedInUser().token)
            .then((d) => {
                setbData(d.user)
            })
            .catch((err) => {
                // console.log(err);
                // alert(err.response.data.message);
            });
        return (userDD)
    }
    async function getMyTrans() {
    // if(!authService.getLogedInAdmin()) return
    await aotherService.getTransUser(authService.getLogedInUser().token).
        then((d) => {
            console.log(d)
            setData(d.map((e) => {
                return (
                    <>
                        <TransUUser
                            key={e._id}
                            name={e.name}
                            id={e._id}
                            status={e.status}
                            transType={e.transType}
                        />
                        <br />
                    </>
                )
            }))

        }).
        catch((err) => {
            console.log(err)
        })
    }
    let BtcAddress = 'BTC'
    let ERC20Address = 'USDT-ERC20'
    let TRC20Address = 'USDT-TRC30'
    let bodyData = {
        transType: transType,
        name: authService.getLogedInUser().user.name
    }
    async function NewTransfare() {
        await aotherService.createTrans(bodyData, authService.getLogedInUser().token)
            .then(() => {
                alert("Transaction Created");
                getMyTrans()

            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    }

    const closePrompt = () => {
        setShowPrompt((showPrompt) => false);
    }
    const copyToBoard = () => {
        setShowPrompt((showPrompt) => false);

        NewTransfare()
    };
    const handleBtcDeposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setTransType(BtcAddress)
        setPrompt({
            body: (
                <>
                    <h3 className="pp-header">To Deposit BTC</h3>{" "}
                    <p className="pp-text">Send Your Funds to the address</p>
                    <p className="pp-addr">{'bc1qlfrdq3dgppl3njqud8q7fsvsldek7cwz3zdx4g'}</p>
                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    
    const handleERC20Deposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setTransType(ERC20Address)

        setPrompt({
            body: (
                <>
                    <h3 className="pp-header">To Deposit USDT ERC20</h3>{" "}
                    <p className="pp-text">Send Your Funds to the address</p>
                    <p className="pp-addr">{'0x74d65B299c5b9C9A3356cB9F5bd1E184902E3f0D'}</p>

                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    const handleTRC20Deposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setTransType(TRC20Address)

        setPrompt({
            body: (
                <>
                    <h3 className="pp-header">To Deposit USDT TRC20</h3>{" "}
                    <p className="pp-text">Send Your Funds to the address</p>
                    <p className="pp-addr">{'TFwCT5szuModkBDQn3eSNJgd4bzYz9iqbo'}</p>

                </>
            ),
            button: "Ok, add Transaction",
        });
    };

return (
    <>
        {showPrompt ? (
            <PromptOverlay
                close={closePrompt}
                click={copyToBoard}
                msgTemplate={prompt.body}
                clickMsg={prompt.button}
            />
        ) : (
            <></>
        )}
        <div className="topAD">
            <div className="usersAdd">
                <div className="userTotal" ref={view1}>
                    <p className="Content">Total Amount</p>
                    <h1 className="Title">
                        ${bdata.amount}
                    </h1>
                    
                </div>
            
            </div>
        </div>
        <div className="depositAddress">
            <p>Would you like </p>
            <div className="DA-wrap-button">
                <button onClick={handleBtcDeposit}>
                    Deposit with BTC
                </button>
                <button onClick={handleERC20Deposit}>
                    Deposit with USDT ERC20
                </button>
                <button onClick={handleTRC20Deposit}>
                    Deposit with USDT TRC20
                </button>
            </div>
        </div>
        <div className="usersSection">
            <div className="heUSe">
                <p className="Content von">
                    Transfers
                </p>
            </div>
            <div className="headUse">
                <p className="Content">Order id</p>
                <p className="Content">Transfer Type</p>
                <p className="Content">Status</p>
                {/* <h6 className="Content nom">Action</h6> */}
            </div>
            <br />

            {data}
        </div>
    </>
)
}


function TransUUser(props) {
    const [thisData] = useState({
        name: props.name,
        id: props.id,
        status: props.status,
        transType: props.transType
    })
    function thisUser() {
        if (thisData.status === 'Complete') {
            alert('this order has been completed')
            return
        }
        props.view1.current.style.display = 'none'
        props.view2.current.style.display = 'block'
        props.outdata(thisData)
    }
    return (
        <div className="infAdUS" onClick={thisUser}>
            <div className="headUse bind">
                <p className="Content">#{thisData.id}</p>
                <p className="Content">{thisData.transType}</p>
                <p className="Content" style={{ color: thisData.status === 'pending' ? 'red' : "green" }}>{thisData.status}</p>
                {/* <button className="ADus">Delete</button> */}
            </div>
        </div>
    )
}




function PromptOverlay(props) {
    return (
        <>
            <div className="prompt" onClick={props.close}>
                <div className="pp-box">
                    <h1>
                        Hi, {authService.getLogedInUser().name}
                    </h1>
                    <div>{props.msgTemplate || "body"}</div>
                    <button onClick={props.click}>
                        {props.clickMsg || "Ok"}
                    </button>
                </div>
            </div>
        </>
    );
}



export function Index() {
    const [user] = useState(authService.getLogedInUser() )
    const [data, setData] = useState({
        name: '',
        amount: '',
        inviteCount: '',

    })
    useEffect(() => {
        GetUserDB()
    }, [[], user])
    
    async function GetUserDB() {
        let userDD 
        if (!user) return
        await authService.getMe(user.token)
            .then((d) => {
                console.log(d)
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
                <p className="Content binO">
                    Welcome back,
                </p>
                <h1 className="Title binO">
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
                            {data.inviteCount}
                        </h1>
                        <br />
                        <p className="Content">
                            Your Code: <br /> {data.userRefCode}
                        </p>
                    </div>
                    <a href='/dashboard/package'>
                        <div className="othBB bon">
                            <p className="Content">Active plan</p>
                            <h1 className="Title bon">
                                {data.pack} <br /> Pack
                            </h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

import ax2 from '../assets/images/ax2.png'
import { Button } from "./components/Form";


export function DashPackage() {
    async function UpPack(updateName){
        await aotherService.updatepackage(
            authService.getLogedInUser(), 
            {updateTo: updateName}
        ).then(()=>{
            alert('Success')
        }).catch((err)=>{
            console.log(err)
        })
    }

    function handle1(){
        UpPack('Starter')
    }
    function handle2(){
        UpPack('Gold')
    }
    function handle3(){
        UpPack('Diamond')
    }
    function handle4(){
        UpPack('Master')
    }

    return (
        <div className={'pack'}>
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
                    <button onClick={handle1}>Select</button>
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
                    <button onClick={handle2}>Select</button>

                </div>
            </div>
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
                    <button onClick={handle3}>Select</button>

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
                    <button onClick={handle4}>Select</button>

                </div>
            </div>
        </div>
    )
}

function MobileButton() {
    const Nav = useNavigate()
    function logoutU() {
        authService.logout()
        setTimeout(() => {
            alert('Log out Successful')
            Nav('/signin')
        }, 1000)
    }
    return(
        <div className="mobileSection">
            <div className="mobileWrap">
                <a href='/dashboard'>
                    <div className="mobileBoxIcon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                d="M13 8V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9h-6q-.425 0-.712-.288Q13 8.425 13 8ZM3 12V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v8q0 .425-.287.712Q10.425 13 10 13H4q-.425 0-.712-.288Q3 12.425 3 12Zm10 8v-8q0-.425.288-.713Q13.575 11 14 11h6q.425 0 .712.287q.288.288.288.713v8q0 .425-.288.712Q20.425 21 20 21h-6q-.425 0-.712-.288Q13 20.425 13 20ZM3 20v-4q0-.425.288-.713Q3.575 15 4 15h6q.425 0 .713.287q.287.288.287.713v4q0 .425-.287.712Q10.425 21 10 21H4q-.425 0-.712-.288Q3 20.425 3 20Zm2-9h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"
                            />
                        </svg>
                    </div>
                </a>
                <a href='/dashboard/package'>
                    <div className="mobileBoxIcon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="black"
                                d="M233.5 68.9c0-.1 0-.1-.1-.2a20.5 20.5 0 0 0-7.5-7.4l-88-49.5a20.1 20.1 0 0 0-19.6 0l-88 49.5a20 20 0 0 0-7.5 7.5h-.1a.3.3 0 0 1-.1.2a20 20 0 0 0-2.5 9.7v98.6a20.2 20.2 0 0 0 10.2 17.5l88 49.5a20.6 20.6 0 0 0 9 2.5h1.8a21.2 21.2 0 0 0 8.8-2.5l88-49.5a20.2 20.2 0 0 0 10.2-17.5V78.7a19.4 19.4 0 0 0-2.6-9.8ZM128.1 33.8l71.6 40.3l-22.5 12.7l-72.4-39.9Zm.9 80.4L56.7 73.9l23.5-13.2l72.5 40.1ZM44.1 94.4L117 135l-.7 80.6L44.1 175Zm96.2 121l.7-80.4l24.1-13.7v31.2a12 12 0 0 0 24 0v-44.8l23-13.1V175Z"
                            />
                        </svg>
                    </div>
                </a>
                <a href='/dashboard/transfers'>
                    <div className="mobileBoxIcon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                d="M20 2H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.5-4a1.49 1.49 0 0 0-1 .39a1.5 1.5 0 1 0 0 2.22a1.5 1.5 0 1 0 1-2.61ZM16 17a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h1a1 1 0 0 0 0-2H3v-1a1 1 0 0 1 1-1a1 1 0 0 0 0-2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1ZM6 18h1a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z"
                            />
                        </svg>
                    </div>
                </a>
                <a href='' onClick={logoutU}>
                    <div className="mobileBoxIcon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="black"
                                d="M6 2h9a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V4H6v16h9v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                            />
                            <path
                                fill="black"
                                d="M16.795 16.295c.39.39 1.02.39 1.41 0l3.588-3.588a1 1 0 0 0 0-1.414l-3.588-3.588a.999.999 0 0 0-1.411 1.411L18.67 11H10a1 1 0 0 0 0 2h8.67l-1.876 1.884a.999.999 0 0 0 .001 1.411z"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    )
}