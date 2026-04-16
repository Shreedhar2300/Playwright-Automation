import{Page,Locator} from '@playwright/test'

export class Headers{
    readonly page:Page;
    readonly usermanagement:Locator;
    readonly job:Locator;
    readonly organization:Locator;
    readonly qualifications:Locator;
    readonly nationalities:Locator;
    readonly corporatebranding:Locator;
    readonly configuration:Locator;
    readonly jobtitle:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.usermanagement= page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i');
        this.job= page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i');
        this.organization=page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i');
        this.qualifications=page.getByRole('listitem').filter({ hasText: 'Qualifications' }).locator('i');
        this.nationalities=page.getByRole('listitem').filter({ hasText: 'Nationalities' }).locator('i');
        this.corporatebranding=page.getByRole('listitem').filter({ hasText: 'Corporate Branding' }).locator('i');
        this.configuration=page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i');
        this.jobtitle=page.getByRole('listitem').filter({ hasText: /^Job Titles$/ });
    }

    async clickonjob(){
        await this.job.click();
    }
    async selectjobtitle(){
        await this.jobtitle.click();
    }


    
}
