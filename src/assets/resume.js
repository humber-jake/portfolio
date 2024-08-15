const resume = {
  name: 'Jacob Humber',
  website: 'jhumber.com',
  greeting: "Hi! I'm Jake.",
  byline:
    "I'm a self-taught developer with a BA in English Literature and background in communications, employment services, and the restaurant industry. Welcome to my portfolio! Feel free to look around.",
  technology: [
    'HTML & CSS',
    'JavaScript',
    'React',
    'jQuery',
    'Node',
    'Express',
    'Mongo',
    'SQL',
    'Bootstrap',
    'Git',
  ],
  education: {
    university: {
      name: 'Concordia University',
      location: 'Montréal',
      dates: '2011 - 2016',
      degree: 'Bachelor of Arts',
      major: 'English Literature',
      minor: 'Professional Writing',
    },
    courses: [
      {
        title: 'Web Developer Bootcamp',
        instructor: 'Colt Steele',
        host: 'Udemy.com',
        completed: '2020',
      },
      {
        title: 'Modern React Bootcamp',
        instructor: 'Colt Steele',
        host: 'Udemy.com',
        completed: '2022',
      },
    ],
  },

  // =====================================

  experience: [
    {
      name: 'Sterling Backcheck',
      position: [
        {
          title: 'Deployment Specialist',
          dates: '02/2022 - 03/2024',
          points: [
            'Handle initial client account setup, including price-checking and configuring client and service preferences',
            'Use Salesforce to track contacts and configure account hierarchy to ensure accurate billing',
            'Conduct client facing demos of our different platforms, services and products when required',
          ],
        },
      ],
    },
    {
      name: 'Sterling Backcheck',
      position: [
        {
          title: 'Verifications Specialist',
          dates: '04/2021 - 02/2022',
          points: [
            'Verify credentials, employment and education history of candidates by contacting organizations and institutes worldwide ',
            'Update contact database policies and requirements to aid in future verifications within the client service level agreement, standard operating procedures and privacy regulations',
          ],
        },
      ],
    },
    {
      name: 'Browns Socialhouse',
      position: [
        {
          title: 'Shift Lead/Acting Sous-Chef',
          dates: '11/2018 - 03/2020',
          points: [
            'Trained and led back of house staff in brunch, lunch, and dinner services, averaging approx. 180 guests',
            'Forecasted sales, labour and food costs, and optimized prep routines and production numbers using Squirrel PoS data',
            'Conducted inventory ordering and invoicing, performed routine line quality / health and safety checks',
          ],
        },
      ],
    },
    {
      name: 'British Columbia Real Estate Association',
      position: [
        {
          title: 'Communications Coordinator',
          dates: '10/2017 - 07/2018',
          points: [
            'Spearheaded a marketing campaign for BCREA Mobile, leveraged Google Analytics for conversions tracking ',
            'Acted as primary liaison with contracted design firm to perform a company website redesign',
            'Organized and oversaw editorial planning, drafting, editing, and distribution for all in-house publications',
            'Managed social media presence via Hootsuite, prepared media analysis reports for quarterly strategy reviews',
          ],
        },
      ],
    },
    {
      name: 'Falkirk Resources Consulting LTD.',
      position: [
        {
          title: 'Project Assistant (Fixed-Term Contract)',
          dates: '09/2017 - 10/2017',
          points: [
            'Proofed, edited and formatted copy and graphics for a 10,000+ page government mining application',
          ],
        },
      ],
    },
    {
      name: 'Le Boucan Smokehouse',
      position: [
        {
          title: 'Sous Chef',
          dates: '12/2016 - 09/2017',
          points: [
            'Trained and supervised new staff members on workplace procedures',
            'Developed recipes, prepped ingredients for and conducted brunch, lunch, and dinner service solo for 60 seats',
          ],
        },
      ],
    },
    {
      name: 'Narcity Media (MTLblog)',
      position: [
        {
          title: 'Sponsored Content Creator (Freelance)',
          dates: '07/2016 - 02/2017',
          points: [
            'Drafted and edited short form sponsored content; ensured consistency to internal and client style guides and brand',
          ],
        },
      ],
    },
    {
      name: 'Rhino Media (YUL.buzz)',
      position: [
        {
          title: 'Contributor/Editor (Freelance)',
          dates: '04/2015 - 12/2016',
          points: [
            'Pitched, drafted, and edited articles about local culture and events for a millennial target audience',
            'Attended and photographed events as press and conducted interviews in English and French',
          ],
        },
      ],
    },
  ],
  // ===================================
  projects: [
    {
      name: 'WordleXL',
      tech: ['React', 'React-router', 'MUI'],
      year: '2022',
      description:
        'A wordle clone that allows simultaneous play of five, six, seven, and eight letter puzzles.',
      link: 'https://grand-sable-e9d8d6.netlify.app/',
    },
    {
      name: 'Color Palette',
      tech: ['React', 'React Router', 'MUI', 'Chroma JS'],
      year: '2022',
      description:
        'A utility for creating color palettes. This project was adapted from The Modern React Bootcamp and rewritten using hooks instead of class components.',
      link: 'https://heartfelt-ganache-64105d.netlify.app/',
    },
    {
      name: 'This Website!',
      tech: ['React', 'React Router', 'MUI'],
      year: '2022',
      description:
        'Check out my code to see how I built this portfolio website. All content is dynamically rendered with react components from a single resume.js file, for ease of updating.',
      link: 'https://jhumber.com',
    },
    {
      name: "Liar's Dice",
      tech: ['Node.js', 'Express', 'Socket.io'],
      year: '2021',
      description:
        'A Jackbox-style online multiplayer version of the classic dice game.',
      link: 'https://liars-dice.adaptable.app/',
    },
    {
      name: 'Password Generator',
      tech: ['React'],
      year: '2022',
      description:
        'A simple password generator created as a utility to generate one time temporary passwords.',
      link: 'https://effervescent-dragon-7c3117.netlify.app/',
    },
    // {
    //   name: 'Blackbox Generator',
    //   tech: ['Node.js', 'Express', 'MongoDB', 'Materialize.css'],
    //   year: '2020',
    //   description:
    //     'A nonsensical REST API for generating blackbox cooking challenge ingredients.',
    //   link: 'https://polar-savannah-96642.herokuapp.com/',
    // },
  ],
  languages: ['English', 'French'],
  socialmedia: {
    Instagram: 'https://www.instagram.com/humberjak/',
    LinkedIn: 'https://www.linkedin.com/in/jacob-humber/',
    GitHub: 'https://github.com/humber-jake/',
  },
};

export default resume;
