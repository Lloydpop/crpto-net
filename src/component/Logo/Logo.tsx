import { useNavigate } from "react-router-dom";
import brand from "../../assets/img/crypto.com-logo.svg";

interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={brand} alt="logo" className="w-[4.8rem]" />
    </div>
  );
};
