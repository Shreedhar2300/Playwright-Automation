# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase3_addjobtitle.spec.ts >> jobtitle
- Location: tests\Testcase3_addjobtitle.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle"

Call log:
  - Expect "toHaveURL" with timeout 6000ms
    9 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Leon Kennedy
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add Job Title" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]: Job Title*
          - textbox [ref=e166]: Automation Test Engineer
          - generic [ref=e167]: Already exists
        - generic [ref=e169]:
          - generic [ref=e171]: Job Description
          - textbox "Type description here" [ref=e173]: Playwright AUtomation Testing
        - generic [ref=e174]:
          - generic [ref=e175]:
            - generic [ref=e177]: Job Specification
            - generic [ref=e178]:
              - button "Choose File"
              - generic [ref=e179]:
                - generic [ref=e180] [cursor=pointer]: Browse
                - generic [ref=e181]: fileupload.txt
                - generic [ref=e182] [cursor=pointer]: 
          - paragraph [ref=e183]: Accepts up to 1MB
        - generic [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]: 
            - generic [ref=e188]: Note
          - textbox "Add note" [ref=e190]: learnig automation
        - separator [ref=e191]
        - generic [ref=e192]:
          - paragraph [ref=e193]: "* Required"
          - button "Cancel" [ref=e194] [cursor=pointer]
          - button "Save" [active] [ref=e195] [cursor=pointer]
    - generic [ref=e196]:
      - paragraph [ref=e197]: OrangeHRM OS 5.8
      - paragraph [ref=e198]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e199] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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