import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Award,
  Calendar,
  Download,
  ChevronDown,
  Star,
  Zap,
  Target,
  Rocket,
  Eye,
  Lock,
  Server,
  Brain,
  Camera,
  FileText,
  Users,
  TrendingUp,
  Cpu,
  Network,
  Globe,
  Terminal,
  Layers,
  Briefcase,
  GraduationCap,
  Trophy,
  Heart,
  Coffee,
  Music,
  Palette
} from 'lucide-react'
import './App.css'

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-pink-500/30 to-yellow-500/30 transform rotate-45"
        animate={{
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Skill card component
const SkillCard = ({ skill, level, icon, delay = 0, category }) => {
  const ref = useRef()
  const isInView = useInView(ref)
  
  const categoryColors = {
    programming: 'from-blue-500 to-cyan-500',
    security: 'from-red-500 to-pink-500',
    data: 'from-green-500 to-emerald-500',
    tools: 'from-purple-500 to-indigo-500',
    soft: 'from-orange-500 to-yellow-500'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      className="group"
    >
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl relative overflow-hidden h-full">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} opacity-0 group-hover:opacity-10`}
          transition={{ duration: 0.3 }}
        />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
              {icon}
            </div>
            <span className="text-sm text-slate-400">{level}%</span>
          </div>
          <h3 className="text-white font-semibold mb-3">{skill}</h3>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <motion.div
              className={`bg-gradient-to-r ${categoryColors[category]} h-2 rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${level}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Project card component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl h-full relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10`}
          transition={{ duration: 0.3 }}
        />
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
              animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {project.icon}
            </motion.div>
            <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
              {project.period}
            </span>
          </div>
          <CardTitle className="text-white group-hover:text-cyan-300 transition-colors text-lg">
            {project.title}
          </CardTitle>
          {project.category && (
            <Badge variant="outline" className="border-cyan-400/30 text-cyan-300 w-fit">
              {project.category}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Jayesh_Patil_Resume.pdf'
    link.download = 'Jayesh_Patil_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Complete skills data with all technologies from resumes
  const skills = {
    programming: [
      { name: 'Python', level: 90, icon: <Code className="w-5 h-5" /> },
      { name: 'JavaScript', level: 85, icon: <Code className="w-5 h-5" /> },
      { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5" /> },
      { name: 'HTML/CSS', level: 85, icon: <Globe className="w-5 h-5" /> },
      { name: 'SQL', level: 90, icon: <Database className="w-5 h-5" /> },
      { name: 'MySQL', level: 85, icon: <Database className="w-5 h-5" /> }
    ],
    security: [
      { name: 'Cybersecurity', level: 80, icon: <Shield className="w-5 h-5" /> },
      { name: 'Linux', level: 75, icon: <Terminal className="w-5 h-5" /> },
      { name: 'Network Security', level: 70, icon: <Network className="w-5 h-5" /> },
      { name: 'Vulnerability Assessment', level: 75, icon: <Eye className="w-5 h-5" /> }
    ],
    data: [
      { name: 'Data Science', level: 85, icon: <Brain className="w-5 h-5" /> },
      { name: 'Alteryx', level: 80, icon: <Layers className="w-5 h-5" /> },
      { name: 'Tableau', level: 85, icon: <BarChart3 className="w-5 h-5" /> },
      { name: 'Power BI', level: 80, icon: <TrendingUp className="w-5 h-5" /> },
      { name: 'OpenCV', level: 75, icon: <Eye className="w-5 h-5" /> },
      { name: 'PaddleOCR', level: 70, icon: <FileText className="w-5 h-5" /> }
    ],
    tools: [
      { name: 'AWS', level: 70, icon: <Cloud className="w-5 h-5" /> },
      { name: 'Postman', level: 80, icon: <Server className="w-5 h-5" /> },
      { name: 'Excel', level: 85, icon: <FileText className="w-5 h-5" /> },
      { name: 'Tkinter', level: 75, icon: <Code className="w-5 h-5" /> },
      { name: 'API Development', level: 80, icon: <Network className="w-5 h-5" /> }
    ],
    soft: [
      { name: 'Leadership', level: 85, icon: <Users className="w-5 h-5" /> },
      { name: 'Communication', level: 90, icon: <Users className="w-5 h-5" /> },
      { name: 'Problem Solving', level: 90, icon: <Brain className="w-5 h-5" /> },
      { name: 'Analytical Thinking', level: 95, icon: <Brain className="w-5 h-5" /> },
      { name: 'Teamwork', level: 85, icon: <Users className="w-5 h-5" /> }
    ]
  }

  // Complete projects data including all projects from resumes
  const projects = [
    {
      title: 'Healthcare Claims Data Analysis',
      category: 'Data Analytics',
      technologies: ['Alteryx', 'SQL', 'Tableau', 'DBMS'],
      period: 'Oct 2021 - Mar 2022',
      description: 'Processed and analyzed large-scale healthcare claims data using Alteryx and SQL to identify cost trends, claim patterns, and inefficiencies. Created interactive Tableau dashboards to present insights on patient demographics and regional claim summaries, supporting data-driven decision-making.',
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'OCR-Based Card Scanning System',
      category: 'Computer Vision',
      technologies: ['Python', 'PaddleOCR', 'OpenCV', 'Tkinter'],
      period: 'Jun 2024 - Sep 2024',
      description: 'Developed a Python GUI application using PaddleOCR and OpenCV to capture ID cards, extract text, and store it in JSON format for digital record-keeping. Integrated real-time webcam feed, text-to-speech feedback, and retake functionality to enhance user experience and ensure accurate, efficient ID digitization.',
      icon: <Camera className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Pizza Sales Analysis Dashboard',
      category: 'Business Intelligence',
      technologies: ['MySQL', 'DBMS', 'SQL'],
      period: 'Jan 2023 - Apr 2023',
      description: 'Conducted comprehensive SQL analysis of pizza sales data, identifying popular types, peak times, and revenue trends across different sizes. Provided actionable business insights and demonstrated advanced SQL proficiency through complex queries and data visualization.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'EGR Sheet Evaluator',
      category: 'Image Processing',
      technologies: ['Python', 'OpenCV', 'Image Processing'],
      period: 'Oct 2021 - Mar 2022',
      description: 'Developed an automated evaluation system for EGR (Exhaust Gas Recirculation) sheets using advanced image processing techniques. Documented the module\'s functionality, performance metrics, and evaluation results comprehensively. Delivered clear presentations to team members and management, effectively communicating complex technical concepts.',
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'CCTV Management System',
      category: 'Cybersecurity',
      technologies: ['Python', 'SQL', 'Linux', 'Database Management'],
      period: 'Apr 2024 - Oct 2024',
      description: 'Contributed to an Election Commission project focused on managing CCTV camera feeds for enhanced security monitoring. Managed and optimized a CCTV footage database, ensuring secure storage, efficient retrieval, and automated backup processes for enhanced system reliability and data integrity.',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Video Management System (VMS)',
      category: 'Web Development',
      technologies: ['Node.js', 'JavaScript', 'API', 'Real-time Streaming'],
      period: 'Oct 2024 - Present',
      description: 'Currently developing next-generation Video Management System (VMS) web applications with advanced features including real-time camera integration, live streaming capabilities, and remote device configuration. Implementing modern web technologies to create scalable and efficient video management solutions.',
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  const experiences = [
    {
      title: 'Jr. Software Developer',
      company: 'Adiance Technologies Pvt. Ltd.',
      period: 'Oct 2024 – Present',
      technologies: ['Node.js', 'JavaScript', 'API', 'VMS'],
      description: 'Actively involved in building next-generation Video Management System (VMS) web applications with features like real-time camera integration, live streaming, and remote device configuration. Working on cutting-edge technologies to deliver scalable video management solutions.',
      icon: <Code className="w-6 h-6" />,
      type: 'current'
    },
    {
      title: 'Research and Development Intern',
      company: 'VMukti Solutions Pvt. Ltd.',
      period: 'Apr 2024 – Oct 2024',
      technologies: ['Python', 'SQL', 'Linux', 'Cybersecurity'],
      description: 'Contributed to an Election Commission project focused on managing CCTV camera feeds for enhanced security. Managed and optimized a CCTV footage database, ensuring secure storage, efficient retrieval, and automated backup processes for enhanced system reliability.',
      icon: <Shield className="w-6 h-6" />,
      type: 'past'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-cyan-400/50 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-slate-900/20 backdrop-blur-xl border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                JP
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#22d3ee' }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-cyan-400 text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">Jayesh</span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Patil
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex justify-center items-center space-x-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h2 className="text-xl md:text-2xl text-slate-300">
                  Cybersecurity Enthusiast & Full-Stack Developer
                </h2>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-8 h-8 text-purple-400" />
                </motion.div>
              </div>
              
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: <Database className="w-6 h-6" />, label: 'Data Analytics' },
                  { icon: <Shield className="w-6 h-6" />, label: 'Cybersecurity' },
                  { icon: <Code className="w-6 h-6" />, label: 'Development' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50"
                  >
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about transforming complex data into actionable insights and building secure, 
              scalable systems. Specializing in cybersecurity, data analytics, and modern web development 
              with a focus on creating innovative solutions that drive business growth.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg relative overflow-hidden group border-0"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Explore Projects
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Cybersecurity & Development Expert</h3>
                  </div>
                  
                  <motion.p 
                    className="text-slate-300 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    I'm a passionate Jr. Software Developer with 1 year of industry experience and a strong focus on 
                    cybersecurity and data analytics. My expertise spans across secure system development, data processing, 
                    and modern web technologies, with hands-on experience in vulnerability assessment, penetration testing, 
                    and secure coding practices.
                  </motion.p>
                  
                  <motion.p 
                    className="text-slate-300 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    I have proven ability to transform raw healthcare and operational data into actionable business insights 
                    using advanced analytics tools like Tableau, Power BI, and custom Python solutions. My background includes 
                    secure systems architecture, API development, and comprehensive cybersecurity implementations.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">1+</div>
                      <div className="text-sm text-slate-400">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">6+</div>
                      <div className="text-sm text-slate-400">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-pink-400">3</div>
                      <div className="text-sm text-slate-400">Cisco Certifications</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-400">4⭐</div>
                      <div className="text-sm text-slate-400">HackerRank SQL</div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: MapPin, text: 'Pune, India', color: 'text-green-400', bg: 'bg-green-500/10' },
                { icon: Phone, text: '7666804295', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { icon: Mail, text: 'jcpjamner1231@gmail.com', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                { icon: Linkedin, text: 'LinkedIn Profile', color: 'text-cyan-400', bg: 'bg-cyan-500/10', link: 'https://www.linkedin.com/in/jayesh-patil-402921272' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl ${item.bg} backdrop-blur-sm border border-slate-700/50 group cursor-pointer`}
                >
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
                  )}
                </motion.div>
              ))}

              {/* Interests & Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-red-400 mr-2" />
                  Interests & Activities
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Camera className="w-4 h-4" />, text: 'Photography', color: 'text-yellow-400' },
                    { icon: <Users className="w-4 h-4" />, text: 'NGO Work', color: 'text-green-400' },
                    { icon: <Palette className="w-4 h-4" />, text: 'Event Management', color: 'text-purple-400' },
                    { icon: <Coffee className="w-4 h-4" />, text: 'Tech Meetups', color: 'text-orange-400' }
                  ].map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-slate-800/30 border border-slate-700/30"
                    >
                      <span className={interest.color}>{interest.icon}</span>
                      <span className="text-sm text-slate-300">{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A comprehensive skill set spanning cybersecurity, data analytics, and modern development technologies
            </p>
          </motion.div>

          {/* Skills Categories */}
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 capitalize flex items-center">
                {category === 'programming' && <Code className="w-6 h-6 text-blue-400 mr-3" />}
                {category === 'security' && <Shield className="w-6 h-6 text-red-400 mr-3" />}
                {category === 'data' && <BarChart3 className="w-6 h-6 text-green-400 mr-3" />}
                {category === 'tools' && <Server className="w-6 h-6 text-purple-400 mr-3" />}
                {category === 'soft' && <Users className="w-6 h-6 text-orange-400 mr-3" />}
                {category.replace('_', ' ')} Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillList.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={index * 0.1}
                    category={category}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Professional Experience</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 h-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl relative overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 ${exp.type === 'current' ? 'bg-gradient-to-r from-green-500/10 to-cyan-500/10' : 'bg-gradient-to-r from-purple-500/10 to-blue-500/10'}`}
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className={exp.type === 'current' ? 'text-green-400' : 'text-purple-400'}
                              >
                                {exp.icon}
                              </motion.div>
                              <div>
                                <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                                <CardDescription className="text-cyan-300 text-lg">{exp.company}</CardDescription>
                              </div>
                            </div>
                            {exp.type === 'current' && (
                              <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-slate-400 mt-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <p className="text-slate-300 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge variant="outline" className="border-cyan-400/30 text-cyan-300">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 ${exp.type === 'current' ? 'bg-gradient-to-r from-green-400 to-cyan-400' : 'bg-gradient-to-r from-purple-400 to-blue-400'} rounded-full relative z-10 border-4 border-slate-900`}
                  />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A showcase of innovative projects spanning cybersecurity, data analytics, and modern web development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Education & Certifications</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl h-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white flex items-center text-2xl">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
                    </motion.div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">B.Tech - Computer Science</h3>
                    <p className="text-cyan-300 font-medium">MIT Academy of Engineering, Pune</p>
                    <p className="text-slate-400 mt-2">2020 – 2024 | CGPA: 7.77</p>
                    <div className="mt-4 flex items-center">
                      <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-sm text-slate-300">Specialized in Computer Science & Engineering</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">HSC - MSBSHSE</h3>
                    <p className="text-purple-300 font-medium">Secondary and Higher Secondary College Kusumba, Jalgaon</p>
                    <p className="text-slate-400 mt-2">2020 | Percentage: 79%</p>
                    <div className="mt-4 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-sm text-slate-300">Science Stream with Mathematics</span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl h-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white flex items-center text-2xl">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Award className="w-8 h-8 mr-3 text-yellow-400" />
                    </motion.div>
                    Certifications & Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {[
                    { org: 'Cisco', cert: 'Introduction to Cybersecurity', color: 'from-red-500 to-orange-500', icon: <Shield className="w-5 h-5" /> },
                    { org: 'Cisco', cert: 'Networking Essentials', color: 'from-blue-500 to-cyan-500', icon: <Network className="w-5 h-5" /> },
                    { org: 'Cisco', cert: 'Cyber-ops Associate', color: 'from-purple-500 to-pink-500', icon: <Lock className="w-5 h-5" /> },
                    { org: 'HackerRank', cert: 'SQL 4 Star Rating', color: 'from-green-500 to-emerald-500', icon: <Database className="w-5 h-5" /> }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-opacity-20 border-current group cursor-pointer`}
                    >
                      <div className="text-white group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="border-current text-current mb-2">
                          {item.org}
                        </Badge>
                        <p className="text-white font-medium">{item.cert}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Additional Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20"
                  >
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                      Other Achievements
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• NGO Saksham Active Member - Community Service</li>
                      <li>• Shutterbugs Club Member - Photography</li>
                      <li>• College Events Management Participant</li>
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-slate-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to collaborate on exciting projects or discuss opportunities in cybersecurity and development? 
              Let's build something amazing together!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-xl relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <CardContent className="p-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { 
                      icon: Mail, 
                      label: 'Email', 
                      value: 'jcpjamner1231@gmail.com', 
                      href: 'mailto:jcpjamner1231@gmail.com', 
                      color: 'from-purple-500 to-pink-500',
                      description: 'Drop me a line anytime'
                    },
                    { 
                      icon: Phone, 
                      label: 'Phone', 
                      value: '+91 7666804295', 
                      href: 'tel:+917666804295', 
                      color: 'from-blue-500 to-cyan-500',
                      description: 'Let\'s have a conversation'
                    },
                    { 
                      icon: Linkedin, 
                      label: 'LinkedIn', 
                      value: 'Connect with me', 
                      href: 'https://www.linkedin.com/in/jayesh-patil-402921272', 
                      color: 'from-cyan-500 to-blue-500',
                      description: 'Professional networking'
                    },
                    { 
                      icon: MapPin, 
                      label: 'Location', 
                      value: 'Pune, India', 
                      color: 'from-green-500 to-emerald-500',
                      description: 'Available for remote work'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-opacity-20 border-current group-hover:border-opacity-40 transition-all duration-300 block`}
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-white group-hover:scale-110 transition-transform"
                          >
                            <item.icon className="w-8 h-8" />
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-white font-semibold text-lg">{item.label}</p>
                            <p className="text-slate-300 font-medium">{item.value}</p>
                            <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className={`flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-opacity-20 border-current`}>
                          <item.icon className="w-8 h-8 text-white" />
                          <div className="flex-1">
                            <p className="text-white font-semibold text-lg">{item.label}</p>
                            <p className="text-slate-300 font-medium">{item.value}</p>
                            <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => window.open('mailto:jcpjamner1231@gmail.com', '_blank')}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg border-0"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={handleDownloadResume}
                        variant="outline"
                        className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg backdrop-blur-sm"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-slate-900/50 border-t border-slate-700/50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                JP
              </span>
            </motion.div>
            <p className="text-slate-400 mb-4">
              © 2024 Jayesh Patil. Crafted with passion using React, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Shield className="w-5 h-5" />, label: 'Cybersecurity' },
                { icon: <Code className="w-5 h-5" />, label: 'Development' },
                { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center space-x-2 text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

