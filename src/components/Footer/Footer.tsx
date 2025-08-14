import {Link} from 'react-router-dom';
import {motion, type Variants} from 'framer-motion';
import {FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode, FaArrowUp} from 'react-icons/fa';

export function Footer() {
    const containerVariants: Variants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5},
        },
    };

    const socialVariants: Variants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.4},
        },
    };

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="relative bg-gray-950 border-t border-gray-800 text-white mt-auto">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"/>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, margin: "-100px"}}
                className="relative z-10 container mx-auto px-6 py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <motion.h3
                            className="text-2xl font-bold mb-4"
                            whileHover={{scale: 1.02}}
                        >
                            <span
                                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Shachiru Rashmika
                            </span>
                        </motion.h3>
                        <p className="text-gray-400 text-base mb-6 max-w-md leading-relaxed">
                            Full Stack Developer passionate about creating modern, responsive web applications
                            that deliver exceptional user experiences.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['React', 'TypeScript', 'Node.js', 'Python'].map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{scale: 1.05}}
                                    className="px-3 py-1 bg-gray-800/60 text-blue-400 text-sm rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                {to: '/', label: 'Home'},
                                {to: '/about', label: 'About'},
                                {to: '/projects', label: 'Projects'},
                                {to: '/contact', label: 'Contact'}
                            ].map((link) => (
                                <motion.li
                                    key={link.to}
                                    whileHover={{x: 5}}
                                    transition={{type: "spring", stiffness: 300, damping: 20}}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm"
                                    >
                                        <motion.div
                                            className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"
                                            whileHover={{scale: 1.3}}
                                        />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
                        <div className="space-y-4">
                            <motion.a
                                variants={socialVariants}
                                whileHover={{scale: 1.05, x: 3}}
                                whileTap={{scale: 0.95}}
                                href="https://github.com/Shachiru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-white group transition-colors duration-300"
                            >
                                <div
                                    className="p-2.5 bg-gray-800/60 rounded-lg mr-3 group-hover:bg-gray-700/60 transition-colors">
                                    <FaGithub className="text-lg"/>
                                </div>
                                <span className="text-sm">GitHub</span>
                            </motion.a>

                            <motion.a
                                variants={socialVariants}
                                whileHover={{scale: 1.05, x: 3}}
                                whileTap={{scale: 0.95}}
                                href="https://www.linkedin.com/in/shachiru1234"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-blue-400 group transition-colors duration-300"
                            >
                                <div
                                    className="p-2.5 bg-gray-800/60 rounded-lg mr-3 group-hover:bg-blue-600/60 transition-colors">
                                    <FaLinkedin className="text-lg"/>
                                </div>
                                <span className="text-sm">LinkedIn</span>
                            </motion.a>

                            <motion.a
                                variants={socialVariants}
                                whileHover={{scale: 1.05, x: 3}}
                                whileTap={{scale: 0.95}}
                                href="https://twitter.com/shachiru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-blue-400 group transition-colors duration-300"
                            >
                                <div
                                    className="p-2.5 bg-gray-800/60 rounded-lg mr-3 group-hover:bg-blue-500/60 transition-colors">
                                    <FaTwitter className="text-lg"/>
                                </div>
                                <span className="text-sm">Twitter</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.3}}
                    className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                />

                {/* Bottom Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                >
                    <div className="flex items-center text-gray-400 text-sm">
                        <span>&copy; {currentYear} Shachiru Rashmika. Built with</span>
                        <motion.div
                            animate={{scale: [1, 1.2, 1]}}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mx-2"
                        >
                            <FaHeart className="text-red-500"/>
                        </motion.div>
                        <span>and</span>
                        <FaCode className="mx-2 text-blue-400"/>
                        <span>in Sri Lanka</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-gray-500 text-sm">React • TypeScript • Tailwind</span>

                        {/* Back to top button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{scale: 1.1, y: -2}}
                            whileTap={{scale: 0.9}}
                            className="p-2.5 bg-gray-800/60 hover:bg-gray-700/60 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-300"
                            aria-label="Scroll to top"
                        >
                            <FaArrowUp className="text-sm"/>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Current Status */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.5}}
                    className="mt-8 text-center"
                >
                    <div
                        className="inline-flex items-center px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"/>
                        <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}