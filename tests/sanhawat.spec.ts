import { test, expect, devices, errors } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { ManagePackage } from '../pages/managePackage-page';

const VALID_USER = 'test';
const VALID_ADMIN = 'Admin1';
const VALID_PASSWORD = '123456';

test.describe('Sanhawat automated test', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let managePackage: ManagePackage;

  // beforeEach: ทำก่อนทุก Test — ไม่ต้องเขียน goto() ซ้ำในทุก test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    managePackage = new ManagePackage(page);
    await loginPage.goto();
  });


  test('การออกจากระบบ (Log out) ด้วยบัญชี User ที่ถูกต้อง "กรณีหน้าจอขนาดใหญ่ (Desktop)"', async () => {
    await loginPage.login(VALID_USER, VALID_PASSWORD);
    await homePage.expectOnHomePageUser(VALID_USER);
    await homePage.logout();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('Manage Package การแก้ไขราคาแพ็จเกจที่ถูกต้อง (จำนวนเต็มบวก)', async () => {
    await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
    await homePage.expectOnHomePageAdmin(VALID_ADMIN);
    await managePackage.goto();
    await managePackage.expectOnManagePackagePage();
    await managePackage.changeValue('400');

    const newprice = managePackage.page.locator('tr', { hasText: 'นักเรียน/นักศึกษา' }).first().locator('td').nth(3);
    await expect(newprice).toHaveText(/400/);
  });

  test('Manage Package การแก้ไขราคาแพ็จเกจที่ไม่ถูกต้อง (ใส่ค่าติดลบ)', async () => {
    await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
    await homePage.expectOnHomePageAdmin(VALID_ADMIN);
    await managePackage.goto();
    await managePackage.expectOnManagePackagePage();
    await managePackage.changeValue('-1');
    await managePackage.expectErrorMassage();
  });

  test('Manage Package การแก้ไขราคาแพ็จเกจที่ไม่ถูกต้อง (เว้นว่าง)', async () => {
    await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
    await homePage.expectOnHomePageAdmin(VALID_ADMIN);
    await managePackage.goto();
    await managePackage.expectOnManagePackagePage();
    await managePackage.changeValue(' ');
    await managePackage.expectErrorMassage();
  });

  test('Manage Package การแก้ไขราคาแพ็กเกจที่ไม่ถูกต้อง (ค่า 0)', async () => {
    await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
    await homePage.expectOnHomePageAdmin(VALID_ADMIN);
    await managePackage.goto();
    await managePackage.expectOnManagePackagePage();
    await managePackage.changeValue('0');
    await managePackage.expectErrorMassage();
  });



});
