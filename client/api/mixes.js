// API Users static class
export default class ApiUsers {

// // get a list of users
//   static getList() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         // build some dummy users list
//         let mixes = [];
//         for (let x = 1; x <= 28; x++) {
//           mixes.push({
//             id: x,
//             title: 'title ' + x,
//             author: 'author ' + x,
//             recipe: 'recipe ' + x,
//           });
//         }
//         resolve(mixes);
//       }, 1000);
//     });
//   }
// }


// get a list of mixes
  static getList() {
    let that = this;
    let url = 'api/mixes';

    console.log("update state");

    return fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log("in fetch", response);
        return response.json();
      });
  }


  // save new mix/ edited mix

  static addEdit() {

    let mix = arguments[0];

    let that = this;
    let url = 'api/mixes';

    return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(mix)
      }
    )
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log("in fetch", response);
        return response.json();
      });
  }
}