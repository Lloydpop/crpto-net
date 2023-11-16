import { useNavigate } from "react-router-dom";
import CryptoHome from "../CryptoHome/CryptoHome";
import { Hero } from "./components/Hero/Hero";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import { app } from "../../firebase";
import { useEffect, useState } from "react";

interface HomepageProps {}

export const Homepage = ({}: HomepageProps) => {
  const [user, setUser] = useState<any>(null);
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
  return (
    <div>
      {user ? (
        <CryptoHome isLoggedIn={true} />
      ) : (
        <div>
          {" "}
          <Hero />
          <SectionOne />
          <SectionTwo />
        </div>
      )}
    </div>
  );
};
