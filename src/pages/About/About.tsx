import {motion, type Variants} from 'framer-motion';
import {
    FaGraduationCap,
    FaCertificate,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaAward,
    FaCode,
    FaUser,
    FaLightbulb
} from 'react-icons/fa';

export function About() {
    const containerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Education data
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Colombo",
            location: "Colombo, Sri Lanka",
            period: "2020 - 2024",
            gpa: "3.8/4.0",
            description: "Specialized in Software Engineering and Web Development. Completed coursework in Data Structures, Algorithms, Database Systems, and Software Architecture.",
            achievements: [
                "Dean's List for 3 consecutive semesters",
                "President of Computer Science Society",
                "Led final year project on AI-driven web applications"
            ]
        },
        {
            degree: "Advanced Level (A/L)",
            institution: "Royal College Colombo",
            location: "Colombo, Sri Lanka",
            period: "2018 - 2020",
            gpa: "A for Mathematics, B for Physics, B for Chemistry",
            description: "Mathematics stream with focus on Pure Mathematics, Applied Mathematics, Physics, and Chemistry.",
            achievements: [
                "School prefect and technology club leader",
                "Winner of inter-school programming competition",
                "Organized tech workshops for junior students"
            ]
        }
    ];

    // Certificates data
    const certificates = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2024",
            credentialId: "AWS-SAA-2024-001",
            description: "Comprehensive certification covering cloud architecture, security, and scalability best practices.",
            skills: ["AWS", "Cloud Computing", "Architecture Design"]
        },
        {
            name: "React Developer Professional Certificate",
            issuer: "Meta (Facebook)",
            date: "2023",
            credentialId: "META-REACT-2023-456",
            description: "Advanced React development including hooks, context, testing, and performance optimization.",
            skills: ["React", "JavaScript", "Testing"]
        },
        {
            name: "Full Stack Web Development",
            issuer: "freeCodeCamp",
            date: "2023",
            credentialId: "FCC-FSWD-2023-789",
            description: "Comprehensive program covering frontend and backend development with modern frameworks.",
            skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"]
        },
        {
            name: "TypeScript Professional Certification",
            issuer: "Microsoft",
            date: "2023",
            credentialId: "MS-TS-2023-123",
            description: "Advanced TypeScript concepts including generics, decorators, and enterprise patterns.",
            skills: ["TypeScript", "JavaScript", "Software Architecture"]
        }
    ];

    const skills = [
        {name: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]},
        {name: "Backend", items: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL"]},
        {name: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"]},
        {name: "Concepts", items: ["Responsive Design", "RESTful APIs", "Agile", "Test-Driven Development"]}
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 text-white py-20 pb-32"
        >
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6"
                        whileHover={{scale: 1.02}}
                    >
                        About <span
                        className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        I'm <span className="text-blue-400 font-semibold">Shachiru Rashmika</span>, a passionate Full
                        Stack Developer
                        with a strong foundation in computer science and a love for creating innovative web solutions
                        that make a difference.
                    </motion.p>
                </motion.div>

                {/* Personal Story Section */}
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <div className="flex items-center mb-6">
                            <FaUser className="text-blue-400 text-2xl mr-3"/>
                            <h2 className="text-3xl font-bold">My Journey</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    My journey in technology began during my school years when I first discovered the
                                    magic of coding.
                                    What started as curiosity about how websites work evolved into a deep passion for
                                    creating
                                    digital experiences that solve real-world problems.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Throughout my academic journey at the University of Colombo, I've honed my skills in
                                    both
                                    theoretical computer science and practical software development, always staying
                                    curious
                                    about emerging technologies.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <motion.div
                                    animate={{rotate: 360}}
                                    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                                    className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                                >
                                    <FaLightbulb className="text-4xl text-white"/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="flex items-center mb-12">
                        <FaGraduationCap className="text-blue-400 text-3xl mr-4"/>
                        <h2 className="text-4xl font-bold">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{scale: 1.02, y: -5}}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
                            >
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <h3 className="text-2xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
                                        <h4 className="text-xl font-semibold text-gray-200 mb-3">{edu.institution}</h4>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{edu.description}</p>

                                        <div className="mb-4">
                                            <h5 className="font-semibold text-gray-300 mb-2">Key Achievements:</h5>
                                            <ul className="space-y-1">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-gray-400 flex items-center">
                                                        <FaAward className="text-yellow-500 mr-2 text-sm"/>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center text-gray-400">
                                            <FaCalendarAlt className="mr-2 text-blue-400"/>
                                            {edu.period}
                                        </div>
                                        <div className="flex items-center text-gray-400">
                                            <FaMapMarkerAlt className="mr-2 text-green-400"/>
                                            {edu.location}
                                        </div>
                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <p className="text-sm font-semibold text-gray-300">Academic Performance</p>
                                            <p className="text-blue-400 font-bold">{edu.gpa}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="flex items-center mb-12">
                        <FaCertificate className="text-purple-400 text-3xl mr-4"/>
                        <h2 className="text-4xl font-bold">Professional Certifications</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{scale: 1.03, rotateY: 5}}
                                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <FaCertificate className="text-purple-400 text-2xl mt-1"/>
                                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-purple-300 font-semibold mb-3">{cert.issuer}</p>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cert.description}</p>

                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 mb-2">Credential ID: {cert.credentialId}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="flex items-center mb-12">
                        <FaCode className="text-green-400 text-3xl mr-4"/>
                        <h2 className="text-4xl font-bold">Technical Skills</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{y: -10}}
                                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-green-400 mb-4">{skillGroup.name}</h3>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{x: 5}}
                                            className="text-gray-300 hover:text-white transition-colors cursor-default"
                                        >
                                            • {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center"
                >
                    <div
                        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30">
                        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            I'm always excited to work on new projects and collaborate with like-minded individuals.
                            Let's connect and create something extraordinary!
                        </p>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}