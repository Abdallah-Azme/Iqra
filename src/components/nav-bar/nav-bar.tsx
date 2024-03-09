import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../commen/Container";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <div className="py-1 bg-secondary ">
      <Container className=" flex flex-row items-center justify-between z-10 ">
        <div>
          <Link href="/">
            <Image
              width={70}
              height={70}
              className="rounded-full"
              src="/Iqra.jpg"
              alt="The logo Iqra"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="">
            {/* <Input
              placeholder="ابحث..."
              className="place-content-center placeholder:text-xl"
            /> */}
          </div>
        </div>
        <div className="font-bold flex flex-row items-center  gap-x-10 text-primary-700/75">
          <div>
            <Link className="text-xl text-cyan-700" href="/#quran">
              القراءن الكريم
            </Link>
          </div>
          <div>
            <Link className="text-xl  text-cyan-700" href="/hadith">
              الحديث الشريف
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
