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
              - generic [ref=e55]:
                - generic [ref=e58]: "4"
                - generic [ref=e61]: "3"
        - generic [ref=e63]:
          - generic [ref=e64]:
            - heading "สมัครสมาชิก (monthly)" [level=6] [ref=e65]
            - combobox [ref=e66]:
              - option "รายวัน"
              - option "รายเดือน" [selected]
              - option "รายปี"
          - application [ref=e69]:
            - generic [ref=e90]:
              - generic [ref=e91]:
                - generic [ref=e93]: 2026-03
                - generic [ref=e95]: 2026-04
              - generic [ref=e96]:
                - generic [ref=e98]: "0"
                - generic [ref=e100]: "1"
                - generic [ref=e102]: "2"
                - generic [ref=e104]: "3"
                - generic [ref=e106]: "4"
      - generic [ref=e109]:
        - generic [ref=e110]:
          - heading "การเข้าใช้งาน (monthly)" [level=6] [ref=e111]
          - combobox [ref=e112]:
            - option "รายวัน"
            - option "รายเดือน" [selected]
            - option "รายปี"
        - application [ref=e115]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e138]: 1/3/2569
              - generic [ref=e140]: 1/4/2569
            - generic [ref=e141]:
              - generic [ref=e143]: "0"
              - generic [ref=e145]: "3"
              - generic [ref=e147]: "6"
              - generic [ref=e149]: "9"
              - generic [ref=e151]: "12"
      - generic [ref=e153]:
        - generic [ref=e154]:
          - textbox "ค้นหา Membership No หรือ ชื่อ..." [ref=e156]
          - textbox [ref=e158]
          - button "Reset" [ref=e160] [cursor=pointer]
        - generic [ref=e162]:
          - heading "🏋️‍♂️ การเข้าใช้ Fitness (ล่าสุด)" [level=6] [ref=e163]
          - table [ref=e165]:
            - rowgroup [ref=e166]:
              - row "เวลา Membership No ชื่อสมาชิก Status" [ref=e167]:
                - columnheader "เวลา" [ref=e168]
                - columnheader "Membership No" [ref=e169]
                - columnheader "ชื่อสมาชิก" [ref=e170]
                - columnheader "Status" [ref=e171]
            - rowgroup [ref=e172]:
              - paragraph [ref=e173]: แสดง 18 รายการ
              - row "2026-04-10 08:48:21 M2026-0021 สมชาย ใจดี Checked-in" [ref=e174]:
                - cell "2026-04-10 08:48:21" [ref=e175]
                - cell "M2026-0021" [ref=e176]
                - cell "สมชาย ใจดี" [ref=e177]
                - cell "Checked-in" [ref=e178]:
                  - generic [ref=e179]: Checked-in
              - row "2026-04-07 19:18:12 M2026-0023 TestB BBB Checked-in" [ref=e180]:
                - cell "2026-04-07 19:18:12" [ref=e181]
                - cell "M2026-0023" [ref=e182]
                - cell "TestB BBB" [ref=e183]
                - cell "Checked-in" [ref=e184]:
                  - generic [ref=e185]: Checked-in
              - row "2026-04-06 22:32:27 M2026-0023 TestB BBB Checked-in" [ref=e186]:
                - cell "2026-04-06 22:32:27" [ref=e187]
                - cell "M2026-0023" [ref=e188]
                - cell "TestB BBB" [ref=e189]
                - cell "Checked-in" [ref=e190]:
                  - generic [ref=e191]: Checked-in
              - row "2026-04-06 18:44:12 M2026-0021 สมชาย ใจดี Checked-in" [ref=e192]:
                - cell "2026-04-06 18:44:12" [ref=e193]
                - cell "M2026-0021" [ref=e194]
                - cell "สมชาย ใจดี" [ref=e195]
                - cell "Checked-in" [ref=e196]:
                  - generic [ref=e197]: Checked-in
              - row "2026-04-06 12:51:24 M2026-0019 IamUnique Unique Checked-in" [ref=e198]:
                - cell "2026-04-06 12:51:24" [ref=e199]
                - cell "M2026-0019" [ref=e200]
                - cell "IamUnique Unique" [ref=e201]
                - cell "Checked-in" [ref=e202]:
                  - generic [ref=e203]: Checked-in
              - row "2026-04-06 01:41:20 M2026-0010 Test test Checked-in" [ref=e204]:
                - cell "2026-04-06 01:41:20" [ref=e205]
                - cell "M2026-0010" [ref=e206]
                - cell "Test test" [ref=e207]
                - cell "Checked-in" [ref=e208]:
                  - generic [ref=e209]: Checked-in
              - row "2026-04-05 21:56:32 M2026-0010 Test test Checked-in" [ref=e210]:
                - cell "2026-04-05 21:56:32" [ref=e211]
                - cell "M2026-0010" [ref=e212]
                - cell "Test test" [ref=e213]
                - cell "Checked-in" [ref=e214]:
                  - generic [ref=e215]: Checked-in
              - row "2026-04-05 21:53:16 M2026-0011 test test Checked-in" [ref=e216]:
                - cell "2026-04-05 21:53:16" [ref=e217]
                - cell "M2026-0011" [ref=e218]
                - cell "test test" [ref=e219]
                - cell "Checked-in" [ref=e220]:
                  - generic [ref=e221]: Checked-in
              - row "2026-04-05 21:52:56 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e222]:
                - cell "2026-04-05 21:52:56" [ref=e223]
                - cell "M2026-0001" [ref=e224]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e225]
                - cell "Checked-in" [ref=e226]:
                  - generic [ref=e227]: Checked-in
              - row "2026-04-01 19:18:52 M2026-0010 Test test Checked-in" [ref=e228]:
                - cell "2026-04-01 19:18:52" [ref=e229]
                - cell "M2026-0010" [ref=e230]
                - cell "Test test" [ref=e231]
                - cell "Checked-in" [ref=e232]:
                  - generic [ref=e233]: Checked-in
              - row "2026-03-12 11:05:57 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e234]:
                - cell "2026-03-12 11:05:57" [ref=e235]
                - cell "M2026-0006" [ref=e236]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e237]
                - cell "Checked-in" [ref=e238]:
                  - generic [ref=e239]: Checked-in
              - row "2026-03-12 08:14:09 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e240]:
                - cell "2026-03-12 08:14:09" [ref=e241]
                - cell "M2026-0001" [ref=e242]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e243]
                - cell "Checked-in" [ref=e244]:
                  - generic [ref=e245]: Checked-in
              - row "2026-03-11 15:44:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e246]:
                - cell "2026-03-11 15:44:01" [ref=e247]
                - cell "M2026-0001" [ref=e248]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e249]
                - cell "Checked-in" [ref=e250]:
                  - generic [ref=e251]: Checked-in
              - row "2026-03-11 15:37:54 M2026-0006 พีรพงศ์ สถาปิตานท์ Checked-in" [ref=e252]:
                - cell "2026-03-11 15:37:54" [ref=e253]
                - cell "M2026-0006" [ref=e254]
                - cell "พีรพงศ์ สถาปิตานท์" [ref=e255]
                - cell "Checked-in" [ref=e256]:
                  - generic [ref=e257]: Checked-in
              - row "2026-03-10 22:25:04 Checked-in" [ref=e258]:
                - cell "2026-03-10 22:25:04" [ref=e259]
                - cell [ref=e260]
                - cell [ref=e261]
                - cell "Checked-in" [ref=e262]:
                  - generic [ref=e263]: Checked-in
              - row "2026-03-10 14:23:36 M2026-0002 Checked-in" [ref=e264]:
                - cell "2026-03-10 14:23:36" [ref=e265]
                - cell "M2026-0002" [ref=e266]
                - cell [ref=e267]
                - cell "Checked-in" [ref=e268]:
                  - generic [ref=e269]: Checked-in
              - row "2026-03-09 15:34:37 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e270]:
                - cell "2026-03-09 15:34:37" [ref=e271]
                - cell "M2026-0001" [ref=e272]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e273]
                - cell "Checked-in" [ref=e274]:
                  - generic [ref=e275]: Checked-in
              - row "2026-03-08 09:21:01 M2026-0001 ดนัยธร ซ้ายเบี้ยว Checked-in" [ref=e276]:
                - cell "2026-03-08 09:21:01" [ref=e277]
                - cell "M2026-0001" [ref=e278]
                - cell "ดนัยธร ซ้ายเบี้ยว" [ref=e279]
                - cell "Checked-in" [ref=e280]:
                  - generic [ref=e281]: Checked-in
      - generic [ref=e285]:
        - heading "🧾 ประวัติการใช้งานระบบ (ล่าสุด)" [level=6] [ref=e286]
        - table [ref=e288]:
          - rowgroup [ref=e289]:
            - row "เวลา Username Role Action รายละเอียด IP" [ref=e290]:
              - columnheader "เวลา" [ref=e291]
              - columnheader "Username" [ref=e292]
              - columnheader "Role" [ref=e293]
              - columnheader "Action" [ref=e294]
              - columnheader "รายละเอียด" [ref=e295]
              - columnheader "IP" [ref=e296]
          - rowgroup [ref=e297]:
            - row "2026-04-19 17:35:02 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e298]:
              - cell "2026-04-19 17:35:02" [ref=e299]
              - cell "Admin1" [ref=e300]
              - cell "admin" [ref=e301]:
                - generic [ref=e302]: admin
              - cell "LOGIN" [ref=e303]:
                - generic [ref=e304]: LOGIN
              - cell "user login success" [ref=e305]
              - cell "184.22.22.215" [ref=e306]
            - row "2026-04-19 17:35:02 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e307]:
              - cell "2026-04-19 17:35:02" [ref=e308]
              - cell "Admin1" [ref=e309]
              - cell "admin" [ref=e310]:
                - generic [ref=e311]: admin
              - cell "LOGIN" [ref=e312]:
                - generic [ref=e313]: LOGIN
              - cell "user login success" [ref=e314]
              - cell "184.22.22.215" [ref=e315]
            - 'row "2026-04-19 17:35:01 Admin1 admin update อัปเดตข้อมูลผู้ใช้ id: 47 184.22.22.215" [ref=e316]':
              - cell "2026-04-19 17:35:01" [ref=e317]
              - cell "Admin1" [ref=e318]
              - cell "admin" [ref=e319]:
                - generic [ref=e320]: admin
              - cell "update" [ref=e321]:
                - generic [ref=e322]: update
              - 'cell "อัปเดตข้อมูลผู้ใช้ id: 47" [ref=e323]'
              - cell "184.22.22.215" [ref=e324]
            - row "2026-04-19 17:35:00 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e325]:
              - cell "2026-04-19 17:35:00" [ref=e326]
              - cell "Admin1" [ref=e327]
              - cell "admin" [ref=e328]:
                - generic [ref=e329]: admin
              - cell "LOGIN" [ref=e330]:
                - generic [ref=e331]: LOGIN
              - cell "user login success" [ref=e332]
              - cell "184.22.22.215" [ref=e333]
            - 'row "2026-04-19 17:34:59 Admin1 admin create สร้างข่าวใหม่ Test Title id: 186 184.22.22.215" [ref=e334]':
              - cell "2026-04-19 17:34:59" [ref=e335]
              - cell "Admin1" [ref=e336]
              - cell "admin" [ref=e337]:
                - generic [ref=e338]: admin
              - cell "create" [ref=e339]:
                - generic [ref=e340]: create
              - 'cell "สร้างข่าวใหม่ Test Title id: 186" [ref=e341]'
              - cell "184.22.22.215" [ref=e342]
            - 'row "2026-04-19 17:34:59 Admin1 admin update อัปเดตข้อมูลผู้ใช้ id: 47 184.22.22.215" [ref=e343]':
              - cell "2026-04-19 17:34:59" [ref=e344]
              - cell "Admin1" [ref=e345]
              - cell "admin" [ref=e346]:
                - generic [ref=e347]: admin
              - cell "update" [ref=e348]:
                - generic [ref=e349]: update
              - 'cell "อัปเดตข้อมูลผู้ใช้ id: 47" [ref=e350]'
              - cell "184.22.22.215" [ref=e351]
            - row "2026-04-19 17:34:58 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e352]:
              - cell "2026-04-19 17:34:58" [ref=e353]
              - cell "Admin1" [ref=e354]
              - cell "admin" [ref=e355]:
                - generic [ref=e356]: admin
              - cell "LOGIN" [ref=e357]:
                - generic [ref=e358]: LOGIN
              - cell "user login success" [ref=e359]
              - cell "184.22.22.215" [ref=e360]
            - row "2026-04-19 17:34:58 test user LOGIN user login success 184.22.22.215" [ref=e361]:
              - cell "2026-04-19 17:34:58" [ref=e362]
              - cell "test" [ref=e363]
              - cell "user" [ref=e364]:
                - generic [ref=e365]: user
              - cell "LOGIN" [ref=e366]:
                - generic [ref=e367]: LOGIN
              - cell "user login success" [ref=e368]
              - cell "184.22.22.215" [ref=e369]
            - row "2026-04-19 17:34:57 Admin1 admin LOGIN user login success 184.22.22.215" [ref=e370]:
              - cell "2026-04-19 17:34:57" [ref=e371]
              - cell "Admin1" [ref=e372]
              - cell "admin" [ref=e373]:
                - generic [ref=e374]: admin
              - cell "LOGIN" [ref=e375]:
                - generic [ref=e376]: LOGIN
              - cell "user login success" [ref=e377]
              - cell "184.22.22.215" [ref=e378]
            - 'row "2026-04-19 17:34:56 Admin1 admin update อัปเดตแพ็กเกจ ราคา :-1.00 id: 2 184.22.22.215" [ref=e379]':
              - cell "2026-04-19 17:34:56" [ref=e380]
              - cell "Admin1" [ref=e381]
              - cell "admin" [ref=e382]:
                - generic [ref=e383]: admin
              - cell "update" [ref=e384]:
                - generic [ref=e385]: update
              - 'cell "อัปเดตแพ็กเกจ ราคา :-1.00 id: 2" [ref=e386]'
              - cell "184.22.22.215" [ref=e387]
    - contentinfo [ref=e388]:
      - generic [ref=e389]:
        - generic [ref=e390]:
          - img "Logo" [ref=e392]
          - generic [ref=e394]:
            - generic [ref=e395]:
              - heading "คลับ" [level=6] [ref=e396]
              - list [ref=e397]:
                - listitem [ref=e398]:
                  - button "ข่าวสาร" [ref=e399] [cursor=pointer]
                - listitem [ref=e400]:
                  - button "ตารางเวลา" [ref=e401] [cursor=pointer]
                - listitem [ref=e402]:
                  - button "สมาชิก" [ref=e403] [cursor=pointer]
            - generic [ref=e404]:
              - heading "ติดต่อเรา" [level=6] [ref=e405]
              - list [ref=e406]:
                - listitem [ref=e407]:
                  - button "พูดคุยกับเรา" [ref=e408] [cursor=pointer]
            - generic [ref=e409]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e410]
              - list [ref=e411]:
                - listitem [ref=e412]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e413] [cursor=pointer]
                - listitem [ref=e414]:
                  - button "คำถามที่พบบ่อย" [ref=e415] [cursor=pointer]
          - generic [ref=e416]:
            - img "Logo 2" [ref=e417]
            - generic [ref=e418]:
              - button [ref=e419] [cursor=pointer]:
                - img [ref=e420]
              - button [ref=e422] [cursor=pointer]:
                - img [ref=e423]
              - button [ref=e425] [cursor=pointer]:
                - img [ref=e426]
              - button [ref=e428] [cursor=pointer]:
                - img [ref=e429]
        - separator [ref=e431]
        - generic [ref=e433]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e434]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e435]:
            - /url: /privacy
  - generic [ref=e436]: "6"
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