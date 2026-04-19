# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-027 การเพิ่มข่าวด้วยรูปภาพนามสกุล .txt
- Location: tests\pongsatorn_test.spec.ts:182:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div').filter({ hasText: /^รูปภาพประกอบ$/ })
Expected substring: "รองรับเฉพาะไฟล์ .jpg / .png เท่านั้น"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^รูปภาพประกอบ$/ })
    2 × locator resolved to <div class="mb-3">…</div>
      - unexpected value "รูปภาพประกอบ"

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
        - generic [ref=e157]:
          - heading "Test Title" [level=6] [ref=e158]
          - generic [ref=e159]: 3/4/2569
          - generic [ref=e160]:
            - button "แก้ไข" [ref=e161] [cursor=pointer]
            - button "ลบ" [ref=e162] [cursor=pointer]
        - generic [ref=e164]:
          - img [ref=e165]
          - generic [ref=e166]:
            - heading [level=6]
            - generic [ref=e167]: 3/4/2569
            - generic [ref=e168]:
              - button "แก้ไข" [ref=e169] [cursor=pointer]
              - button "ลบ" [ref=e170] [cursor=pointer]
        - generic [ref=e172]:
          - img "Test Title" [ref=e173]
          - generic [ref=e174]:
            - heading "Test Title" [level=6] [ref=e175]
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
        - generic [ref=e191]:
          - heading "Test Title" [level=6] [ref=e192]
          - generic [ref=e193]: 3/4/2569
          - generic [ref=e194]:
            - button "แก้ไข" [ref=e195] [cursor=pointer]
            - button "ลบ" [ref=e196] [cursor=pointer]
        - generic [ref=e198]:
          - img "Test Title" [ref=e199]
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
          - img [ref=e217]
          - generic [ref=e218]:
            - heading [level=6]
            - generic [ref=e219]: 3/4/2569
            - generic [ref=e220]:
              - button "แก้ไข" [ref=e221] [cursor=pointer]
              - button "ลบ" [ref=e222] [cursor=pointer]
        - generic [ref=e224]:
          - img "Test Title" [ref=e225]
          - generic [ref=e226]:
            - heading "Test Title" [level=6] [ref=e227]
            - generic [ref=e228]: 3/4/2569
            - generic [ref=e229]:
              - button "แก้ไข" [ref=e230] [cursor=pointer]
              - button "ลบ" [ref=e231] [cursor=pointer]
        - generic [ref=e233]:
          - img [ref=e234]
          - generic [ref=e235]:
            - heading [level=6]
            - generic [ref=e236]: 3/4/2569
            - generic [ref=e237]:
              - button "แก้ไข" [ref=e238] [cursor=pointer]
              - button "ลบ" [ref=e239] [cursor=pointer]
        - generic [ref=e241]:
          - img "Test Title" [ref=e242]
          - generic [ref=e243]:
            - heading "Test Title" [level=6] [ref=e244]
            - generic [ref=e245]: 3/4/2569
            - generic [ref=e246]:
              - button "แก้ไข" [ref=e247] [cursor=pointer]
              - button "ลบ" [ref=e248] [cursor=pointer]
        - generic [ref=e250]:
          - img "Test Title" [ref=e251]
          - generic [ref=e252]:
            - heading "Test Title" [level=6] [ref=e253]
            - generic [ref=e254]: 3/4/2569
            - generic [ref=e255]:
              - button "แก้ไข" [ref=e256] [cursor=pointer]
              - button "ลบ" [ref=e257] [cursor=pointer]
        - generic [ref=e259]:
          - img "Test Title" [ref=e260]
          - generic [ref=e261]:
            - heading "Test Title" [level=6] [ref=e262]
            - generic [ref=e263]: 3/4/2569
            - generic [ref=e264]:
              - button "แก้ไข" [ref=e265] [cursor=pointer]
              - button "ลบ" [ref=e266] [cursor=pointer]
        - generic [ref=e268]:
          - img "Test Title" [ref=e269]
          - generic [ref=e270]:
            - heading "Test Title" [level=6] [ref=e271]
            - generic [ref=e272]: 3/4/2569
            - generic [ref=e273]:
              - button "แก้ไข" [ref=e274] [cursor=pointer]
              - button "ลบ" [ref=e275] [cursor=pointer]
        - generic [ref=e277]:
          - img [ref=e278]
          - generic [ref=e279]:
            - heading [level=6]
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
        - generic [ref=e295]:
          - heading "Test Title" [level=6] [ref=e296]
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
        - generic [ref=e311]:
          - img "Test Title" [ref=e312]
          - generic [ref=e313]:
            - heading "Test Title" [level=6] [ref=e314]
            - generic [ref=e315]: 3/4/2569
            - generic [ref=e316]:
              - button "แก้ไข" [ref=e317] [cursor=pointer]
              - button "ลบ" [ref=e318] [cursor=pointer]
        - generic [ref=e320]:
          - img "Test Title" [ref=e321]
          - generic [ref=e322]:
            - heading "Test Title" [level=6] [ref=e323]
            - generic [ref=e324]: 3/4/2569
            - generic [ref=e325]:
              - button "แก้ไข" [ref=e326] [cursor=pointer]
              - button "ลบ" [ref=e327] [cursor=pointer]
        - generic [ref=e330]:
          - heading "Test Title" [level=6] [ref=e331]
          - generic [ref=e332]: 3/4/2569
          - generic [ref=e333]:
            - button "แก้ไข" [ref=e334] [cursor=pointer]
            - button "ลบ" [ref=e335] [cursor=pointer]
        - generic [ref=e338]:
          - heading "Test Title" [level=6] [ref=e339]
          - generic [ref=e340]: 3/4/2569
          - generic [ref=e341]:
            - button "แก้ไข" [ref=e342] [cursor=pointer]
            - button "ลบ" [ref=e343] [cursor=pointer]
        - generic [ref=e346]:
          - heading "Test Title" [level=6] [ref=e347]
          - generic [ref=e348]: 3/4/2569
          - generic [ref=e349]:
            - button "แก้ไข" [ref=e350] [cursor=pointer]
            - button "ลบ" [ref=e351] [cursor=pointer]
        - generic [ref=e353]:
          - img [ref=e354]
          - generic [ref=e355]:
            - heading [level=6]
            - generic [ref=e356]: 3/4/2569
            - generic [ref=e357]:
              - button "แก้ไข" [ref=e358] [cursor=pointer]
              - button "ลบ" [ref=e359] [cursor=pointer]
        - generic [ref=e361]:
          - img "Test Title" [ref=e362]
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
        - generic [ref=e379]:
          - heading "Test Title" [level=6] [ref=e380]
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
        - generic [ref=e395]:
          - img "Test Title" [ref=e396]
          - generic [ref=e397]:
            - heading "Test Title" [level=6] [ref=e398]
            - generic [ref=e399]: 3/4/2569
            - generic [ref=e400]:
              - button "แก้ไข" [ref=e401] [cursor=pointer]
              - button "ลบ" [ref=e402] [cursor=pointer]
        - generic [ref=e404]:
          - img "⛔️หยุดให้บริการ⛔️" [ref=e405]
          - generic [ref=e406]:
            - heading "⛔️หยุดให้บริการ⛔️" [level=6] [ref=e407]
            - generic [ref=e408]: 24/12/2568
            - generic [ref=e409]:
              - button "แก้ไข" [ref=e410] [cursor=pointer]
              - button "ลบ" [ref=e411] [cursor=pointer]
        - generic [ref=e413]:
          - img "🔥🔥PROMOTION!!!🔥🔥" [ref=e414]
          - generic [ref=e415]:
            - heading "🔥🔥PROMOTION!!!🔥🔥" [level=6] [ref=e416]
            - generic [ref=e417]: 1/12/2568
            - generic [ref=e418]:
              - button "แก้ไข" [ref=e419] [cursor=pointer]
              - button "ลบ" [ref=e420] [cursor=pointer]
    - contentinfo [ref=e421]:
      - generic [ref=e422]:
        - generic [ref=e423]:
          - img "Logo" [ref=e425]
          - generic [ref=e427]:
            - generic [ref=e428]:
              - heading "คลับ" [level=6] [ref=e429]
              - list [ref=e430]:
                - listitem [ref=e431]:
                  - button "ข่าวสาร" [ref=e432] [cursor=pointer]
                - listitem [ref=e433]:
                  - button "ตารางเวลา" [ref=e434] [cursor=pointer]
                - listitem [ref=e435]:
                  - button "สมาชิก" [ref=e436] [cursor=pointer]
            - generic [ref=e437]:
              - heading "ติดต่อเรา" [level=6] [ref=e438]
              - list [ref=e439]:
                - listitem [ref=e440]:
                  - button "พูดคุยกับเรา" [ref=e441] [cursor=pointer]
            - generic [ref=e442]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e443]
              - list [ref=e444]:
                - listitem [ref=e445]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e446] [cursor=pointer]
                - listitem [ref=e447]:
                  - button "คำถามที่พบบ่อย" [ref=e448] [cursor=pointer]
          - generic [ref=e449]:
            - img "Logo 2" [ref=e450]
            - generic [ref=e451]:
              - button [ref=e452] [cursor=pointer]:
                - img [ref=e453]
              - button [ref=e455] [cursor=pointer]:
                - img [ref=e456]
              - button [ref=e458] [cursor=pointer]:
                - img [ref=e459]
              - button [ref=e461] [cursor=pointer]:
                - img [ref=e462]
        - separator [ref=e464]
        - generic [ref=e466]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e467] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e468] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e469]: "6"
