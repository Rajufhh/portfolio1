'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaBook, FaGraduationCap, FaLaptopCode, FaUniversity } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'education' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL?: string
  grade?: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'B.Tech in Computer Science & IT',
    company: 'Marri Laxman Reddy Institute of Technology & Management',
    location: 'Hyderabad, Telangana',
    grade: 'CGPA: 8.33',
    date: '2021 – 2025',
    description: 'Specialized in Computer Science, software programming, database design, and exploratory data analysis.',
    achievements: [
      'Gained deep practical expertise in Python, SQL, Java, and Database Management Systems',
      'Applied exploratory data analysis (EDA), data cleaning, profiling, and validation on real-world datasets',
      'Developed analytical web backends and classification pipelines using Flask, REST APIs, and ML models',
      'Graduated with strong academic performance (CGPA: 8.33 / 10.0)',
    ],
    icon: <FaGraduationCap className="w-6 h-6 text-primary" />,
    companyIcon: <FaUniversity className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'project',
    title: 'Data & AI Project Development',
    company: 'Academic & Self-Directed Projects',
    location: 'Hyderabad, Telangana',
    date: '2024 – 2025',
    description: 'Built real-world applications combining data analysis, computer vision, AI prompting, and backend systems.',
    achievements: [
      'Engineered a Face Recognition Attendance System using OpenCV, live video preprocessing, KNN classification, and SQLite validation',
      'Built AI-assisted applications leveraging structured prompt engineering (role-based, instruction-based, chained) with LLMs',
      'Created a Java Feedback Management System using OOP principles and Collections validation for clean downstream reporting',
    ],
    icon: <FaLaptopCode className="w-6 h-6 text-primary" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    type: 'education',
    title: 'Higher Secondary Education (Class XII - MPC)',
    company: 'Alphores Junior College',
    location: 'Karimnagar, Telangana',
    grade: 'Score: 92%',
    date: '2019 – 2021',
    description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.',
    achievements: [
      'Achieved 92% aggregate score across state board examinations',
      'Built strong analytical, logical reasoning, and quantitative problem-solving foundations',
    ],
    icon: <FaBook className="w-6 h-6 text-primary" />,
    companyIcon: <FaUniversity className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Secondary School Certificate (Class X)',
    company: 'TS Model School',
    location: 'Boinpally, Telangana',
    grade: 'CGPA: 9.2',
    date: '2019',
    description: 'Completed matriculation with academic distinction.',
    achievements: [
      'Graduated with CGPA 9.2 with top grades in Mathematics and Science',
    ],
    icon: <FaBook className="w-6 h-6 text-primary" />,
    companyIcon: <FaUniversity className="w-8 h-8 text-blue-500" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-4" key={index}>
    <div className="flex items-center gap-3">
      <div>
        <h3 title={item.title} className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm font-medium text-primary">
          {item.company} • {item.location}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
          <span>{item.date}</span>
          {item.grade && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
              {item.grade}
            </span>
          )}
        </div>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="relative py-20 text-foreground transition-colors overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 left-20 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 title="Education & Academic Journey" className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4">
            Education & Academic Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic milestones, technical foundations, and data project accomplishments.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <TimelineComponent data={timelineContent} />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
