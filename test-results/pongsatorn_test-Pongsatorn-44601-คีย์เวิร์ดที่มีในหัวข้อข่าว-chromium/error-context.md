# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-002 การค้นหาข่าวด้วยคีย์เวิร์ดที่มีในหัวข้อข่าว
- Location: tests\pongsatorn_test.spec.ts:25:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(4)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(4)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e19]:
        - heading " Fitness Dashboard" [level=2] [ref=e20]:
          - generic [ref=e21]: 
          - text: Fitness Dashboard
        - paragraph [ref=e22]:
          - text: SU.ED FITNESS CENTER
          - text: "วันที่จัดทำรายงาน: 19/4/2569"
      - generic [ref=e23]:
        - generic [ref=e25]:
          - heading "ผู้ใช้งานทั้งหมด" [level=6] [ref=e26]
          - heading "7" [level=2] [ref=e27]
        - generic [ref=e29]:
          - heading "เข้าใช้วันนี้" [level=6] [ref=e30]
          - heading "0" [level=2] [ref=e31]
      - generic [ref=e32]:
        - generic [ref=e34]:
          - heading "ผู้ใช้แยกตามประเภท" [level=6] [ref=e35]
          - generic [ref=e37]:
            - list [ref=e39]:
              - listitem [ref=e40]:
                - img "นักเรียน/นักศึกษา legend icon" [ref=e41]
                - text: นักเรียน/นักศึกษา
              - listitem [ref=e43]:
                - img "อื่น ๆ legend icon" [ref=e44]
                - text: อื่น ๆ
            - application [ref=e46]:
              - generic [ref=e54]:
                - generic [ref=e57]: "4"
                - generic [ref=e60]: "3"
        - generic [ref=e62]:
          - generic [ref=e63]:
            - heading "สมัครสมาชิก (monthly)" [level=6] [ref=e64]
            - combobox [ref=e65]:
              - option "รายวัน"
              - option "รายเดือน" [selected]
              - option "รายปี"
          - application [ref=e68]:
            - generic [ref=e88]:
              - generic [ref=e89]:
                - generic [ref=e91]: 2026-03
                - generic [ref=e93]: 2026-04
              - generic [ref=e94]:
                - generic [ref=e96]: "0"
                - generic [ref=e98]: "1"
                - generic [ref=e100]: "2"
                - generic [ref=e102]: "3"
                - generic [ref=e104]: "4"
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "การเข้าใช้งาน (monthly)" [level=6] [ref=e109]
          - combobox [ref=e110]:
            - option "รายวัน"
            - option "รายเดือน" [selected]
            - option "รายปี"
        - application [ref=e113]:
          - generic [ref=e132]:
            - generic [ref=e133]:
              - generic [ref=e135]: 1/3/2569
              - generic [ref=e137]: 1/4/2569
            - generic [ref=e138]:
              - generic [ref=e140]: "0"
              - generic [ref=e142]: "3"
              - generic [ref=e144]: "6"
              - generic [ref=e146]: "9"
              - generic [ref=e148]: "12"
      - generic [ref=e150]:
        - generic [ref=e151]:
          - textbox "ค้นหา Membership No หรือ ชื่อ..." [ref=e153]
          - textbox [ref=e155]
          - button "Reset" [ref=e157] [cursor=pointer]
        - generic [ref=e159]:
          - heading "🏋️‍♂️ การเข้าใช้ Fitness (ล่าสุด)" [level=6] [ref=e160]
          - table [ref=e162]:
            - rowgroup [ref=e163]:
              - row "เวลา Membership No ชื่อสมาชิก Status" [ref=e164]:
                - columnheader "เวลา" [ref=e165]
                - columnheader "Membership No" [ref=e166]
                - columnheader "ชื่อสมาชิก" [ref=e167]
                - columnheader "Status" [ref=e168]
            - rowgroup [ref=e169]:
              - paragraph [ref=e170]: แสดง 18 รายการ
              - row "2026-04-10 08:48:21 M2026-0021 สมชาย ใจดี Checked-in" [ref=e171]:
                - cell "2026-04-10 08:48:21" [ref=e172]
                - cell "M2026-0021" [ref=e173]
                - cell "สมชาย ใจดี" [ref=e174]
                - cell "Checked-in" [ref=e175]:
                  - generic [ref=e176]: Checked-in
              - row "2026-04-07 19:18:12 M2026-0023 TestB BBB Checked-in" [ref=e177]:
                - cell "2026-04-07 19:18:12" [ref=e178]
                - cell "M2026-0023" [ref=e179]
                - cell "TestB BBB" [ref=e180]
                - cell "Checked-in" [ref=e181]:
                  - generic [ref=e182]: Checked-in
              - row "2026-04-06 22:32:27 M2026-0023 TestB BBB Checked-in" [ref=e183]:
                - cell "2026-04-06 22:32:27" [ref=e184]
                - cell "M2026-0023" [ref=e185]
                - cell "TestB BBB" [ref=e186]
                - cell "Checked-in" [ref=e187]:
                  - generic [ref=e188]: Checked-in
              - row "2026-04-06 18:44:12 M2026-0021 สมชาย ใจดี Checked-in" [ref=e189]:
                - cell "2026-04-06 18:44:12" [ref=e190]
                - cell "M2026-0021" [ref=e191]
                - cell "สมชาย ใจดี" [ref=e192]
                - cell "Checked-in" [ref=e193]:
                  - generic [ref=e194]: Checked-in
              - row "2026-04-06 12:51:24 M2026-0019 IamUnique Unique Checked-in" [ref=e195]:
                - cell "2026-04-06 12:51:24" [ref=e196]
                - cell "M2026-0019" [ref=e197]
                - cell "IamUnique Unique" [ref=e198]
                - cell "Checked-in" [ref=e199]:
                  - generic [ref=e200]: Checked-in
              - row "2026-04-06 01:41:20 M2026-0010 Test test Checked-in" [ref=e201]:
                - cell "2026-04-06 01:41:20" [ref=e202]
                - cell "M2026-0010" [ref=e203]
                - cell "Test test" [ref=e204]
                - cell "Checked-in" [ref=e205]:
                  - generic [ref=e206]: Checked-in
              - row "2026-04-05 21:56:32 M2026-0010 Test test Checked-in" [ref=e207]:
                - cell "2026-04-05 21:56:32" [ref=e208]
                - cell "M2026-0010" [ref=e209]
                - cell "Test test" [ref=e210]
                - cell "Checked-in" [ref=e211]:
                  - generic [ref=e212]: Checked-in
              - row "2026-04-05 21:53:16 M2026-0011 test test Checked-in" [ref=e213]:
                - cell "2026-04-05 21:53:16" [ref=e214]
                - cell "M2026-0011" [ref=e215]
                - cell "test test" [ref=e216]
                - cell "Checked-in" [ref=e217]:
                  - generic [ref=e218]: Checked-in
              - row "2026-04-05 21:52:56 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e219]:
                - cell "2026-04-05 21:52:56" [ref=e220]
                - cell "M2026-0001" [ref=e221]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e222]
                - cell "Checked-in" [ref=e223]:
                  - generic [ref=e224]: Checked-in
              - row "2026-04-01 19:18:52 M2026-0010 Test test Checked-in" [ref=e225]:
                - cell "2026-04-01 19:18:52" [ref=e226]
                - cell "M2026-0010" [ref=e227]
                - cell "Test test" [ref=e228]
                - cell "Checked-in" [ref=e229]:
                  - generic [ref=e230]: Checked-in
              - row "2026-03-12 11:05:57 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e231]:
                - cell "2026-03-12 11:05:57" [ref=e232]
                - cell "M2026-0006" [ref=e233]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e234]
                - cell "Checked-in" [ref=e235]:
                  - generic [ref=e236]: Checked-in
              - row "2026-03-12 08:14:09 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e237]:
                - cell "2026-03-12 08:14:09" [ref=e238]
                - cell "M2026-0001" [ref=e239]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e240]
                - cell "Checked-in" [ref=e241]:
                  - generic [ref=e242]: Checked-in
              - row "2026-03-11 15:44:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e243]:
                - cell "2026-03-11 15:44:01" [ref=e244]
                - cell "M2026-0001" [ref=e245]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e246]
                - cell "Checked-in" [ref=e247]:
                  - generic [ref=e248]: Checked-in
              - row "2026-03-11 15:37:54 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e249]:
                - cell "2026-03-11 15:37:54" [ref=e250]
                - cell "M2026-0006" [ref=e251]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e252]
                - cell "Checked-in" [ref=e253]:
                  - generic [ref=e254]: Checked-in
              - row "2026-03-10 22:25:04 Checked-in" [ref=e255]:
                - cell "2026-03-10 22:25:04" [ref=e256]
                - cell [ref=e257]
                - cell [ref=e258]
                - cell "Checked-in" [ref=e259]:
                  - generic [ref=e260]: Checked-in
              - row "2026-03-10 14:23:36 M2026-0002 Checked-in" [ref=e261]:
                - cell "2026-03-10 14:23:36" [ref=e262]
                - cell "M2026-0002" [ref=e263]
                - cell [ref=e264]
                - cell "Checked-in" [ref=e265]:
                  - generic [ref=e266]: Checked-in
              - row "2026-03-09 15:34:37 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e267]:
                - cell "2026-03-09 15:34:37" [ref=e268]
                - cell "M2026-0001" [ref=e269]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e270]
                - cell "Checked-in" [ref=e271]:
                  - generic [ref=e272]: Checked-in
              - row "2026-03-08 09:21:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e273]:
                - cell "2026-03-08 09:21:01" [ref=e274]
                - cell "M2026-0001" [ref=e275]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e276]
                - cell "Checked-in" [ref=e277]:
                  - generic [ref=e278]: Checked-in
      - generic [ref=e282]:
        - heading "🧾 ประวัติการใช้งานระบบ (ล่าสุด)" [level=6] [ref=e283]
        - table [ref=e285]:
          - rowgroup [ref=e286]:
            - row "เวลา Username Role Action รายละเอียด IP" [ref=e287]:
              - columnheader "เวลา" [ref=e288]
              - columnheader "Username" [ref=e289]
              - columnheader "Role" [ref=e290]
              - columnheader "Action" [ref=e291]
              - columnheader "รายละเอียด" [ref=e292]
              - columnheader "IP" [ref=e293]
          - rowgroup [ref=e294]:
            - row "2026-04-19 17:34:03 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e295]:
              - cell "2026-04-19 17:34:03" [ref=e296]
              - cell "Admin1" [ref=e297]
              - cell "admin" [ref=e298]:
                - generic [ref=e299]: admin
              - cell "LOGIN" [ref=e300]:
                - generic [ref=e301]: LOGIN
              - cell "user login success" [ref=e302]
              - cell "184.22.22.215" [ref=e303]
            - row "2026-04-19 17:34:03 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e304]:
              - cell "2026-04-19 17:34:03" [ref=e305]
              - cell "Admin1" [ref=e306]
              - cell "admin" [ref=e307]:
                - generic [ref=e308]: admin
              - cell "LOGIN" [ref=e309]:
                - generic [ref=e310]: LOGIN
              - cell "user login success" [ref=e311]
              - cell "184.22.22.215" [ref=e312]
            - row "2026-04-19 17:34:03 test user LOGIN user login success 184.22.22.215" [ref=e313]:
              - cell "2026-04-19 17:34:03" [ref=e314]
              - cell "test" [ref=e315]
              - cell "user" [ref=e316]:
                - generic [ref=e317]: user
              - cell "LOGIN" [ref=e318]:
                - generic [ref=e319]: LOGIN
              - cell "user login success" [ref=e320]
              - cell "184.22.22.215" [ref=e321]
            - row "2026-04-19 17:34:02 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e322]:
              - cell "2026-04-19 17:34:02" [ref=e323]
              - cell "Admin1" [ref=e324]
              - cell "admin" [ref=e325]:
                - generic [ref=e326]: admin
              - cell "LOGIN" [ref=e327]:
                - generic [ref=e328]: LOGIN
              - cell "user login success" [ref=e329]
              - cell "184.22.22.215" [ref=e330]
            - row "2026-04-19 17:34:02 test user LOGIN user login success 184.22.22.215" [ref=e331]:
              - cell "2026-04-19 17:34:02" [ref=e332]
              - cell "test" [ref=e333]
              - cell "user" [ref=e334]:
                - generic [ref=e335]: user
              - cell "LOGIN" [ref=e336]:
                - generic [ref=e337]: LOGIN
              - cell "user login success" [ref=e338]
              - cell "184.22.22.215" [ref=e339]
            - row "2026-04-19 17:32:39 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e340]:
              - cell "2026-04-19 17:32:39" [ref=e341]
              - cell "Admin1" [ref=e342]
              - cell "admin" [ref=e343]:
                - generic [ref=e344]: admin
              - cell "LOGIN" [ref=e345]:
                - generic [ref=e346]: LOGIN
              - cell "user login success" [ref=e347]
              - cell "184.22.22.215" [ref=e348]
            - row "2026-04-19 17:32:33 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e349]:
              - cell "2026-04-19 17:32:33" [ref=e350]
              - cell "Admin1" [ref=e351]
              - cell "admin" [ref=e352]:
                - generic [ref=e353]: admin
              - cell "LOGIN" [ref=e354]:
                - generic [ref=e355]: LOGIN
              - cell "user login success" [ref=e356]
              - cell "184.22.22.215" [ref=e357]
            - row "2026-04-19 17:32:27 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e358]:
              - cell "2026-04-19 17:32:27" [ref=e359]
              - cell "Admin1" [ref=e360]
              - cell "admin" [ref=e361]:
                - generic [ref=e362]: admin
              - cell "LOGIN" [ref=e363]:
                - generic [ref=e364]: LOGIN
              - cell "user login success" [ref=e365]
              - cell "184.22.22.215" [ref=e366]
            - row "2026-04-19 17:32:20 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e367]:
              - cell "2026-04-19 17:32:20" [ref=e368]
              - cell "Admin1" [ref=e369]
              - cell "admin" [ref=e370]:
                - generic [ref=e371]: admin
              - cell "LOGIN" [ref=e372]:
                - generic [ref=e373]: LOGIN
              - cell "user login success" [ref=e374]
              - cell "184.22.22.215" [ref=e375]
            - row "2026-04-19 17:32:15 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e376]:
              - cell "2026-04-19 17:32:15" [ref=e377]
              - cell "Admin1" [ref=e378]
              - cell "admin" [ref=e379]:
                - generic [ref=e380]: admin
              - cell "LOGIN" [ref=e381]:
                - generic [ref=e382]: LOGIN
              - cell "user login success" [ref=e383]
              - cell "184.22.22.215" [ref=e384]
    - contentinfo [ref=e385]:
      - generic [ref=e386]:
        - generic [ref=e387]:
          - img "Logo" [ref=e389]
          - generic [ref=e391]:
            - generic [ref=e392]:
              - heading "คลับ" [level=6] [ref=e393]
              - list [ref=e394]:
                - listitem [ref=e395]:
                  - button "ข่าวสาร" [ref=e396] [cursor=pointer]
                - listitem [ref=e397]:
                  - button "ตารางเวลา" [ref=e398] [cursor=pointer]
                - listitem [ref=e399]:
                  - button "สมาชิก" [ref=e400] [cursor=pointer]
            - generic [ref=e401]:
              - heading "ติดต่อเรา" [level=6] [ref=e402]
              - list [ref=e403]:
                - listitem [ref=e404]:
                  - button "พูดคุยกับเรา" [ref=e405] [cursor=pointer]
            - generic [ref=e406]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e407]
              - list [ref=e408]:
                - listitem [ref=e409]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e410] [cursor=pointer]
                - listitem [ref=e411]:
                  - button "คำถามที่พบบ่อย" [ref=e412] [cursor=pointer]
          - generic [ref=e413]:
            - img "Logo 2" [ref=e414]
            - generic [ref=e415]:
              - button [ref=e416] [cursor=pointer]:
                - img [ref=e417]
              - button [ref=e419] [cursor=pointer]:
                - img [ref=e420]
              - button [ref=e422] [cursor=pointer]:
                - img [ref=e423]
              - button [ref=e425] [cursor=pointer]:
                - img [ref=e426]
        - separator [ref=e428]
        - generic [ref=e430]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e431] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e432] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e433]: "6"
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
> 30  |         await expect(page.locator('div').filter({ hasText: '⛔️หยุดให้บริการ⛔️📅31' }).nth(4)).toBeVisible();
      |                                                                                               ^ Error: expect(locator).toBeVisible() failed
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
  89  |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
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
```