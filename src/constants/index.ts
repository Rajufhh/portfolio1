export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
  category?: 'Data Analysis' | 'Languages' | 'Databases' | 'Tools & APIs'
}

export const skills: Skill[] = [
  // Languages & Core
  { skill_name: 'Python', Image: '/python.svg', width: 70, height: 70, category: 'Languages' },
  { skill_name: 'SQL', Image: '/postger.png', width: 70, height: 70, category: 'Languages' },
  { skill_name: 'Java', Image: '/spring-boot.png', width: 70, height: 70, category: 'Languages' },

  // Databases
  { skill_name: 'MySQL', Image: '/mysql.png', width: 70, height: 70, category: 'Databases' },
  { skill_name: 'SQLite', Image: '/postger.png', width: 70, height: 70, category: 'Databases' },

  // Data Analysis & ML Concepts
  { skill_name: 'EDA & Profiling', Image: '/mainIcons.svg', width: 70, height: 70, category: 'Data Analysis' },
  { skill_name: 'Data Cleaning', Image: '/mainIconsdark.svg', width: 70, height: 70, category: 'Data Analysis' },
  { skill_name: 'Data Validation', Image: '/icons.svg', width: 70, height: 70, category: 'Data Analysis' },
  { skill_name: 'Anomaly Detection', Image: '/networking.png', width: 70, height: 70, category: 'Data Analysis' },
  { skill_name: 'KNN Classifier', Image: '/graphql.png', width: 70, height: 70, category: 'Data Analysis' },

  // Frameworks & Tools
  { skill_name: 'Flask', Image: '/django.svg', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'FastAPI', Image: '/node-js.png', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'REST APIs', Image: '/webhook.svg', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'OpenCV', Image: '/character.png', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'Git', Image: '/git.svg', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'GitHub', Image: '/github.png', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'VS Code', Image: '/file.svg', width: 70, height: 70, category: 'Tools & APIs' },
  { skill_name: 'Prompt Engineering', Image: '/tauri.svg', width: 70, height: 70, category: 'Tools & APIs' },
]

export const Socials = [
  {
    name: 'GitHub',
    src: '/github.png',
    link: 'https://github.com/Rajufhh',
  },
  {
    name: 'LinkedIn',
    src: '/linkedin.svg',
    link: 'https://linkedin.com/in/raju-bathini-aa513a288',
  },
  {
    name: 'Email',
    src: '/main.svg',
    link: 'mailto:rajubathini83@gmail.com',
  },
]

