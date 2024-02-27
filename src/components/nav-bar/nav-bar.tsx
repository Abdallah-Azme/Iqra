import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll className="py-6 justify-evenly shadow">
      <NavbarBrand>
        <Link href="/">
          <Image
            width={90}
            height={90}
            className="rounded-full"
            src="/Iqra.jpg"
            alt="The logo Iqra"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex">
        <NavbarItem>
          <Input
            size="md"
            endContent={<Search />}
            placeholder="ابحث..."
            className="place-content-center placeholder:text-xl"
            radius="lg"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="font-bold gap-x-10 text-primary-700/75"
      >
        <NavbarItem>
          <Link className="text-3xl" href="quran">
            القراءن الكريم
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-3xl" href="hadith">
            الحديث الشريف
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
