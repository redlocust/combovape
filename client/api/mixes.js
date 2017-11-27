// API Users static class
export default class ApiMixes {

// get a list of mixes
  static getList() {
    let page = arguments[0];
    let url = '';
    // if (Object.getOwnPropertyNames(page).length !== 0) {
    //   url = `/api/mixes/page/${page.page}`;
    // } else {
      url = `/api/mixes/`;
    //}
    console.log("page", page);
    console.log("url", url);
    return fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      });
  }

  // get single mix
  static getMix() {
    let mix = arguments[0];
    let url = `/api/mixes/${mix.mixId}`;

    console.log("get mix", mix);

    return fetch(url, {
        method: 'GET',
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


  // save new mix/ edited mix

  static addMix() {

    let mix = arguments[0];
    let url = '/api/mixes';

    console.log("mix addEdit", mix);

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


  // save new mix/ edited mix

  static editMix() {

    let mix = arguments[0];
    let url = `/api/mixes/${mix.mixId}`;

    console.log("mix Edit", mix);

    return fetch(url, {
        method: 'PUT',
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

  //delete recipe
  static deleteMix() {
    let mix = arguments[0];
    let url = `/api/mixes/${mix._id}`;
    return fetch(url, {
        method: 'delete',
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
    let url = '/api/mixes';
    return fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        }
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
    let url = '/api/mixes-seed';
    return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        }
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