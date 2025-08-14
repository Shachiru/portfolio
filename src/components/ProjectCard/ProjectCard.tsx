import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaStar } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    status?: 'completed' | 'in-progress' | 'planning';
    startDate?: string;
    endDate?: string;
    category?: string;
}

export function ProjectCard({
                                title,
                                description,
                                longDescription,
                                image,
                                technologies,
                                githubUrl,
                                liveUrl,
                                demoUrl,
                                featured = false,
                                status = 'completed',
                                startDate,
                                endDate,
                                category
                            }: ProjectCardProps) {
    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants: Variants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500';
            case 'in-progress':
                return 'bg-yellow-500';
            case 'planning':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'in-progress':
                return 'In Progress';
            case 'planning':
                return 'Planning';
            default:
                return 'Unknown';
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
            className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                featured
                    ? 'border-gradient-to-r from-blue-500 to-purple-500 border-2 hover:border-blue-400'
                    : 'border-gray-700 hover:border-gray-600'
            }`}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-20">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center"
                    >
                        <FaStar className="mr-1" />
                        Featured
                    </motion.div>
                </div>
            )}

            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-20">
                <div className={`${getStatusColor(status)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center`}>
                    <div className={`w-2 h-2 ${getStatusColor(status)} rounded-full mr-2 animate-pulse`}></div>
                    {getStatusText(status)}
                </div>
            </div>

            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    variants={imageVariants}
                    whileHover="hover"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Action Buttons */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/80 transition-colors"
                        >
                            <FaGithub className="text-lg" />
                        </motion.a>
                    )}
                    {(liveUrl || demoUrl) && (
                        <motion.a
                            href={liveUrl || demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/80 transition-colors"
                        >
                            <FaExternalLinkAlt className="text-lg" />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Category and Date */}
                <div className="flex justify-between items-center mb-3">
                    {category && (
                        <span className="text-blue-400 text-sm font-medium bg-blue-900/30 px-2 py-1 rounded">
                            {category}
                        </span>
                    )}
                    <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendarAlt className="mr-1" />
                        {endDate || startDate}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {longDescription || description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <FaCode className="text-green-400 mr-2" />
                        <span className="text-green-400 text-sm font-medium">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-gray-500 transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                        >
                            <FaGithub className="mr-2" />
                            Code
                        </motion.a>
                    )}
                    {(liveUrl || demoUrl) && (
                        <motion.a
                            href={liveUrl || demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center"
                        >
                            <FaExternalLinkAlt className="mr-2" />
                            {liveUrl ? 'Live Demo' : 'Demo'}
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
            </div>
        </motion.div>
    );
}