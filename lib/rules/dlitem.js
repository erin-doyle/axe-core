import noRoleMatches from './no-role-matches';

const dlitemMetadata = {
	id: 'dlitem',
	selector: 'dd, dt',
	matches: noRoleMatches,
	tags: ['cat.structure', 'wcag2a', 'wcag131'],
	metadata: {
		description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
		help: '<dt> and <dd> elements must be contained by a <dl>'
	},
	all: [],
	any: ['dlitem'],
	none: []
};

export default dlitemMetadata;