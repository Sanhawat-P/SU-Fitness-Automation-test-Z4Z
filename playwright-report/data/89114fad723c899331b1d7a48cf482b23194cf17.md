# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-002 การค้นหาข่าวด้วยคีย์เวิร์ดที่มีในหัวข้อข่าว
- Location: tests\pongsatorn_test.spec.ts:25:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: '🔍 ค้นหาข่าว' })
    - locator resolved to <input value="" type="text" class="form-control" placeholder="🔍 ค้นหาข่าว..."/>
    - fill("หยุดให้บริการ")
  - attempting fill action
    - waiting for" https://myprojectfitnessvercal.vercel.app/admin/dashboard" navigation to finish...
    - navigated to "https://myprojectfitnessvercal.vercel.app/admin/dashboard"
    - waiting for element to be visible, enabled and editable
  - element was detached from the DOM, retrying

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
            - generic [ref=e113]:
              - generic [ref=e114]:
                - generic [ref=e116]: 2026-03
                - generic [ref=e118]: 2026-04
              - generic [ref=e119]:
                - generic [ref=e121]: "0"
                - generic [ref=e123]: "1"
                - generic [ref=e125]: "2"
                - generic [ref=e127]: "3"
                - generic [ref=e129]: "4"
      - generic [ref=e132]:
        - generic [ref=e133]:
          - heading "การเข้าใช้งาน (monthly)" [level=6] [ref=e134]
          - combobox [ref=e135]:
            - option "รายวัน"
            - option "รายเดือน" [selected]
            - option "รายปี"
        - application [ref=e138]:
          - generic [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e183]: 1/3/2569
              - generic [ref=e185]: 1/4/2569
            - generic [ref=e186]:
              - generic [ref=e188]: "0"
              - generic [ref=e190]: "3"
              - generic [ref=e192]: "6"
              - generic [ref=e194]: "9"
              - generic [ref=e196]: "12"
      - generic [ref=e198]:
        - generic [ref=e199]:
          - textbox "ค้นหา Membership No หรือ ชื่อ..." [ref=e201]
          - textbox [ref=e203]
          - button "Reset" [ref=e205] [cursor=pointer]
        - generic [ref=e207]:
          - heading "🏋️‍♂️ การเข้าใช้ Fitness (ล่าสุด)" [level=6] [ref=e208]
          - table [ref=e210]:
            - rowgroup [ref=e211]:
              - row "เวลา Membership No ชื่อสมาชิก Status" [ref=e212]:
                - columnheader "เวลา" [ref=e213]
                - columnheader "Membership No" [ref=e214]
                - columnheader "ชื่อสมาชิก" [ref=e215]
                - columnheader "Status" [ref=e216]
            - rowgroup [ref=e217]:
              - paragraph [ref=e218]: แสดง 18 รายการ
              - row "2026-04-10 08:48:21 M2026-0021 สมชาย ใจดี Checked-in" [ref=e219]:
                - cell "2026-04-10 08:48:21" [ref=e220]
                - cell "M2026-0021" [ref=e221]
                - cell "สมชาย ใจดี" [ref=e222]
                - cell "Checked-in" [ref=e223]:
                  - generic [ref=e224]: Checked-in
              - row "2026-04-07 19:18:12 M2026-0023 TestB BBB Checked-in" [ref=e225]:
                - cell "2026-04-07 19:18:12" [ref=e226]
                - cell "M2026-0023" [ref=e227]
                - cell "TestB BBB" [ref=e228]
                - cell "Checked-in" [ref=e229]:
                  - generic [ref=e230]: Checked-in
              - row "2026-04-06 22:32:27 M2026-0023 TestB BBB Checked-in" [ref=e231]:
                - cell "2026-04-06 22:32:27" [ref=e232]
                - cell "M2026-0023" [ref=e233]
                - cell "TestB BBB" [ref=e234]
                - cell "Checked-in" [ref=e235]:
                  - generic [ref=e236]: Checked-in
              - row "2026-04-06 18:44:12 M2026-0021 สมชาย ใจดี Checked-in" [ref=e237]:
                - cell "2026-04-06 18:44:12" [ref=e238]
                - cell "M2026-0021" [ref=e239]
                - cell "สมชาย ใจดี" [ref=e240]
                - cell "Checked-in" [ref=e241]:
                  - generic [ref=e242]: Checked-in
              - row "2026-04-06 12:51:24 M2026-0019 IamUnique Unique Checked-in" [ref=e243]:
                - cell "2026-04-06 12:51:24" [ref=e244]
                - cell "M2026-0019" [ref=e245]
                - cell "IamUnique Unique" [ref=e246]
                - cell "Checked-in" [ref=e247]:
                  - generic [ref=e248]: Checked-in
              - row "2026-04-06 01:41:20 M2026-0010 Test test Checked-in" [ref=e249]:
                - cell "2026-04-06 01:41:20" [ref=e250]
                - cell "M2026-0010" [ref=e251]
                - cell "Test test" [ref=e252]
                - cell "Checked-in" [ref=e253]:
                  - generic [ref=e254]: Checked-in
              - row "2026-04-05 21:56:32 M2026-0010 Test test Checked-in" [ref=e255]:
                - cell "2026-04-05 21:56:32" [ref=e256]
                - cell "M2026-0010" [ref=e257]
                - cell "Test test" [ref=e258]
                - cell "Checked-in" [ref=e259]:
                  - generic [ref=e260]: Checked-in
              - row "2026-04-05 21:53:16 M2026-0011 test test Checked-in" [ref=e261]:
                - cell "2026-04-05 21:53:16" [ref=e262]
                - cell "M2026-0011" [ref=e263]
                - cell "test test" [ref=e264]
                - cell "Checked-in" [ref=e265]:
                  - generic [ref=e266]: Checked-in
              - row "2026-04-05 21:52:56 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e267]:
                - cell "2026-04-05 21:52:56" [ref=e268]
                - cell "M2026-0001" [ref=e269]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e270]
                - cell "Checked-in" [ref=e271]:
                  - generic [ref=e272]: Checked-in
              - row "2026-04-01 19:18:52 M2026-0010 Test test Checked-in" [ref=e273]:
                - cell "2026-04-01 19:18:52" [ref=e274]
                - cell "M2026-0010" [ref=e275]
                - cell "Test test" [ref=e276]
                - cell "Checked-in" [ref=e277]:
                  - generic [ref=e278]: Checked-in
              - row "2026-03-12 11:05:57 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e279]:
                - cell "2026-03-12 11:05:57" [ref=e280]
                - cell "M2026-0006" [ref=e281]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e282]
                - cell "Checked-in" [ref=e283]:
                  - generic [ref=e284]: Checked-in
              - row "2026-03-12 08:14:09 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e285]:
                - cell "2026-03-12 08:14:09" [ref=e286]
                - cell "M2026-0001" [ref=e287]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e288]
                - cell "Checked-in" [ref=e289]:
                  - generic [ref=e290]: Checked-in
              - row "2026-03-11 15:44:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e291]:
                - cell "2026-03-11 15:44:01" [ref=e292]
                - cell "M2026-0001" [ref=e293]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e294]
                - cell "Checked-in" [ref=e295]:
                  - generic [ref=e296]: Checked-in
              - row "2026-03-11 15:37:54 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e297]:
                - cell "2026-03-11 15:37:54" [ref=e298]
                - cell "M2026-0006" [ref=e299]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e300]
                - cell "Checked-in" [ref=e301]:
                  - generic [ref=e302]: Checked-in
              - row "2026-03-10 22:25:04 Checked-in" [ref=e303]:
                - cell "2026-03-10 22:25:04" [ref=e304]
                - cell [ref=e305]
                - cell [ref=e306]
                - cell "Checked-in" [ref=e307]:
                  - generic [ref=e308]: Checked-in
              - row "2026-03-10 14:23:36 M2026-0002 Checked-in" [ref=e309]:
                - cell "2026-03-10 14:23:36" [ref=e310]
                - cell "M2026-0002" [ref=e311]
                - cell [ref=e312]
                - cell "Checked-in" [ref=e313]:
                  - generic [ref=e314]: Checked-in
              - row "2026-03-09 15:34:37 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e315]:
                - cell "2026-03-09 15:34:37" [ref=e316]
                - cell "M2026-0001" [ref=e317]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e318]
                - cell "Checked-in" [ref=e319]:
                  - generic [ref=e320]: Checked-in
              - row "2026-03-08 09:21:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e321]:
                - cell "2026-03-08 09:21:01" [ref=e322]
                - cell "M2026-0001" [ref=e323]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e324]
                - cell "Checked-in" [ref=e325]:
                  - generic [ref=e326]: Checked-in
      - generic [ref=e330]:
        - heading "🧾 ประวัติการใช้งานระบบ (ล่าสุด)" [level=6] [ref=e331]
        - table [ref=e333]:
          - rowgroup [ref=e334]:
            - row "เวลา Username Role Action รายละเอียด IP" [ref=e335]:
              - columnheader "เวลา" [ref=e336]
              - columnheader "Username" [ref=e337]
              - columnheader "Role" [ref=e338]
              - columnheader "Action" [ref=e339]
              - columnheader "รายละเอียด" [ref=e340]
              - columnheader "IP" [ref=e341]
          - rowgroup [ref=e342]:
            - row "2026-04-19 17:34:12 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e343]:
              - cell "2026-04-19 17:34:12" [ref=e344]
              - cell "Admin1" [ref=e345]
              - cell "admin" [ref=e346]:
                - generic [ref=e347]: admin
              - cell "LOGIN" [ref=e348]:
                - generic [ref=e349]: LOGIN
              - cell "user login success" [ref=e350]
              - cell "184.22.22.215" [ref=e351]
            - row "2026-04-19 17:34:10 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e352]:
              - cell "2026-04-19 17:34:10" [ref=e353]
              - cell "Admin1" [ref=e354]
              - cell "admin" [ref=e355]:
                - generic [ref=e356]: admin
              - cell "LOGIN" [ref=e357]:
                - generic [ref=e358]: LOGIN
              - cell "user login success" [ref=e359]
              - cell "184.22.22.215" [ref=e360]
            - 'row "2026-04-19 17:34:09 Admin1 admin update อัปเดตแพ็กเกจ ราคา :-1.00 id: 2 184.22.22.215" [ref=e361]':
              - cell "2026-04-19 17:34:09" [ref=e362]
              - cell "Admin1" [ref=e363]
              - cell "admin" [ref=e364]:
                - generic [ref=e365]: admin
              - cell "update" [ref=e366]:
                - generic [ref=e367]: update
              - 'cell "อัปเดตแพ็กเกจ ราคา :-1.00 id: 2" [ref=e368]'
              - cell "184.22.22.215" [ref=e369]
            - 'row "2026-04-19 17:34:09 Admin1 admin update อัปเดตข้อมูลผู้ใช้ id: 47 184.22.22.215" [ref=e370]':
              - cell "2026-04-19 17:34:09" [ref=e371]
              - cell "Admin1" [ref=e372]
              - cell "admin" [ref=e373]:
                - generic [ref=e374]: admin
              - cell "update" [ref=e375]:
                - generic [ref=e376]: update
              - 'cell "อัปเดตข้อมูลผู้ใช้ id: 47" [ref=e377]'
              - cell "184.22.22.215" [ref=e378]
            - row "2026-04-19 17:34:09 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e379]:
              - cell "2026-04-19 17:34:09" [ref=e380]
              - cell "Admin1" [ref=e381]
              - cell "admin" [ref=e382]:
                - generic [ref=e383]: admin
              - cell "LOGIN" [ref=e384]:
                - generic [ref=e385]: LOGIN
              - cell "user login success" [ref=e386]
              - cell "184.22.22.215" [ref=e387]
            - row "2026-04-19 17:34:08 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e388]:
              - cell "2026-04-19 17:34:08" [ref=e389]
              - cell "Admin1" [ref=e390]
              - cell "admin" [ref=e391]:
                - generic [ref=e392]: admin
              - cell "LOGIN" [ref=e393]:
                - generic [ref=e394]: LOGIN
              - cell "user login success" [ref=e395]
              - cell "184.22.22.215" [ref=e396]
            - 'row "2026-04-19 17:34:07 Admin1 admin update อัปเดตข้อมูลผู้ใช้ id: 47 184.22.22.215" [ref=e397]':
              - cell "2026-04-19 17:34:07" [ref=e398]
              - cell "Admin1" [ref=e399]
              - cell "admin" [ref=e400]:
                - generic [ref=e401]: admin
              - cell "update" [ref=e402]:
                - generic [ref=e403]: update
              - 'cell "อัปเดตข้อมูลผู้ใช้ id: 47" [ref=e404]'
              - cell "184.22.22.215" [ref=e405]
            - row "2026-04-19 17:34:07 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e406]:
              - cell "2026-04-19 17:34:07" [ref=e407]
              - cell "Admin1" [ref=e408]
              - cell "admin" [ref=e409]:
                - generic [ref=e410]: admin
              - cell "LOGIN" [ref=e411]:
                - generic [ref=e412]: LOGIN
              - cell "user login success" [ref=e413]
              - cell "184.22.22.215" [ref=e414]
            - 'row "2026-04-19 17:34:06 Admin1 admin update อัปเดตข้อมูลผู้ใช้ id: 47 184.22.22.215" [ref=e415]':
              - cell "2026-04-19 17:34:06" [ref=e416]
              - cell "Admin1" [ref=e417]
              - cell "admin" [ref=e418]:
                - generic [ref=e419]: admin
              - cell "update" [ref=e420]:
                - generic [ref=e421]: update
              - 'cell "อัปเดตข้อมูลผู้ใช้ id: 47" [ref=e422]'
              - cell "184.22.22.215" [ref=e423]
            - 'row "2026-04-19 17:34:06 Admin1 admin update อัปเดตแพ็กเกจ ราคา :400.00 id: 2 184.22.22.215" [ref=e424]':
              - cell "2026-04-19 17:34:06" [ref=e425]
              - cell "Admin1" [ref=e426]
              - cell "admin" [ref=e427]:
                - generic [ref=e428]: admin
              - cell "update" [ref=e429]:
                - generic [ref=e430]: update
              - 'cell "อัปเดตแพ็กเกจ ราคา :400.00 id: 2" [ref=e431]'
              - cell "184.22.22.215" [ref=e432]
    - contentinfo [ref=e433]:
      - generic [ref=e434]:
        - generic [ref=e435]:
          - img "Logo" [ref=e437]
          - generic [ref=e439]:
            - generic [ref=e440]:
              - heading "คลับ" [level=6] [ref=e441]
              - list [ref=e442]:
                - listitem [ref=e443]:
                  - button "ข่าวสาร" [ref=e444] [cursor=pointer]
                - listitem [ref=e445]:
                  - button "ตารางเวลา" [ref=e446] [cursor=pointer]
                - listitem [ref=e447]:
                  - button "สมาชิก" [ref=e448] [cursor=pointer]
            - generic [ref=e449]:
              - heading "ติดต่อเรา" [level=6] [ref=e450]
              - list [ref=e451]:
                - listitem [ref=e452]:
                  - button "พูดคุยกับเรา" [ref=e453] [cursor=pointer]
            - generic [ref=e454]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e455]
              - list [ref=e456]:
                - listitem [ref=e457]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e458] [cursor=pointer]
                - listitem [ref=e459]:
                  - button "คำถามที่พบบ่อย" [ref=e460] [cursor=pointer]
          - generic [ref=e461]:
            - img "Logo 2" [ref=e462]
            - generic [ref=e463]:
              - button [ref=e464] [cursor=pointer]:
                - img [ref=e465]
              - button [ref=e467] [cursor=pointer]:
                - img [ref=e468]
              - button [ref=e470] [cursor=pointer]:
                - img [ref=e471]
              - button [ref=e473] [cursor=pointer]:
                - img [ref=e474]
        - separator [ref=e476]
        - generic [ref=e478]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e479] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e480] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e481]: "6"
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
> 29  |         await page.getByRole('textbox', { name: '🔍 ค้นหาข่าว' }).fill('หยุดให้บริการ');
      |                                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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
```