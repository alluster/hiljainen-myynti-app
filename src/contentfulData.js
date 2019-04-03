import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.REACT_APP_CTF_SPACE_ID,
  accessToken: process.env.REACT_APP_CTF_CDA_TOKEN,
  host: 'cdn.contentful.com',

});


export async function getApartments(type, callback) {
	const response = await client.getEntries(
		{
			'content_type': type, 
		}
	)
	if (response) {
		callback(response)
	}
	return (
		console.error = error => {
			throw new Error(error);
		}
	)
}

export async function getApartment(id, callback) {
	const response = await client.getEntry(id)
	if (response) {
		callback(response)
	}
	
	return (
		console.error = error => {
			throw new Error(error);
		}
	)
}
 

