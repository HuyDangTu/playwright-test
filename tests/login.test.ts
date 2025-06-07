import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe('Login Test', () => {
  test('Verify login should redirect to HRM dashboard', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.login("Admin","admin123");
  
    expect(await loginPage.isLoginSuccessful());
  
  });
});

