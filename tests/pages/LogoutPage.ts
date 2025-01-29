import type { Page, Locator } from '@playwright/test';
import { SuperPage } from './SuperPage';

export class LogoutPage extends SuperPage {
	logoutButton: Locator;

	constructor(page: Page) {
		super(page);
		this.logoutButton = this.page.locator('.oxd-userdropdown-tab');
	}
}
