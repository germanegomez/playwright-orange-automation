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
	expect: async ({}, use) => await use(driver.expect),
	addUserPage: async ({ page }, use) => await use(new AddSystemUserPage(page))
});

export { test };
export const expect = test.expect;
