import { apiData } from "./constants";

class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    })
      .then((res) => this._checkResponse(res))
      .then((res) => {
        return res;
      });
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((res) => this._checkResponse(res))
      .then((res) => {
        return res;
      });
  }

  checkToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => this._checkResponse(res))
      .then((res) => {
        return res;
      });
  }

  getInitialAppInfo(token) {
    return Promise.all([this.getUserInfo(token), this.getSavedCards(token)]);
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getSavedCards(token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then((res) => this._checkResponse(res));
  }

  saveProfileData(nameValue, aboutValue, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameValue,
        about: aboutValue,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  updateProfilePicture(avatarValue, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: avatarValue,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  createCard(data, token) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  deleteCard(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then((res) => this._checkResponse(res));
  }

  putLike(cardId, token) {
    return fetch(
      `${this._baseUrl}/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => this._checkResponse(res));
  }

  deleteLike(cardId, token) {
    return fetch(
      `${this._baseUrl}/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => this._checkResponse(res));
  }

  changeLikeCardStatus(cardId, likeStatus, token) {
    const callMethod = likeStatus
      ? this.putLike(cardId, token)
      : this.deleteLike(cardId, token);
    return callMethod;
  }
}

export default new MainApi(apiData);
