import { BlogsSection } from '@/components/main/Blogs'
import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import ResumeSection from '@/components/main/Resume'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import CertificationsSection from '@/components/main/Certifications'
import InteractiveWrapper from '@/components/main/InteractiveWrapper'

export const metadata: Metadata = {
  title: 'Raju Bathini - Data Analyst Portfolio | Python, SQL & Data Analysis',
  description: 'Portfolio of Raju Bathini, Data Analyst specialized in Python, SQL, exploratory data analysis, data cleaning, validation, and analytical tool development.',
  alternates: {
    canonical: 'https://raju-bathini.vercel.app',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>Raju Bathini - Data Analyst Portfolio</h1>
        <p>
          Welcome to the professional portfolio of Raju Bathini, a Computer Science graduate
          and Data Analyst skilled in Python, SQL, Exploratory Data Analysis (EDA), data cleaning,
          validation, profiling, anomaly detection, KNN models, and analytical backend tools.
        </p>
      </div>

      <InteractiveWrapper>
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <CertificationsSection />
        <ResumeSection />
        <BlogsSection />
        <ContactUs />
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
    </div>
  )
}

