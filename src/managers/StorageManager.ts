import { IStorage, Cookies, Local } from '../services/StorageService';

export class StorageManager {
	public cookies: IStorage;
	public local: IStorage;
	public session: IStorage;

	public reset(): void {
		this.cookies = null;
		this.local = null;
		this.local = null;
	}

	public init(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.cookies = new Cookies();
			this.local = new Local('localStorage').getInstance();
			this.session = new Local('sessionStorage').getInstance();

			resolve();
		});
	}
}
