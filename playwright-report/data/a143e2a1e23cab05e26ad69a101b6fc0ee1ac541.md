# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-025 เพิ่มข่าวด้วยข้อมูล White Space
- Location: tests\pongsatorn_test.spec.ts:146:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
Expected substring: "กรุณาระบุหัวข้อข่าว"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^หัวข้อข่าว$/ })
    4 × locator resolved to <div class="mb-3">…</div>
      - unexpected value "หัวข้อข่าว"

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
        - generic [ref=e258]:
          - img "Test Title" [ref=e259]
          - generic [ref=e260]:
            - heading "Test Title" [level=6] [ref=e261]
            - generic [ref=e262]: 3/4/2569
            - generic [ref=e263]:
              - button "แก้ไข" [ref=e264] [cursor=pointer]
              - button "ลบ" [ref=e265] [cursor=pointer]
        - generic [ref=e267]:
          - img "Test Title" [ref=e268]
          - generic [ref=e269]:
            - heading "Test Title" [level=6] [ref=e270]
            - generic [ref=e271]: 3/4/2569
            - generic [ref=e272]:
              - button "แก้ไข" [ref=e273] [cursor=pointer]
              - button "ลบ" [ref=e274] [cursor=pointer]
        - generic [ref=e276]:
          - img "Test Title" [ref=e277]
          - generic [ref=e278]:
            - heading "Test Title" [level=6] [ref=e279]
            - generic [ref=e280]: 3/4/2569
            - generic [ref=e281]:
              - button "แก้ไข" [ref=e282] [cursor=pointer]
              - button "ลบ" [ref=e283] [cursor=pointer]
        - generic [ref=e285]:
          - img "Test Title" [ref=e286]
          - generic [ref=e287]:
            - heading "Test Title" [level=6] [ref=e288]
            - generic [ref=e289]: 3/4/2569
            - generic [ref=e290]:
              - button "แก้ไข" [ref=e291] [cursor=pointer]
              - button "ลบ" [ref=e292] [cursor=pointer]
        - generic [ref=e294]:
          - img [ref=e295]
          - generic [ref=e296]:
            - heading [level=6]
            - generic [ref=e297]: 3/4/2569
            - generic [ref=e298]:
              - button "แก้ไข" [ref=e299] [cursor=pointer]
              - button "ลบ" [ref=e300] [cursor=pointer]
        - generic [ref=e302]:
          - img "Test Title" [ref=e303]
          - generic [ref=e304]:
            - heading "Test Title" [level=6] [ref=e305]
            - generic [ref=e306]: 3/4/2569
            - generic [ref=e307]:
              - button "แก้ไข" [ref=e308] [cursor=pointer]
              - button "ลบ" [ref=e309] [cursor=pointer]
        - generic [ref=e312]:
          - heading "Test Title" [level=6] [ref=e313]
          - generic [ref=e314]: 3/4/2569
          - generic [ref=e315]:
            - button "แก้ไข" [ref=e316] [cursor=pointer]
            - button "ลบ" [ref=e317] [cursor=pointer]
        - generic [ref=e319]:
          - img "Test Title" [ref=e320]
          - generic [ref=e321]:
            - heading "Test Title" [level=6] [ref=e322]
            - generic [ref=e323]: 3/4/2569
            - generic [ref=e324]:
              - button "แก้ไข" [ref=e325] [cursor=pointer]
              - button "ลบ" [ref=e326] [cursor=pointer]
        - generic [ref=e328]:
          - img "Test Title" [ref=e329]
          - generic [ref=e330]:
            - heading "Test Title" [level=6] [ref=e331]
            - generic [ref=e332]: 3/4/2569
            - generic [ref=e333]:
              - button "แก้ไข" [ref=e334] [cursor=pointer]
              - button "ลบ" [ref=e335] [cursor=pointer]
        - generic [ref=e337]:
          - img "Test Title" [ref=e338]
          - generic [ref=e339]:
            - heading "Test Title" [level=6] [ref=e340]
            - generic [ref=e341]: 3/4/2569
            - generic [ref=e342]:
              - button "แก้ไข" [ref=e343] [cursor=pointer]
              - button "ลบ" [ref=e344] [cursor=pointer]
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
        - generic [ref=e370]:
          - img [ref=e371]
          - generic [ref=e372]:
            - heading [level=6]
            - generic [ref=e373]: 3/4/2569
            - generic [ref=e374]:
              - button "แก้ไข" [ref=e375] [cursor=pointer]
              - button "ลบ" [ref=e376] [cursor=pointer]
        - generic [ref=e378]:
          - img "Test Title" [ref=e379]
          - generic [ref=e380]:
            - heading "Test Title" [level=6] [ref=e381]
            - generic [ref=e382]: 3/4/2569
            - generic [ref=e383]:
              - button "แก้ไข" [ref=e384] [cursor=pointer]
              - button "ลบ" [ref=e385] [cursor=pointer]
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
        - generic [ref=e403]:
          - img "Test Title" [ref=e404]
          - generic [ref=e405]:
            - heading "Test Title" [level=6] [ref=e406]
            - generic [ref=e407]: 3/4/2569
            - generic [ref=e408]:
              - button "แก้ไข" [ref=e409] [cursor=pointer]
              - button "ลบ" [ref=e410] [cursor=pointer]
        - generic [ref=e412]:
          - img "Test Title" [ref=e413]
          - generic [ref=e414]:
            - heading "Test Title" [level=6] [ref=e415]
            - generic [ref=e416]: 3/4/2569
            - generic [ref=e417]:
              - button "แก้ไข" [ref=e418] [cursor=pointer]
              - button "ลบ" [ref=e419] [cursor=pointer]
        - generic [ref=e421]:
          - img "⛔️หยุดให้บริการ⛔️" [ref=e422]
          - generic [ref=e423]:
            - heading "⛔️หยุดให้บริการ⛔️" [level=6] [ref=e424]
            - generic [ref=e425]: 24/12/2568
            - generic [ref=e426]:
              - button "แก้ไข" [ref=e427] [cursor=pointer]
              - button "ลบ" [ref=e428] [cursor=pointer]
        - generic [ref=e430]:
          - img "🔥🔥PROMOTION!!!🔥🔥" [ref=e431]
          - generic [ref=e432]:
            - heading "🔥🔥PROMOTION!!!🔥🔥" [level=6] [ref=e433]
            - generic [ref=e434]: 1/12/2568
            - generic [ref=e435]:
              - button "แก้ไข" [ref=e436] [cursor=pointer]
              - button "ลบ" [ref=e437] [cursor=pointer]
    - contentinfo [ref=e438]:
      - generic [ref=e439]:
        - generic [ref=e440]:
          - img "Logo" [ref=e442]
          - generic [ref=e444]:
            - generic [ref=e445]:
              - heading "คลับ" [level=6] [ref=e446]
              - list [ref=e447]:
                - listitem [ref=e448]:
                  - button "ข่าวสาร" [ref=e449] [cursor=pointer]
                - listitem [ref=e450]:
                  - button "ตารางเวลา" [ref=e451] [cursor=pointer]
                - listitem [ref=e452]:
                  - button "สมาชิก" [ref=e453] [cursor=pointer]
            - generic [ref=e454]:
              - heading "ติดต่อเรา" [level=6] [ref=e455]
              - list [ref=e456]:
                - listitem [ref=e457]:
                  - button "พูดคุยกับเรา" [ref=e458] [cursor=pointer]
            - generic [ref=e459]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e460]
              - list [ref=e461]:
                - listitem [ref=e462]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e463] [cursor=pointer]
                - listitem [ref=e464]:
                  - button "คำถามที่พบบ่อย" [ref=e465] [cursor=pointer]
          - generic [ref=e466]:
            - img "Logo 2" [ref=e467]
            - generic [ref=e468]:
              - button [ref=e469] [cursor=pointer]:
                - img [ref=e470]
              - button [ref=e472] [cursor=pointer]:
                - img [ref=e473]
              - button [ref=e475] [cursor=pointer]:
                - img [ref=e476]
              - button [ref=e478] [cursor=pointer]:
                - img [ref=e479]
        - separator [ref=e481]
        - generic [ref=e483]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e484] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e485] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e486]: "6"
