/**
 * Методы для работы с графиками
 */

const api = {
  /**
   * Данные для графика города
   * @param  {Number}   cid       ид. города
   * @param  {Function} handler   обработчик ответа в случае успеха
   */
  chartCity: (cid, handler) => {
    return api.request({method: 'chart/city', params: {cid: cid}, handler: handler});
  },
  /**
   * Данные для графика страны
   * @param  {Function} handler   обработчик ответа в случае успеха
   */
  chartRussia: (handler) => {
    return api.request({method: 'chart/russia', handler: handler});
  },
  /**
   * Данные для графика мира
   * @param  {Function} handler   обработчик ответа в случае успеха
   */
  chartWorld: (handler) => {
    return api.request({method: 'chart/world', handler: handler});
  }
};

export default api;
