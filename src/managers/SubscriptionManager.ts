import { Event } from 'ts-typed-events';
import { Phrase, Project } from '../generated/graphql.schema';

export class SubscriptionManager {
	public static projectCreated = new Event<Project>();
	public static projectUpdated = new Event<Project>();
	public static phraseCreated = new Event<Phrase>();
	public static phraseUpdated = new Event<Phrase>();

	public reset(): void {
		SubscriptionManager.projectCreated.offAll();
		SubscriptionManager.projectUpdated.offAll();
		SubscriptionManager.phraseCreated.offAll();
		SubscriptionManager.phraseUpdated.offAll();
	}

	public init(): Promise<any> {
		SubscriptionManager.projectCreated.on(data => console.log('projectCreated', data));
		SubscriptionManager.projectUpdated.on(data => console.log('projectUpdated', data));
		SubscriptionManager.phraseCreated.on(data => console.log('phraseCreated', data));
		SubscriptionManager.phraseUpdated.on(data => console.log('phraseUpdated', data));

		return Promise.resolve();
	}
}
