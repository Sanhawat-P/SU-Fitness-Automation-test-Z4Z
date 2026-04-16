import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { ManageUsersPage } from '../pages/manageUsers-page';
import { EditUserPage } from '../pages/editUser-page';

const VALID_ADMIN = 'Admin1';
const VALID_PASSWORD = '123456';

test.describe('Kritsanon automated test', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    let manageUsersPage: ManageUsersPage;
    let editUserPage: EditUserPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        manageUsersPage = new ManageUsersPage(page);
        editUserPage = new EditUserPage(page);
        await loginPage.goto();
        await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
    });
    
    test('Manage Users ทดสอบ edit username อย่างถูกต้อง', async ({ page }) => {
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.search('888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        
        await manageUsersPage.editUser(1);
        await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
        
        await editUserPage.editUser('Admin8888','Ad888@email.com');
        await editUserPage.confirm();

        await manageUsersPage.goto();
        await manageUsersPage.search('Admin8888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();

        await manageUsersPage.reset();
        await editUserPage.reset();
    });

    test('Manage Users ทดสอบ edit username ให้ซ้ำกับ account อื่น', async ({ page }) => {
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.search('888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        
        await manageUsersPage.editUser(1);
        await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
        
        await editUserPage.editUser('Admin1','Ad888@email.com');
        await editUserPage.confirm();

        await manageUsersPage.goto();
        await manageUsersPage.search('Admin888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();

        await manageUsersPage.reset();
        await editUserPage.reset();
    });

    test('Manage Users ทดสอบ edit email อย่างถูกต้อง', async ({ page }) => {
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.search('888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        
        await manageUsersPage.editUser(1);
        await expect(page).toHaveURL('/admin/users/edit/47')       // 47 is an account ID of Admin888
        
        await editUserPage.editUser('Admin888','Ad8888@email.com');
        await editUserPage.confirm();

        await manageUsersPage.goto();
        await manageUsersPage.search('Ad8888@email.com','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();

        await manageUsersPage.reset();
        await editUserPage.reset();
    });

    test('Manage Users ทดสอบ edit email ให้ซ้ำกับ account อื่น', async ({ page }) => {
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.search('888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        
        await manageUsersPage.editUser(1);
        await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
        
        await editUserPage.editUser('Admin888','test@email.com');
        await editUserPage.confirm();

        await manageUsersPage.goto();
        await manageUsersPage.search('Ad888@email.com','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();

        await manageUsersPage.reset();
        await editUserPage.reset();
    });

    test('Manage Users ทดสอบ edit email ให้ไม่ถูกตามหลักการตั้งชื่อ email', async ({ page }) => {
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.search('888','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        
        await manageUsersPage.editUser(1);
        await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
        
        await editUserPage.editUser('Admin888','definietlynotanemail');
        await expect(page.getByRole('button', { name: 'ยกเลิก' })).toBeVisible();

        await manageUsersPage.goto();
        await manageUsersPage.search('Ad888@email.com','admin');
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();

        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');

        await manageUsersPage.reset();
        await editUserPage.reset();
    });


});