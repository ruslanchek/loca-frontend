import { LocaleManager } from './managers/LocaleManager';
import { StorageManager } from './managers/StorageManager';

export class Managers {
  public locale = new LocaleManager();
  public storage = new StorageManager();

  private resetManagers(): void {
    this.locale.reset();
    this.storage.reset();
  }

  public async initManagers(): Promise<any> {
    await this.locale.init();
    await this.storage.init();
  }
}

export const managers = new Managers();
