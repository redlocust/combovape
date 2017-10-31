// API Users static class
export default class ApiMixes {

// get a list of mixes
  static getList() {
    let url = 'api/mixes';

    return fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      });
  }

  // save new mix/ edited mix

  static addEdit() {

    let mix = arguments[0];
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
        return response.json();
      });
  }

  // delete all mixes
  static deleteList() {

    console.log('delete');

    let mix = arguments[0];
    let url = 'api/mixes';

    return fetch(url, {
        method: 'DELETE',
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
        return response.json();
      });
  }

  // seed 10 mixes
  static seedList() {

    let mix = arguments[0];
    let url = 'api/mixes-seed';

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
        return response.json();
      });
  }

}