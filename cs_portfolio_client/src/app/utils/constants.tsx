export interface JobCard {
    id: number;
    title: string;
    company: string;
    location: string;
    dates: string;
    description: string;
    responsibilities: string[];
}

export interface ProjectCard {
    id: number;
    title: string;
    description: string;
    url: string;
}

export interface IntroCarouselSection {
    id: number;
    title: string;
    text?: string;
    leftText?: string;
    rightText?: string;
    listItems?: Array<{
        id: number;
        title: string;
        technologies?: string[];
    }>;
}

export interface IntroCarouselItem {
    id: number;
    sections: IntroCarouselSection[];
}

export const JOB_CARDS: JobCard[] = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Watch Systems LLC',
        location: 'Covington, LA',
        dates: '01/2022 - 01/2026',
        description: 'Migration of legacy desktop applications to browser based applications',
        responsibilities: [
            'NCIC Security clearance.',
            'CJIS Security clearance.',
            'Frontend development of browser based application (OffenderWatch)',
            'API development for OffenderWatch',
            'Backend development working with NCIC application - ties in our legacy application with NCIC DB as well as OffenderWatch',
            'Developmental work on our OffenderwatchMobile app that allows law enforcement to leverage our software out in the field from their phones'
        ]
    },
    {
        id: 2,
        title: 'Junior Software Engineer',
        company: 'Pedra CRM LLC',
        location: 'Miami, FL',
        dates: '06/2021 - 01/2022',
        description: 'Building CRM system for existing API',
        responsibilities: [
            'Currently working on an iOS app with SwiftUI and Apollo as my Graphql client which provides the same functionality as the web application. (iOS)',
            'Designing of 10+ Views performing queries with persisted user authorization via session tokens. (iOS)',
            'Built payment feature on web application to process transactions and store users\' payment information in a secure manner. (Web Next.js)',
            'Using Graphql to query and mutate data with over 20 query/mutation endpoints resulting in 3 features moving into production. (Web Next.js)',
            'Learning about business logic for CRMs to give said features an intuitive feel, allowing users to create, modify or delete at many instances within their pipeline. (Web Next.js)'
        ]
    },
    {
        id: 3,
        title: 'Marketing & Operations Consultant',
        company: 'TD LUX',
        location: 'Miami, FL',
        dates: '11/2018 - 04/2021',
        description: 'Led marketing, inventory, and operations projects',
        responsibilities: [
            'Collaborated with the marketing team on 1-2 monthly campaigns to drive traffic towards our online platforms, resulting in 15% increase in online orders during COVID',
            'During Covid-19 peak: tasked with redesigning one of the locations. Created floor plans, renderings and designed new furniture. This resulted in 20% more square footage, which allowed us to provide guests with a safe dining experience.',
            'Created a process to track inventory and maintenance requirements across 6 restaurants allowing the business to efficiently repair or replace machines resulting in no down time.'
        ]
    },
    {
        id: 4,
        title: 'Architectural Assistant',
        company: 'Archimia',
        location: 'Miami, FL',
        dates: '07/2017 - 07/2018',
        description: 'Created and modified architectural drawings',
        responsibilities: [
            'Authored 10 renders based on a residential project the firm was overseeing, resulting in the selection of materials/finishes which fit within the budget and satisfied clients aesthetic demands.',
            'Designing for over 800 hours in Revit. Contributed to 6 projects of which 4 I saw to completion.',
            'Sourced information from FBC & IBC to satisfy ADA, easement & egress, setback, FAR standards. Through proper implementation the business made fewer trips to the city for approval which improved delivery times.'
        ]
    }
];

export const PROJECT_CARDS: ProjectCard[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Project 1 description',
        url: 'https://www.google.com'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Project 2 description',
        url: 'https://www.google.com'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Project 3 description',
        url: 'https://www.google.com'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Project 4 description',
        url: 'https://www.google.com'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Project 5 description',
        url: 'https://www.google.com'
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Project 6 description',
        url: 'https://www.google.com'
    },
    {
        id: 7,
        title: 'Project 7',
        description: 'Project 7 description',
        url: 'https://www.google.com'
    },
    {
        id: 8,
        title: 'Project 8',
        description: 'Project 8 description',
        url: 'https://www.google.com'
    },
    {
        id: 9,
        title: 'Project 9',
        description: 'Project 9 description',
        url: 'https://www.google.com'
    },
    {
        id: 10,
        title: 'Project 10',
        description: 'Project 10 description',
        url: 'https://www.google.com'
    }
];


