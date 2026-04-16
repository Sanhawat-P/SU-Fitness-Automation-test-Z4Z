import { Page, Locator, expect } from '@playwright/test';

export class ManagePackage{
    readonly page: Page;

    readonly heading: Locator;
    readonly edit1: Locator;
    readonly valueInput: Locator;
    readonly package1: Locator;
    readonly save: Locator;
    readonly reload: Locator;
    readonly errorMessage: Locator;
    

    constructor(page: Page){
        this.page = page;

        this.heading = page.getByRole('heading', { name: 'จัดการแพ็กเกจ' });
        this.edit1 = page.getByRole('button', { name: '✏️ แก้ไข' }).first();
        this.valueInput = page.getByRole('spinbutton');
        this.package1 = page.getByRole('cell', { name: 'นักเรียน/นักศึกษา' }).first();
        this.save = page.getByRole('button', { name: '💾 บันทึก' });
        this.reload = page.getByRole('button', { name: '🔄 โหลดข้อมูลใหม่' });
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto(){
        await this.page.goto('/admin/packages');
    }


    async expectOnManagePackagePage(){
        await expect(this.page).toHaveURL('https://myprojectfitnessvercal.vercel.app/admin/packages');
        await expect(this.heading).toBeVisible();
    }

    async changeValue(value: string){

        expect(this.package1).toBeVisible();
        await(this.edit1).click();

        expect(this.valueInput).toBeVisible();
        await(this.valueInput).fill(value);

        expect(this.save).toBeVisible();
        await(this.save).click();
    }

    async expectErrorMassage(){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText("กรุณากรอกค่าใหม่");
    }

}