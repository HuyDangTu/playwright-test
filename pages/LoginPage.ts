import {Page}  from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameIput = "//input[@placeholder='Username']";
    readonly passwordInput = "//input[@placeholder='Password']";
    readonly loginButton = "//button[normalize-space()='Login']";

    constructor(page: Page){
        this.page = page;
    }

    async goto (){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    
    async login(username: string, password: string){
        await this.page.fill(this.usernameIput,username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoginSuccessful(): Promise<boolean>{
        return this.page.url().includes('/dashboard/index');
    }
}