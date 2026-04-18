import{test as base} from'@playwright/test'
import { PageManager } from '../Pages/Pagemanager' 

type Myfixture={pm:PageManager;};
export const test=base.extend<Myfixture>({
    pm:async({page},use)=>{
        await use(new PageManager(page));
    }
});