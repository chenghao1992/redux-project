let Utils={};
/*
 *  get请求
 *  url:请求地址
 *  data:参数
 *  callback:回调函数
 * */
Utils.get=function (url,params,successFunc,errorFunc) {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    //fetch请求
    fetch(url, {
        method : 'GET'
    }).then(function(res){
        console.log('response:',res);
        console.log('ok:',res.ok);
        console.log('status:',res.status);
        console.log('statusText:',res.statusText);
        console.log('type:',res.type);
        if(res.ok){
            res.json().then(function(data){
                successFunc(data);
            })
        }else if(res.status === 401){
            console.log('请求失败');
            errorFunc();
        }else {
            errorFunc()
        }
    },function(){
        console.log('请求失败');
        errorFunc();
    })
}

/*
 *  post请求
 *  url:请求地址
 *  data:参数
 *  callback:回调函数
 * */

Utils.post=function (url,params,headers,callback) {
    fetch(url,{
        method: 'POST',
        headers:{
            'token': headers
        },
        body:JSON.stringify(params)
    })
        .then((response) => response.json())
        .then((responseJSON) => {
            callback(responseJSON)
        }) .done();
}


export default Utils;