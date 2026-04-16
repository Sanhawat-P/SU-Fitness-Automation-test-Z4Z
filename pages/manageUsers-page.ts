import { Page, Locator, expect } from '@playwright/test';

export class ManageUsersPage{
    readonly page: Page;

    readonly SearchBar: Locator;
    readonly editButton: Locator;
    readonly roleSearch: Locator;

    constructor(page: Page){
        this.page = page;

        this.SearchBar = page.getByRole('textbox', { name: 'Search by name, username,' });
        this.editButton = page.getByRole('button', { name: 'Edit' });
        this.roleSearch = page.getByRole('combobox').first();
    }

    async goto(){
        await this.page.goto('/admin/users');
    }

    async search(searchText: string, role: string){
        await expect(this.SearchBar).toBeVisible();
        await this.SearchBar.fill(searchText);

        await expect(this.roleSearch).toBeVisible();
        await this.roleSearch.selectOption(role);
    }

    async editUser(n: number){
        await expect(this.editButton).toBeVisible();
        await this.editButton.nth(n-1).click();
    }

    async reset(){
        await this.search('888','admin');
        await this.editUser(1);
    }

    async deleteUserByUsername(username: string, adminPass: string) {
        await this.SearchBar.fill(username);
        const deleteBtn = this.page.getByRole('button', { name: 'Delete' }).first();
        await deleteBtn.click();
        const passwordConfirmInput = this.page.locator('input[type="password"]');
        await passwordConfirmInput.fill(adminPass);
        await this.page.getByRole('button', { name: 'ยืนยันลบ' }).click();
    }
}