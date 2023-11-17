import { Logo } from "..";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useModal } from "../../hooks/useModal";
import GoogleSignIn from "../../pages/Authenticate/Authenticate";
import { app, googleProvider } from "../../firebase";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Coin1, Graph } from "iconsax-react";
interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await app.auth().signInWithPopup(googleProvider);
      toast.success("you signed in with your Google account");
    } catch (error: any) {
      console.error(
        "Error signing in with Google:",
        toast.error(error.message)
      );
    }
  };
  const handleLogout = async () => {
    setLoading(true);
    try {
      await app.auth().signOut();
      toast.success("you logged out successfully");
      localStorage.removeItem("isLoggedIn");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.error("Error logging out:", toast.error(error.message));
    }
  };
  const { Modal, showModal } = useModal();

  const main = [
    {
      title: "Coins",
      to: "/coins",
      icon: <Coin1 variant="Bold" className="w-5 h-5" />,
    },
    {
      title: "Exchange",
      to: "/exchange",
      icon: <Graph variant="Bold" className="w-5 h-5" />,
    },
  ];
  const displayNameArray = user?.displayName ? user.displayName.split("") : [];

  const userName = displayNameArray.length
    ? `${displayNameArray[0]}${displayNameArray[displayNameArray.length - 1]}`
    : "UU";

  return (
    <div className="flex justify-between lg:items-center">
      <Logo />
      <div
        className={`flex items-center lg:flex-row flex-col lg:justify-center gap-10 fixed lg:static lg:bg-transparent bg-[#000000e1] left-0  w-full h-full pt-[100px] lg:pt-0 z-[10000] duration-[0.6s] ease-in-out transition-[top] ${
          open ? "top-0" : "-top-[100%]"
        }`}
      >
        {user &&
          main.map((link, i) => (
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className=" flex  items-center gap-2 text-[20px] lg:text-[16px] font-titi lg:font-satoshi"
              key={i}
              to={link.to}
            >
              <span>{link.icon}</span>
              {link.title}
            </Link>
          ))}
        <div className="lg:hidden block">
          {user ? (
            <Button
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
            >
              {loading ? "logging off" : "Logout"}
            </Button>
          ) : (
            <Button
              onClick={() => {
                showModal();
                setOpen(false);
              }}
            >
              Login
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <div
          className="flex lg:hidden  flex-col gap-2  z-[200000] relative cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`w-[36px] h-[2px] bg-white block duration-100 ${
              open ? "rotate-[43deg] translate-y-4" : "rotate-0 translate-y-0"
            }`}
          ></span>
          <span
            className={`w-[36px] h-[2px] bg-white block ${
              open ? "opacity-0 hidden" : "opacity-100 block"
            }`}
          ></span>
          <span
            className={`w-[36px] h-[2px] bg-white block duration-100  ${
              open
                ? "-rotate-[37deg] translate-y-[6px]"
                : "rotate-0 translate-y-0"
            }`}
          ></span>
        </div>

        <div className="hidden lg:block">
          {user ? (
            <Button onClick={handleLogout}>
              {loading ? "logging off" : "Logout"}
            </Button>
          ) : (
            <Button onClick={showModal}>Login</Button>
          )}
        </div>
        {user && (
          <p className="uppercase w-[50px] h-[50px] bg-gray-200 text-gray-700  rounded-full lg:flex hidden justify-center items-center font-titi font-semibold text-[18px]">
            {userName}
          </p>
        )}
      </div>

      {Modal({
        children: (
          <GoogleSignIn
            handleGoogleSignIn={handleGoogleSignIn}
            showModal={showModal}
          />
        ),
        size: "md",
        showCloseIcon: true,
      })}
    </div>
  );
};
