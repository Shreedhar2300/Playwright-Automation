import{test} from '@playwright/test'
import{readCSV} from '../utils/csvReader';

const users=readCSV('Testdata/csv/login.csv');

test('Using csv testdata', async({page})=>{
    for(const user of users){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill(user.username);
await page.getByPlaceholder('Password').fill(user.password);
await page.getByRole('button',{name:'Login'}).click();
}
});