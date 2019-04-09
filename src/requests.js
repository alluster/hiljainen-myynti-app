
import axios from 'axios';
const URL = 'http://localhost:3001'

// export async function getApartment(id, callback) {
// 	const response = await client.getEntry(id)
// 	if (response) {
// 		callback(response)
// 	}
	
// 	return (
// 		console.error = error => {
// 			throw new Error(error);
// 		}
// 	)
// }

export function getDataFromDb  () {
        axios.get("http://localhost:3001/api/getData")

        .then(function (response) {
            console.log('response',response);
          })
      };

  


// export const putDataToDB = message => {
//     let currentIds = this.state.data.map(data => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//       ++idToBeAdded;
//     }

//     axios.post(`${URL}/api/putData`, {
//       id: idToBeAdded,
//       message: message
//     });
//   };

// export const deleteFromDB = idTodelete => {
//     let objIdToDelete = null;
//     this.state.data.forEach(dat => {
//       if (dat.id == idTodelete) {
//         objIdToDelete = dat._id;
//       }
//     });

//     axios.delete(`${URL}/api/deleteData`, {
//       data: {
//         id: objIdToDelete
//       }
//     });
//   };

// export const updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     this.state.data.forEach(dat => {
//       if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//       }
//     });

//     axios.post(`${URL}/api/updateData`, {
//       id: objIdToUpdate,
//       update: { message: updateToApply }
//     });
//   };