```

# Test source

```ts
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
> 161 |         await expect(page.locator('div').filter({ hasText: /^หัวข้อข่าว$/ })).toContainText('กรุณาระบุหัวข้อข่าว');
      |                                                                               ^ Error: expect(locator).toContainText(expected) failed
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
  208 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  209 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  210 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  211 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  212 |         await page.getByRole('combobox').selectOption('general');
  213 |         await page.locator('input[type="date"]').fill('2026-04-03');
  214 |         await page.getByRole('button', { name: 'ยกเลิก' }).click();
  215 |         await expect(page).toHaveURL('admin/news');
  216 |     });
  217 | 
  218 |     test('TCS-NEWS-029 การแก้ไขข่าวด้วยข้อมูลที่ถูกต้อง', async ({page}) => {
  219 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  220 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  221 |         await expect(page).toHaveURL('admin/news');
  222 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  223 |         await expect(page.getByRole('button', { name: 'แก้ไข' }).first()).toBeVisible();
  224 |         await page.getByRole('button', { name: 'แก้ไข' }).first().click();
  225 |         await expect(page).toHaveURL('/admin/news/edit/31');
  226 |         await expect(page.getByText('แก้ไขข่าว')).toBeVisible();
  227 |         await page.getByRole('textbox').first().fill('Test Title2');
  228 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  229 |         await page.getByText('Test News').fill('');
  230 |         await page.getByRole('combobox').selectOption('general');
  231 |         await page.locator('input[type="date"]').fill('2026-04-03');
  232 |         await page.getByRole('button', { name: 'บันทึก' }).click();
  233 |         await expect(page.getByText('ยืนยันการแก้ไข')).toBeVisible();
  234 |         await page.getByRole('button', { name: 'ยืนยัน' }).click();
  235 |         await expect(page).toHaveURL('/admin/news');
  236 |     });
  237 | 
  238 |      test('TCS-NEWS-030 แก้ไขข่าวด้วยข้อมูลที่เว้นว่าง', async ({page}) => {
  239 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  240 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  241 |         await expect(page).toHaveURL('admin/news');
  242 |         await expect(page.getByRole('heading', { name: 'จัดการข่าวสาร' })).toBeVisible();
  243 |         await expect(page.getByRole('button', { name: 'แก้ไข' }).first()).toBeVisible();
  244 |         await page.getByRole('button', { name: 'แก้ไข' }).first().click();
  245 |         await expect(page).toHaveURL('/admin/news/edit/31');
  246 |         await expect(page.getByText('แก้ไขข่าว')).toBeVisible();
  247 |         await page.getByRole('textbox').first().fill('Test Title2');
  248 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.jpg');
  249 |         await page.getByText('Test News').fill('');
  250 |         await page.getByRole('combobox').selectOption('general');
  251 |         await page.locator('input[type="date"]').fill('2026-04-03');
  252 |         await page.getByRole('button', { name: 'บันทึก' }).click();
  253 |         await expect(page.locator('div').filter({ hasText: /^เนื้อหา$/ })).toContainText('กรุณาระบุเนื้อหาข่าว');
  254 |     });
  255 | 
  256 |     test('TCS-NEWS-031 ลบข่าว', async ({page}) => {
  257 |         await page.getByRole('button', { name: 'สวัสดี, Admin1' }).click();
  258 |         await page.getByRole('link', { name: ' จัดการข่าวสาร' }).click();
  259 |         await expect(page).toHaveURL('admin/news');
  260 |         await expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
  261 |         await page.getByRole('button', { name: 'ลบ' }).first().click();
```