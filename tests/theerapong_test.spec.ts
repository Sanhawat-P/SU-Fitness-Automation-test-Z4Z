import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { PackagePage } from '../pages/package-page';
import { RegisterPackagePage } from '../pages/registerPackage-pages';

const VALID_USER = 'test';
const VALID_PASSWORD = '123456';
const NULL_FULLNAME = '';
const INVALID_FULLNAME = 'สมชาย';
const VALID_FULLNAME = 'สมชาย ใจดี';
const VALID_BIRTHDATE = '2000-12-12';
const VALID_GENDER = 'male';
const VALID_PHONE = '0911231234';
const VALID_EMAIL = 'test@gmail.com';
const VALID_LINEID = '123';
const VALID_TYPE = 'student';
const VALID_FACULTY = 'วิทยาศาสตร์';
const VALID_MAJOR = 'IT';
const VALID_STUDENTID = '123456789';
const VALID_DEPARTMENT = '-';
const VALID_EMERGENCYNAME = '-';
const VALID_EMERGENCYPHONE = '-';
const VALID_KNOWNFROM = '-';
const ERROR_MESSAGE = 'สร้าง membership ไม่สำเร็จ';

test.describe('Theerapong automated test', () => {
    let loginPage: LoginPage;
    let packagePage: PackagePage;
    let registerPackagePage: RegisterPackagePage;

    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        packagePage = new PackagePage(page);
        registerPackagePage = new RegisterPackagePage(page);
        await loginPage.goto();
        await loginPage.login(VALID_USER, VALID_PASSWORD);
    });

    test('SF-39 เข้าหน้าเเพ็กเกจสมาชิก', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await packagePage.goto();
    
        await expect(page).toHaveURL('/package');
        await packagePage.expectPackageVisible();
    });

    test('SF-65 ดูเเพ็กเกจนักเรียน/นักศึกษาแบบรายเดือน', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await packagePage.goto();
    
        await packagePage.checkMonthlyStudentPackage();
        await expect(page).toHaveURL('/membership');
        await expect(page.getByRole('heading', { name: 'สมัครสมาชิก' })).toBeVisible();   
    });
   
    test('SF-69 สมัครแพ็คเกจนักเรียน/นักศึกษาแบบรายเดือน ไม่ยอมรับเงื่อนไข', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await packagePage.goto();
        await packagePage.checkMonthlyStudentPackage();
        await registerPackagePage.validCheckbox();

        await registerPackagePage.registerMembership(VALID_FULLNAME, VALID_BIRTHDATE, VALID_GENDER, VALID_PHONE, VALID_EMAIL, VALID_LINEID, VALID_TYPE, VALID_FACULTY, VALID_MAJOR, VALID_STUDENTID,VALID_DEPARTMENT, VALID_EMERGENCYNAME, VALID_EMERGENCYPHONE, VALID_KNOWNFROM);   

        await registerPackagePage.expectErrorMessage(ERROR_MESSAGE);
    });

    test('SF-71 สมัครแพ็คเกจนักเรียน/นักศึกษาแบบรายเดือน ไม่กรอก ชื่อ - นามสกุล', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await packagePage.goto();
        await packagePage.checkMonthlyStudentPackage();
        await registerPackagePage.validCheckbox();
        await registerPackagePage.agreeAllTerms();

        await registerPackagePage.registerMembership(NULL_FULLNAME, VALID_BIRTHDATE, VALID_GENDER, VALID_PHONE, VALID_EMAIL, VALID_LINEID, VALID_TYPE, VALID_FACULTY, VALID_MAJOR, VALID_STUDENTID,VALID_DEPARTMENT, VALID_EMERGENCYNAME, VALID_EMERGENCYPHONE, VALID_KNOWNFROM);

        await registerPackagePage.expectErrorMessage(ERROR_MESSAGE);
    });


    test('SF-72 สมัครแพ็คเกจนักเรียน/นักศึกษาแบบรายเดือน ไม่กรอกนามสกุล', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await packagePage.goto();
        await packagePage.checkMonthlyStudentPackage();
        await registerPackagePage.validCheckbox();
        await registerPackagePage.agreeAllTerms();

        await registerPackagePage.registerMembership(VALID_FULLNAME, VALID_BIRTHDATE, VALID_GENDER, VALID_PHONE, VALID_EMAIL, VALID_LINEID, VALID_TYPE, VALID_FACULTY, VALID_MAJOR, VALID_STUDENTID,VALID_DEPARTMENT, VALID_EMERGENCYNAME, VALID_EMERGENCYPHONE, VALID_KNOWNFROM);

        await registerPackagePage.expectErrorMessage(ERROR_MESSAGE);
    });


});