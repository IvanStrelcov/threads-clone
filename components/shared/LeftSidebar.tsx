import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/lib/constants";

export default function LeftSideBar() {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          return (
            <Link
              href={link.route}
              key={link.label}
              className="leftsidebar_link"
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                unoptimized
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
