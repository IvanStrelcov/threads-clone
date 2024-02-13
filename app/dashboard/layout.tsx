import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads Demo",
  description: "Threads demo app",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main>
          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSideBar />
        </main>
        <BottomBar />
      </body>
    </html>
  );
}
