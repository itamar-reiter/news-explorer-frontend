class NewsApi {
  constructor() {
    this._baseUrl = 'https://nomoreparties.co/news/v2/everything?';
    this._apiKey = '46d25ee8365a48a598cd16bba913793b';
  }

  _checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };
  /* from=${this._sinceWhen}& */


  getArticles(qeustion) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    /* let sevenDaysEarlier = String(today.getDate() - 7).padStart(2, '0');
    let monthWeekAgo = mm;
    if (sevenDaysEarlier < 0) {
      monthWeekAgo = String(today.getMonth()).padStart(2, '0');
    }
    let yearWeekAgo = yyyy;
    if (monthWeekAgo < 0) {
      yearWeekAgo = String(today.getFullYear() - 1);
    }

    sevenDaysEarlier=  */
    /* &from=${sevenDaysEarlier} */
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    
    return fetch(`${this._baseUrl}q=${qeustion}&to=${today}&pageSize=20&apiKey=46d25ee8365a48a598cd16bba913793b`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Authoriztion": this._apiKey,
        "X-Api-Key": this._apiKey
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

export default new NewsApi();