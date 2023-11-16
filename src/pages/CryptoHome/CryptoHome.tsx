import Coins from "../Coins/Coins";
interface Props {
  isLoggedIn: boolean;
}
const CryptoHome = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <Coins loggedIn={isLoggedIn} count="10" />
    </div>
  );
};

export default CryptoHome;
