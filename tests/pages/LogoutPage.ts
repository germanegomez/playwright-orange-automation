import type { Page, Locator } from '@playwright/test';
import { SuperPage } from './SuperPage';

export class LogoutPage extends SuperPage {
	userDropdownTab: Locator;
	logoutButton: Locator;

	constructor(page: Page) {
		super(page);
		this.userDropdownTab = this.page.locator('');
		this.logoutButton = this.page.locator('');
	}
}
