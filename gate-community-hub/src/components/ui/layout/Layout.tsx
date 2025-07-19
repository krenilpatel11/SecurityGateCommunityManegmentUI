// src/components/layout/Layout.tsx
import type { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { SideNav } from "./SideNav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <div className="flex flex-1 container mx-auto px-0 py-2 sm:py-4">
        <aside className="flex-shrink-0">
          <SideNav />
        </aside>
        <main className="flex-1 p-3 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
