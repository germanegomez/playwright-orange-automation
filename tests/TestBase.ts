/* eslint-disable no-empty-pattern */
import { test as driver, type Expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { AddSystemUserPage } from '@pages/AddSystemUserPage';

const test = driver.extend<{
	loginPage: LoginPage;
	expect: Expect;
	addUserPage: AddSystemUserPage;
}>({
	loginPage: async ({ page }, use) => await use(new LoginPage(page)),
	// Extends the test context to include Playwright's expect method,
	// allowing direct access to it in tests without requiring manual imports.
	expect: async ({}, use) => await use(driver.expect),
	addUserPage: async ({ page }, use) => await use(new AddSystemUserPage(page))
});

export { test };
export const expect = test.expect;
