import {Page} from '@playwright/test';

export class LeftMenu{
    
    readonly page: Page;

    readonly dashBoardOPtion = "(//li[@class='oxd-main-menu-item-wrapper'])[8]"; 
    readonly adminOption = "//aside[@class='oxd-sidepanel']//li[1]"; 
    readonly pimOption = "//aside[@class='oxd-sidepanel']//li[2]"; 

    constructor (page: Page) {
        this.page = page;
    }

    async goToAdminPage() {
        await this.page.click(this.adminOption);
    }
    async isOnAdminPage(): Promise<boolean>{
        return this.page.url().includes('/admin');
    }

}