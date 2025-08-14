import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function NavBar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
                    : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo/Brand */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
                        >
                            Shachiru.
                        </Link>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.ul
                        variants={containerVariants}
                        className="hidden md:flex items-center space-x-1"
                    >
                        {navItems.map((item) => (
                            <motion.li
                                key={item.to}
                                variants={itemVariants}
                                whileHover={{ y: -2 }}
                            >
                                <Link
                                    to={item.to}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                                        location.pathname === item.to
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item.label}

                                    {/* Active indicator */}
                                    {location.pathname === item.to && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gray-800 rounded-lg -z-10"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-gray-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Mobile Menu Button */}
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                        onClick={() => {
                            // Add mobile menu toggle logic here
                            console.log('Mobile menu toggle');
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu (you can expand this) */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-4 py-4 border-t border-gray-800"
                    // Add conditional rendering based on mobile menu state
                    style={{ display: 'none' }} // Remove this when implementing mobile menu
                >
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.to}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={item.to}
                                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    location.pathname === item.to
                                        ? 'text-blue-400 bg-gray-800'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </nav>
        </motion.header>
    );
}