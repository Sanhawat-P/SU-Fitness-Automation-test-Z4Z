import { Page, Locator, expect } from '@playwright/test';

export class EditNewsPage{
    readonly page: Page;

    readonly titleInput: Locator;
    readonly imageInput: Locator;
    readonly newsInput: Locator;
    readonly typeInput: Locator;
    readonly dateInput: Locator;
    readonly confirmInput: Locator;

    constructor(page: Page) {
        this.page = page;

        this.titleInput = page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' });
        this.imageInput = page.getByRole('button', { name: 'Choose File' });
        this.newsInput = page.getByRole('textbox', { name: 'รายละเอียดข่าว' });
        this.typeInput = page.getByRole('combobox');
        this.dateInput = page.locator('input[type="date"]');
        this.confirmInput = page.getByRole('button', { name: 'บันทึกข่าว' });
    }
    
    async goto(){
        await this.page.goto('/admin/news/create');
    }

    async addNewSuccess(title: string, image: string, news: string, type: string, date: string){
        await this.titleInput.fill(title);
        await this.imageInput.setInputFiles(image);
        await this.newsInput.fill(news);
        await this.typeInput.selectOption(type);
        await this.dateInput.fill(date);
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss().catch(() => {}); 
        });
        await this.confirmInput.click();
    }
}