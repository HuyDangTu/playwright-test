import {Page} from '@playwright/test';

export class UIActions {
    
    readonly page;
    
    constructor (page: Page){
        this.page = page;
    }

    async btnClick(locator: string){
        this.page.click(locator);
    }

    async drdSelect(locator: string, option: string, doprdownLocator: string, isSelect?: boolean){
        if(!isSelect){
            await this.page.click(doprdownLocator);
            await this.page.click(option);
        }else{
            await this.page.selectOption(locator,option);
        }

    }

    async radioCheck(locator: string){
        this.page.check(locator);
    }

    async txtEnter(locator: string, value: string){
        await this.page.fill(locator, value);
    }





}