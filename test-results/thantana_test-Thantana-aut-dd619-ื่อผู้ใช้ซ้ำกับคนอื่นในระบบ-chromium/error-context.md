# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: thantana_test.spec.ts >> Thantana automate test >> TCS-SIGNUP-004 การสมัครสมาชิกเมื่อกรอกข้อมูลครบถ้วนและถูกต้องทุกฟิลด์ แต่ตั้งชื่อผู้ใช้ซ้ำกับคนอื่นในระบบ
- Location: tests\thantana_test.spec.ts:49:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/(ใช้ไปแล้ว|ซ้ำ)/i)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/(ใช้ไปแล้ว|ซ้ำ)/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Fitness Logo SU.ED FITNESS CENTER" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Fitness Logo" [ref=e7]
        - generic [ref=e8]: SU.ED FITNESS CENTER
      - generic [ref=e10]:
        - link "หน้าแรก" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "ตารางเวลา" [ref=e12] [cursor=pointer]:
          - /url: /schedule
        - link "ข่าวสาร" [ref=e13] [cursor=pointer]:
          - /url: /news
        - link "สมาชิก" [ref=e14] [cursor=pointer]:
          - /url: /package
        - generic [ref=e15]:
          - button "Login" [ref=e16] [cursor=pointer]
          - button "Sign In" [ref=e17] [cursor=pointer]
  - generic [ref=e19]:
    - heading "สมัครสมาชิก" [level=2] [ref=e20]
    - generic [ref=e21]: "ERROR: duplicate key value violates unique constraint \"users_username_key\" (SQLSTATE 23505)"
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]: ชื่อ
          - textbox "ชื่อ" [ref=e26]: สมชาย
        - generic [ref=e27]:
          - generic [ref=e28]: นามสกุล
          - textbox "นามสกุล" [ref=e29]: ใจไม่ดี
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]: ชื่อผู้ใช้
          - textbox "ชื่อผู้ใช้" [ref=e33]: autoSignup01
        - generic [ref=e34]:
          - generic [ref=e35]: เบอร์โทร
          - textbox "เบอร์โทร" [ref=e36]: "0123456789"
      - generic [ref=e37]:
        - generic [ref=e38]: อีเมล
        - textbox "example@email.com" [ref=e39]: autoSignup03@email.com
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: รหัสผ่าน
          - textbox "รหัสผ่าน" [ref=e43]: testpass
        - generic [ref=e44]:
          - generic [ref=e45]: ยืนยันรหัสผ่าน
          - textbox "ยืนยันรหัสผ่าน" [ref=e46]: testpass
      - button "สมัครสมาชิก" [active] [ref=e47] [cursor=pointer]
      - paragraph [ref=e48]:
        - text: มีบัญชีแล้ว?
        - link "เข้าสู่ระบบ" [ref=e49] [cursor=pointer]:
          - /url: /login
  - contentinfo [ref=e50]:
    - generic [ref=e51]:
      - generic [ref=e52]:
        - img "Logo" [ref=e54]
        - generic [ref=e56]:
          - generic [ref=e57]:
            - heading "คลับ" [level=6] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - button "ข่าวสาร" [ref=e61] [cursor=pointer]
              - listitem [ref=e62]:
                - button "ตารางเวลา" [ref=e63] [cursor=pointer]
              - listitem [ref=e64]:
                - button "สมาชิก" [ref=e65] [cursor=pointer]
          - generic [ref=e66]:
            - heading "ติดต่อเรา" [level=6] [ref=e67]
            - list [ref=e68]:
              - listitem [ref=e69]:
                - button "พูดคุยกับเรา" [ref=e70] [cursor=pointer]
          - generic [ref=e71]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e72]
            - list [ref=e73]:
              - listitem [ref=e74]:
                - button "กฎระเบียบข้อบังคับ" [ref=e75] [cursor=pointer]
              - listitem [ref=e76]:
                - button "คำถามที่พบบ่อย" [ref=e77] [cursor=pointer]
        - generic [ref=e78]:
          - img "Logo 2" [ref=e79]
          - generic [ref=e80]:
            - button [ref=e81] [cursor=pointer]:
              - img [ref=e82]
            - button [ref=e84] [cursor=pointer]:
              - img [ref=e85]
            - button [ref=e87] [cursor=pointer]:
              - img [ref=e88]
            - button [ref=e90] [cursor=pointer]:
              - img [ref=e91]
      - separator [ref=e93]
      - generic [ref=e95]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e96] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e97] [cursor=pointer]:
          - /url: /privacy
```

# Test source

```ts
  1  | import { type Locator, type Page, expect } from '@playwright/test';
  2  | 
  3  | export class SignUpPage {
  4  |   readonly page: Page;
  5  |   readonly firstNameInput: Locator;
  6  |   readonly lastNameInput: Locator;
  7  |   readonly userNameInput: Locator;
  8  |   readonly phoneInput: Locator;
  9  |   readonly emailInput: Locator;
  10 |   readonly passwordInput: Locator;
  11 |   readonly confirmPasswordInput: Locator;
  12 |   readonly signUpButton: Locator;
  13 |   readonly signUpHeading: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.firstNameInput = page.getByRole('textbox', { name: 'ชื่อ', exact: true });
  18 |     this.lastNameInput = page.getByRole('textbox', { name: 'นามสกุล' });
  19 |     this.userNameInput = page.getByRole('textbox', { name: 'ชื่อผู้ใช้' });
  20 |     this.phoneInput = page.getByRole('textbox', { name: 'เบอร์โทร' });
  21 |     this.emailInput = page.getByRole('textbox', { name: 'example@email.com' });
  22 |     this.passwordInput = page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true });
  23 |     this.confirmPasswordInput = page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' });
  24 |     this.signUpButton = page.getByRole('button', { name: 'สมัครสมาชิก' });
  25 |     this.signUpHeading = page.getByRole('heading', { name: 'สมัครสมาชิก' });
  26 |   }
  27 | 
  28 |   async goto() {
  29 |     await this.page.goto('https://myprojectfitnessvercal.vercel.app/');
  30 |     await this.page.getByRole('button', { name: 'Sign In' }).click();
  31 |   }
  32 | 
  33 |   async fillSignUpForm(userData: any) {
  34 |     await this.firstNameInput.fill(userData.firstName);
  35 |     await this.lastNameInput.fill(userData.lastName);
  36 |     await this.userNameInput.fill(userData.userName);
  37 |     await this.phoneInput.fill(userData.phone);
  38 |     await this.emailInput.fill(userData.email);
  39 |     await this.passwordInput.fill(userData.password);
  40 |     await this.confirmPasswordInput.fill(userData.confirmPassword);
  41 |   }
  42 | 
  43 |   async submit() {
  44 |     await this.signUpButton.click();
  45 |   }
  46 | 
  47 |   async expectToBeOnLoginPage() {
  48 |     await expect(this.page).toHaveURL(/.*login/);
  49 |   }
  50 | 
  51 |   async expectErrorMessage(pattern: RegExp) {
  52 |     const errorMsg = this.page.getByText(pattern);
> 53 |     await expect(errorMsg).toBeVisible({ timeout: 10000 });
     |                            ^ Error: expect(locator).toBeVisible() failed
  54 |   }
  55 | }
```