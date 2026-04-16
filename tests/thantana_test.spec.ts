import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/signup-page';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { ManageUsersPage } from '../pages/manageUsers-page';

test.describe('Thantana automate test', () => {
  
  test('TCS-SIGNUP-002 การสมัครสมาชิกเมื่อกรอกข้อมูลครบถ้วนและถูกต้องทุกฟิลด์', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    
    const validUser = {
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      userName: 'autoSignup01',
      phone: '0123456789',
      email: 'autoSignup01@email.com',
      password: 'testpass',
      confirmPassword: 'testpass'
    };

    await signUpPage.goto();
    await signUpPage.fillSignUpForm(validUser);
    await signUpPage.submit();

    await signUpPage.expectToBeOnLoginPage();
  });

  test('TCS-SIGNUP-003 การสมัครสมาชิกเมื่อกรอกข้อมูลครบถ้วน ยืนยันรหัสผ่านผิด', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    
    const invalidUser = {
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      userName: 'autoSignup02',
      phone: '0123456789',
      email: 'autoSignup02@email.com',
      password: 'testpass',
      confirmPassword: 'wrongpass'
    };

    await signUpPage.goto();
    await signUpPage.fillSignUpForm(invalidUser);
    await signUpPage.submit();

    await signUpPage.expectErrorMessage(/(ไม่ตรงกัน|ผิด)/i);
  });

  test('TCS-SIGNUP-004 การสมัครสมาชิกเมื่อกรอกข้อมูลครบถ้วนและถูกต้องทุกฟิลด์ แต่ตั้งชื่อผู้ใช้ซ้ำกับคนอื่นในระบบ', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    
    const invalidUser = {
      firstName: 'สมชาย',
      lastName: 'ใจไม่ดี',
      userName: 'autoSignup01',
      phone: '0123456789',
      email: 'autoSignup03@email.com',
      password: 'testpass',
      confirmPassword: 'testpass'
    };

    await signUpPage.goto();
    await signUpPage.fillSignUpForm(invalidUser);
    await signUpPage.submit();

    await signUpPage.expectErrorMessage(/(ใช้ไปแล้ว|ซ้ำ)/i);
  });

  test('TCS-SIGNUP-018 การสมัครสมาชิกเมื่อไม่กรอกข้อมูลเลย', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    
    await signUpPage.goto();
    await signUpPage.submit();

    await signUpPage.expectErrorMessage(/(ต้อง|ครบ)/i);
  });

  test('TCS-SIGNUP-011 การสมัครสมาชิกเมื่อกรอกข้อมูลครบถ้วน อีเมลไม่มีเครื่องหมาย "@"', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    
    const invalidUser = {
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      userName: 'autoSignup04',
      phone: '0123456789',
      email: 'autoSignup04email.com',
      password: 'testpass',
      confirmPassword: 'testpass'
    };

    await signUpPage.goto();
    await signUpPage.fillSignUpForm(invalidUser);
    await signUpPage.submit();

    await signUpPage.expectErrorMessage(/(@|กรุณา|ต้อง)/i);
  });

  test('ลบผู้ใช้ autoSignup01 ออกจากระบบ', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const manageUsersPage = new ManageUsersPage(page);

        await loginPage.goto();
        await loginPage.login('Admin1', '123456');
        await expect(page).toHaveURL('/admin/dashboard')
        await manageUsersPage.goto();
        await expect(page).toHaveURL('/admin/users');
        await manageUsersPage.deleteUserByUsername('autoSignup01', '123456');
      
    });

});