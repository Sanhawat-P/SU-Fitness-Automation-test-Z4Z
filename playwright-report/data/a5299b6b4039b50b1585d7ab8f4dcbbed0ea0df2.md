# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-031 ลบข่าว
- Location: tests\pongsatorn_test.spec.ts:256:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Test Title' })
Expected: visible
Error: strict mode violation: getByRole('heading', { name: 'Test Title' }) resolved to 33 elements:
    1) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).first()
    2) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).nth(1)
    3) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).nth(2)
    4) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).nth(3)
    5) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).nth(4)
    6) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka getByRole('heading', { name: 'Test Title' }).nth(5)
    7) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka locator('div:nth-child(14) > .admin-news-card > .d-flex.flex-column > .fw-semibold')
    8) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka locator('div:nth-child(15) > .admin-news-card > .d-flex.flex-column > .fw-semibold')
    9) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka locator('div:nth-child(16) > .admin-news-card > .d-flex.flex-column > .fw-semibold')
    10) <h6 class="fw-semibold text-truncate mb-1">Test Title</h6> aka locator('div:nth-child(17) > .admin-news-card > .d-flex.flex-column > .fw-semibold')
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Test Title' })

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
            - button "สวัสดี, Admin1" [active] [ref=e16] [cursor=pointer]
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
          - img "Test Title" [ref=e278]
          - generic [ref=e279]:
            - heading "Test Title" [level=6] [ref=e280]
            - generic [ref=e281]: 3/4/2569
            - generic [ref=e282]:
              - button "แก้ไข" [ref=e283] [cursor=pointer]
              - button "ลบ" [ref=e284] [cursor=pointer]
        - generic [ref=e286]:
          - img [ref=e287]
          - generic [ref=e288]:
            - heading [level=6]
            - generic [ref=e289]: 3/4/2569
            - generic [ref=e290]:
              - button "แก้ไข" [ref=e291] [cursor=pointer]
              - button "ลบ" [ref=e292] [cursor=pointer]
        - generic [ref=e294]:
          - img "Test Title" [ref=e295]
          - generic [ref=e296]:
            - heading "Test Title" [level=6] [ref=e297]
            - generic [ref=e298]: 3/4/2569
            - generic [ref=e299]:
              - button "แก้ไข" [ref=e300] [cursor=pointer]
              - button "ลบ" [ref=e301] [cursor=pointer]
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
        - generic [ref=e329]:
          - img "Test Title" [ref=e330]
          - generic [ref=e331]:
            - heading "Test Title" [level=6] [ref=e332]
            - generic [ref=e333]: 3/4/2569
            - generic [ref=e334]:
              - button "แก้ไข" [ref=e335] [cursor=pointer]
              - button "ลบ" [ref=e336] [cursor=pointer]
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
        - generic [ref=e362]:
          - img [ref=e363]
          - generic [ref=e364]:
            - heading [level=6]
            - generic [ref=e365]: 3/4/2569
            - generic [ref=e366]:
              - button "แก้ไข" [ref=e367] [cursor=pointer]
              - button "ลบ" [ref=e368] [cursor=pointer]
        - generic [ref=e370]:
          - img "Test Title" [ref=e371]
          - generic [ref=e372]:
            - heading "Test Title" [level=6] [ref=e373]
            - generic [ref=e374]: 3/4/2569
            - generic [ref=e375]:
              - button "แก้ไข" [ref=e376] [cursor=pointer]
              - button "ลบ" [ref=e377] [cursor=pointer]
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
        - generic [ref=e395]:
          - img "Test Title" [ref=e396]
          - generic [ref=e397]:
            - heading "Test Title" [level=6] [ref=e398]
            - generic [ref=e399]: 3/4/2569
            - generic [ref=e400]:
              - button "แก้ไข" [ref=e401] [cursor=pointer]
              - button "ลบ" [ref=e402] [cursor=pointer]
        - generic [ref=e404]:
          - img "Test Title" [ref=e405]
          - generic [ref=e406]:
            - heading "Test Title" [level=6] [ref=e407]
            - generic [ref=e408]: 3/4/2569
            - generic [ref=e409]:
              - button "แก้ไข" [ref=e410] [cursor=pointer]
              - button "ลบ" [ref=e411] [cursor=pointer]
        - generic [ref=e413]:
          - img "⛔️หยุดให้บริการ⛔️" [ref=e414]
          - generic [ref=e415]:
            - heading "⛔️หยุดให้บริการ⛔️" [level=6] [ref=e416]
            - generic [ref=e417]: 24/12/2568
            - generic [ref=e418]:
              - button "แก้ไข" [ref=e419] [cursor=pointer]
              - button "ลบ" [ref=e420] [cursor=pointer]
        - generic [ref=e422]:
          - img "🔥🔥PROMOTION!!!🔥🔥" [ref=e423]
          - generic [ref=e424]:
            - heading "🔥🔥PROMOTION!!!🔥🔥" [level=6] [ref=e425]
            - generic [ref=e426]: 1/12/2568
            - generic [ref=e427]:
              - button "แก้ไข" [ref=e428] [cursor=pointer]
              - button "ลบ" [ref=e429] [cursor=pointer]
    - contentinfo [ref=e430]:
      - generic [ref=e431]:
        - generic [ref=e432]:
          - img "Logo" [ref=e434]
          - generic [ref=e436]:
            - generic [ref=e437]:
              - heading "คลับ" [level=6] [ref=e438]
              - list [ref=e439]:
                - listitem [ref=e440]:
                  - button "ข่าวสาร" [ref=e441] [cursor=pointer]
                - listitem [ref=e442]:
                  - button "ตารางเวลา" [ref=e443] [cursor=pointer]
                - listitem [ref=e444]:
                  - button "สมาชิก" [ref=e445] [cursor=pointer]
            - generic [ref=e446]:
              - heading "ติดต่อเรา" [level=6] [ref=e447]
              - list [ref=e448]:
                - listitem [ref=e449]:
                  - button "พูดคุยกับเรา" [ref=e450] [cursor=pointer]
            - generic [ref=e451]:
              - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e452]
              - list [ref=e453]:
                - listitem [ref=e454]:
                  - button "กฎระเบียบข้อบังคับ" [ref=e455] [cursor=pointer]
                - listitem [ref=e456]:
                  - button "คำถามที่พบบ่อย" [ref=e457] [cursor=pointer]
          - generic [ref=e458]:
            - img "Logo 2" [ref=e459]
            - generic [ref=e460]:
              - button [ref=e461] [cursor=pointer]:
                - img [ref=e462]
              - button [ref=e464] [cursor=pointer]:
                - img [ref=e465]
              - button [ref=e467] [cursor=pointer]:
                - img [ref=e468]
              - button [ref=e470] [cursor=pointer]:
                - img [ref=e471]
        - separator [ref=e473]
        - generic [ref=e475]:
          - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
          - link "Terms" [ref=e476] [cursor=pointer]:
            - /url: /terms
          - text: "|"
          - link "Privacy" [ref=e477] [cursor=pointer]:
            - /url: /privacy
  - generic [ref=e478]: "6"
```

# Test source

```ts
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
> 260 |         await expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
      |                                                                         ^ Error: expect(locator).toBeVisible() failed
  261 |         await page.getByRole('button', { name: 'ลบ' }).first().click();
  262 |         await expect(page.getByText('⚠️ ยืนยันการลบข่าว')).toBeVisible();
  263 |         await page.getByRole('button', { name: 'ลบข่าว' }).click();
  264 |         await !expect(page.getByRole('heading', { name: 'Test Title' })).toBeVisible();
  265 |     });
  266 | });
```