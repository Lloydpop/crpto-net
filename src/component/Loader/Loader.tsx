import bit from "../../assets/img/coin2.webp";
interface LoaderProps {
  title: string;
}

export const Loader = ({ title }: LoaderProps) => {
  return (
    <div className="flex items-center flex-col justify-center min-h-[400px]">
      <img src={bit} alt="loading" className="w-[160px]" />
      <p className="font-titi font-bold text-[20px]">{title}</p>
    </div>
  );
};