```

# Test source

```ts
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
  190 |         await expect(page.getByRole('heading', { name: '📰 เพิ่มข่าวใหม่' })).toBeVisible();
  191 |         await page.getByRole('textbox', { name: 'เช่น แจ้งปิดปรับปรุงฟิตเนส' }).fill('Test Title');
  192 |         await page.locator('input[type="file"]').setInputFiles('picture_tests/TestImage.txt');
  193 |         await page.getByRole('textbox', { name: 'รายละเอียดข่าว' }).fill('Test News');
  194 |         await page.getByRole('combobox').selectOption('general');
  195 |         await page.locator('input[type="date"]').fill('2026-04-03');
  196 |         await page.getByRole('button', { name: 'บันทึกข่าว' }).click();
> 197 |         await expect(page.locator('div').filter({ hasText: /^รูปภาพประกอบ$/ })).toContainText('รองรับเฉพาะไฟล์ .jpg / .png เท่านั้น');
      |                                                                                 ^ Error: expect(locator).toContainText(expected) failed
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
  262 |         await expect(page.getByText('⚠️ ยืนยันการลบข่าว')).toBeVisible();
  263 |         await page.getByRole('button', { name: 'ลบข่าว' }).click();
  264 |         await !expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
  265 |     });
  266 | });
```