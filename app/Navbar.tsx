'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="flex justify-around mt-4 relative text-white ">
                {[
                    { href: "/", label: "Home" },
                    { href: "/projects", label: "Projects" },
                    { href: "/about", label: "About" },
                ].map(({ href, label }) => (
                    <li key={href} className="">
                        <Link href={href} className="navlink relative px-4 py-2 z-1">
                            {label}
                            {pathname === href && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute bottom-0 h-8 w-full bg-black
                                    rounded-full 
                                    transition-opacity duration-300 ease-in-out
                                    z-10
                                    left-0
                                   "

                                    animate={{ opacity: 0.25 }}
                                    initial={{ opacity: 0 }}
                                />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

}

export default Navbar