import { test,expect,Page } from "@playwright/test";
import { Login } from "../Pages/Login";

test('successful login',async({page})=>{
const login= new Login(page);
await login.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page.getByRole("heading",{name:"Login"})).toBeVisible();
await login.Userlogin("Admin","admin123");
await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();

});