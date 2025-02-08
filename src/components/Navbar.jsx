import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import ContactButton from "./ContactButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    return (
        <nav className="w-full fixed top-0 bg-transparent px-20 flex items-center justify-between z-50">
            {/* Logo */}
            <div>
                <img src={logo} alt="Logo" className="w-30" />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-12 text-lg uppercase text-white">
                {[
                    { name: "Home", to: "home" },
                    { name: "About", to: "about" },
                    { name: "Projects", to: "projects" },
                    { name: "Contact", to: "contact" },
                ].map((link) => (
                    <li key={link.to} className="relative">
                        <Link
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer hover:text-gray-600 ${activeSection === link.to ? "text-blue-500" : ""}`}
                            onSetActive={() => setActiveSection(link.to)}
                        >
                            {link.name}
                        </Link>
                        {activeSection === link.to && (
                            <div className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500" />
                        )}
                    </li>
                ))}
                <li>
                    <a
                        href="../assets/CV.pdf"
                        download
                        className="cursor-pointer hover:text-gray-600"
                    >
                        Resume
                    </a>
                </li>
            </ul>

            <ContactButton />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
                    {[
                        { name: "Home", to: "home" },
                        { name: "About", to: "about" },
                        { name: "Projects", to: "projects" },
                        { name: "Contact", to: "contact" },
                    ].map((link) => (
                        <li key={link.to} className="relative">
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer text-lg hover:text-gray-600 ${activeSection === link.to ? "text-blue-500" : ""}`}
                                onSetActive={() => setActiveSection(link.to)}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                            {activeSection === link.to && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
                            )}
                        </li>
                    ))}
                    <li>
                        <a
                            href="../assets/CV.pdf"
                            download
                            className="cursor-pointer text-lg hover:text-gray-600"
                        >
                            Resume
                        </a>
                    </li>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                        Let’s Talk
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
