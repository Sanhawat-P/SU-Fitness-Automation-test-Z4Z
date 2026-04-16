import { Page, Locator, expect } from '@playwright/test';

export class RegisterPackagePage{
    readonly page: Page;

    readonly nameInput: Locator;
    readonly birthdateInput: Locator;
    readonly genderInput: Locator;
    readonly phoneInput: Locator;
    readonly emailInput: Locator;
    readonly lineIDInput: Locator;
    readonly typesInput: Locator; 
    readonly facultyInput: Locator;
    readonly branchInput: Locator; 
    readonly studentIDInput: Locator;
    readonly departmentInput: Locator; 
    readonly emergencyNameInput: Locator;
    readonly emergencyPhoneInput: Locator;  
    readonly knownFromInput: Locator;
    readonly errorMessage: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.nameInput = page.getByRole('textbox').filter({ hasText: '' }).nth(0);
        this.birthdateInput = page.getByRole('textbox').nth(1);
        this.genderInput = page.getByRole('combobox').nth(0);
        this.phoneInput = page.getByRole('textbox').filter({ hasText: '' }).nth(2);
        this.emailInput = page.getByRole('textbox').filter({ hasText: '' }).nth(3);
        this.lineIDInput = page.getByRole('textbox').filter({ hasText: '' }).nth(4);
        this.typesInput = page.getByRole('combobox').nth(1);
        this.facultyInput = page.getByRole('textbox').filter({ hasText: '' }).nth(5);
        this.branchInput = page.getByRole('textbox').filter({ hasText: '' }).nth(6);
        this.studentIDInput = page.getByRole('textbox').filter({ hasText: '' }).nth(7);
        this.departmentInput = page.getByRole('textbox').filter({ hasText: '' }).nth(8);
        this.emergencyNameInput = page.getByRole('textbox').filter({ hasText: '' }).nth(9);
        this.emergencyPhoneInput = page.getByRole('textbox').filter({ hasText: '' }).nth(10);
        this.knownFromInput = page.getByRole('textbox').filter({ hasText: '' }).nth(11);
        this.errorMessage = page.getByRole('alert');
        this.registerButton = page.getByRole('button', { name: 'สมัครสมาชิก' });
    }
    
    async goto(){
        await this.page.goto('/membership');
    }

    async registerMembership(name: string, birthdate: string, gender: string, phone: string, email: string, lineID: string, 
        type: string, faculty: string, branch: string, studentID: string, department: string, emergencyName: string, emergencyPhone: string, knownFrom: string){
        
        await this.nameInput.fill(name);
        await this.birthdateInput.fill(birthdate);
        await this.genderInput.selectOption(gender);
        await this.phoneInput.fill(phone);
        await this.emailInput.fill(email);
        await this.lineIDInput.fill(lineID);
        await this.typesInput.selectOption(type);
        await this.facultyInput.fill(faculty);
        await this.branchInput.fill(branch);
        await this.studentIDInput.fill(studentID);
        await this.departmentInput.fill(department);
        await this.emergencyNameInput.fill(emergencyName);
        await this.emergencyPhoneInput.fill(emergencyPhone);
        await this.knownFromInput.fill(knownFrom);
        
        await this.registerButton.click();
    }

    async validCheckbox() {
        await this.page.getByRole('radio').nth(1).check();
        await this.page.getByRole('radio').nth(3).check();
        await this.page.getByRole('radio').nth(5).check();
        await this.page.locator('input[name="parq_3"]').nth(1).check();
        await this.page.locator('input[name="parq_4"]').nth(1).check();
        await this.page.locator('input[name="parq_5"]').nth(1).check();
        await this.page.locator('input[name="parq_6"]').nth(1).check();
    }

    async agreeAllTerms() {
        await this.page.getByRole('checkbox').check();
    }

    async expectErrorMessage(message: string) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(message);
        
    }

}