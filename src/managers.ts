import { LocaleManager } from './managers/LocaleManager';
import { StorageManager } from './managers/StorageManager';
import { SubscriptionManager } from './managers/SubscriptionManager';

export class Managers {
  public locale = new LocaleManager();
  public storage = new StorageManager();
  public subscription = new SubscriptionManager();

  private resetManagers(): void {
    this.locale.reset();
    this.storage.reset();
    this.subscription.reset();
  }

  public async initManagers(): Promise<any> {
    await this.locale.init();
    await this.storage.init();
    await this.subscription.init();
  }
}

export const managers = new Managers();
