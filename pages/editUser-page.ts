import { Page, Locator, expect } from '@playwright/test';

export class EditUserPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly roleEdit: Locator;
    readonly saveButton: Locator;
    readonly confirmButton: Locator;

    readonly baseData = {
      username: 'Admin888',
      email: 'Ad888@email.com',
    };

    constructor(page: Page){
        this.page = page;

        this.usernameInput = page.locator('input[name="username"]');
        this.emailInput = page.locator('input[name="email"]');
        this.roleEdit = page.getByRole('combobox').first();
        this.saveButton = page.getByRole('button', { name: 'บันทึก' });
        this.confirmButton = page.getByRole('button', { name: 'ยืนยัน' });
    }

    async editUser(username: string, email: string){
        await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(username);

        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);

        await this.save();
    }

    async save() {
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
    }

    async confirm(){
        await expect(this.confirmButton).toBeVisible();
        await this.confirmButton.click();
    }

    async reset(){
        await this.editUser(this.baseData.username, this.baseData.email);
        await this.confirm();
    }

}

