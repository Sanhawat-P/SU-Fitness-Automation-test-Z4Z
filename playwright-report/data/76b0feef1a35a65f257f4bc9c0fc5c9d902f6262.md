# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pongsatorn_test.spec.ts >> Pongsatorn automated test >> TCS-NEWS-029 การแก้ไขข่าวด้วยข้อมูลที่ถูกต้อง
- Location: tests\pongsatorn_test.spec.ts:218:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://myprojectfitnessvercal.vercel.app/admin/news/edit/31"
Received: "https://myprojectfitnessvercal.vercel.app/admin/news/edit/159"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://myprojectfitnessvercal.vercel.app/admin/news/edit/159"

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
        - generic [ref=e15]:
          - button "สวัสดี, Admin1" [ref=e16] [cursor=pointer]
          - text:       
  - generic [ref=e21]:
    - generic [ref=e22]: แก้ไขข่าว
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]: หัวข้อ
        - textbox [ref=e26]: แจ้ง test
      - generic [ref=e27]:
        - generic [ref=e28]: เนื้อหา
        - textbox [ref=e29]: test12
      - generic [ref=e30]:
        - generic [ref=e31]: รูปภาพ
        - button "Choose File" [ref=e32] [cursor=pointer]
        - img "preview" [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]: ประเภทข่าว
        - combobox [ref=e36]:
          - option "ทั่วไป" [selected]
          - option "สุขภาพ"
      - generic [ref=e37]:
        - generic [ref=e38]: วันที่เผยแพร่
        - textbox [ref=e39]: 2026-04-08
      - generic [ref=e40]:
        - button "ยกเลิก" [ref=e41] [cursor=pointer]
        - button "บันทึก" [ref=e42] [cursor=pointer]
  - contentinfo [ref=e43]:
    - generic [ref=e44]:
      - generic [ref=e45]:
        - img "Logo" [ref=e47]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - heading "คลับ" [level=6] [ref=e51]
            - list [ref=e52]:
              - listitem [ref=e53]:
                - button "ข่าวสาร" [ref=e54] [cursor=pointer]
              - listitem [ref=e55]:
                - button "ตารางเวลา" [ref=e56] [cursor=pointer]
              - listitem [ref=e57]:
                - button "สมาชิก" [ref=e58] [cursor=pointer]
          - generic [ref=e59]:
            - heading "ติดต่อเรา" [level=6] [ref=e60]
            - list [ref=e61]:
              - listitem [ref=e62]:
                - button "พูดคุยกับเรา" [ref=e63] [cursor=pointer]
          - generic [ref=e64]:
            - heading "ข้อมูลเพิ่มเติม" [level=6] [ref=e65]
            - list [ref=e66]:
              - listitem [ref=e67]:
                - button "กฎระเบียบข้อบังคับ" [ref=e68] [cursor=pointer]
              - listitem [ref=e69]:
                - button "คำถามที่พบบ่อย" [ref=e70] [cursor=pointer]
        - generic [ref=e71]:
          - img "Logo 2" [ref=e72]
          - generic [ref=e73]:
            - button [ref=e74] [cursor=pointer]:
              - img [ref=e75]
            - button [ref=e77] [cursor=pointer]:
              - img [ref=e78]
            - button [ref=e80] [cursor=pointer]:
              - img [ref=e81]
            - button [ref=e83] [cursor=pointer]:
              - img [ref=e84]
      - separator [ref=e86]
      - generic [ref=e88]:
        - text: © 2025 SU.ED Fitness Center. สงวนลิขสิทธิ์ |
        - link "Terms" [ref=e89] [cursor=pointer]:
          - /url: /terms
        - text: "|"
        - link "Privacy" [ref=e90] [cursor=pointer]:
          - /url: /privacy
```

# Test source

```ts
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
> 225 |         await expect(page).toHaveURL('/admin/news/edit/31');
      |                            ^ Error: expect(page).toHaveURL(expected) failed
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