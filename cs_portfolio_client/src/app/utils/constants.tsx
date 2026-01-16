export interface JobCard {
    id: number;
    title: string;
    company: string;
    location: string;
    dates: string;
    description: string;
    responsibilities: string[];
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