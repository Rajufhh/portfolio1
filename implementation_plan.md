# Portfolio Personalization Plan for Raju Bathini

This plan outlines the updates required to completely replace the previous user profile with **Raju Bathini's** portfolio details as a **Data Analyst (Python, SQL & Data Analysis)**.

## User Details & Information to Update

- **Name**: Raju Bathini
- **Role/Headline**: Data Analyst — Python, SQL & Data Analysis
- **Location**: Hyderabad, Telangana, India
- **Email**: `rajubathini83@gmail.com`
- **Phone**: `+91-818-499-4937`
- **LinkedIn**: `https://linkedin.com/in/raju-bathini-aa513a288`
- **GitHub**: `https://github.com/Rajufhh`
- **Languages**: English, Telugu
- **Summary**: Computer Science graduate with hands-on experience in Python, SQL, and exploratory data analysis. Skilled in data cleaning, validation, pattern discovery, and building analytical tools (Flask, REST APIs).

---

## Proposed Changes

### 1. Global & Constants
#### [MODIFY] [constants/index.ts](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/constants/index.ts)
- Replace DevOps-centric skill lists with Data Analysis & Developer skill set:
  - Languages: Python, Java, SQL
  - Data Analysis & ML: EDA, Data Cleaning & Validation, Data Profiling, Anomaly Detection, KNN Classifier
  - Databases: MySQL, SQLite
  - Frameworks & Tools: FastAPI, Flask, REST APIs, Git, GitHub, VS Code, OpenCV, Prompt Engineering

---

### 2. Navigation, Header & Hero
#### [MODIFY] [HeroContent.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/sub/HeroContent.tsx) & [HeroContentWithAnalytics.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/sub/HeroContentWithAnalytics.tsx)
- Update name to **Raju Bathini**.
- Update role title to **Data Analyst — Python, SQL & Data Analysis**.
- Update description to reflect turning raw data into actionable business insights.
- Update GitHub and LinkedIn profile URLs.

#### [MODIFY] [resizable-navbar.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/ui/resizable-navbar.tsx) & [Navbar.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Navbar.tsx)
- Update logo text and alt attributes to **Raju Bathini**.
- Ensure smooth scrolling and navigation links to all relevant sections (About, Skills, Experience & Education, Projects, Certifications, Contact).

---

### 3. Projects Section
#### [MODIFY] [Projects.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Projects.tsx)
- Replace previous projects with Raju's 3 major projects:
  1. **Face Recognition Attendance System (2025)**: Flask, OpenCV, SQL, SQLite, KNN Classifier.
  2. **AI-Assisted Applications (Self-Project) (2025)**: Prompt Engineering, ChatGPT, Gemini, Lovable, Python.
  3. **Feedback Management System (2025)**: Java, Object-Oriented Programming, Data Validation, Java Collections.
- Add relevant tags and links to Raju's GitHub repository.

---

### 4. Education & Experience Timeline
#### [MODIFY] [Timeline.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Timeline.tsx)
- Update timeline items to feature Raju's Education & Academic/Project milestones:
  - **B.Tech in Computer Science & IT (2021 – 2025)**: Marri Laxman Reddy Institute of Technology & Management, Hyderabad (CGPA: 8.33)
  - **Data Analysis & Application Projects (2024 – 2025)**: Hands-on work with real-world datasets, OpenCV, Flask, and ML models
  - **Higher Secondary Education (2019 – 2021)**: Alphores Junior College, Karimnagar (92%)
  - **Matriculation (2019)**: TS Model School, Boinpally (CGPA: 9.2)

---

### 5. Certifications Section
#### [MODIFY] [Certifications.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Certifications.tsx)
- Add certifications:
  - **HackerRank**: Python (Basic), Java (Basic), SQL (Basic)
  - **Cisco Networking Academy**: PCAP — Programming Essentials in Python
  - **SmartInterviews**: SmartCoder
- Ensure active display on main page.

---

### 6. Contact, Resume & Footer
#### [MODIFY] [ContactUs.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/ContactUs.tsx)
- Update email: `rajubathini83@gmail.com`
- Update phone: `+91-818-499-4937`
- Update location: `Hyderabad, Telangana, India`
- Add spoken languages badge: `English, Telugu`

#### [MODIFY] [Footer.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Footer.tsx)
- Update brand, summary, and social links to Raju Bathini's profiles.

#### [MODIFY] [Resume.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/components/main/Resume.tsx)
- Update resume section copy for Data Analyst qualifications.

---

### 7. Metadata, SEO & Page Structure
#### [MODIFY] [layout.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/app/layout.tsx) & [page.tsx](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/app/page.tsx) & [sitemap.ts](file:///c:/Users/rajub/OneDrive/Desktop/portfolio/src/app/sitemap.ts)
- Update page title, description, keywords (Data Analyst, Python, SQL, EDA, Machine Learning), Schema.org Person JSON-LD with Raju Bathini's details.
- Include `<CertificationsSection />` in `page.tsx`.

---

## Verification Plan

### Automated Verification
- Run `npm run build` or `next build` to verify there are no TypeScript errors or broken imports.
- Validate that all components compile and render without runtime errors.

### Manual Verification
- Verify that all names, links, contact numbers, emails, skills, projects, and education history correctly reflect Raju Bathini.
- Check responsive behavior across mobile, tablet, and desktop viewports.
