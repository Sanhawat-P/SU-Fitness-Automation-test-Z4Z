import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { EditNewsPage } from '../pages/editNews-pages';

const VALID_USER = 'Admin1';
const VALID_PASSWORD = '123456';

test.describe('Pongsatorn automated test', () => {
    let loginPage: LoginPage;
    let editNewsPage: EditNewsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        editNewsPage = new EditNewsPage(page);
        await loginPage.goto();
        await loginPage.login(VALID_USER, VALID_PASSWORD);
    });

    test('TCS-NEWS-001 เข้าสู่หน้าข่าวสาร', async ({ page }) => {
        await page.getByRole('link', { name: 'ข่าวสาร' }).click();
        await expect(page).toHaveURL('/news');
        await expect(page.getByRole('heading', { name: '📰 ข่าวสารล่าสุด' })).toBeVisible();
    });

    test('TCS-NEWS-002 การค้นหาข่าวด้วยคีย์เวิร์ดที่มีในหัวข้อข่าว', async ({ page }) => {
        await page.getByRole('link', { name: 'ข่าวสาร' }).click();
        await expect(page).toHaveURL('/news');
        await expect(page.getByRole('heading', { name: '📰 ข่าวสารล่าสุด' })).toBeVisible();
        await page.getByRole('textbox', { name: '🔍 ค้นหาข่าว' }).fill('หยุดให้บริการ');
        await expect(page.locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(4)).toBeVisible();
        await expect(page.locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(3)).toHaveCount(1);
    });

    test('TCS-NEWS-018 เข้าสู่หน้าจัดการข่าวสาร', async ({ page }) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
    });

    test('TCS-NEWS-019 กดปุ่มเพิ่มข่าวในหน้าจัดการข่าวสาร', async ({ page }) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await editNewsPage.goto();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
    });

    test('TCS-NEWS-020 เพิ่มข่าวด้วยข้อมูลที่ครบถ้วน', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');  
        page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss().catch(() => {}); 
        });
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page).toHaveURL('/admin/news')
    });

    test('TCS-NEWS-021 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่หัวข้อข่าว', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');  
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
    });

    test('TCS-NEWS-022 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่รูปภาพประกอบ', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        // await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');  
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุรูปภาพประกอบ');
    });

    test('TCS-NEWS-023 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่เนื้อหาข่าว', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');  
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^เนื้อหาข่าว$/ })).toContainText('กรุณาระบุเนื้อหาข่าว');
    });

    test('TCS-NEWS-024 เพิ่มข่าวด้วยข้อมูลที่ไม่ระบุข้อมูล', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('');
        // await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('');
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
    });

    test('TCS-NEWS-025 เพิ่มข่าวด้วยข้อมูล White Space', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill(' ');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill(' ');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
    });

    test('TCS-NEWS-026 เพิ่มข่าวด้วยข้อมูลที่ไม่ระบุข้อมูล', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('');
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุวันที่เผยแพร่');
    });

    test('TCS-NEWS-027 การเพิ่มข่าวด้วยรูปภาพนามสกุล .txt', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.txt');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');
        await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
        await expect(page.locator('div').filter({ hasText: /^รูปภาพประกอบ$/ })).toContainText('รองรับเฉพาะไฟล์ .jpg / .png เท่านั้น');
    });

    test('TCS-NEWS-028 การเพิ่มข่าวแล้วกดยกเลิก', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
        await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
        await expect(page).toHaveURL('/admin/news/create');
        await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
        await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');
        await page.getByRole('button', { name: 'ยกเลิก' }).click();
        await expect(page).toHaveURL('admin/news');
    });

    test('TCS-NEWS-029 การแก้ไขข่าวด้วยข้อมูลที่ถูกต้อง', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'แก้ไข' }).first()).toBeVisible();
        await page.getByRole('button', { name: 'แก้ไข' }).first().click();
        await expect(page).toHaveURL('/admin/news/edit/31');
        await expect(page.getByText('แก้ไขข่าว')).toBeVisible();
        await page.getByRole('textbox').first().fill('Test Title2');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByText('Test News').fill('');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');
        await page.getByRole('button', { name: 'บันทึก' }).click();
        await expect(page.getByText('ยืนยันการแก้ไข')).toBeVisible();
        await page.getByRole('button', { name: 'ยืนยัน' }).click();
        await expect(page).toHaveURL('/admin/news');
    });

     test('TCS-NEWS-030 แก้ไขข่าวด้วยข้อมูลที่เว้นว่าง', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'แก้ไข' }).first()).toBeVisible();
        await page.getByRole('button', { name: 'แก้ไข' }).first().click();
        await expect(page).toHaveURL('/admin/news/edit/31');
        await expect(page.getByText('แก้ไขข่าว')).toBeVisible();
        await page.getByRole('textbox').first().fill('Test Title2');
        await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
        await page.getByText('Test News').fill('');
        await page.getByRole('combobox').selectOption('general');
        await page.locator('input[type="date"]').fill('2026-04-03');
        await page.getByRole('button', { name: 'บันทึก' }).click();
        await expect(page.locator('div').filter({ hasText: /^เนื้อหา$/ })).toContainText('กรุณาระบุเนื้อหาข่าว');
    });

    test('TCS-NEWS-031 ลบข่าว', async ({page}) => {
        await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
        await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
        await expect(page).toHaveURL('admin/news');
        await expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
        await page.getByRole('button', { name: 'ลบ' }).first().click();
        await expect(page.getByText('⚠️ ยืนยันการลบข่าว')).toBeVisible();
        await page.getByRole('button', { name: 'ลบข่าว' }).click();
        await !expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
    });
});