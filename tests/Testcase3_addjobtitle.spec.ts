import{test} from '../fixtures/baseFixture'
import{expect} from '@playwright/test'


test("jobtitle",async({pm,page})=>{
await pm.userlogin().Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(pm.userlogin().page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
await pm.userlogin().Userlogin("Admin","admin123");
await pm.dashboardpages().sidebarcompoent().clickmenu("Admin");
const ab=pm.adminpages().adminpageheaders();
await ab.clickonjob();
await ab.selectjobtitle();
await pm.adminpages().jobtabcomponents().clickonadd();
await pm.adminpages().jobtabcomponents().clickonjobtitle();
await pm.adminpages().jobtabcomponents().clickonjobdescription();
await pm.adminpages().jobtabcomponents().clickonbrowse();
await pm.adminpages().jobtabcomponents().clickonaddnote();
await pm.adminpages().jobtabcomponents().clickonsavebutton();


})

