import { useState } from "react";
import { Button } from "./components/Form"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../auth/authContext";

export function SignIn(){
    const [loginData, setLogInData] = useState({
        email: '',
        password: ''
    })
    const { user, LoginUser } = useAuth()

    const nav = useNavigate()
    useEffect(() => {
        if (user) {
            console.log(user);
            nav('/dashboard')
        }
    }, [user])

    const { email, password } = loginData;

    const submit = (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            alert('No email or password')
            return
        }
        const userData = {
            email: email,
            password: password,
        };

        LoginUser(userData);
    }
    // Handle Input
    const onChange = (e) => {
        setLogInData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="sign">
            
            <div className="signboxImg">

            </div>
            <div className="signSection">
                <div className="signTops">
                    <h1 className="Title">
                        SignIn
                    </h1>
                    
                    <p className="Content">
                        Your details are needed to get to your <br/> dashboard or <a href="/signUp"><span style={{ color: 'orange' }}>CREATE AN ACCOUNT</span></a>
                    </p>
                    <form action="" onSubmit={submit}>
                        <div className="wrapForm">
                            <input type="email" onChange={onChange} name='email' id='email' value={email} placeholder="Email" required/>
                        </div>
                        <div className="wrapForm">
                            <input type="password" onChange={onChange} name='password' id='password' value={password} placeholder="Password" required/>
                        </div>
                        <div className="subWrapp">
                            <button type="submit" onSubmit={submit}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        country: "",
        password: "",
        inviteCode: ""
    });
    const navigate = useNavigate()
    const { RegisterUser ,user} = useAuth();
    const nav = useNavigate()
    useEffect(() => {
        if (user) {
            console.log(user);
            nav('/dashboard')
        }
    }, [user])

    useEffect(() => {
        
    },[])
    const {
        username,
        name,
        email,
        password,
        country,
        inviteCode,
    } = formData;
    const submit = (e) => {
        e.preventDefault()
        
        const userData = {
            name: name,
            username: username,
            email: email,
            country: country,
            password: password,
            inviteRefCode: inviteCode,
        };
        RegisterUser(userData);
    }
    
    const onChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="sign">

            <div className="signboxImg">

            </div>
            <div className="signSection">
                <div className="signTops">
                    <h1 className="Title">
                        SignUp
                    </h1>

                    <p className="Content">
                        Get a free account and secure it. <br/> Have An Account, <a href="/signIn"><span style={{ color: 'orange' }}>SIGN IN</span></a>
                    </p>
                    <form action="" onSubmit={submit}>
                        <div className="wrapForm">
                            <input type="text" name="name"
                                id="name" onChange={onChange} value={name} placeholder="Fullname" required />
                        </div>
                        <div className="wrapForm">
                            <input type="text" name="username"
                                id="username" onChange={onChange} value={username} placeholder="Username" required />
                        </div>
                        <div className="wrapForm">
                            <input type="email" name="email"
                                id="email" onChange={onChange} value={email} placeholder="Email" required/>
                        </div>
                        <div className="wrapForm">
                            <input type="password"
                                name="password"
                                id="password" onChange={onChange} value={password}    placeholder="Password" required />
                        </div>
                        <select name="country"
                            onChange={onChange}
                            id="CountryForm"
                            value={country}  required>
                            <option value="Select a country">Select a country</option>
                            <option value="Uk">UK</option>
                            <option value="USA">USA</option>
                            <option value="China">China</option>
                            <option value="South Africa">South Africa</option>
                            <option value="France">France</option>
                        </select>
                        <div className="wrapForm">
                            <input type="text" name="inviteCode"
                                id="inviteCode"
                                placeholder="ReferalCode [Optional]"
                                value={inviteCode}
                                onChange={onChange}/>
                        </div>
                        <div className="subWrapp">
                            <button type="submit"
                                onSubmit={submit}>To Dashboard</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}