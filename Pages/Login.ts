import { Locator, Page } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password")
        this.loginbutton = page.getByRole("button", { name: "Login" });
    }

    async Launchurl(url: string) {
        await this.page.goto(url);
    }

    async Userlogin(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();
    }

}