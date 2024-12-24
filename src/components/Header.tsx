// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/logo/logo.png";
// import { ModeToggle } from "@/components/ui/mode-toggle";
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Home, Book, Users, GraduationCap, Activity, Search } from "lucide-react"; // Importing Lucide icons

// const Header = ({ activePage, handleSignOut }) => {
//     const navItems = [
//         {
//             label: "Recherche",
//             href: "/recherche",
//             icon: Search,
//             submenu: [
//                 { label: "Axes de recherche", href: "/recherche/axederecherche" },
//                 { label: "Statistiques", href: "/recherche/statistiques" },
//             ],
//         },
//         {
//             label: "Formations",
//             href: "/formations",
//             icon: Book,
//         },
//         {
//             label: "Membres",
//             href: "/membres",
//             icon: Users,
//             submenu: [
//                 { label: "Permanents", href: "/membres/permanents" },
//                 { label: "Associes", href: "/membres/associes" },
//                 { label: "Doctorants", href: "/membres/doctorants" },
//             ],
//         },
//         // Move Thèses here to be right after Membres
//         {
//             label: "Thèses",
//             href: "/theses",
//             icon: GraduationCap,
//         },
//         {
//             label: "Activites",
//             href: "/activites",
//             icon: Activity,
//             submenu: [
//                 { label: "Conférences", href: "/activites/conferences" },
//                 { label: "Compétitions", href: "/activites/competitions" },
//                 { label: "Formations", href: "/activites/formations" },
//             ],
//         },
//     ];

//     return (
//         <header className="fixed top-0 z-10 w-full h-14 bg-muted/40 border-b flex items-center justify-between px-4 lg:h-[60px] lg:px-6">
//             {/* Logo Section */}
//             <div className="flex items-center">
//                 <Image src={logo} alt="Logo" width={50} height={50} />
//             </div>

//             {/* Navigation Menu */}
//             <NavigationMenu delayDuration={10}>
//                 <Link
//                     href="/"
//                     className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
//                 >
//                     <Home className="w-4 h-4" />
//                     <span className="">Acceuil</span>
//                 </Link>
//                 {/* <Link
//                     href="/recherche"
//                     className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
//                 >
//                     <Search className="w-4 h-4" />
//                     <span className="">Recherche</span>
//                 </Link> */}

//                 {/* Render Other Nav Items */}
//                 <NavigationMenuList>
//                     {navItems.map((item) => {
//                         const Icon = item.icon;
//                         return (
//                             <NavigationMenuItem key={item.label} className="relative">
//                                 {item.submenu ? (
//                                     <>
//                                         <NavigationMenuTrigger>
//                                             <span className="flex items-center gap-2">
//                                                 <Icon className="w-4 h-4" /> {item.label}
//                                             </span>
//                                         </NavigationMenuTrigger>
//                                         <NavigationMenuContent>
//                                             <ul className="grid w-[728px] gap-3 p-4">
//                                                 {item.submenu.map((subItem) => (
//                                                     <li key={subItem.label} className="relative group">
//                                                         <NavigationMenuLink asChild>
//                                                             <Link
//                                                                 href={subItem.href}
//                                                                 className="block text-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground hover:font-bold"
//                                                             >
//                                                                 {subItem.label}
//                                                             </Link>
//                                                         </NavigationMenuLink>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </NavigationMenuContent>
//                                     </>
//                                 ) : (
//                                     <NavigationMenuLink asChild>
//                                         <Link
//                                             href={item.href}
//                                             className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
//                                         >
//                                             <Icon className="w-4 h-4" /> {item.label}
//                                         </Link>
//                                     </NavigationMenuLink>
//                                 )}
//                             </NavigationMenuItem>
//                         );
//                     })}
//                 </NavigationMenuList>
//             </NavigationMenu>

//             {/* Right Section */}
//             <div className="flex items-center gap-4">
//                 <ModeToggle />
//             </div>
//         </header>
//     );
// };

// export default Header;

