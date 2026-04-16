import { type Locator, type Page, expect } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly userNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signUpButton: Locator;
  readonly signUpHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'ชื่อ', exact: true });
    this.lastNameInput = page.getByRole('textbox', { name: 'นามสกุล' });
    this.userNameInput = page.getByRole('textbox', { name: 'ชื่อผู้ใช้' });
    this.phoneInput = page.getByRole('textbox', { name: 'เบอร์โทร' });
    this.emailInput = page.getByRole('textbox', { name: 'example@email.com' });
    this.passwordInput = page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' });
    this.signUpButton = page.getByRole('button', { name: 'สมัครสมาชิก' });
    this.signUpHeading = page.getByRole('heading', { name: 'สมัครสมาชิก' });
  }

  async goto() {
    await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async fillSignUpForm(userData: any) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.userNameInput.fill(userData.userName);
    await this.phoneInput.fill(userData.phone);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.confirmPassword);
  }

  async submit() {
    await this.signUpButton.click();
  }

  async expectToBeOnLoginPage() {
    await expect(this.page).toHaveURL(/.*login/);
  }

  async expectErrorMessage(pattern: RegExp) {
    const errorMsg = this.page.getByText(pattern);
    await expect(errorMsg).toBeVisible({ timeout: 10000 });
  }
}