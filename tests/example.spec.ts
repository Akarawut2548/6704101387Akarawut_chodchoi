import { test, expect } from '@playwright/test';

test('test form', async ({ page }) => {
  // 1. ไปที่หน้าหลักของแอปพลิเคชัน
  await page.goto('/'); 

  // 2. ระบุและกรอกชื่อ (Your name)
  await page.getByLabel('Your name *').fill('Akkrawut Chodchoi');

  // 3. ระบุและกรอกอายุ (Your age)
  await page.getByLabel('Your age *').fill('20');

  // 4. คลิกยอมรับเงื่อนไข (I accept the license and terms)
  await page.getByLabel('I accept the license and terms').check();

  // 5. คลิกปุ่ม Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // 6. ตรวจสอบว่ามี Notification "Submitted" แสดงขึ้นมา
  await expect(page.getByRole('alert', { name: 'Submitted' })).toBeVisible();
});