import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { useEffect, useRef, useState } from "react";
import logoLight from '../assets/logo/logoLight.svg'
import { authService } from "../auth/authService";
import { aotherService } from "../auth/otherServices";


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
                <p className="Content">Name</p>
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
                <p className="Content">{thisData.name}</p>
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
                            {data.inviteCount}
                        </h1>
                        <br/>
                        <button>{data.userRefCode}</button>
                    </div>
                    <div className="othBB bon">
                        <p className="Content">Active plan</p>
                        <h1 className="Title bon">
                            {data.pack} <br/> Pack
                        </h1>
                    </div>
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