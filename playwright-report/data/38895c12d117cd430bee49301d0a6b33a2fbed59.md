# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-022 เพิ่มข่าวด้วยข้อมูลที่ไม่ใส่รูปภาพประกอบ
- Location: tests\pongsatorn_test.spec.ts:92:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
Expected substring: "กรุณาระบุรูปภาพประกอบ"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
    2 × locator resolved to <div class="mb-3">…</div>
      - unexpected value "หัวข้อข่าว"

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
          - generic [ref=e15]:
            - button "สวัสดี, Admin1" [ref=e16] [cursor=pointer]
            - text:       
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - heading "จัดการข่าวสาร" [level=2] [ref=e20]
          - paragraph [ref=e21]: Manage News
        - button "เพิ่มข่าว" [ref=e23] [cursor=pointer]
      - generic [ref=e24]:
        - generic [ref=e26]:
          - img "แจ้ง test" [ref=e27]
          - generic [ref=e28]:
            - heading "แจ้ง test" [level=6] [ref=e29]
            - generic [ref=e30]: 8/4/2569
            - generic [ref=e31]:
              - button "แก้ไข" [ref=e32] [cursor=pointer]
              - button "ลบ" [ref=e33] [cursor=pointer]
        - generic [ref=e35]:
          - img "แจ้ง test" [ref=e36]
          - generic [ref=e37]:
            - heading "แจ้ง test" [level=6] [ref=e38]
            - generic [ref=e39]: 8/4/2569
            - generic [ref=e40]:
              - button "แก้ไข" [ref=e41] [cursor=pointer]
              - button "ลบ" [ref=e42] [cursor=pointer]
        - generic [ref=e44]:
          - img "แจ้ง test" [ref=e45]
          - generic [ref=e46]:
            - heading "แจ้ง test" [level=6] [ref=e47]
            - generic [ref=e48]: 8/4/2569
            - generic [ref=e49]:
              - button "แก้ไข" [ref=e50] [cursor=pointer]
              - button "ลบ" [ref=e51] [cursor=pointer]
        - generic [ref=e53]:
          - img "สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ" [ref=e54]
          - generic [ref=e55]:
            - heading "สงกรานต์นี้ SU.ED FITNESS เปิดให้บริการตามปกติ" [level=6] [ref=e56]
            - generic [ref=e57]: 6/4/2569
            - generic [ref=e58]:
              - button "แก้ไข" [ref=e59] [cursor=pointer]
              - button "ลบ" [ref=e60] [cursor=pointer]
        - generic [ref=e62]:
          - img "Test Title" [ref=e63]
          - generic [ref=e64]:
            - heading "Test Title" [level=6] [ref=e65]
            - generic [ref=e66]: 3/4/2569
            - generic [ref=e67]:
              - button "แก้ไข" [ref=e68] [cursor=pointer]
              - button "ลบ" [ref=e69] [cursor=pointer]
        - generic [ref=e71]:
          - img [ref=e72]
          - generic [ref=e73]:
            - heading [level=6]
            - generic [ref=e74]: 3/4/2569
            - generic [ref=e75]:
              - button "แก้ไข" [ref=e76] [cursor=pointer]
              - button "ลบ" [ref=e77] [cursor=pointer]
        - generic [ref=e80]:
          - heading "Test Title" [level=6] [ref=e81]
          - generic [ref=e82]: 3/4/2569
          - generic [ref=e83]:
            - button "แก้ไข" [ref=e84] [cursor=pointer]
            - button "ลบ" [ref=e85] [cursor=pointer]
        - generic [ref=e87]:
          - img [ref=e88]
          - generic [ref=e89]:
            - heading [level=6]
            - generic [ref=e90]: 3/4/2569
            - generic [ref=e91]:
              - button "แก้ไข" [ref=e92] [cursor=pointer]
              - button "ลบ" [ref=e93] [cursor=pointer]
        - generic [ref=e95]:
          - img "Test Title" [ref=e96]
          - generic [ref=e97]:
            - heading "Test Title" [level=6] [ref=e98]
            - generic [ref=e99]: 3/4/2569
            - generic [ref=e100]:
              - button "แก้ไข" [ref=e101] [cursor=pointer]
              - button "ลบ" [ref=e102] [cursor=pointer]
        - generic [ref=e104]:
          - img "Test Title" [ref=e105]
          - generic [ref=e106]:
            - heading "Test Title" [level=6] [ref=e107]
            - generic [ref=e108]: 3/4/2569
            - generic [ref=e109]:
              - button "แก้ไข" [ref=e110] [cursor=pointer]
              - button "ลบ" [ref=e111] [cursor=pointer]
        - generic [ref=e114]:
          - heading "Test Title" [level=6] [ref=e115]
          - generic [ref=e116]: 3/4/2569
          - generic [ref=e117]:
            - button "แก้ไข" [ref=e118] [cursor=pointer]
            - button "ลบ" [ref=e119] [cursor=pointer]
        - generic [ref=e121]:
          - img [ref=e122]
          - generic [ref=e123]:
            - heading [level=6]
            - generic [ref=e124]: 3/4/2569
            - generic [ref=e125]:
              - button "แก้ไข" [ref=e126] [cursor=pointer]
              - button "ลบ" [ref=e127] [cursor=pointer]
        - generic [ref=e129]:
          - img "Test Title" [ref=e130]
          - generic [ref=e131]:
            - heading "Test Title" [level=6] [ref=e132]
            - generic [ref=e133]: 3/4/2569
            - generic [ref=e134]:
              - button "แก้ไข" [ref=e135] [cursor=pointer]
              - button "ลบ" [ref=e136] [cursor=pointer]
        - generic [ref=e138]:
          - img "Test Title" [ref=e139]
          - generic [ref=e140]:
            - heading "Test Title" [level=6] [ref=e141]
            - generic [ref=e142]: 3/4/2569
            - generic [ref=e143]:
              - button "แก้ไข" [ref=e144] [cursor=pointer]
              - button "ลบ" [ref=e145] [cursor=pointer]
        - generic [ref=e147]:
          - img "Test Title" [ref=e148]
          - generic [ref=e149]:
            - heading "Test Title" [level=6] [ref=e150]
            - generic [ref=e151]: 3/4/2569
            - generic [ref=e152]:
              - button "แก้ไข" [ref=e153] [cursor=pointer]
              - button "ลบ" [ref=e154] [cursor=pointer]
        - generic [ref=e156]:
          - img "Test Title" [ref=e157]
          - generic [ref=e158]:
            - heading "Test Title" [level=6] [ref=e159]
            - generic [ref=e160]: 3/4/2569
            - generic [ref=e161]:
              - button "แก้ไข" [ref=e162] [cursor=pointer]
              - button "ลบ" [ref=e163] [cursor=pointer]
        - generic [ref=e166]:
          - heading "Test Title" [level=6] [ref=e167]
          - generic [ref=e168]: 3/4/2569
          - generic [ref=e169]:
            - button "แก้ไข" [ref=e170] [cursor=pointer]
            - button "ลบ" [ref=e171] [cursor=pointer]
        - generic [ref=e173]:
          - img [ref=e174]
          - generic [ref=e175]:
            - heading [level=6]
            - generic [ref=e176]: 3/4/2569
            - generic [ref=e177]:
              - button "แก้ไข" [ref=e178] [cursor=pointer]
              - button "ลบ" [ref=e179] [cursor=pointer]
        - generic [ref=e181]:
          - img "Test Title" [ref=e182]
          - generic [ref=e183]:
            - heading "Test Title" [level=6] [ref=e184]
            - generic [ref=e185]: 3/4/2569
            - generic [ref=e186]:
              - button "แก้ไข" [ref=e187] [cursor=pointer]
              - button "ลบ" [ref=e188] [cursor=pointer]
        - generic [ref=e190]:
          - img "Test Title" [ref=e191]
          - generic [ref=e192]:
            - heading "Test Title" [level=6] [ref=e193]
            - generic [ref=e194]: 3/4/2569
            - generic [ref=e195]:
              - button "แก้ไข" [ref=e196] [cursor=pointer]
              - button "ลบ" [ref=e197] [cursor=pointer]
        - generic [ref=e200]:
          - heading "Test Title" [level=6] [ref=e201]
          - generic [ref=e202]: 3/4/2569
          - generic [ref=e203]:
            - button "แก้ไข" [ref=e204] [cursor=pointer]
            - button "ลบ" [ref=e205] [cursor=pointer]
        - generic [ref=e207]:
          - img "Test Title" [ref=e208]
          - generic [ref=e209]:
            - heading "Test Title" [level=6] [ref=e210]
            - generic [ref=e211]: 3/4/2569
            - generic [ref=e212]:
              - button "แก้ไข" [ref=e213] [cursor=pointer]
              - button "ลบ" [ref=e214] [cursor=pointer]
        - generic [ref=e216]:
          - img "Test Title" [ref=e217]
          - generic [ref=e218]:
            - heading "Test Title" [level=6] [ref=e219]
            - generic [ref=e220]: 3/4/2569
            - generic [ref=e221]:
              - button "แก้ไข" [ref=e222] [cursor=pointer]
              - button "ลบ" [ref=e223] [cursor=pointer]
        - generic [ref=e225]:
          - img [ref=e226]
          - generic [ref=e227]:
            - heading [level=6]
            - generic [ref=e228]: 3/4/2569
            - generic [ref=e229]:
              - button "แก้ไข" [ref=e230] [cursor=pointer]
              - button "ลบ" [ref=e231] [cursor=pointer]
        - generic [ref=e233]:
          - img "Test Title" [ref=e234]
          - generic [ref=e235]:
            - heading "Test Title" [level=6] [ref=e236]
            - generic [ref=e237]: 3/4/2569
            - generic [ref=e238]:
              - button "แก้ไข" [ref=e239] [cursor=pointer]
              - button "ลบ" [ref=e240] [cursor=pointer]
        - generic [ref=e242]:
          - img [ref=e243]
          - generic [ref=e244]:
            - heading [level=6]
            - generic [ref=e245]: 3/4/2569
            - generic [ref=e246]:
              - button "แก้ไข" [ref=e247] [cursor=pointer]
              - button "ลบ" [ref=e248] [cursor=pointer]
        - generic [ref=e250]:
          - img [ref=e251]
          - generic [ref=e252]:
            - heading [level=6]
            - generic [ref=e253]: 3/4/2569
            - generic [ref=e254]:
              - button "แก้ไข" [ref=e255] [cursor=pointer]
              - button "ลบ" [ref=e256] [cursor=pointer]
        - generic [ref=e259]:
          - heading "Test Title" [level=6] [ref=e260]
          - generic [ref=e261]: 3/4/2569
          - generic [ref=e262]:
            - button "แก้ไข" [ref=e263] [cursor=pointer]
            - button "ลบ" [ref=e264] [cursor=pointer]
        - generic [ref=e266]:
          - img "Test Title" [ref=e267]
          - generic [ref=e268]:
            - heading "Test Title" [level=6] [ref=e269]
            - generic [ref=e270]: 3/4/2569
            - generic [ref=e271]:
              - button "แก้ไข" [ref=e272] [cursor=pointer]
              - button "ลบ" [ref=e273] [cursor=pointer]
        - generic [ref=e275]:
          - img "Test Title" [ref=e276]
          - generic [ref=e277]:
            - heading "Test Title" [level=6] [ref=e278]
            - generic [ref=e279]: 3/4/2569
            - generic [ref=e280]:
              - button "แก้ไข" [ref=e281] [cursor=pointer]
              - button "ลบ" [ref=e282] [cursor=pointer]
        - generic [ref=e284]:
          - img "Test Title" [ref=e285]
          - generic [ref=e286]:
            - heading "Test Title" [level=6] [ref=e287]
            - generic [ref=e288]: 3/4/2569
            - generic [ref=e289]:
              - button "แก้ไข" [ref=e290] [cursor=pointer]
              - button "ลบ" [ref=e291] [cursor=pointer]
        - generic [ref=e293]:
          - img "Test Title" [ref=e294]
          - generic [ref=e295]:
            - heading "Test Title" [level=6] [ref=e296]
            - generic [ref=e297]: 3/4/2569
            - generic [ref=e298]:
              - button "แก้ไข" [ref=e299] [cursor=pointer]
              - button "ลบ" [ref=e300] [cursor=pointer]
        - generic [ref=e302]:
          - img [ref=e303]
          - generic [ref=e304]:
            - heading [level=6]
            - generic [ref=e305]: 3/4/2569
            - generic [ref=e306]:
              - button "แก้ไข" [ref=e307] [cursor=pointer]
              - button "ลบ" [ref=e308] [cursor=pointer]
        - generic [ref=e310]:
          - img "Test Title" [ref=e311]
          - generic [ref=e312]:
            - heading "Test Title" [level=6] [ref=e313]
            - generic [ref=e314]: 3/4/2569
            - generic [ref=e315]:
              - button "แก้ไข" [ref=e316] [cursor=pointer]
              - button "ลบ" [ref=e317] [cursor=pointer]
        - generic [ref=e320]:
          - heading "Test Title" [level=6] [ref=e321]
          - generic [ref=e322]: 3/4/2569
          - generic [ref=e323]:
            - button "แก้ไข" [ref=e324] [cursor=pointer]
            - button "ลบ" [ref=e325] [cursor=pointer]
        - generic [ref=e327]:
          - img "Test Title" [ref=e328]
          - generic [ref=e329]:
            - heading "Test Title" [level=6] [ref=e330]
            - generic [ref=e331]: 3/4/2569
            - generic [ref=e332]:
              - button "แก้ไข" [ref=e333] [cursor=pointer]
              - button "ลบ" [ref=e334] [cursor=pointer]
        - generic [ref=e336]:
          - img "Test Title" [ref=e337]
          - generic [ref=e338]:
            - heading "Test Title" [level=6] [ref=e339]
            - generic [ref=e340]: 3/4/2569
            - generic [ref=e341]:
              - button "แก้ไข" [ref=e342] [cursor=pointer]
              - button "ลบ" [ref=e343] [cursor=pointer]
        - generic [ref=e345]:
          - img "Test Title" [ref=e346]
          - generic [ref=e347]:
            - heading "Test Title" [level=6] [ref=e348]
            - generic [ref=e349]: 3/4/2569
            - generic [ref=e350]:
              - button "แก้ไข" [ref=e351] [cursor=pointer]
              - button "ลบ" [ref=e352] [cursor=pointer]
        - generic [ref=e355]:
          - heading "Test Title" [level=6] [ref=e356]
          - generic [ref=e357]: 3/4/2569
          - generic [ref=e358]:
            - button "แก้ไข" [ref=e359] [cursor=pointer]
            - button "ลบ" [ref=e360] [cursor=pointer]
        - generic [ref=e363]:
          - heading "Test Title" [level=6] [ref=e364]
          - generic [ref=e365]: 3/4/2569
          - generic [ref=e366]:
            - button "แก้ไข" [ref=e367] [cursor=pointer]
            - button "ลบ" [ref=e368] [cursor=pointer]
        - generic [ref=e371]:
          - heading "Test Title" [level=6] [ref=e372]
          - generic [ref=e373]: 3/4/2569
          - generic [ref=e374]:
            - button "แก้ไข" [ref=e375] [cursor=pointer]
            - button "ลบ" [ref=e376] [cursor=pointer]
        - generic [ref=e378]:
          - img [ref=e379]
          - generic [ref=e380]:
            - heading [level=6]
            - generic [ref=e381]: 3/4/2569
            - generic [ref=e382]:
              - button "แก้ไข" [ref=e383] [cursor=pointer]
              - button "ลบ" [ref=e384] [cursor=pointer]
        - generic [ref=e386]:
          - img "Test Title" [ref=e387]
          - generic [ref=e388]:
            - heading "Test Title" [level=6] [ref=e389]
            - generic [ref=e390]: 3/4/2569
            - generic [ref=e391]:
              - button "แก้ไข" [ref=e392] [cursor=pointer]
              - button "ลบ" [ref=e393] [cursor=pointer]
        - generic [ref=e396]:
          - heading "Test Title" [level=6] [ref=e397]
          - generic [ref=e398]: 3/4/2569
          - generic [ref=e399]:
            - button "แก้ไข" [ref=e400] [cursor=pointer]
            - button "ลบ" [ref=e401] [cursor=pointer]
        - generic [ref=e404]:
          - heading "Test Title" [level=6] [ref=e405]
          - generic [ref=e406]: 3/4/2569
          - generic [ref=e407]:
            - button "แก้ไข" [ref=e408] [cursor=pointer]
            - button "ลบ" [ref=e409] [cursor=pointer]
        - generic [ref=e411]:
          - img "Test Title" [ref=e412]
          - generic [ref=e413]:
            - heading "Test Title" [level=6] [ref=e414]
            - generic [ref=e415]: 3/4/2569
            - generic [ref=e416]:
              - button "แก้ไข" [ref=e417] [cursor=pointer]
              - button "ลบ" [ref=e418] [cursor=pointer]
        - generic [ref=e420]:
          - img "Test Title" [ref=e421]
          - generic [ref=e422]:
            - heading "Test Title" [level=6] [ref=e423]
            - generic [ref=e424]: 3/4/2569
            - generic [ref=e425]:
              - button "แก้ไข" [ref=e426] [cursor=pointer]
              - button "ลบ" [ref=e427] [cursor=pointer]
        - generic [ref=e429]:
          - img "⛔️หยุดให้บริการ⛔️" [ref=e430]
          - generic [ref=e431]:
            - heading "⛔️หยุดให้บริการ⛔️" [level=6] [ref=e432]
            - generic [ref=e433]: 24/12/2568
            - generic [ref=e434]:
              - button "แก้ไข" [ref=e435] [cursor=pointer]
              - button "ลบ" [ref=e436] [cursor=pointer]
        - generic [ref=e438]:
          - img "🔥🔥PROMOTION!!!🔥🔥" [ref=e439]
          - generic [ref=e440]:
            - heading "🔥🔥PROMOTION!!!🔥🔥" [level=6] [ref=e441]
            - generic [ref=e442]: 1/12/2568
            - generic [ref=e443]:
              - button "แก้ไข" [ref=e444] [cursor=pointer]
              - button "ลบ" [ref=e445] [cursor=pointer]
    - contentinfo [ref=e446]:
      - generic [ref=e447]:
        - generic [ref=e448]:
          - img "Logo" [ref=e450]
          - generic [ref=e452]:
            - generic [ref=e453]:
              - heading "คลับ" [level=6] [ref=e454]
              - list [ref=e455]:
                - listitem [ref=e456]:
                  - button "ข่าวสาร" [ref=e457] [cursor=pointer]
                - listitem [ref=e458]:
                  - button "ตารางเวลา" [ref=e459] [cursor=pointer]
                - listitem [ref=e460]:
                  - button "สมาชิก" [ref=e461] [cursor=pointer]
            - generic [ref=e462]:
              - heading "ติดต่อเรา" [level=6] [ref=e463]
              - list [ref=e464]:
                - listitem [ref=e465]:
                  - button "พูดคุยกับเรา" [ref=e466] [cursor=pointer]
            - generic [ref=e467]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e468]
              - list [ref=e469]:
                - listitem [ref=e470]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e471] [cursor=pointer]
                - listitem [ref=e472]:
                  - button "คำถามที่พบบ่อย" [ref=e473] [cursor=pointer]
          - generic [ref=e474]:
            - img "Logo 2" [ref=e475]
            - generic [ref=e476]:
              - button [ref=e477] [cursor=pointer]:
                - img [ref=e478]
              - button [ref=e480] [cursor=pointer]:
                - img [ref=e481]
              - button [ref=e483] [cursor=pointer]:
                - img [ref=e484]
              - button [ref=e486] [cursor=pointer]:
                - img [ref=e487]
        - separator [ref=e489]
        - generic [ref=e491]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e492]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e493]:
            - /url: /privacy
  - generic [ref=e494]: "6"
```

# Test source

```ts
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
> 107 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุรูปภาพประกอบ');
      |                                                                               ^ Error: expect(locator).toContainText(expected) failed
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
  190 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  191 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  192 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.txt');
  193 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  194 |         await page.getByRole('combobox').selectOption('general');
  195 |         await page.locator('input[type="date"]').fill('2026-04-03');
  196 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
  197 |         await expect(page.locator('div').filter({ hasText: /^รูปภาพประกอบ$/ })).toContainText('รองรับเฉพาะไฟล์ .jpg / .png เท่านั้น');
  198 |     });
  199 | 
  200 |     test('TCS-NEWS-028 การเพิ่มข่าวแล้วกดยกเลิก', async ({page}) => {
  201 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  202 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  203 |         await expect(page).toHaveURL('admin/news');
  204 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  205 |         await expect(page.getByRole('button', { name: 'เพิ่มข่าว' })).toBeVisible();
  206 |         await page.getByRole('button', { name: 'เพิ่มข่าว' }).click();
  207 |         await expect(page).toHaveURL('/admin/news/create');
```