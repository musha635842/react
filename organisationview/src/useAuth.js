import { useState } from "react";
import { Link } from "react-router-dom";

export default function useAuth() {
    
    function getAuth() {
      return sessionStorage.getItem('auth')
    };
  
    const [auth, setAuth] = useState(getAuth());
  
    function doAuth() {
      sessionStorage.setItem("auth", "true");
      setAuth("true")
    };
  
    function deAuth() {
      sessionStorage.setItem("auth", "false");
      setAuth("false")
    };

    var authorisationlink = <Link to="/" onClick={() => {doAuth(auth)}}><div className="menuitem6">
    <img src="/User.png"></img></div></Link>
    var authorisationusername = "Гость";
    var authorisationusernameroledescription = "Пользователь сервиса";

      if (sessionStorage.getItem('auth')==='true')
      {
        authorisationlink = <Link to="/" onClick={() => {deAuth(auth)}}><div className="menuitem6">
    <img src="/Exit.png"></img></div></Link>
        authorisationusername = "Честный агент";
        authorisationusernameroledescription = "Менеджер процесса";
      }

return {
    authorisationlink,
    authorisationusername,
    authorisationusernameroledescription
 }
}