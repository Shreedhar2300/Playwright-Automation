import{Page,Locator} from '@playwright/test'

export class locators{
    readonly page:Page;
    readonly addbutton:Locator;
    readonly jobtitlefield:Locator;
    readonly jobdescription:Locator;
    readonly browse:Locator;
    readonly addnote:Locator;
    readonly savebutton:Locator;
    readonly cancelbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.addbutton=page.getByRole('button', { name: ' Add' });
        this.jobtitlefield=page.getByRole('textbox').nth(1);
        this.jobdescription=page.getByRole('textbox', { name: 'Type description here' });
        this.browse= page.locator('input.oxd-file-input');
        this.addnote=page.getByRole('textbox', { name: 'Add note' });
        this.savebutton=page.getByRole("button",{name:"Save"})
        this.cancelbutton=page.getByRole("button",{name:"Cancel"})
        
    }

    async clickonadd(){
        await this.addbutton.click();
    }
    async clickonjobtitle(){
       await this.jobtitlefield.click();
       await this.jobtitlefield.fill("UAT Test Engineers")
    }
    async clickonjobdescription(){
         await this.jobdescription.click();
        await this.jobdescription.fill("Playwright Automation Testing");
    }
    async clickonbrowse(){
        
        await this.browse.setInputFiles('C:/Users/Shreedhar/Desktop/fileupload.txt');
    }
    async clickonaddnote(){
         await this.addnote.click();
        await this.addnote.fill("learnig automation");
    }
    async clickonsavebutton(){
        await this.savebutton.click();
    }
    async clickoncancelbutton(){
        await this.cancelbutton.click();
    }

}
