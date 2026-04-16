import { Page, Locator, expect } from '@playwright/test';

export class PackagePage{
    readonly page: Page;

    readonly mounthlyStudentPackage: Locator;
    readonly mounthlyInsiderPackage: Locator;
    readonly mounthlyOutsiderPackage: Locator;

    readonly quarterlyStudentPackage: Locator;
    readonly quarterlyInsiderPackage: Locator;
    readonly quarterlyOutsiderPackage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.mounthlyStudentPackage = page.locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
        this.mounthlyInsiderPackage = page.locator('div').filter({ hasText: /^บุคลากรในมหาวิทยาลัย400 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
        this.mounthlyOutsiderPackage = page.locator('div').filter({ hasText: /^บุคคลภายนอก500 บาทราคาเริ่มต้น \/ รายเดือนสมัครเลย$/ }).first();
        this.quarterlyStudentPackage = page.locator('div').filter({ hasText: /^นักเรียน\/นักศึกษา1000 บาทราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();
        this.quarterlyInsiderPackage = page.locator('div').filter({ hasText: /^บุคลากรในมหาวิทยาลัย1400 บาทราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();
        this.quarterlyOutsiderPackage = page.locator('div').filter({ hasText: /^บุคคลภายนอก-ราคาเริ่มต้น \/ 4 เดือนสมัครเลย$/ }).first();

    }

    async goto(){
        await this.page.goto('/package');
    }

    async checkMonthlyStudentPackage(){
        await this.page.getByRole('button', { name: 'สมัครเลย' }).first().click();
    }

    async expectPackageVisible(){
        await expect(this.mounthlyStudentPackage).toBeVisible();
        await expect(this.mounthlyInsiderPackage).toBeVisible();
        await expect(this.mounthlyOutsiderPackage).toBeVisible();
        await expect(this.quarterlyStudentPackage).toBeVisible();
        await expect(this.quarterlyInsiderPackage).toBeVisible();
        await expect(this.quarterlyOutsiderPackage).toBeVisible();
    }
}