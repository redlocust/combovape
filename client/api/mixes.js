// API Users static class
export default class ApiUsers {

// get a list of mixes
  static getList() {
    let that = this;
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
        return response.json();
      });
  }
}