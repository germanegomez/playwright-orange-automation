import { test } from '@TestBase';

test.describe('Login test', () => {
	test('Login', async ({ loginPage }) => {
		await loginPage.loginSuccess();
	});
});
