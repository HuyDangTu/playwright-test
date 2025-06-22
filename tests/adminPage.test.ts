import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeftMenu } from '../pages/LeftMenu';
import { AdminViewSystemUsers } from '../pages/admin/AdminViewSystemUsers';

test.describe('This is test navigate to Admin Page', () => {
    test('Verify navidat to Admin page via the left menu', async ({page})=>{
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.login("Admin","admin123");
    
    const leftMenu = new LeftMenu(page);
  
    await leftMenu.goToAdminPage();
    
    //expect(await leftMenu.isOnAdminPage());  
    const adminViewSystemUsers = new AdminViewSystemUsers(page);

    await adminViewSystemUsers.clickAddBtn();
    await adminViewSystemUsers.addAUser("Admin","Enabled","Vitoria","AdminAcc","CheckMail@2025");

    expect(await adminViewSystemUsers.fillFormSucces("CheckMail@2025"));

    });
});