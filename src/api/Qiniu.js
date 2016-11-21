'use strict';

/**
 * 直传文件
 * formInput对象如何配置请参考七牛官方文档“直传文件”一节
 */
function uploadFile(uri, token, formInput) {
  if (typeof formInput !== 'object') {
    return false;
  }

  let formData = new FormData();
  for (let k in formInput) {
    formData.append(k, formInput[k]);
  }
  if (!formInput.file) formData.append('file', {uri: uri, type: 'application/octet-stream'});
  if (!formInput.token) formData.append('token', token);

  let options = {
    method: 'POST',
    headers: {
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
        'Content-Type': 'multipart/form-data',
    },
    body: formData
  };

  return fetch(`http://up-z1.qiniu.com`, options);
}

export default {uploadFile}