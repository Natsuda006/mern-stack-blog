import {useState , useEffect} from 'react';
import { UserContext } from './UserContext';
import TokenServices from '../../services/token.service';

export const UserContextProvider = ({children}) => {
const [userInfo, setUserInfo] = useState(getUser);

const logIn = (user) => setUserInfo(user);
const logOut = () => {
    setUserInfo(null);
    TokenServices.removeUser();
};

function getUser() {
    const savedUser = TokenServices.getUser() || null;
    return savedUser;
};

useEffect(() => {
    TokenServices.setUser(userInfo);
}, [userInfo]);
return (
    <UserContext.Provider value={{userInfo, logIn,logOut}}>
        {children}
    </UserContext.Provider>
);
};