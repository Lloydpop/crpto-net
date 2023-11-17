import bit from "../../assets/img/bit.png";
import gmail from "../../assets/img/google.webp";
import { Button } from "../../component/Button/Button";
interface GoggleProps {
  showModal: () => void;
  handleGoogleSignIn: () => void;
}
const GoogleSignIn = ({ showModal, handleGoogleSignIn }: GoggleProps) => {
  return (
    <div className="text-black p-8 flex flex-col items-center">
      <h1 className="font-titi text-center my-6 lg:text-[18px] text-[16px] font-[500]">
        Quickly Login with your gmail account so you can have full acess to
        Crypto-Net
      </h1>
      <img src={bit} className="w-[200px] mx-auto mb-4" />

      <Button
        onClick={() => {
          handleGoogleSignIn();
          showModal();
        }}
      >
        <img src={gmail} className="lg:w-6 w-4 mr-3" />
        Continue with your Google account
      </Button>
    </div>
  );
};

export default GoogleSignIn;
