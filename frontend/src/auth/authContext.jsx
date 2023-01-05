import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "./authService";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => { 
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [duser, setDuser] = useState(null);
    const nav = useNavigate()
        
    useEffect(() => {
        setUser(authService.getLogedInUser() || null)
        
    }, [])
    let ddata
    async function RegisterUser(user) {
        setLoading(true);
        await authService
            .register(user)
            .then((d) => {
                alert('Your Account Has Been Created');
                nav('/dashboard')
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            }).finally(() => {
                setLoading(false)
            });
    }

    async function LoginUser(user) {
        setLoading(true);
        await authService
            .login(user)
            .then((d) => {
                alert('Login Successful');
                nav('/dashboard')
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            }).finally(() => {
                setLoading(false)
            });
    }

    async function GetUserDB() {
        let userDD 
        setLoading(true);
        if (!user) return
        await authService
            .getMe(user.token)
            .then((d) => {
                // console.log(d);
                userDD = d
                console.log(userDD);
            })
            .catch((err) => {
                console.log(err);
                // alert(err.response.data.message);
            }).finally(() => {
                setLoading(false)
            });
        return (userDD)
    }



    const AuthValues = {
        RegisterUser,
        LoginUser,
        GetUserDB,
        duser,
        isLoading,
        user,
        ddata
    };

    return (
        <AuthContext.Provider value={AuthValues}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, useAuth };
