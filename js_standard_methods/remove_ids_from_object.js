const data = [
	{
		absence: 10,
		breaks: null,
		created_on: "2017-09-27T18:46:50.395266Z",
		employee: 10,
		end_time: "2017-09-25T23:00:53.000000Z",
		first_break_minutes: 10,
		first_meal_minutes: 30,
		foreman_profile: {
			classification: "",
			company: 2,
			company_supplied_id: "1",
			email: "boaty@a.com",
			employee_id: 1,
			id: 1,
			phone: null,
			thumbnail: null,
			user_role: "ADMIN"
		},
		forms: [],
		id: 53,
		injured: null,
		work_components: [],
		work_shift: 31,
		worker_double_minutes: null,
		worker_over_minutes: null,
		worker_profile: {
			classification: "guy",
			company_supplied_id: "6",
			email: "dread@a.com",
			employee_id: 10,
			first_name: "Dread Pirate",
			fullsize: null,
			id: 10,
			last_name: "Roberts",
			phone: "+19879874561",
			user: null,
			user_id: 10,
		},
		worker_straight_minutes: null
	},
	{
		absence: null,
		breaks: null,
		created_on: "2017-09-27T18:46:22.427563Z",
		employee: 10,
		end_time: "2017-09-25T22:00:53.000000Z",
		first_break_minutes: 10,
		first_meal_minutes: 30,
		foreman_profile: {
			company: 2,
			company_supplied_id: "1",
			email: "boaty@a.com",
			employee_id: 1,
			first_name: "Boaty",
			fullsize: null,
			id: 1,
			last_name: "McBoatface",
			trade: "",
			user_id: 1,
			user_role: "ADMIN"
		},
		forms: [],
		id: 52,
		injured: null,
		signature: null,
		start_time: "2017-09-25T14:00:53.000000Z",
		state: "FOREMAN_ENDED",
		stretch: null,
		timezone: "America/Los_Angeles",
		updated_on: "2017-09-27T18:46:22.427580Z",
		work_components:
			[
				{
					adjusted_minutes_dt: 0,
					adjusted_minutes_ot: 0,
					adjusted_minutes_st: 480,
					cost_code: {
						code: "aaa123 - 1",
						cost_code: 4,
						description: "thing",
						id: 4,
						is_active: true,
						project: {
							address: "1400 Mission Street, San Francisco, CA, United States",
							company: 2,
							description: null,
							id: 2,
							job_number: "aaa123",
							latitude: 37.7752817,
							longitude: -122.4164667,
							name: "Some Users",
							options: {
								require_signature: true
							},
							status: "ACTIVE",
							timezone: "America/Los_Angeles"
						},
						units: "inches",
						work_components: null
					},
					employee_work_shift: 52,
					id: 31
				}
			],
		work_shift: 30,
		worker_double_minutes: null,
		worker_over_minutes: null,
		worker_profile: {
			classification: "guy",
			company: 2,
			company_supplied_id: "6",
			email: "dread@a.com",
			employee_id: 10,
			first_name: "Dread Pirate",
			fullsize: null,
			id: 10,
			invitation_count: 0,
			is_active: true,
			last_name: "Roberts",
			phone: "+19879874561",
			thumbnail: null,
			trade: "farm boy",
			user: null,
			user_id: 10,
			user_role: "WORKER"
		},
		worker_straight_minutes: null
	},
]


function sanitizeData(originalData) {
	const sanitizedData = [];

	for (const objElem of originalData) {
		const elem = remoreIDsFromObject(objElem);
		sanitizedData.push(elem);
	}
	return sanitizedData;
}

function remoreIDsFromObject(obj) {
	const resultObj = {};
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			resultObj[key] = remoreIDsFromObject(obj[key]);
		} else if (key !== 'id') {
			resultObj[key] = obj[key];
		}
	}
	return resultObj;
}


console.log(sanitizeData(data));