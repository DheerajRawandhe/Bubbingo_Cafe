// import { Link } from "react-router-dom";
// import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
// import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed , ShoppingBasket , UserStar} from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
// import { Separator } from "./ui/separator";
// import { useUserStore } from "@/store/useUserStore";
// import { useCartStore } from "@/store/useCartStore";
// import { useThemeStore } from "@/store/useThemeStore";

// const Navbar = () => {
//   const { user, loading, logout } = useUserStore();
//   const { cart } = useCartStore();
//   const { setTheme } = useThemeStore();

//   return (
//     <>
//       <div className="max-w-7xl mx-auto"
//       >
//         {/* <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md"> */}
//         {/* <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md"> */}
//         <div className="flex items-center justify-between h-14 mt-3">
//           <Link to="/">
//             {/* <h1 className="font-bold md:font-extrabold text-2xl">BuBBinGo</h1> */}
//             <img src="../Fav Icon/icon .png" alt="logo" className="nav-logo " />
//           </Link>
//           <div className="hidden md:flex items-center gap-10 mr-5 ">
//             <div className="hidden md:flex items-center gap-6 ">
//               <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/menus">Menus</Link>
//               <Link to="/order/status">Order</Link>
//               {/* <Link to="/recipe">Recipe</Link>
//               <Link to="/gallery">Gallery</Link> */}
//               {/* <Link to="/profile">Profile</Link> */}

//               {user.admin && (
//                 <Menubar>
//                   <MenubarMenu>
//                     <MenubarTrigger className="hover:cursor-pointer">Dashboard</MenubarTrigger>
//                     <MenubarContent >
//                       <Link to="/admin/restaurant">
//                         <MenubarItem className="cursor-pointer">Restaurant</MenubarItem>
//                       </Link>
//                       <Link to="/admin/menu">
//                         <MenubarItem className="cursor-pointer">Menu</MenubarItem>
//                       </Link>
//                       <Link to="/admin/orders">
//                         <MenubarItem className="cursor-pointer">Orders</MenubarItem>
//                       </Link>
//                       {/* <Link to="/admin/recipe">
//                         <MenubarItem>Recipe</MenubarItem>
//                       </Link>
//                       <Link to="/admin/gallery">
//                         <MenubarItem>Gallery</MenubarItem>
//                       </Link> */}
//                     </MenubarContent>
//                   </MenubarMenu>
//                 </Menubar>
//               )}
//             </div>
//             <div className="flex items-center gap-4 ">
//               <Link to="/cart" className="relative cursor-pointer">
//                 <ShoppingCart />
//                 {cart.length > 0 && (
//                   <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full w-4 h-4  bg-red-500 hover:bg-red-500">
//                     {cart.length}
//                   </Button>
//                 )}
//               </Link>

//               <div>
//                 <Link to="/profile">
//                   <Avatar>
//                     <AvatarImage src={user?.profilePicture} alt="profilephoto" />
//                     <AvatarFallback className="bg-gray-200">CN</AvatarFallback>
//                   </Avatar>
//                 </Link>
//               </div>

//               <div>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button className=" cursor-pointer" variant="outline" size="icon">
//                       <Sun className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                       <span className="sr-only">Toggle theme</span>
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>Light</DropdownMenuItem>
//                     <DropdownMenuItem className="cursor-pointer"  onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//               {loading ? (
//                 <Button disabled className="bg-orange hover:bg-hoverOrange">
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={logout}
//                   className="logout-btn"
//                   // className="bg-orange hover:bg-hoverOrange"
//                 >
//                   Logout
//                 </Button>
//               )}
//             </div>
//           </div>

//           <div className="md:hidden lg:hidden">
//             {/* Mobile responsive  */}
//             <MobileNavbar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// const MobileNavbar = () => {
//   const { user, logout, loading } = useUserStore();
//   const { setTheme } = useThemeStore();
//   const { cart } = useCartStore();

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size={"icon"} className="rounded-full bg-gray-200 text-black hover:bg-gray-200" variant="outline">
//           <Menu size={"18"} />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col ">
//         <SheetHeader className="flex flex-row items-center justify-between mt-2">
//           <SheetTitle>
//              <Link to="/">
//             <img src="../Fav Icon/icon .png" alt="logo" className="sidebar-logo cursor-pointer" />
//             {/* BuBBinGo */}
//             </Link>
//           </SheetTitle>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className="cursor-pointer" variant="outline" size="icon">
//                 <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>Light</DropdownMenuItem>
//               <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </SheetHeader>
//         <Separator className="my-2" />
//         <SheetDescription className="flex-1">
//           {/* <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//             <User />
//             <span>Profile</span>
//           </Link> */}

//            <Link to="/about" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//             <UserStar />
//             <span>About</span>
//           </Link>

//            <Link to="/menus" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//                 <ShoppingBasket />
//             <span>Menus</span>
//           </Link>

//           <Link to="/order/status" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//             <HandPlatter />
//             <span>Order</span>
//           </Link>
//           <Link to="/cart" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//             <ShoppingCart />
//                {cart.length > 0 && (
//                   <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full w-4 h-4  bg-red-500 hover:bg-red-500">

//                   </Button>
//                 )}
//             <span>Cart ({cart.length})</span>
//           </Link>

