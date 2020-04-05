/**
 * Работа с сервером
 */
import chartApi from './chartApi';
import subApi from './subApi';

const config = {
  //domain: 'https://api.newsapp.me',
  domain: 'https://rest-news.hozya.ru'
};

var api = {
  /**
   * Запрос данных с сервера
   * @param  {String}   method  api-метод
   * @param  {Object}   params  параметры api-метода
   * @param  {mix}      tag     ключ запроса (для возможности его отмены)
   * @param  {Function} handler обработчик ответа в случае успеха
   * @param  {Object}   options доп. опции http-запроса (заголовки, метод и т.д.)
   */
  request: function ({method, params, tag, handler, options}) {

    // Отменяем предыдущий ещё не завершенный запрос
    if(tag) {
      fetch.abort(tag);
    }

    // Преобразуем в url
    if(params) {
      params = Object.keys(params).map((k) =>
          encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
      ).join('&');
      params = '?'+params;
    } else {
      params = '';
    }

    return fetch(config.domain+'/'+method+params, options, tag)
      .then((response) => {
        if(response.ok) {
          return response.json();
        } else {
          response.text().then((text) => {
            console.error(response.url, text.substr(-64), response);
          });
          return false;
        }
      })
      .then(handler)
      .catch((error) => {
        console.error(error);
        this.setState({error: error, isLoading: false});
      });
  },
  /**
   * POST-запросы
   * @param  {String}   method  api-метод
   * @param  {Object}   body    тело запроса
   * @param  {mix}      tag     ключ запроса (для возможности его отмены)
   * @param  {Function} handler обработчик ответа в случае успеха
   * @param  {Object}   options доп. опции http-запроса (заголовки, метод и т.д.)
   */
  post: function ({method, body, tag, handler, options}) {

    // Отменяем предыдущий ещё не завершенный запрос
    if(tag) {
      fetch.abort(tag);
    }

    options = Object.assign({
      method: 'POST',
      /*headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },*/
      body: JSON.stringify(body)
    }, options || {});

    return fetch(config.domain+'/'+method, options, tag)
      .then((response) => {
        if(response.ok) {
          return response.json();
        } else {
          response.text().then((text) => {
            console.error(response.url, text.substr(-64), response);
          });
          return false;
        }
      })
      .then(handler)
      .catch((error) => {
        console.error(error);
        //this.setState({error: error, isLoading: false});
      });
  },
  /**
   * Отменяет запрос с ключем tag
   * @param {mix} tag ключ запроса
   */
  abort: (tag) => {
    fetch.abort(tag);
  },
  /**
   * Список городов
   * @param  {Function} handler обработчик ответа в случае успеха
   */
  /*cities: (handler) => {
    return api.request({method: 'cities', handler: (response) => {
      if(response.items) {
        handler(response.items);
      }
    }});
  }*/
};

// Сливаем каждый компонент с api
[chartApi, subApi].forEach((a) => {
  api = Object.assign(a, api);
});

export default api;
