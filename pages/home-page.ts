import { Page, Locator, expect } from '@playwright/test';


export class HomePage{
    readonly page: Page;

    readonly home_link: Locator;
    readonly schedule_link: Locator;
    readonly news_link: Locator;
    readonly member_link: Locator;
    readonly login_button: Locator;
    readonly signin_button: Locator;
    
    readonly user_button: Locator;
    readonly logout_button: Locator;

    //Admin
    readonly managePackages_link: Locator;
    readonly dashboardAdmin_link: Locator;

    constructor(page: Page){
        this.page = page;

        this.home_link = page.getByRole('link', { name: 'หน้าแรก' });
        this.schedule_link = page.getByRole('link', { name: 'ตารางเวลา' });
        this.news_link = page.getByRole('link', { name: 'ข่าวสาร' });
        this.member_link = page.getByRole('link', { name: 'สมาชิก' });
        this.login_button = page.getByRole('button', { name: 'Login' });
        this.signin_button = page.getByRole('button', { name: 'Sign In' });


        this.user_button = page.getByRole('button', { name: /สวัสดี,/ });
        this.logout_button = page.getByRole('button', { name: /ออกจากระบบ/ });

        //Admin
        this.managePackages_link = page.getByRole('link', { name: /จัดการแพ็กเกจ/ });
        this.dashboardAdmin_link = page.getByRole('link', { name: /Dashboard Admin/ });

    }

    async goto(){
        await this.page.goto('/'); //base url in config
    }

    async logout(){
        await this.user_button.click();
        expect(this.logout_button).toBeVisible();
        await this.logout_button.click();
    }


    async expectOnHomePageUser(username: string){
        await expect(this.user_button).toContainText(username);
        await expect(this.page).toHaveURL('https://myprojectfitnessvercal.vercel.app/');
    }

    async expectOnHomePageAdmin(username: string){
        await expect(this.user_button).toContainText(username);
        await expect(this.page).toHaveURL('https://myprojectfitnessvercal.vercel.app/admin/dashboard');
    }


}