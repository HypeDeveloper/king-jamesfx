import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/authContext"
import { useEffect, useRef, useState } from "react"
import logoLight from '../assets/logo/logoLight.svg'
import { authService } from "../auth/authService"
import { aotherService } from "../auth/otherServices"


export function DashboardAdmin() {
    return (
        <>
            {!authService.getLogedInAdmin() ? <TokenIN /> : <></>}
            <div className="dashboard">
                <div className="topDash">
                    <DashbordNavAdmin />
                </div>
                <div className="dbottom">
                    <div className="sided">
                        <SideNavAdmin />
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

function TokenIN() {
    const [loginData, setLogInData] = useState({
        role: '',
        token: ''
    })
    const [data, setData]= useState({
        token: "",
        role: ""
    })
    const signA = useRef()
    const nav = useNavigate()
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    const { role, token } = loginData;

    const submit = (e) => {
        e.preventDefault()
        if (role === "" || token === "") {
            alert('No role or token')
            return
        }
        const userData = {
            role: role,
            token: token,
        };
        handleLogin(userData)
        // LoginUser(userData);
    }

    async function handleLogin(userData) {
        await authService.adminLog(userData).then((d) => {
            setData(d)
            console.log(data);
            alert("Success")
            nav('/admin')

            signA.current.style.display = 'none'
        }).catch((e) => {
            console.log(e)
            alert(e.response.data.message)
        })
    }

    // Handle Input
    const onChange = (e) => {
        setLogInData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="ASign" ref={signA}>
            <h1 className="Title">
                Admin <span className="nomw">|</span>
            </h1>
            <form action="" onSubmit={submit}>
                <div className="wrapForm">
                    <input type="role" onChange={onChange} name='role' id='role' value={role} placeholder="Role" required />
                </div>
                <div className="wrapForm">
                    <input type="password" onChange={onChange} name='token' id='token' value={token} placeholder="Token" required />
                </div>
                <div className="subWrapp">
                    <button type="submit" onSubmit={submit}>Sign In</button>
                </div>
            </form>
        </div>
    )
}

function DashbordNavAdmin() {
    return (
        <div className="dnav">
            <div className="dnav-wrap">
                <img src={logoLight} alt="" />
                <p className="Content">
                    Admin Dashboard
                </p>
                <div className="userInfo">
                    <p>
                        LOGED IN | ADMIN
                    </p>
                    
                </div>
            </div>
            
        </div>
    )
}

function SideNavAdmin() {
    return (
        <div className="sNanv">
            <div className="sidTop">

                <a href="/admin">
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
                                    d="M13 8V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9h-6q-.425 0-.712-.288Q13 8.425 13 8ZM3 12V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v8q0 .425-.287.712Q10.425 13 10 13H4q-.425 0-.712-.288Q3 12.425 3 12Zm10 8v-8q0-.425.288-.713Q13.575 11 14 11h6q.425 0 .712.287q.288.288.288.713v8q0 .425-.288.712Q20.425 21 20 21h-6q-.425 0-.712-.288Q13 20.425 13 20ZM3 20v-4q0-.425.288-.713Q3.575 15 4 15h6q.425 0 .713.287q.287.288.287.713v4q0 .425-.287.712Q10.425 21 10 21H4q-.425 0-.712-.288Q3 20.425 3 20Zm2-9h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"
                                />
                            </svg>
                        </div>
                        <p>Users</p>
                    </div>
                </a>
                <br />

                <a href="/admin/transfers">
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

                <a href="" onClick={authService.logoutAdmin}>
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
                        <p>Log out</p>
                    </div>
                </a>
            </div>
            
        </div>
    )
}

export function AdminIndex() {
    const [data, setData] = useState([]);
    const [adata, setaData] = useState({});
    const view1 = useRef()
    const view2 = useRef()
    const nav = useNavigate()
    useEffect(() => {
        HandleUsers()


    }, [[]])

    async function HandleUsers() {
        // if(!authService.getLogedInAdmin()) return
        await aotherService.allUsers(authService.getLogedInAdmin().tokenID).
            then((d) => {
                // console.log(d.users);
                setData(d.users.map((e) => {
                    return (
                        <>
                            <UsersADDmin
                                key={e._id}
                                name={e.name}
                                id={e._id}
                                amount={e.amount}
                                refcount={e.inviteCount}
                                view1={view1}
                                view2={view2}
                                outdata={setaData}
                            />
                            <br />
                        </>
                    )
                }))
                
            })
    }
    async function handleDelAd() {
        alert('You are about to DELETE a user')
        const transData = {
            id: adata.id
        }
        await aotherService.delUser(transData, authService.getLogedInAdmin().tokenID).
            then((d) => {
                console.log(d);
                alert(`DELETED ${props.name}`)
                props.view1.current.style.display = 'block'
                props.view2.current.style.display = 'none'
            }).catch((err) => {
                console.log(err);
            })
    }
    async function updateAmount() {
        let setPrice = prompt(`You are about to update ${adata.name} amount, \n add the amount`)
        if (!setPrice) return
        const transData = {
            price: setPrice,
            userId: adata.id
        }
        await aotherService.updateTrans(authService.getLogedInAdmin().tokenID, transData).
            then((d) => {
                alert(`updated ${adata.name} amount`)
                nav('/admin')
            }).catch((e)=>{
                console.log(e)
            })
    }
    return (
        <>
            <div className="topAD" >
                <div className="usersAdd" id='userInfo'>
                    <div className="userTotal" ref={view1}>
                        <h1 className="Title">
                            Select A user
                        </h1>
                        <p className="Content">
                            click a user to see ther info
                        </p>
                    </div>
                    <div className="userTotalp" ref={view2} id='userInfo'>
                        <div className="ustoTop">
                            <div className="Uselogo"></div>
                            <div className="quickIn">
                                <h1 className="Title cos">
                                    {adata.name}
                                </h1>
                                <p className="Content">
                                    #{adata.id}
                                </p>
                            </div>
                        </div>
                        <div className="usetoBon">
                            <div className="conts">
                                <p className="Content">Total Amount</p>
                                <h1 className="Title">
                                    ${adata.amount}
                                </h1>
                            </div>
                            <div className="conts">
                                <p className="Content">Total Refs</p>
                                <h1 className="Title">
                                    {adata.refcount}
                                </h1>
                            </div>
                            <div className="conts workc">
                                <button className="ADus" onClick={handleDelAd}>Delete</button> 
                                <br/>
                                <button className="ADusd" onClick={updateAmount}>Update amount</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="refCoi">
                    <p className="Content">Ref Count</p>
                    <h1 className="Title">
                        0
                    </h1>
                </div> */}
                <div className="refCoi">
                    <p className="Content">Total Users</p>
                    <h1 className="Title">
                        {data.length}
                    </h1>
                </div>
            </div>
            <div className="usersSection">
                <div className="heUSe">
                    <p className="Content von">
                        Users
                    </p>
                </div>
                <div className="headUse">
                    <p className="Content">Name</p>
                    <p className="Content usebond">User id</p>
                    <p className="Content usebond">Amount Total </p>
                    <p className="Content usebond">NO ref</p>
                    <h4 className="Content nom">Action</h4>
                </div>
                <br />
                {data}
            </div>
        </> 
    )
}
function UsersADDmin(props) {
    const tab = useRef()
    const [thisData] = useState({
        name: props.name,
        id: props.id,
        amount: props.amount,
        refcount:props.refcount
    })
    function thisUser() {
        props.view1.current.style.display = 'none'
        props.view2.current.style.display = 'block'
        props.outdata(thisData)
    }

    async function handleDel() {
        alert('You are about to DELETE a user')
        const transData = {
            id: thisData.id
        }
        await aotherService.delUser(transData, authService.getLogedInAdmin().tokenID).
            then((d) => {
                console.log(d);
                alert(`DELETED ${props.name}`)
                props.view1.current.style.display = 'block'
                props.view2.current.style.display = 'none'
                tab.current.style.display = 'none'
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        
        <a href="#userInfo">
            <div className="infAdUS" onClick={thisUser} ref={tab}>
            <div className="headUse bind">
                <p className="Content">{ thisData.name}</p>
                <p className="Content usebond">#{thisData.id}</p>
                <p className="Content usebond">${ thisData.amount}</p>
                <p className="Content usebond">{ thisData.refcount}</p>
                <button className="ADus" onClick={handleDel}>Delete</button>
            </div>
        </div>
        </a>
    )
}
export function AdminTrans() {
    const view1 = useRef()
    const view2 = useRef()
    const [data, setData] = useState([]);
    const [adata, setaData] = useState([]);
    const nav = useNavigate()
    useEffect(() => {
        getAllTrans()
    }, [[],data]) 

    async function getAllTrans() {
        // if(!authService.getLogedInAdmin()) return
        await aotherService.getTransAdmin(authService.getLogedInAdmin().tokenID).
            then((d) => {
                setData(d.map((e) => {
                    return (
                        <>
                            <TransADDmin
                                key={e._id}
                                name={e.name}
                                id={e._id}
                                status={e.status}
                                transType={e.transType}
                                view1={view1}
                                view2={view2}
                                outdata={setaData}
                            />
                            <br />
                        </>
                    )
                }))

            })
    }

    async function ConfirmTrans() {
        let setPrice = prompt(`You are about to update ${adata.name} amount, \n add the amount`)
        if (!setPrice) return
        const transData = {
            price: setPrice,
            orderId: adata.id
        }
        await aotherService.confirmTrans(authService.getLogedInAdmin().tokenID, transData).
            then((d) => {
                alert(`updated ${adata.name} amount`)
                nav('/admin/transfers')
        })
    }

    return (
        <>
            <div className="topAD" id='userTrans'>
                <div className="usersAdd" >
                    <div className="userTotal" ref={view1}>
                        <p className="Content">Total users Signed In</p>
                        <h1 className="Title">
                            0
                        </h1>
                        <p className="Content">
                            click a Transfer to see info
                        </p>
                    </div>
                    <div className="userTotalp" ref={view2}> 
                        <div className="ustoTop">
                            <div className="Uselogo"></div>
                            <div className="quickIn">
                                <h1 className="Title cos">
                                    {adata.name}
                                </h1>
                                <p className="Content">
                                    #EthAddress
                                </p>
                            </div>
                        </div>
                        <div className="usetoBon">
                            <div className="conts">
                                <p className="Content"><b>Order Id</b></p>
                                <p className="Content">
                                    {adata.id}
                                </p>
                            </div>
                            <div className="conts">
                                <p className="Content"><b>Trans Type</b></p>
                                <h1 className="Title">
                                    {adata.transType}
                                </h1>
                            </div>
                            <div className="conts workc">
                                <p className="Content pinf">#Deposit</p>
                                <button className="ADusd" onClick={ConfirmTrans}>Confirm Trans</button>
                            </div>
                        </div>
                    </div>
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
                    <p className="Content usebond">Order id</p>
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
function TransADDmin(props) {
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
        < a href= "#userTrans" >
            <div className="infAdUS" onClick={thisUser}>
            <div className="headUse bind">
                <p className="Content">{thisData.name}</p>
                <p className="Content usebond">#{thisData.id}</p>
                <p className="Content">{thisData.transType}</p>
                <p className="Content" style={{ color: thisData.status === 'pending' ? 'red': "green"}}>{thisData.status}</p>
                {/* <button className="ADus">Delete</button> */}
            </div>
        </div>
        </a>
    )
}
function MobileButton() {
    return (
        <div className="mobileSection">
            <div className="mobileWrap">
                <a href='/admin'>
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

                <a href='/admin/transfers'>
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
                <a href='' onClick={authService.logoutAdmin}>
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