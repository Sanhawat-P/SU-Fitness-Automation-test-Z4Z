# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: kritsanon_test.spec.ts >> Kritsanon automated test >> Manage Users ทดสอบ edit email อย่างถูกต้อง
- Location: tests\kritsanon_test.spec.ts:69:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Edit' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Edit' })

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
        - button "สวัสดี, Admin1" [ref=e16] [cursor=pointer]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - heading "Manage Users" [level=2] [ref=e20]
      - generic [ref=e21]:
        - button "Manage Memberships" [ref=e22] [cursor=pointer]
        - button " Create User" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: 
          - text: Create User
        - button "Scan QR" [ref=e25] [cursor=pointer]
    - generic [ref=e26]:
      - textbox "Search by name, username, email, membership no..." [active] [ref=e28]: Ad8888@email.com
      - combobox [ref=e30]:
        - option "User"
        - option "Admin" [selected]
        - option "Staff"
    - table [ref=e32]:
      - rowgroup [ref=e33]:
        - row "# Membership No Full Name Username Email Role User Type Actions" [ref=e34]:
          - columnheader "#" [ref=e35]
          - columnheader "Membership No" [ref=e36]
          - columnheader "Full Name" [ref=e37]
          - columnheader "Username" [ref=e38]
          - columnheader "Email" [ref=e39]
          - columnheader "Role" [ref=e40]
          - columnheader "User Type" [ref=e41]
          - columnheader "Actions" [ref=e42]
      - rowgroup [ref=e43]:
        - row "No users found" [ref=e44]:
          - cell "No users found" [ref=e45]
  - contentinfo [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e48]:
        - img "Logo" [ref=e50]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - heading "คลับ" [level=6] [ref=e54]
            - list [ref=e55]:
              - listitem [ref=e56]:
                - button "ข่าวสาร" [ref=e57] [cursor=pointer]
              - listitem [ref=e58]:
                - button "ตารางเวลา" [ref=e59] [cursor=pointer]
              - listitem [ref=e60]:
                - button "สมาชิก" [ref=e61] [cursor=pointer]
          - generic [ref=e62]:
            - heading "ติดต่อเรา" [level=6] [ref=e63]
            - list [ref=e64]:
              - listitem [ref=e65]:
                - button "พูดคุยกับเรา" [ref=e66] [cursor=pointer]
          - generic [ref=e67]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e68]
            - list [ref=e69]:
              - listitem [ref=e70]:
                - button "กฎระเบียบข้อบังคับ" [ref=e71] [cursor=pointer]
              - listitem [ref=e72]:
                - button "คำถามที่พบบ่อย" [ref=e73] [cursor=pointer]
        - generic [ref=e74]:
          - img "Logo 2" [ref=e75]
          - generic [ref=e76]:
            - button [ref=e77] [cursor=pointer]:
              - img [ref=e78]
            - button [ref=e80] [cursor=pointer]:
              - img [ref=e81]
            - button [ref=e83] [cursor=pointer]:
              - img [ref=e84]
            - button [ref=e86] [cursor=pointer]:
              - img [ref=e87]
      - separator [ref=e89]
      - generic [ref=e91]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e92] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e93] [cursor=pointer]:
          - /url: /privacy
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../pages/home-page';
  3   | import { LoginPage } from '../pages/login-page';
  4   | import { ManageUsersPage } from '../pages/manageUsers-page';
  5   | import { EditUserPage } from '../pages/editUser-page';
  6   | 
  7   | const VALID_ADMIN = 'Admin1';
  8   | const VALID_PASSWORD = '123456';
  9   | 
  10  | test.describe('Kritsanon automated test', () => {
  11  |     let homePage: HomePage;
  12  |     let loginPage: LoginPage;
  13  |     let manageUsersPage: ManageUsersPage;
  14  |     let editUserPage: EditUserPage;
  15  | 
  16  |     test.beforeEach(async ({ page }) => {
  17  |         homePage = new HomePage(page);
  18  |         loginPage = new LoginPage(page);
  19  |         manageUsersPage = new ManageUsersPage(page);
  20  |         editUserPage = new EditUserPage(page);
  21  |         await loginPage.goto();
  22  |         await loginPage.login(VALID_ADMIN, VALID_PASSWORD);
  23  |     });
  24  |     
  25  |     test('Manage Users ทดสอบ edit username อย่างถูกต้อง', async ({ page }) => {
  26  |         await expect(page).toHaveURL('/admin/dashboard')
  27  |         await manageUsersPage.goto();
  28  |         await expect(page).toHaveURL('/admin/users');
  29  | 
  30  |         await manageUsersPage.search('888','admin');
  31  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  32  |         
  33  |         await manageUsersPage.editUser(1);
  34  |         await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
  35  |         
  36  |         await editUserPage.editUser('Admin8888','Ad888@email.com');
  37  |         await editUserPage.confirm();
  38  | 
  39  |         await manageUsersPage.goto();
  40  |         await manageUsersPage.search('Admin8888','admin');
  41  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  42  | 
  43  |         await manageUsersPage.reset();
  44  |         await editUserPage.reset();
  45  |     });
  46  | 
  47  |     test('Manage Users ทดสอบ edit username ให้ซ้ำกับ account อื่น', async ({ page }) => {
  48  |         await expect(page).toHaveURL('/admin/dashboard')
  49  |         await manageUsersPage.goto();
  50  |         await expect(page).toHaveURL('/admin/users');
  51  | 
  52  |         await manageUsersPage.search('888','admin');
  53  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  54  |         
  55  |         await manageUsersPage.editUser(1);
  56  |         await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
  57  |         
  58  |         await editUserPage.editUser('Admin1','Ad888@email.com');
  59  |         await editUserPage.confirm();
  60  | 
  61  |         await manageUsersPage.goto();
  62  |         await manageUsersPage.search('Admin888','admin');
  63  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  64  | 
  65  |         await manageUsersPage.reset();
  66  |         await editUserPage.reset();
  67  |     });
  68  | 
  69  |     test('Manage Users ทดสอบ edit email อย่างถูกต้อง', async ({ page }) => {
  70  |         await expect(page).toHaveURL('/admin/dashboard')
  71  |         await manageUsersPage.goto();
  72  |         await expect(page).toHaveURL('/admin/users');
  73  | 
  74  |         await manageUsersPage.search('888','admin');
  75  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  76  |         
  77  |         await manageUsersPage.editUser(1);
  78  |         await expect(page).toHaveURL('/admin/users/edit/47')       // 47 is an account ID of Admin888
  79  |         
  80  |         await editUserPage.editUser('Admin888','Ad8888@email.com');
  81  |         await editUserPage.confirm();
  82  | 
  83  |         await manageUsersPage.goto();
  84  |         await manageUsersPage.search('Ad8888@email.com','admin');
> 85  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
      |                                                                  ^ Error: expect(locator).toBeVisible() failed
  86  | 
  87  |         await manageUsersPage.reset();
  88  |         await editUserPage.reset();
  89  |     });
  90  | 
  91  |     test('Manage Users ทดสอบ edit email ให้ซ้ำกับ account อื่น', async ({ page }) => {
  92  |         await expect(page).toHaveURL('/admin/dashboard')
  93  |         await manageUsersPage.goto();
  94  |         await expect(page).toHaveURL('/admin/users');
  95  | 
  96  |         await manageUsersPage.search('888','admin');
  97  |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  98  |         
  99  |         await manageUsersPage.editUser(1);
  100 |         await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
  101 |         
  102 |         await editUserPage.editUser('Admin888','test@email.com');
  103 |         await editUserPage.confirm();
  104 | 
  105 |         await manageUsersPage.goto();
  106 |         await manageUsersPage.search('Ad888@email.com','admin');
  107 |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  108 | 
  109 |         await manageUsersPage.reset();
  110 |         await editUserPage.reset();
  111 |     });
  112 | 
  113 |     test('Manage Users ทดสอบ edit email ให้ไม่ถูกตามหลักการตั้งชื่อ email', async ({ page }) => {
  114 |         await expect(page).toHaveURL('/admin/dashboard')
  115 |         await manageUsersPage.goto();
  116 |         await expect(page).toHaveURL('/admin/users');
  117 | 
  118 |         await manageUsersPage.search('888','admin');
  119 |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  120 |         
  121 |         await manageUsersPage.editUser(1);
  122 |         await expect(page).toHaveURL('/admin/users/edit/47')    // 47 is an account ID of Admin888
  123 |         
  124 |         await editUserPage.editUser('Admin888','definietlynotanemail');
  125 |         await expect(page.getByRole('button', { name: 'ยกเลิก' })).toBeVisible();
  126 | 
  127 |         await manageUsersPage.goto();
  128 |         await manageUsersPage.search('Ad888@email.com','admin');
  129 |         await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  130 | 
  131 |         await manageUsersPage.goto();
  132 |         await expect(page).toHaveURL('/admin/users');
  133 | 
  134 |         await manageUsersPage.reset();
  135 |         await editUserPage.reset();
  136 |     });
  137 | 
  138 | 
  139 | });
```