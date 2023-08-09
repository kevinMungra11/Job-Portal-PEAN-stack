export interface Job {
    count: number;
    rows: {
        job_designation: string;
        title: string;
        description: string;
        location: string;
        salary_and_benefits: string;
        application_instruction: string;
        company_info: string;
        job_type: string;
        experience_level: string;
        educational_requirement: string;
        skills_requirement: string;
        Company_Detail: {
            company_name: string;
            ceo: string;
            number_of_emplyees: number;
            company_address: string;
            revenue: string;
            headquarter: string;
            about_company: string;
            official_website: string;
            email: string;
            date_of_foundation: string;
        };
    }[];
    totalPages: number;
    currentPage: number;
}