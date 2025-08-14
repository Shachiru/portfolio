import { motion, type Variants } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaClock, FaUser, FaComments } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'shachirurashmika35@gmail.com',
            link: 'mailto:shachirurashmika35@gmail.com',
            description: 'Drop me a line anytime'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+94 77 927 6268',
            link: 'tel:+94779276268',
            description: 'Call or text me'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Sri Lanka',
            link: null,
            description: 'Based in Sri Lanka'
        },
        {
            icon: FaClock,
            title: 'Response Time',
            value: '24 hours',
            link: null,
            description: 'Typical response time'
        }
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            name: 'GitHub',
            url: 'https://github.com/Shachiru',
            color: 'hover:text-white'
        },
        {
            icon: FaLinkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shachiru1234',
            color: 'hover:text-blue-400'
        },
        {
            icon: FaTwitter,
            name: 'Twitter',
            url: 'https://twitter.com/shachiru',
            color: 'hover:text-blue-400'
        }
    ];

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
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        <FaComments className="text-blue-400 text-4xl mr-4" />
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                        Let's discuss how we can work together to create something amazing.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div variants={itemVariants}>
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <FaUser className="text-blue-400 mr-3" />
                                Contact Information
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Ready to start a conversation? Reach out through any of the channels below,
                                and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {contactInfo.map((info) => (
                                <motion.div
                                    key={info.title}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                                            <info.icon className="text-blue-400 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">{info.title}</h3>
                                            <p className="text-gray-500 text-sm">{info.description}</p>
                                        </div>
                                    </div>
                                    {info.link ? (
                                        <motion.a
                                            href={info.link}
                                            whileHover={{ x: 5 }}
                                            className="text-blue-400 hover:text-blue-300 font-medium transition-colors block"
                                        >
                                            {info.value}
                                        </motion.a>
                                    ) : (
                                        <p className="text-gray-300 font-medium">{info.value}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-4 bg-gray-800/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700/50`}
                                    >
                                        <social.icon className="text-2xl" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <FaPaperPlane className="text-purple-400 mr-3" />
                                Send Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </motion.div>

                                {/* Email Input */}
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>

                                {/* Subject Input */}
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Let's collaborate on a project"
                                    />
                                </motion.div>

                                {/* Message Textarea */}
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                                        placeholder="Tell me about your project or how we can work together..."
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
                                        isSubmitting
                                            ? 'bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30">
                        <h2 className="text-3xl font-bold mb-4">Ready to Start Something Great?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Whether it's a new project, collaboration opportunity, or just a chat about technology,
                            I'm always excited to connect with fellow developers and innovators.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.a
                                href="mailto:shachirurashmika35@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center"
                            >
                                <FaEnvelope className="mr-2" />
                                Email Me Directly
                            </motion.a>
                            <motion.a
                                href="tel:+94779276268"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-300 flex items-center"
                            >
                                <FaPhone className="mr-2" />
                                Call Me
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}