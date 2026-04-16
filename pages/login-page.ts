import { Page, Locator, expect } from '@playwright/test';

export class LoginPage{
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username หรือ Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' });
        this.loginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
    }
    
    async goto(){
        await this.page.goto('/login');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}