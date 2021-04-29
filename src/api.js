
import axios from 'axios'

const api_host_local = 'http://192.168.6.19/blog_server/public/'
// const api_host_company = 'http://192.168.6.19/book_spider/public/'


function httpRequest(url,method = 'get',params,charset,callback){
  var apiUrl = ''
  if(url.indexOf('http') != -1){
    apiUrl = url
  }else{
    apiUrl = api_host_local + url
  }
  if(method === 'get'){
      axios.get(apiUrl, {
        params: params
      })
      .then(function (response) {
        callback(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }else{
    axios.post(apiUrl, params)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}



/**获取章节列表 */
export function getChapterList(params,callback,charset="utf-8"){
  return httpRequest('api/article/list','get',params,charset,callback)
}

/**章节数据爬取 */
export function handleChapterSpider(params,callback,charset="utf-8"){
  return httpRequest('api/article/list','get',params,charset,callback)
}

// /**获取直播推流 */
// export function getVideoList(params,callback,charset="utf-8"){
//   return httpRequest('http://192.168.6.19/video/Video.php','get',params,charset,callback)
// }