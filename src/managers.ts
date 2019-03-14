import { LocaleManager } from './managers/LocaleManager';
import { StorageManager } from './managers/StorageManager';
import { ProjectsManager } from './managers/ProjectsManager';
import { PhrasesManager } from './managers/PhrasesManager';

export class Managers {
  public locale = new LocaleManager();
  public storage = new StorageManager();
  public projects = new ProjectsManager();
  public phrases = new PhrasesManager();

  private resetManagers(): void {
    this.locale.reset();
    this.storage.reset();
    this.projects.reset();
    this.phrases.reset();
  }

  public async initManagers(): Promise<any> {
    await this.locale.init();
    await this.storage.init();
    await this.projects.init();
    await this.phrases.init();
  }
}

export const managers = new Managers();