//           {user.admin && (
//             <>
//               <Link to="/admin/menu" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//                 <SquareMenu />
//                 <span>Menu</span>
//               </Link>
//               <Link to="/admin/restaurant" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//                 <UtensilsCrossed />
//                 <span>Restaurant</span>
//               </Link>
//               <Link to="/admin/orders" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
//                 <PackageCheck />
//                 <span>Restaurant Orders</span>
//               </Link>
//             </>
//           )}

//         </SheetDescription>
//         <SheetFooter className="flex flex-col gap-4">
//           <div className="flex flex-row items-center gap-2">
//             <Avatar >
//                <Link  to="/profile">
//               <AvatarImage className="cursor-pointer" src={user?.profilePicture} />
//               </Link>
//               <Link  to="/profile">
//                 <AvatarFallback>CN</AvatarFallback>
//               </Link>
//             </Avatar>
//                <Link  to="/profile">
//                 <h1 className="font-bold cursor-pointer">{user?.fullname}</h1>
//               </Link>

//           </div>
//           <SheetClose asChild>
//             {loading ? (
//               <Button className="bg-orange hover:bg-hoverOrange">
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </Button>
//             ) : (
//               <Button
//                 onClick={logout}
//                 // className="bg-orange hover:bg-hoverOrange"
//                 className="logout-btn"
//               >
//                 Logout
//               </Button>
//             )}
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// };

///////////////////////////////// Fixed-Navbar //////////////////////////////////////////////////

import { Link } from "react-router-dom";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, UserStar, UtensilsCrossed, ShoppingBasket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useUserStore } from "@/store/useUserStore";
import { useCartStore } from "@/store/useCartStore";
import { useThemeStore } from "@/store/useThemeStore";

const Navbar = () => {
  const { user, loading, logout } = useUserStore();
  const { cart } = useCartStore();
  const { setTheme } = useThemeStore();

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 mt-2 px-4">
          <Link to="/">
            <img src="../Fav Icon/icon .png" alt="logo" className="nav-logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 mr-5">
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-orange-400 transition-colors">
                About
              </Link>
              <Link to="/menus" className="text-white hover:text-orange-400 transition-colors">
                Menus
              </Link>
              <Link to="/order/status" className="text-white hover:text-orange-400 transition-colors">
                Order
              </Link>

              {user?.admin && (
                <Menubar className="text-white hover:text-orange-400 transition-colors">
                  <MenubarMenu>
                    <MenubarTrigger className="hover:cursor-pointer text-white ">Dashboard</MenubarTrigger>
                    <MenubarContent>
                      <Link to="/admin/restaurant">
                        <MenubarItem className=" cursor-pointer">Restaurant</MenubarItem>
                      </Link>
                      <Link to="/admin/menu">
                        <MenubarItem className="cursor-pointer">Menu</MenubarItem>
                      </Link>
                      <Link to="/admin/orders">
                        <MenubarItem className="cursor-pointer">Orders</MenubarItem>
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              )}
            </div>

            <div className="flex items-center gap-4">
              <Link to="/cart" className="text-white relative cursor-pointer">
                <ShoppingCart />
                {cart.length > 0 && (
                  <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full w-4 h-4 bg-red-500 hover:bg-red-500">
                    {cart.length}
                  </Button>
                )}
              </Link>

              <div>
                <Link to="/profile">
                  <Avatar>
                    <AvatarImage src={user?.profilePicture} alt="profilephoto" />
                    <AvatarFallback className="bg-gray-200">CN</AvatarFallback>
                  </Avatar>
                </Link>
              </div>

              {/* <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="cursor-pointer text-white"
                      variant="outline"
                      size="icon"
                    >
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("light")}
                    >
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("dark")}
                    >
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}

              <div className=" pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="cursor-pointer text-white" variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem]  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* ======================================== */}

              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button onClick={logout} className="logout-btn">
                  Logout
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const { user, logout, loading } = useUserStore();
  const { setTheme } = useThemeStore();
  const { cart } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="rounded-full bg-gray-200 text-black hover:bg-gray-200" variant="outline">
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>
            <Link to="/">
              <img src="../Fav Icon/icon .png" alt="logo" className="sidebar-logo cursor-pointer" />
            </Link>
          </SheetTitle>

          {/* 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* ====================================================================== */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>

        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <Link to="/about" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <UserStar />
            <span>About</span>
          </Link>

          <Link to="/menus" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <ShoppingBasket />
            <span>Menus</span>
          </Link>

          <Link to="/order/status" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <HandPlatter />
            <span>Order</span>
          </Link>

          <Link to="/cart" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
            <ShoppingCart />
            <span>Cart ({cart.length})</span>
          </Link>

          {user?.admin && (
            <>
              <Link to="/admin/menu" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                <SquareMenu />
                <span>Menu</span>
              </Link>
              <Link to="/admin/restaurant" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                <UtensilsCrossed />
                <span>Restaurant</span>
              </Link>
              <Link to="/admin/orders" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                <PackageCheck />
                <span>Restaurant Orders</span>
              </Link>
            </>
          )}
        </SheetDescription>

        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <Link to="/profile">
                <AvatarImage className="cursor-pointer" src={user?.profilePicture} />
              </Link>
              <Link to="/profile">
                <AvatarFallback>CN</AvatarFallback>
              </Link>
            </Avatar>
            <Link to="/profile">
              <h1 className="font-bold cursor-pointer">{user?.fullname}</h1>
            </Link>
          </div>

          <SheetClose asChild>
            {loading ? (
              <Button className="bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button onClick={logout} className="logout-btn">
                Logout
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
