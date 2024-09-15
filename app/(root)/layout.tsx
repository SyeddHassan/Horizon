import Image from "next/image";

import Sidebar from "@/components/side-bar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Hassan", lastName: "Shah" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>{/* MobileNav Component Here */}</div>
        </div>
        {children}
      </div>
    </main>
  );
}
