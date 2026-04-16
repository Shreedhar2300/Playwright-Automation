import{test,expect} from '@playwright/test'
import { Login } from '../Pages/Login'
import { Header } from '../Pages/Dashboard_components/Header_components'
import { locators } from '../Pages/Adminpage/jobtab'
import { Sidebar } from '../Pages/Dashboard_components/sidebar_components'
import { Headers } from '../Pages/Adminpage/Headers'

test("jobtitle",async({page})=>{
const login1=new Login(page)
await login1.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
await login1.Userlogin("Admin","admin123");
await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible({timeout:10000});
const clickonsidebar=new Sidebar(page)
await clickonsidebar.clickmenu("Admin");
const selectjob=new Headers(page)
await selectjob.clickonjob();
await selectjob.selectjobtitle();
const creatingjobtitle=new locators(page)
await creatingjobtitle.clickonadd();
await expect(page.getByRole("heading",{name:"Admin"})).toBeVisible({timeout:10000});
await creatingjobtitle.clickonjobtitle();
await creatingjobtitle.clickonjobdescription();
await creatingjobtitle.clickonbrowse();
await creatingjobtitle.clickonaddnote();
await creatingjobtitle.clickonsavebutton();
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

})

