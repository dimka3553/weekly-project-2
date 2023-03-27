import Image from "next/image";

type OhnoProps = {
  children?: React.ReactNode;
  message: string;
};

export default function Ohno({ message }: OhnoProps) {
  return (
    <div className="text-center flex flex-col items-center gap-5">
      <h1 className="font-bold text-[40px] text-gray-500">Oh No!</h1>
      <h2 className="text-bold text-[30px] pb-5">{message}</h2>
      <div className="max-w-[200px] w-[200px]">
        <Image src="/ohno.png" alt="Oh no!" width={200} height={200} />
      </div>
    </div>
  );
}
