const datos = {
  name: 'Maksym Kostashenko',
  address: '123 Main Street, New York, NY',
  email: 'realspiderman@email.com',
  avatar: './assets/avatar.png',
  aboutMe:
    'Hi! As a dedicated computer science student with a passion for web and application development, I specialize in creating innovative and efficient solutions. My expertise spans front-end and back-end technologies, and I thrive on transforming complex problems into user-friendly digital experiences. <br><br> Eager to leverage my skills in real-world projects, I am constantly exploring new technologies to stay at the forefront of the ever-evolving tech landscape.',

  education: {
    degree: 'Bachelor of Science in Computer Science',
    university: 'The Power MBA ITech School',
    graduationYear: '2022',
    honors: 'Summa Cum Laude',
    relevantCourses: [
      'Web Development Fundamentals',
      'Data Structures and Algorithms',
      'Database Design',
      'Advanced Programming',
      'User Interface Design'
    ]
  },

  images: {
    image1: './assets/icons8-graduation-scroll-48.png',
    image2: './assets/icons8-university-49.png',
    image3: './assets/icons8-diploma-1-100.png'
  },
  workExperience: [
    {
      position: 'Web Developer',
      company: 'Marvel Studios',
      startDate: '2022',
      endDate: '2023',
      description:
        'During my time there, I contributed to creating and maintaining dynamic and visually appealing websites that enhance the online experience for Marvels global fanbase. '
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      startDate: '2023',
      endDate: 'Present',
      description:
        'My experience includes designing and developing websites from scratch, implementing responsive design, and optimizing site performance. I pride myself on delivering high-quality, tailored solutions that meet each clients unique needs and goals, all while providing excellent communication and support throughout the project.'
    }
  ],
  skills: [
    {
      skill: './assets/icons8-html-48.png'
    },
    {
      skill: './assets/icons8-css-48.png'
    },
    {
      skill: './assets/icons8-reaccionar-nativo-48.png'
    },
    {
      skill: './assets/icons8-javascript-48.png'
    },
    {
      skill: './assets/icons8-nodo-js-64.png'
    },
    {
      skill: './assets/icons8-mongodb-48.png'
    },
    {
      skill: './assets/icons8-configuración-api-80.png'
    },
    {
      skill: './assets/icons8-git-48.png'
    },
    {
      skill: './assets/icons8-development-64.png'
    }
  ],
  projects: [
    {
      title: 'E-commerce Website',
      description:
        'Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.',
      link: 'https://github.com/piratewiz/proyectoVite',
      preview:
        'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Coffee Restaurant',
      description:
        'Created a customizable blog platform with dynamic content creation, user authentication, comment functionality, and social media integration, leading to a 50% growth in user engagement.',
      link: 'https://github.com/piratewiz/landing-page',
      preview:
        'https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070'
    },
    {
      title: 'Pinterest Simulator',
      description:
        'Built a professional portfolio website to showcase my web development skills and projects. The site features a clean, responsive design and highlights my work as a developer.',
      link: 'https://github.com/piratewiz/proyecto-pinterest',
      preview:
        'https://images.unsplash.com/photo-1636044594149-6e2f289c3868?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
}

export default datos
export const contentTemplate = () => {
  return `
    <main>
     <div class="about-template">${AboutMe}</div></main>
  `
}
