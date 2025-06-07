import {Page} from '@playwright/test';

export class UIActions {
    
    readonly page;
    
    constructor (page: Page){
        this.page = page;
    }

    async btnClick(locator: string){
        this.page.click(locator);
    }

    async drdSelect(locator: string, option: string){
        this.page.selectOption(locator,option);
    }

    async radioCheck(locator: string){
        this.page.check(locator);
    }

    async txtEnter(locator: string, value: string){
        this.page.fill(locator, value);
    }


}