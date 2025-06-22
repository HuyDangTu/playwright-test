import {Page} from '@playwright/test';
import { UIActions } from '../../helper/UIActions';

export class AddUser{
    
    readonly page: Page;

    readonly pageTitle = "//h6[normalize-space()='Add User']";
    
    readonly userRole = "";
    readonly status = "";
    readonly employeeName = "//input[@placeholder='Type for hints...']";
    readonly userName = "(//input[@class='oxd-input oxd-input--active'])[2]";

    readonly password = "(//input[@type='password'])[1]";
    readonly confirmPassword = "(//input[@type='password'])[2]";

    readonly cancelBtn = "//button[normalize-space()='Cancel']";
    readonly SaveBtn = "//button[normalize-space()='Save']";

    constructor (page: Page){
        this.page = page;
    }

    async formFill(userRole: string, status: string, employeeName: string, userName: string, password: string) {
        const uiAction = new UIActions(this.page);
        // await uiAction.drdSelect(this.userRole, userRole);
        // await uiAction.drdSelect(this.status, status);
        await uiAction.txtEnter(this.employeeName, employeeName);
        await uiAction.txtEnter(this.userName, userName);
        await uiAction.txtEnter(this.password, password);
        await uiAction.txtEnter(this.confirmPassword, password);
        //await uiAction.btnClick(this.SaveBtn);
         //await uiAction.btnClick(this.SaveBtn);
    }

    async isFilled(confirmPassword: string): Promise<boolean>{
        const value = await this.page.locator(this.confirmPassword).inputValue();
        return value === confirmPassword;
    }

}