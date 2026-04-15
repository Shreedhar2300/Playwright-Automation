import{Page,Locator} from '@playwright/test'

export class Sidebar{
    readonly page:Page;
    readonly searchfield:Locator;
    readonly admin:Locator;
    readonly pim:Locator;
    readonly leave:Locator;
    readonly time:Locator;
    readonly recruitment:Locator;
    readonly myinfo:Locator;
    readonly performence:Locator;
    
    constructor(page:Page)
    {
        this.page=page;
        this.searchfield=page.getByPlaceholder("Search");
        this.admin=page.getByRole("link",{name:"Admin"});
        this.pim=page.getByRole("link",{name:"PIM"})
        this.leave=page.getByRole("link",{name:"Leave"})
        this.time=page.getByRole("link",{name:"Time"})
        this.recruitment=page.getByRole("link",{name:"Recruitment"})
        this.myinfo=page.getByRole("link",{name:"My Info"})
        this.performence=page.getByRole("link",{name:"Performance"})
        
    }

    async clickmenu(menuname:string)
    {
        await this.page.getByRole("link",{name:menuname}).click();
    }
}