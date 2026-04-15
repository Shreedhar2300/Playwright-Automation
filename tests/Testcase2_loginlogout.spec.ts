import { test,expect,Page } from "@playwright/test";
import { Login } from "../Pages/Login";
import { Header } from "../Pages/Dashboard_components/Header_components";

test('successful login',async({page})=>{
const login= new Login(page);
await login.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
await login.Userlogin("Admin","admin123");
await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();
const logout= new Header(page);
await logout.profile();
await logout.clicklogout();

})