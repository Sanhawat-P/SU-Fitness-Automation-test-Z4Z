# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: theerapong_test.spec.ts >> Theerapong automated test >> SF-39 เข้าหน้าเเพ็กเกจสมาชิก
- Location: tests\theerapong_test.spec.ts:40:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first()

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
        - button "สวัสดี, test" [ref=e16] [cursor=pointer]
  - generic [ref=e18]:
    - generic [ref=e19]:
      - heading "💳 สมาชิกสำหรับทุกคน" [level=2] [ref=e20]
      - paragraph [ref=e21]: เลือกแพ็กเกจที่เหมาะกับคุณ
    - generic [ref=e22]:
      - heading "รายเดือน" [level=3] [ref=e23]
      - generic [ref=e24]:
        - generic [ref=e26]:
          - heading "นักเรียน/นักศึกษา" [level=2] [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]:
              - generic [ref=e31]: "-"
              - paragraph [ref=e32]: ราคาเริ่มต้น / รายเดือน
            - button "สมัครเลย" [disabled]
        - generic [ref=e34]:
          - heading "บุคลากรในมหาวิทยาลัย" [level=2] [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]:
              - generic [ref=e39]: 400 บาท
              - paragraph [ref=e40]: ราคาเริ่มต้น / รายเดือน
            - button "สมัครเลย" [ref=e41] [cursor=pointer]
        - generic [ref=e43]:
          - heading "บุคคลภายนอก" [level=2] [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]: 500 บาท
              - paragraph [ref=e49]: ราคาเริ่มต้น / รายเดือน
            - button "สมัครเลย" [ref=e50] [cursor=pointer]
    - generic [ref=e51]:
      - heading "4 เดือน" [level=3] [ref=e52]
      - generic [ref=e53]:
        - generic [ref=e55]:
          - heading "นักเรียน/นักศึกษา" [level=2] [ref=e57]
          - generic [ref=e58]:
            - generic [ref=e59]:
              - generic [ref=e60]: "-1 บาท"
              - paragraph [ref=e61]: ราคาเริ่มต้น / 4 เดือน
            - button "สมัครเลย" [ref=e62] [cursor=pointer]
        - generic [ref=e64]:
          - heading "บุคลากรในมหาวิทยาลัย" [level=2] [ref=e66]
          - generic [ref=e67]:
            - generic [ref=e68]:
              - generic [ref=e69]: "-"
              - paragraph [ref=e70]: ราคาเริ่มต้น / 4 เดือน
            - button "สมัครเลย" [disabled]
        - generic [ref=e72]:
          - heading "บุคคลภายนอก" [level=2] [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e77]: "-"
              - paragraph [ref=e78]: ราคาเริ่มต้น / 4 เดือน
            - button "สมัครเลย" [disabled]
  - contentinfo [ref=e79]:
    - generic [ref=e80]:
      - generic [ref=e81]:
        - img "Logo" [ref=e83]
        - generic [ref=e85]:
          - generic [ref=e86]:
            - heading "คลับ" [level=6] [ref=e87]
            - list [ref=e88]:
              - listitem [ref=e89]:
                - button "ข่าวสาร" [ref=e90] [cursor=pointer]
              - listitem [ref=e91]:
                - button "ตารางเวลา" [ref=e92] [cursor=pointer]
              - listitem [ref=e93]:
                - button "สมาชิก" [ref=e94] [cursor=pointer]
          - generic [ref=e95]:
            - heading "ติดต่อเรา" [level=6] [ref=e96]
            - list [ref=e97]:
              - listitem [ref=e98]:
                - button "พูดคุยกับเรา" [ref=e99] [cursor=pointer]
          - generic [ref=e100]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e101]
            - list [ref=e102]:
              - listitem [ref=e103]:
                - button "กฎระเบียบข้อบังคับ" [ref=e104] [cursor=pointer]
              - listitem [ref=e105]:
                - button "คำถามที่พบบ่อย" [ref=e106] [cursor=pointer]
        - generic [ref=e107]:
          - img "Logo 2" [ref=e108]
          - generic [ref=e109]:
            - button [ref=e110] [cursor=pointer]:
              - img [ref=e111]
            - button [ref=e113] [cursor=pointer]:
              - img [ref=e114]
            - button [ref=e116] [cursor=pointer]:
              - img [ref=e117]
            - button [ref=e119] [cursor=pointer]:
              - img [ref=e120]
      - separator [ref=e122]
      - generic [ref=e124]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e125] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e126] [cursor=pointer]:
          - /url: /privacy
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class PackagePage{
  4  |     readonly page: Page;
  5  | 
  6  |     readonly mounthlyStudentPackage: Locator;
  7  |     readonly mounthlyInsiderPackage: Locator;
  8  |     readonly mounthlyOutsiderPackage: Locator;
  9  | 
  10 |     readonly quarterlyStudentPackage: Locator;
  11 |     readonly quarterlyInsiderPackage: Locator;
  12 |     readonly quarterlyOutsiderPackage: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 | 
  17 |         this.mounthlyStudentPackage = page.locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
  18 |         this.mounthlyInsiderPackage = page.locator('div').filter({ hasText: /^บุคลากรในมหาวิทยาลัย400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
  19 |         this.mounthlyOutsiderPackage = page.locator('div').filter({ hasText: /^บุคคลภายนอก500 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
  20 |         this.quarterlyStudentPackage = page.locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา1000 บาทราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();
  21 |         this.quarterlyInsiderPackage = page.locator('div').filter({ hasText: /^บุคลากรในมหาวิทยาลัย1400 บาทราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();
  22 |         this.quarterlyOutsiderPackage = page.locator('div').filter({ hasText: /^บุคคลภายนอก-ราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();
  23 | 
  24 |     }
  25 | 
  26 |     async goto(){
  27 |         await this.page.goto('/package');
  28 |     }
  29 | 
  30 |     async checkMonthlyStudentPackage(){
  31 |         await this.page.getByRole('button', { name: 'สมัครเลย' }).first().click();
  32 |     }
  33 | 
  34 |     async expectPackageVisible(){
> 35 |         await expect(this.mounthlyStudentPackage).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  36 |         await expect(this.mounthlyInsiderPackage).toBeVisible();
  37 |         await expect(this.mounthlyOutsiderPackage).toBeVisible();
  38 |         await expect(this.quarterlyStudentPackage).toBeVisible();
  39 |         await expect(this.quarterlyInsiderPackage).toBeVisible();
  40 |         await expect(this.quarterlyOutsiderPackage).toBeVisible();
  41 |     }
  42 | }
```