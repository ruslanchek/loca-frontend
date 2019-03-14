import { CommonOrderDirection, GetPhrasesInput, Phrase, PhraseOrderBy, Project } from '../generated/graphql.schema';
import { apolloClient } from '../api/network.layer';
import { gql } from 'apollo-boost';

export class PhrasesManager {
	public reset(): void {

	}

	public init(): Promise<any> {
		return Promise.resolve();
	}

	public async getPhrases(projectId: string): Promise<Phrase[]> {
		const result = await apolloClient.query<
			{ getPhrases: Phrase[] },
			GetPhrasesInput
			>({
			query: gql`
				query(
				$projectId: ID!
				$skip: Int!
				$take: Int!
				$orderBy: PhraseOrderBy!
				$orderDirection: CommonOrderDirection!
				) {
					getPhrases(
						getPhrasesInput: {
							projectId: $projectId
							skip: $skip
							take: $take
							orderBy: $orderBy
							orderDirection: $orderDirection
						}
					) {
						id
						phraseId
						tags
					}
				}
			`,
			variables: {
				projectId,
				skip: 0,
				take: 1000,
				orderBy: PhraseOrderBy.id,
				orderDirection: CommonOrderDirection.DESC,
			},
		});

		return result.data.getPhrases;
	}
}
