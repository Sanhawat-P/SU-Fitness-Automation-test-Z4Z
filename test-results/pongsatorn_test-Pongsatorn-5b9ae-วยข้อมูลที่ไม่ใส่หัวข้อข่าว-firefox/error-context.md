# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-021 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่หัวข้อข่าว
- Location: tests\pongsatorn_test.spec.ts:74:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
Expected substring: "กรุณาระบุหัวข้อข่าว"
Received string:    "หัวข้อข่าว"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
    8 × locator resolved to <div class="mb-3">…</div>
      - unexpected value "หัวข้อข่าว"

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - button "สวัสดี, Admin1" [ref=e16] [cursor=pointer]
            - text:       
    - generic [ref=e21]:
      - heading "📰 เพิ่มข่าวใหม่" [level=4] [ref=e22]
      - paragraph [ref=e23]: ใช้สำหรับประกาศข่าวสารและกิจกรรมของฟิตเนส
      - generic [ref=e24]:
        - generic [ref=e25]:
          - generic [ref=e26]: หัวข้อข่าว
          - textbox "เช่น แจ้งปิดปรับปรุงฟิตเนส" [active] [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]: รูปภาพประกอบ
          - button "Choose File" [ref=e30] [cursor=pointer]
        - img "preview" [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]: เนื้อหาข่าว
          - textbox "รายละเอียดข่าว..." [ref=e35]: Test News
        - generic [ref=e36]:
          - generic [ref=e38]:
            - generic [ref=e39]: ประเภทข่าว
            - combobox [ref=e40]:
              - option "ทั่วไป" [selected]
              - option "สุขภาพ"
          - generic [ref=e42]:
            - generic [ref=e43]: วันที่เผยแพร่
            - textbox [ref=e44]: 2026-04-03
        - generic [ref=e45]:
          - button "ยกเลิก" [ref=e46] [cursor=pointer]
          - button "บันทึกข่าว" [ref=e47] [cursor=pointer]
    - contentinfo [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - img "Logo" [ref=e52]
          - generic [ref=e54]:
            - generic [ref=e55]:
              - heading "คลับ" [level=6] [ref=e56]
              - list [ref=e57]:
                - listitem [ref=e58]:
                  - button "ข่าวสาร" [ref=e59] [cursor=pointer]
                - listitem [ref=e60]:
                  - button "ตารางเวลา" [ref=e61] [cursor=pointer]
                - listitem [ref=e62]:
                  - button "สมาชิก" [ref=e63] [cursor=pointer]
            - generic [ref=e64]:
              - heading "ติดต่อเรา" [level=6] [ref=e65]
              - list [ref=e66]:
                - listitem [ref=e67]:
                  - button "พูดคุยกับเรา" [ref=e68] [cursor=pointer]
            - generic [ref=e69]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e70]
              - list [ref=e71]:
                - listitem [ref=e72]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e73] [cursor=pointer]
                - listitem [ref=e74]:
                  - button "คำถามที่พบบ่อย" [ref=e75] [cursor=pointer]
          - generic [ref=e76]:
            - img "Logo 2" [ref=e77]
            - generic [ref=e78]:
              - button [ref=e79] [cursor=pointer]:
                - img [ref=e80]
              - button [ref=e82] [cursor=pointer]:
                - img [ref=e83]
              - button [ref=e85] [cursor=pointer]:
                - img [ref=e86]
              - button [ref=e88] [cursor=pointer]:
                - img [ref=e89]
        - separator [ref=e91]
        - generic [ref=e93]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e94] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e95] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e96]: "6"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { LoginPage } from '../pages/login-page';
  3   | import { EditNewsPage } from '../pages/editNews-pages';
  4   | 
  5   | const VALID_USER = 'Admin1';
  6   | const VALID_PASSWORD = '123456';
  7   | 
  8   | test.describe('Pongsatorn automated test', () => {
  9   |     let loginPage: LoginPage;
  10  |     let editNewsPage: EditNewsPage;
  11  | 
  12  |     test.beforeEach(async ({ page }) => {
  13  |         loginPage = new LoginPage(page);
  14  |         editNewsPage = new EditNewsPage(page);
  15  |         await loginPage.goto();
  16  |         await loginPage.login(VALID_USER, VALID_PASSWORD);
  17  |     });
  18  | 
  19  |     test('TCS-NEWS-001 เข้าสู่หน้าข่าวสาร', async ({ page }) => {
  20  |         await page.getByRole('link', { name: 'ข่าวสาร' }).click();
  21  |         await expect(page).toHaveURL('/news');
  22  |         await expect(page.getByRole('heading', { name: '📰 ข่าวสารล่าสุด' })).toBeVisible();
  23  |     });
  24  | 
  25  |     test('TCS-NEWS-002 การค้นหาข่าวด้วยคีย์เวิร์ดที่มีในหัวข้อข่าว', async ({ page }) => {
  26  |         await page.getByRole('link', { name: 'ข่าวสาร' }).click();
  27  |         await expect(page).toHaveURL('/news');
  28  |         await expect(page.getByRole('heading', { name: '📰 ข่าวสารล่าสุด' })).toBeVisible();
  29  |         await page.getByRole('textbox', { name: '🔍 ค้นหาข่าว' }).fill('หยุดให้บริการ');
  30  |         await expect(page.locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(4)).toBeVisible();
  31  |         await expect(page.locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(3)).toHaveCount(1);
  32  |     });
  33  | 
  34  |     test('TCS-NEWS-018 เข้าสู่หน้าจัดการข่าวสาร', async ({ page }) => {
  35  |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  36  |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  37  |         await expect(page).toHaveURL('admin/news');
  38  |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  39  |     });
  40  | 
  41  |     test('TCS-NEWS-019 กดปุ่มเพิ่มข่าวในหน้าจัดการข่าวสาร', async ({ page }) => {
  42  |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  43  |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  44  |         await expect(page).toHaveURL('admin/news');
  45  |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  46  |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  47  |         await editNewsPage.goto();
  48  |         await expect(page).toHaveURL('/admin/news/create');
  49  |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  50  |     });
  51  | 
  52  |     test('TCS-NEWS-020 เพิ่มข่าวด้วยข้อมูลที่ครบถ้วน', async ({page}) => {
  53  |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  54  |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  55  |         await expect(page).toHaveURL('admin/news');
  56  |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  57  |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  58  |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  59  |         await expect(page).toHaveURL('/admin/news/create');
  60  |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  61  |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  62  |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  63  |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  64  |         await page.getByRole('combobox').selectOption('general');
  65  |         await page.locator('input[type="date"]').fill('2026-04-03');  
  66  |         page.once('dialog', async dialog => {
  67  |             console.log(`Dialog message: ${dialog.message()}`);
  68  |             await dialog.dismiss().catch(() => {}); 
  69  |         });
  70  |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  71  |         await expect(page).toHaveURL('/admin/news')
  72  |     });
  73  | 
  74  |     test('TCS-NEWS-021 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่หัวข้อข่าว', async ({page}) => {
  75  |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  76  |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  77  |         await expect(page).toHaveURL('admin/news');
  78  |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  79  |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  80  |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  81  |         await expect(page).toHaveURL('/admin/news/create');
  82  |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  83  |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('');
  84  |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  85  |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  86  |         await page.getByRole('combobox').selectOption('general');
  87  |         await page.locator('input[type="date"]').fill('2026-04-03');  
  88  |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
> 89  |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
      |                                                                               ^ Error: expect(locator).toContainText(expected) failed
  90  |     });
  91  | 
  92  |     test('TCS-NEWS-022 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่รูปภาพประกอบ', async ({page}) => {
  93  |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  94  |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  95  |         await expect(page).toHaveURL('admin/news');
  96  |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  97  |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  98  |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  99  |         await expect(page).toHaveURL('/admin/news/create');
  100 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  101 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  102 |         // await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  103 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  104 |         await page.getByRole('combobox').selectOption('general');
  105 |         await page.locator('input[type="date"]').fill('2026-04-03');  
  106 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  107 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุรูปภาพประกอบ');
  108 |     });
  109 | 
  110 |     test('TCS-NEWS-023 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่เนื้อหาข่าว', async ({page}) => {
  111 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  112 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  113 |         await expect(page).toHaveURL('admin/news');
  114 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  115 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  116 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  117 |         await expect(page).toHaveURL('/admin/news/create');
  118 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  119 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  120 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  121 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('');
  122 |         await page.getByRole('combobox').selectOption('general');
  123 |         await page.locator('input[type="date"]').fill('2026-04-03');  
  124 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  125 |         await expect(page.locator('div').filter({ hasText: /^เนื้อหาข่าว$/ })).toContainText('กรุณาระบุเนื้อหาข่าว');
  126 |     });
  127 | 
  128 |     test('TCS-NEWS-024 เพิ่มข่าวด้วยข้อมูลที่ไม่ระบุข้อมูล', async ({page}) => {
  129 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  130 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  131 |         await expect(page).toHaveURL('admin/news');
  132 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  133 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  134 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  135 |         await expect(page).toHaveURL('/admin/news/create');
  136 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  137 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('');
  138 |         // await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  139 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('');
  140 |         await page.getByRole('combobox').selectOption('general');
  141 |         await page.locator('input[type="date"]').fill('');
  142 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  143 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
  144 |     });
  145 | 
  146 |     test('TCS-NEWS-025 เพิ่มข่าวด้วยข้อมูล White Space', async ({page}) => {
  147 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  148 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  149 |         await expect(page).toHaveURL('admin/news');
  150 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  151 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  152 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  153 |         await expect(page).toHaveURL('/admin/news/create');
  154 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  155 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill(' ');
  156 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  157 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill(' ');
  158 |         await page.getByRole('combobox').selectOption('general');
  159 |         await page.locator('input[type="date"]').fill('2026-04-03');
  160 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  161 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
  162 |     });
  163 | 
  164 |     test('TCS-NEWS-026 เพิ่มข่าวด้วยข้อมูลที่ไม่ระบุข้อมูล', async ({page}) => {
  165 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  166 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  167 |         await expect(page).toHaveURL('admin/news');
  168 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  169 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  170 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  171 |         await expect(page).toHaveURL('/admin/news/create');
  172 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  173 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  174 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  175 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  176 |         await page.getByRole('combobox').selectOption('general');
  177 |         await page.locator('input[type="date"]').fill('');
  178 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  179 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุวันที่เผยแพร่');
  180 |     });
  181 | 
  182 |     test('TCS-NEWS-027 การเพิ่มข่าวด้วยรูปภาพนามสกุล .txt', async ({page}) => {
  183 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  184 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  185 |         await expect(page).toHaveURL('admin/news');
  186 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  187 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  188 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  189 |         await expect(page).toHaveURL('/admin/news/create');
```