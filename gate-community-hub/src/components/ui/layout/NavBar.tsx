import { Bell, Menu } from "lucide-react";
import { UserMenu } from "./UserMenu";
import { ThemeToggle } from "./ThemeToggle";
import logoSvg from "@/assets/logo/neighborlyHub-Logo.svg";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { navLinks } from "./SideNav";
import { useState } from "react";
import { SideNavItem } from "./SideNavItem";
import { GoogleLoginButton } from "../GoogleLoginButton";
import { useAuth } from "@/context/AuthContext";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();


  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-border bg-card">
      <div className="flex items-center gap-3">
        {/* Mobile menu button - only visible on small screens */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 md:hidden rounded-md hover:bg-muted">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <div className="pt-12">
              {navLinks.map((link:any) => (
                <div key={link.to} onClick={() => setOpen(false)}>
                  <SideNavItem
                    to={link.to}
                    icon={link.icon}
                    iconActive={link.iconActive}
                    label={link.label}
                    collapsed={false}
                  />
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - smaller on mobile */}
        <img 
          src={logoSvg} 
          alt="NeighborlyHub Logo" 
          className="h-6 md:h-8" 
        />
      </div>
      <div className="flex items-center gap-4">
         {isAuthenticated && (
          <button className="relative p-2 rounded-full hover:bg-muted group">
            <Bell className="w-5 h-5 fill-none group-hover:fill-foreground/20 transition-all" />
            {/* Notification dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
          </button>
        )}
        <ThemeToggle />
        {/* Show Login button if logged out, else UserMenu */}
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <GoogleLoginButton />
        )}
      </div>
    </header>
  );
}