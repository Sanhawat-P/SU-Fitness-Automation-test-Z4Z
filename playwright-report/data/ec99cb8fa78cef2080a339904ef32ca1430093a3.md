# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sanhawat.spec.ts >> Sanhawat automated test >> Manage Package การแก้ไขราคาแพ็จเกจที่ไม่ถูกต้อง (เว้นว่าง)
- Location: tests\sanhawat.spec.ts:51:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test="error"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="error"]')

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
        - button "สวัสดี, Admin1" [ref=e16] [cursor=pointer]
  - generic [ref=e21]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "จัดการแพ็กเกจ" [level=2] [ref=e24]
        - paragraph [ref=e25]: Manage Package
      - button "🔄 โหลดข้อมูลใหม่" [ref=e26] [cursor=pointer]
    - table [ref=e28]:
      - rowgroup [ref=e29]:
        - row "# ระยะเวลา ประเภทผู้ใช้ ราคา (บาท) การจัดการ" [ref=e30]:
          - columnheader "#" [ref=e31]
          - columnheader "ระยะเวลา" [ref=e32]
          - columnheader "ประเภทผู้ใช้" [ref=e33]
          - columnheader "ราคา (บาท)" [ref=e34]
          - columnheader "การจัดการ" [ref=e35]
      - rowgroup [ref=e36]:
        - row "1 4 นักเรียน/นักศึกษา บาท ✏️ แก้ไข 🗑️ ลบ" [ref=e37]:
          - cell "1" [ref=e38]
          - cell "4" [ref=e39]
          - cell "นักเรียน/นักศึกษา" [ref=e40]
          - cell "บาท" [ref=e41]
          - cell "✏️ แก้ไข 🗑️ ลบ" [ref=e42]:
            - button "✏️ แก้ไข" [ref=e43] [cursor=pointer]
            - button "🗑️ ลบ" [ref=e44] [cursor=pointer]
        - row "2 1 บุคลากรในมหาวิทยาลัย 400 บาท ✏️ แก้ไข 🗑️ ลบ" [ref=e45]:
          - cell "2" [ref=e46]
          - cell "1" [ref=e47]
          - cell "บุคลากรในมหาวิทยาลัย" [ref=e48]
          - cell "400 บาท" [ref=e49]
          - cell "✏️ แก้ไข 🗑️ ลบ" [ref=e50]:
            - button "✏️ แก้ไข" [ref=e51] [cursor=pointer]
            - button "🗑️ ลบ" [ref=e52] [cursor=pointer]
        - row "3 1 บุคคลภายนอก 500 บาท ✏️ แก้ไข 🗑️ ลบ" [ref=e53]:
          - cell "3" [ref=e54]
          - cell "1" [ref=e55]
          - cell "บุคคลภายนอก" [ref=e56]
          - cell "500 บาท" [ref=e57]
          - cell "✏️ แก้ไข 🗑️ ลบ" [ref=e58]:
            - button "✏️ แก้ไข" [ref=e59] [cursor=pointer]
            - button "🗑️ ลบ" [ref=e60] [cursor=pointer]
  - contentinfo [ref=e61]:
    - generic [ref=e62]:
      - generic [ref=e63]:
        - img "Logo" [ref=e65]
        - generic [ref=e67]:
          - generic [ref=e68]:
            - heading "คลับ" [level=6] [ref=e69]
            - list [ref=e70]:
              - listitem [ref=e71]:
                - button "ข่าวสาร" [ref=e72] [cursor=pointer]
              - listitem [ref=e73]:
                - button "ตารางเวลา" [ref=e74] [cursor=pointer]
              - listitem [ref=e75]:
                - button "สมาชิก" [ref=e76] [cursor=pointer]
          - generic [ref=e77]:
            - heading "ติดต่อเรา" [level=6] [ref=e78]
            - list [ref=e79]:
              - listitem [ref=e80]:
                - button "พูดคุยกับเรา" [ref=e81] [cursor=pointer]
          - generic [ref=e82]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e83]
            - list [ref=e84]:
              - listitem [ref=e85]:
                - button "กฎระเบียบข้อบังคับ" [ref=e86] [cursor=pointer]
              - listitem [ref=e87]:
                - button "คำถามที่พบบ่อย" [ref=e88] [cursor=pointer]
        - generic [ref=e89]:
          - img "Logo 2" [ref=e90]
          - generic [ref=e91]:
            - button [ref=e92] [cursor=pointer]:
              - img [ref=e93]
            - button [ref=e95] [cursor=pointer]:
              - img [ref=e96]
            - button [ref=e98] [cursor=pointer]:
              - img [ref=e99]
            - button [ref=e101] [cursor=pointer]:
              - img [ref=e102]
      - separator [ref=e104]
      - generic [ref=e106]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e107]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e108]:
          - /url: /privacy
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class ManagePackage{
  4  |     readonly page: Page;
  5  | 
  6  |     readonly heading: Locator;
  7  |     readonly edit1: Locator;
  8  |     readonly valueInput: Locator;
  9  |     readonly package1: Locator;
  10 |     readonly save: Locator;
  11 |     readonly reload: Locator;
  12 |     readonly errorMessage: Locator;
  13 |     
  14 | 
  15 |     constructor(page: Page){
  16 |         this.page = page;
  17 | 
  18 |         this.heading = page.getByRole('heading', { name: 'จัดการแพ็กเกจ' });
  19 |         this.edit1 = page.getByRole('button', { name: '✏️ แก้ไข' }).first();
  20 |         this.valueInput = page.getByRole('spinbutton');
  21 |         this.package1 = page.getByRole('cell', { name: 'นักเรียน/นักศึกษา' }).first();
  22 |         this.save = page.getByRole('button', { name: '💾 บันทึก' });
  23 |         this.reload = page.getByRole('button', { name: '🔄 โหลดข้อมูลใหม่' });
  24 |         this.errorMessage = page.locator('[data-test="error"]');
  25 |     }
  26 | 
  27 |     async goto(){
  28 |         await this.page.goto('/admin/packages');
  29 |     }
  30 | 
  31 | 
  32 |     async expectOnManagePackagePage(){
  33 |         await expect(this.page).toHaveURL('https://myprojectfitnessvercal.vercel.app/admin/packages');
  34 |         await expect(this.heading).toBeVisible();
  35 |     }
  36 | 
  37 |     async changeValue(value: string){
  38 | 
  39 |         expect(this.package1).toBeVisible();
  40 |         await(this.edit1).click();
  41 | 
  42 |         expect(this.valueInput).toBeVisible();
  43 |         await(this.valueInput).fill(value);
  44 | 
  45 |         expect(this.save).toBeVisible();
  46 |         await(this.save).click();
  47 |     }
  48 | 
  49 |     async expectErrorMassage(){
> 50 |         await expect(this.errorMessage).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  51 |         await expect(this.errorMessage).toContainText("กรุณากรอกค่าใหม่");
  52 |     }
  53 | 
  54 | }
```