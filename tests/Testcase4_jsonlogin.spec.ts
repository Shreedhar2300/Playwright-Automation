import{test} from '@playwright/test'
import data from '../Testdata/json/users.json'

test('Using json testdata', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill(data.username);
await page.getByPlaceholder('Password').fill(data.password);
await page.getByRole('button',{name:'Login'}).click();
});