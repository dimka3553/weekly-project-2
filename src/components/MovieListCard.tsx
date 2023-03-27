import Avatar from "./Avatar";
import Link from "next/link";

type MovieListProps = {
  name: string;
  id: string;
};

export default function MovieList({ name, id }: MovieListProps) {
  return (
    <Link href={`/my-lists/${id}`}>
      <div className="h-[150px] rounded-md overflow-hidden flex items-center justify-center  relative  hover:scale-105 active:scale-95 transition-[0.15s]">
        <div className="absolute z-[0]">
          <Avatar account={name} size={500} />
        </div>

        <div className="w-full h-full absolute z-[1] px-5 hover:bg-[#00000088] bg-[#00000001] flex items-center justify-center text-white text-2xl hover:text-3xl font-bold transition-[0.15s]">
          <p className="truncate">{name}</p>
        </div>
      </div>
    </Link>
  );
}
