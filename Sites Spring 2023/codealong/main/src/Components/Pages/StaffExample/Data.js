const arrRegions = [
	{ id: 1, name: 'Nordjylland' },
	{ id: 2, name: 'Midtjylland' },
	{ id: 3, name: 'Sønderjylland' },
	{ id: 4, name: 'Hovedstaden' },
	{ id: 5, name: 'Sjælland' }
]

const arrCities = [
	{ id: 1, name: 'Aalborg', region_id: 1, zipcode: 9000 },
	{ id: 2, name: 'Frederikshavn', region_id: 1, zipcode: 9900 },
	{ id: 3, name: 'Århus', region_id: 2, zipcode: 8000 },
	{ id: 4, name: 'Randers', region_id: 2, zipcode: 8500 },
	{ id: 5, name: 'Sønderborg', region_id: 3, zipcode: 5700 },
	{ id: 6, name: 'Odense', region_id: 3, zipcode: 4000 }
]

const arrStaff = [
	{ city_id: 1, name: 'Ole Olesen', email: 'ole@olesen.dk' },
	{ city_id: 3, name: 'Ole Olesen', email: 'ole@olesen.dk' },
]

export { arrRegions, arrCities, arrStaff }