'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Skill, skills } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'Data Analysis', 'Languages', 'Databases', 'Tools & APIs'] as const
type Category = typeof categories[number]

const softSkills = [
  'Analytical Thinking',
  'Problem Solving',
  'Data-Driven Decision Making',
  'Communication',
  'Teamwork & Collaboration',
  'Time Management',
  'Quick Learner',
  'Attention to Detail'
]

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory)

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-12 py-20 px-4 sm:px-8 min-h-[600px] overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl relative z-10"
      >
        <h2
          id="skills-heading"
          title="Technical Skills"
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4"
        >
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground font-medium">
          Hands-on expertise in Data Analysis, Python, SQL, Databases & Analytical Tooling
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105'
                  : 'bg-card/70 backdrop-blur-sm border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-6xl relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.skill_name}
              title={skill.skill_name}
              className="group relative flex flex-col items-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
              role="listitem"
              aria-label={skill.skill_name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 via-blue-500/10 to-transparent blur-sm"></div>
              
              <div className="relative flex flex-col items-center gap-3 z-10">
                <SkillDataProvider
                  src={skill.Image}
                  width={36}
                  height={36}
                  index={index}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs font-semibold text-foreground text-center leading-tight line-clamp-2">
                  {skill.skill_name}
                </span>
                {skill.category && (
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {skill.category}
                  </span>
                )}
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8 text-center"
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4">
            Professional & Analytical Strengths
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
            Combining analytical rigor with effective team communication, problem-solving, and continuous learning.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {softSkills.map((trait) => (
              <Badge
                key={trait}
                variant="secondary"
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-all"
              >
                ✓ {trait}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center text-base text-muted-foreground"
        >
          Continuous learner developing proficiency in enterprise BI and reporting platforms.
        </motion.p>
      </div>
    </section>
  )
}

export default Skills