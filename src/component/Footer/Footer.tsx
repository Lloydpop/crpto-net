import { Logo } from "..";
import gif from "../../assets/img/trade.gif";
interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="mt-24 border-t-[1px] lg:border-b-[1px] border-[#bbb7b763] lg:py-12 pt-4 lg:px-20 px-8">
        <div className="flex lg:flex-row flex-col justify-between rounded-xl  lg:overflow-hidden  mb-6 lg:min-h-[300px]">
          <div className="p-4 mt-5">
            {" "}
            <Logo />
            <p className="font-titi">Crypto-Net</p>
          </div>

          <div className="px-4 py-10">
            <h3 className="font-titi">Contact</h3>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-[#bbb7b7] text-sm">Instagram</li>
              <li className="text-[#bbb7b7] text-sm">Linkden</li>
              <li className="text-[#bbb7b7] text-sm">Twitter</li>
            </ul>
          </div>
          <div className="px-4 py-10">
            <h3 className="font-titi">FAQ</h3>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-[#bbb7b7] text-sm">what is cryptocurrency</li>
              <li className="text-[#bbb7b7] text-sm">
                how much can i start with?
              </li>
              <li className="text-[#bbb7b7] text-sm">
                how much interest do you make?
              </li>
            </ul>
          </div>
          <div>
            <img
              src={gif}
              className="w-[350px] lg:block hidden object-cover h-full"
            />
          </div>
        </div>

        <p className="lg:text-center font-titi text-[#bbb7b7] mb-5">
          Copyright all right reserved @{year}
        </p>
      </footer>
    </div>
  );
};
