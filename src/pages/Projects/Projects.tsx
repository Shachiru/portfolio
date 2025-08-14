import { motion, type Variants } from 'framer-motion';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { FaRocket, FaFilter, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export function Projects() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Sample project data - replace with your actual projects
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React and Node.js",
            longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. Implemented responsive design and optimized for performance.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
            githubUrl: "https://github.com/Shachiru/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.vercel.app",
            featured: true,
            status: "completed" as const,
            startDate: "2024-01",
            endDate: "2024-03",
            category: "Full Stack"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            longDescription: "A collaborative task management application featuring real-time synchronization, drag-and-drop functionality, team collaboration tools, and comprehensive project tracking. Built with modern React patterns and WebSocket integration.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
            technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL", "Tailwind CSS"],
            githubUrl: "https://github.com/Shachiru/task-manager",
            demoUrl: "https://task-manager-demo.netlify.app",
            status: "completed" as const,
            startDate: "2023-10",
            endDate: "2023-12",
            category: "Full Stack"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather dashboard with location-based forecasts",
            longDescription: "A beautiful weather dashboard application that provides real-time weather information, 7-day forecasts, and location-based weather alerts. Features interactive charts, responsive design, and integration with multiple weather APIs.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
            technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API", "CSS3"],
            githubUrl: "https://github.com/Shachiru/weather-dashboard",
            liveUrl: "https://weather-dash-app.vercel.app",
            status: "completed" as const,
            startDate: "2023-08",
            endDate: "2023-09",
            category: "Frontend"
        },
        {
            title: "AI Chat Application",
            description: "Modern chat app with AI integration and real-time messaging",
            longDescription: "An innovative chat application that combines traditional messaging with AI-powered features. Includes real-time messaging, AI chatbot integration, file sharing, group chats, and advanced message filtering and search capabilities.",
            image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop",
            technologies: ["Next.js", "OpenAI API", "Socket.io", "Prisma", "PostgreSQL", "Tailwind CSS"],
            githubUrl: "https://github.com/Shachiru/ai-chat-app",
            status: "in-progress" as const,
            startDate: "2024-06",
            category: "Full Stack"
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio website with animations and responsive design",
            longDescription: "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, and Framer Motion for smooth animations. Features dark theme, interactive elements, and optimized performance.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
            technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/Shachiru/portfolio",
            liveUrl: "https://shachiru.dev",
            featured: true,
            status: "completed" as const,
            startDate: "2024-07",
            endDate: "2024-08",
            category: "Frontend"
        },
        {
            title: "Blockchain Voting System",
            description: "Secure voting system built on blockchain technology",
            longDescription: "A decentralized voting system leveraging blockchain technology to ensure transparency, security, and immutability of votes. Features smart contracts, voter verification, and real-time results tracking.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
            githubUrl: "https://github.com/Shachiru/blockchain-voting",
            status: "planning" as const,
            startDate: "2024-09",
            category: "Blockchain"
        }
    ];

    const categories = ['all', 'Full Stack', 'Frontend', 'Backend', 'Blockchain', 'Mobile'];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-gray-900 text-white py-20"
        >
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaRocket className="text-blue-400 text-4xl mr-4" />
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold"
                            whileHover={{ scale: 1.02 }}
                        >
                            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Here's a collection of projects I've worked on, showcasing my skills in full-stack development,
                        modern web technologies, and creative problem-solving. Each project represents a unique challenge
                        and learning experience.
                    </motion.p>
                </motion.div>

                {/* Filter and Search Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2">
                            <FaFilter className="text-gray-400" />
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedFilter(category)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                            selectedFilter === category
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        {category === 'all' ? 'All Projects' : category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            {...project}
                        />
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div variants={itemVariants} className="text-center">
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30">
                        <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities and exciting projects.
                            Let's connect and see how we can create something amazing together!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Let's Collaborate
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}