export const INTRO_CAROUSEL_ITEMS: IntroCarouselItem[] = [
    {
        id: 1,
        sections: [
            {
                id: 1,
                title: 'About Me',
                leftText: 'Hello, I am Christian Sheen, a full-stack software engineer with 4+ years of experience working on production web and mobile applications across the stack. I enjoy solving real problems, improving existing systems, and building features that make products easier to use and maintain. My work spans frontend, backend, APIs, and mobile, with a strong focus on writing practical, reliable code that supports real users and business needs.\n\nAt Watch Systems, I\'ve helped migrate legacy desktop applications to modern browser-based platforms, contributed to both frontend and backend development, and worked on systems integrated with NCIC databases under CJIS and NCIC security standards. I\'ve also contributed to a mobile application used by law enforcement in the field, which gave me valuable experience building software for high-trust, real-world environments.',
                rightText: 'Previously, I worked on a CRM platform using Next.js, GraphQL, and SwiftUI, where I built production features, payment flows, and mobile views backed by persisted authentication. I enjoy working close to business logic, understanding how users actually operate within systems, and shaping features that feel intuitive instead of forced.\n\nBefore transitioning fully into software, I worked in architecture and operations, which gave me a strong eye for structure, usability, and design thinking. That background still influences how I approach software today — balancing technical quality with clarity, maintainability, and user experience.\n\nOverall, I care about building software that works well, scales sensibly, and genuinely helps the people who use it.'
            }
        ]
    },
    {
        id: 2,
        sections: [
            {
                id: 1,
                title: 'Professional Highlights',
                listItems: [
                    {
                        id: 1,
                        title: 'Led migration of legacy desktop applications to modern browser-based solutions'
                    },
                    {
                        id: 2,
                        title: 'Developed secure applications with NCIC and CJIS security clearances'
                    },
                    {
                        id: 3,
                        title: 'Built mobile applications serving law enforcement in the field'
                    },
                    {
                        id: 4,
                        title: 'Designed and implemented payment processing systems with secure data handling'
                    },
                    {
                        id: 5,
                        title: 'Contributed to 20+ GraphQL endpoints resulting in 3 production features'
                    },
                    {
                        id: 6,
                        title: 'Increased online orders by 15% through strategic marketing campaigns during COVID'
                    }
                ]
            },
            {
                id: 2,
                title: 'Core Competencies',
                listItems: [
                    {
                        id: 1,
                        title: 'Frontend Development',
                        technologies: [
                            'React',
                            'Next.js',
                            'React Native',
                        ]
                    },
                    {
                        id: 2,
                        title: 'Backend Development',
                        technologies: [
                            'Node.js',
                            'Express.js',
                            'Python',
                        ]
                    },
                    {
                        id: 3,
                        title: 'Database Management',
                        technologies: [
                            'MySQL',
                            'SQL Server',
                            'MongoDB',
                        ]
                    },
                    {
                        id: 4,
                        title: 'Mobile App Development',
                        technologies: [
                            'iOS',
                            'React Native',
                            'SwiftUI',
                        ]
                    },
                    {
                        id: 5,
                        title: 'Security Clearances',
                        technologies: [
                            'NCIC',
                            'CJIS',
                            'CIA'
                        ]
                    },
                    {
                        id: 6,
                        title: 'UI/UX Design & Implementation',
                        technologies: [
                            'Figma',
                            'Adobe XD',
                            'Photoshop',
                        ]
                    }
                ]
            },
            {
                id: 3,
                title: 'Languages',
                listItems: [
                    {
                        id: 1,
                        title: 'English - Native or Bilingual Proficiency'
                    },
                    {
                        id: 2,
                        title: 'Spanish - Native or Bilingual Proficiency'
                    },
                    {
                        id: 3,
                        title: 'Italian - Limited Working Proficiency'
                    }
                ]
            }
        ]
    }
];