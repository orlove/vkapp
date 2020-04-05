/**
 * Методы для работы с подписками
 */

const api = {
  /**
   * Узнать подписан ли пользователь
   * @param  {Number}   uid     ид. пользователя
   * @param  {Function} handler обработчик ответа в случае успеха
   */
  checkSub: (uid, handler) => {
    return api.request({method: 'sub/check', params: {uid: uid}, handler: handler});
  },

  /**
   * Подписть пользователя
   * @param  {Number}   user     ид. пользователя
   * @param  {Function} handler обработчик ответа в случае успеха
   */
  sign: (user, handler) => {
    return api.request({method: 'sub/sign', params: {uid: user}, handler: handler});
  },
};

export default api;
