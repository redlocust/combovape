// API Users static class
export default class ApiUsers {

// get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy users list
        let mixes = [];
        for (let x = 1; x <= 28; x++) {
          mixes.push({
            id: x,
            title: 'title ' + x,
            author: 'author ' + x,
            recipe: 'recipe ' + x,
          });
        }
        resolve(mixes);
      }, 1000);
    });
  }
}