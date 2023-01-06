import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/authContext"
import { useEffect, useRef, useState } from "react"
import logoLight from '../assets/logo/logoLight.svg'
import { authService } from "../auth/authService"
import { aotherService } from "../auth/otherServices"


export function DashboardAdmin() {
    const [login, setLoged]=useState(false)
    const nav = useNavigate()
    useEffect(() => {
        if (authService.getLogedInAdmin()) {
            setLoged(true)
        }
    }, [])
    return (
        <>
            {!login ? <TokenIN /> : <></>}
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
    // const nav = useNavigate()
    useEffect(() => {
        if (data) {
            console.log(data);
            // nav('/dashboard')
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
            signA.current.style.display = 'none'
        }).catch((e) => {
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
                Admin |
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
                    <div className="navsDD ddactive">
                        <div className="ddnavBox"></div>
                        <p>Users</p>
                    </div>
                </a>
                <br />

                <a href="/admin/transfers">
                    <div className="navsDD">
                        <div className="ddnavBox"></div>
                        <p>Transfers</p>
                    </div>
                </a>
                <br />

                <a href="/admin/settings">
                    <div className="navsDD">
                        <div className="ddnavBox"></div>
                        <p>Settings</p>
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

    useEffect(() => {
        HandleUsers()


    }, [])

    async function HandleUsers(){
        await aotherService.allUsers(authService.getLogedInAdmin().tokenID).
            then((d) => {
                console.log(d.users);
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

    return (
        <>
            <div className="topAD">
                <div className="usersAdd">
                    <div className="userTotal" ref={view1}>
                        <h1 className="Title">
                            Select A user
                        </h1>
                        <p className="Content">
                            click a user to see ther info
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
                                    john@gmail.com
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
                                <p className="Content pinf">#{adata.id}</p>
                                <button className="ADus">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="refCoi">
                    <p className="Content">Ref Count</p>
                    <h1 className="Title">
                        0
                    </h1>
                </div>
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
                    <p className="Content">User id</p>
                    <p className="Content">Amount Total </p>
                    <p className="Content">NO ref</p>
                    <h4 className="Content nom">Action</h4>
                </div>
                <br />
                {data}
            </div>
        </> 
    )
}

function UsersADDmin(props) {
    const [thisData] = useState({
        name: props.name,
        id: props.id,
        amount: props.ammount,
        refcount:props.refcount
    })
    function thisUser() {
        props.view1.current.style.display = 'none'
        props.view2.current.style.display = 'block'
        props.outdata(thisData)
    }
    return (
        <div className="infAdUS" onClick={thisUser}>
            <div className="headUse bind">
                <p className="Content">{ thisData.name}</p>
                <p className="Content">#{thisData.id}</p>
                <p className="Content">${ thisData.amount}</p>
                <p className="Content">{ thisData.refcount}</p>
                <button className="ADus">Delete</button>
            </div>
        </div>
    )
}

export function AdminUsers() {
    return (
        <>
            Mit
        </>
    )
}
export function AdminTrans() {
    return (
        <>
            <div className="topAD">
                <div className="usersAdd">
                    {/* <div className="userTotal">
                        <p className="Content">Total users Signed In</p>
                        <h1 className="Title">
                            0
                        </h1>
                        <p className="Content">
                            click a Transfer to see info
                        </p>
                    </div> */}
                    <div className="userTotalp">
                        <div className="ustoTop">
                            <div className="Uselogo"></div>
                            <div className="quickIn">
                                <h1 className="Title cos">
                                    A user
                                </h1>
                                <p className="Content">
                                    #Address
                                </p>
                            </div>
                        </div>
                        <div className="usetoBon">
                            <div className="conts">
                                <p className="Content"><b>Order Id</b></p>
                                <p className="Content">
                                    568934754u6j66586
                                </p>
                            </div>
                            <div className="conts">
                                <p className="Content"><b>Trans Type</b></p>
                                <h1 className="Title">
                                    ETH
                                </h1>
                            </div>
                            <div className="conts workc">
                                <p className="Content pinf">#Deposit</p>
                                <button className="ADusd">Confirm Trans</button>
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
                    <p className="Content">Order id</p>
                    <p className="Content">Transfer Type</p>
                    <p className="Content">status</p>
                    <h6 className="Content nom">Action</h6>
                </div>
                <br />
                <div className="infAdUS">
                    <div className="headUse bind">
                        <p className="Content">Obi Festus</p>
                        <p className="Content">#33443232675734</p>
                        <p className="Content">ETH - 0x554387557858585097079986899879897585889677</p>
                        <p className="Content">0</p>
                        <div>Deposit</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export function AdminSetting() {
    return (
        <>
            Mit
        </>
    )
}