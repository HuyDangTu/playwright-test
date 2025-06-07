import {Page} from '@playwright/test';
import { AddUser } from './AdminAddUser';

export class AdminViewSystemUsers {
    
    readonly page: Page;

    readonly addUserBtn = "//button[normalize-space()='Add']";
    readonly userTbl = '';
    constructor (page: Page){
        this.page = page;
    }

    async clickAddBtn() {
        await this.page.click(this.addUserBtn);
    }

    async addAUser(userRole: string, status: string, employeeName: string, userName: string, password: string){
        const addAUser = new AddUser(this.page);
        await addAUser.formFill(userRole,status,employeeName,userName,password); 
    }

    async fillFormSucces(confirmPassword: string){
        const addAUser = new AddUser(this.page);
        await addAUser.isFilled(confirmPassword);
    } 
}