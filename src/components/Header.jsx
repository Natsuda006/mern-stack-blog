import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Header = () => {
  const { userInfo, logOut } = useContext(UserContext);
  const username = userInfo?.username;
  return (
    <div className="navbar bg-gray-800 text-neutral-content shadow-lg py-4 px-6 md:px-10">
      <div className="navbar-start">
        <a className="btn btn-ghost text-3xl font-bold" href="/">
          SE NPRU Blog
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost text-lg" href="/">
          Home
        </a>
      </div>
      <div className="navbar-end space-x-4">
        {username ? (
          <>
            <a className="btn btn-primary" href="/create">
              Create Post
            </a>
            <button className="btn btn-error" onClick={logOut}>
              Logout ({username})
            </button>
          </>
        ) : (
          <>
            <a className="btn btn-ghost text-lg" href="/login">
              Login
            </a>
            <a className="btn btn-ghost text-lg" href="/register">
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
