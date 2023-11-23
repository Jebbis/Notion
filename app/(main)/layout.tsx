"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  //Render a spinner while the app is still loading
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  //If the user is not logged in, user will be redirected to frontpage
  if (!isAuthenticated) {
    return redirect("/");
  }
  return <div className="h-full flex dark:bg-[#1F1F1F]">{children}</div>;
};

export default MainLayout;
