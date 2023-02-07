const data = [
	{
		name: "Austin",
		id: 51,
		parent_id: 47,
		children_ids: []
	},
	{
		name: "San Antonio",
		id: 52,
		parent_id: 47,
		children_ids: [53]
	},
	{
		name: "Main",
		id: 42,
		parent_id: null,
		children_ids: [43, 44, 45, 46]
	},
	{
		name: "Texas",
		id: 47,
		parent_id: 43,
		children_ids: [51, 52]
	},
	{
		name: "Central",
		id: 43,
		parent_id: 42,
		children_ids: [47, 48, 49, 50]
	}
]

/******************** unfinihsed ********************/
function createTreeStructure(dataArray) {
	const treeArray = [];
	for (const element of dataArray) {
		if (element.children_ids !== []) {
			element.children = [];
			for (const ea of dataArray) {
				if (element.children_ids.includes(ea.id)) {
					element.children.push(ea);
				}
			}
			treeArray.push(element);
		}
	}
	for (const ea of treeArray) {
		console.log('ea.children of ', ea.id);
		console.log(ea.children);
	}
	return treeArray;
}
createTreeStructure(data);
// console.log(createTreeStructure(data));