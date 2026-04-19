# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: thantana_test.spec.ts >> Thantana automate test >> TCS-SIGNUP-018 การสมัครสมาชิกเมื่อไม่กรอกข้อมูลเลย
- Location: tests\thantana_test.spec.ts:69:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/(ต้อง|ครบ)/i)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/(ต้อง|ครบ)/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Fitness Logo SU.ED FITNESS CENTER" [ref=e6]:
        - /url: /
        - img "Fitness Logo" [ref=e7]
        - generic [ref=e8]: SU.ED FITNESS CENTER
      - generic [ref=e10]:
        - link "หน้าแรก" [ref=e11]:
          - /url: /
        - link "ตารางเวลา" [ref=e12]:
          - /url: /schedule
        - link "ข่าวสาร" [ref=e13]:
          - /url: /news
        - link "สมาชิก" [ref=e14]:
          - /url: /package
        - generic [ref=e15]:
          - button "Login" [ref=e16] [cursor=pointer]
          - button "Sign In" [ref=e17] [cursor=pointer]
  - generic [ref=e19]:
    - heading "สมัครสมาชิก" [level=2] [ref=e20]
    - generic [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]: ชื่อ
          - textbox "ชื่อ" [active] [ref=e25]
        - generic [ref=e26]:
          - generic [ref=e27]: นามสกุล
          - textbox "นามสกุล" [ref=e28]
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: ชื่อผู้ใช้
          - textbox "ชื่อผู้ใช้" [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]: เบอร์โทร
          - textbox "เบอร์โทร" [ref=e35]
      - generic [ref=e36]:
        - generic [ref=e37]: อีเมล
        - textbox "example@email.com" [ref=e38]
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]: รหัสผ่าน
          - textbox "รหัสผ่าน" [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e44]: ยืนยันรหัสผ่าน
          - textbox "ยืนยันรหัสผ่าน" [ref=e45]
      - button "สมัครสมาชิก" [ref=e46] [cursor=pointer]
      - paragraph [ref=e47]:
        - text: มีบัญชีแล้ว?
        - link "เข้าสู่ระบบ" [ref=e48]:
          - /url: /login
  - contentinfo [ref=e49]:
    - generic [ref=e50]:
      - generic [ref=e51]:
        - img "Logo" [ref=e53]
        - generic [ref=e55]:
          - generic [ref=e56]:
            - heading "คลับ" [level=6] [ref=e57]
            - list [ref=e58]:
              - listitem [ref=e59]:
                - button "ข่าวสาร" [ref=e60] [cursor=pointer]
              - listitem [ref=e61]:
                - button "ตารางเวลา" [ref=e62] [cursor=pointer]
              - listitem [ref=e63]:
                - button "สมาชิก" [ref=e64] [cursor=pointer]
          - generic [ref=e65]:
            - heading "ติดต่อเรา" [level=6] [ref=e66]
            - list [ref=e67]:
              - listitem [ref=e68]:
                - button "พูดคุยกับเรา" [ref=e69] [cursor=pointer]
          - generic [ref=e70]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e71]
            - list [ref=e72]:
              - listitem [ref=e73]:
                - button "กฎระเบียบข้อบังคับ" [ref=e74] [cursor=pointer]
              - listitem [ref=e75]:
                - button "คำถามที่พบบ่อย" [ref=e76] [cursor=pointer]
        - generic [ref=e77]:
          - img "Logo 2" [ref=e78]
          - generic [ref=e79]:
            - button [ref=e80] [cursor=pointer]:
              - img [ref=e81]
            - button [ref=e83] [cursor=pointer]:
              - img [ref=e84]
            - button [ref=e86] [cursor=pointer]:
              - img [ref=e87]
            - button [ref=e89] [cursor=pointer]:
              - img [ref=e90]
      - separator [ref=e92]
      - generic [ref=e94]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e95]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e96]:
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