"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Home, Book, Users, GraduationCap, Activity, Search } from "lucide-react"; // Importing Lucide icons
import { useState } from "react"; // Import useState for toggling the menu

const Header = ({ activePage, handleSignOut }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu toggle
    const navItems = [
<<<<<<< HEAD
        {
            label: "Recherche",
            href: "/recherche",
            icon: Search,
            submenu: [
                { label: "Axes de recherche", href: "/recherche/axederecherche" },
                { label: "Publications", href: "/recherche/publications" },
                { label: "Statistiques", href: "/recherche/statistiques" },
            ],
        },
=======
>>>>>>> 539ce03bd883e6b2cf343da50fff2d676f5687aa
        {
            label: "Formations",
            href: "/formations",
            icon: Book,
        },
        {
            label: "Membres",
            href: "/membres",
            icon: Users,
            submenu: [
                { label: "Permanents", href: "/membres/permanents" },
                { label: "Associes", href: "/membres/associes" },
                { label: "Doctorants", href: "/membres/doctorants" },
            ],
        },
        // Move Thèses here to be right after Membres
        {
            label: "Thèses",
            href: "/theses",
            icon: GraduationCap,
        },
        {
            label: "Activites",
            href: "/activites",
            icon: Activity,
            submenu: [
                { label: "Conférences", href: "/activites/conferences" },
                { label: "Compétitions", href: "/activites/competitions" },
                { label: "Formations", href: "/activites/formations" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 z-10 w-full h-14 bg-muted/40 border-b flex items-center justify-between px-4 lg:h-[60px] lg:px-6">
            {/* Logo Section */}
            <div className="flex items-center">
                <Image src={logo} alt="Logo" width={50} height={50} />
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex justify-center text-secondary-foreground">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu delayDuration={10}>
<<<<<<< HEAD
                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <Link
                        href="/"
                        className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        <span className="">Acceuil</span>
                    </Link>

                    {/* Render Other Nav Items */}
                    <NavigationMenuList>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavigationMenuItem key={item.label} className="relative">
                                    {item.submenu ? (
                                        <>
                                            <NavigationMenuTrigger>
                                                <span className="flex items-center gap-2">
                                                    <Icon className="w-4 h-4" /> {item.label}
                                                </span>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[728px] gap-3 p-4">
                                                    {item.submenu.map((subItem) => (
                                                        <li key={subItem.label} className="relative group">
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="block text-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground hover:font-bold"
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={item.href}
                                                className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
                                            >
                                                <Icon className="w-4 h-4" /> {item.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </div>
=======
                <Link 
                    href="/" 
                    className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
                >
                    <Home className="w-4 h-4" />
                    <span className="">Acceuil</span>
                </Link>

                {/* Render Other Nav Items */}
                <NavigationMenuList>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavigationMenuItem key={item.label} className="relative">
                                {item.submenu ? (
                                    <>
                                        <NavigationMenuTrigger>
                                            <span className="flex items-center gap-2">
                                                <Icon className="w-4 h-4" /> {item.label}
                                            </span>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[628px] gap-3 p-4">
                                                {item.submenu.map((subItem) => (
                                                    <li key={subItem.label} className="relative group">
                                                        <NavigationMenuLink asChild>
                                                            <Link
                                                                href={subItem.href}
                                                                className="block text-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground hover:font-bold"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild>
                                        <Link 
                                            href={item.href}
                                            className="mr-1 h-10 w-max bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 p-2 rounded flex justify-center items-center gap-2"
                                        >
                                            <Icon className="w-4 h-4" /> {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
>>>>>>> 539ce03bd883e6b2cf343da50fff2d676f5687aa
            </NavigationMenu>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-background p-4">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label} className="py-2">
                                <Link href={item.href} className="flex items-center gap-2">
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </Link>
                                {item.submenu && (
                                    <ul className="pl-6 mt-2">
                                        {item.submenu.map((subItem) => (
                                            <li key={subItem.label}>
                                                <Link
                                                    href={subItem.href}
                                                    className="block py-2 px-4 hover:bg-accent"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
