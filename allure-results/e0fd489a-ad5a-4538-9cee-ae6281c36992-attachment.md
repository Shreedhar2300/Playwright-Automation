# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase3_addjobtitle.spec.ts >> jobtitle
- Location: tests\Testcase3_addjobtitle.spec.ts:8:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle"

Call log:
  - Expect "toHaveURL" with timeout 6000ms
    8 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { Login } from '../Pages/Login'
  3  | import { Header } from '../Pages/Dashboard_components/Header_components'
  4  | import { locators } from '../Pages/Adminpage/jobtab'
  5  | import { Sidebar } from '../Pages/Dashboard_components/sidebar_components'
  6  | import { Headers } from '../Pages/Adminpage/Headers'
  7  | 
  8  | test("jobtitle",async({page})=>{
  9  | const login1=new Login(page)
  10 | await login1.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  11 | await expect(page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
  12 | await login1.Userlogin("Admin","admin123");
  13 | await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible({timeout:10000});
  14 | const clickonsidebar=new Sidebar(page)
  15 | await clickonsidebar.clickmenu("Admin");
  16 | const selectjob=new Headers(page)
  17 | await selectjob.clickonjob();
  18 | await selectjob.selectjobtitle();
  19 | const creatingjobtitle=new locators(page)
  20 | await creatingjobtitle.clickonadd();
  21 | await expect(page.getByRole("heading",{name:"Admin"})).toBeVisible({timeout:10000});
  22 | await creatingjobtitle.clickonjobtitle();
  23 | await creatingjobtitle.clickonjobdescription();
  24 | await creatingjobtitle.clickonbrowse();
  25 | await creatingjobtitle.clickonaddnote();
  26 | await creatingjobtitle.clickonsavebutton();
> 27 | await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList",{timeout:6000})
     |                    ^ Error: expect(page).toHaveURL(expected) failed
  28 | 
  29 | })
  30 | 
  31 | 
```