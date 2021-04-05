//独立COOKIE文件     ck在``里面填写，多账号换行

let ymzhuanggbodyVal = `sign=674789d1044bad3b6b384c20d439bc70&channelID=2&taskid=1&type=1&uid=8717&ver=104
sign=250fde0f700457c13021c5d9eb2a8c38&channelID=2&taskid=1&type=1&uid=9852&ver=104
sign=bd62cca2a08ab5835bc3033b53d712d9&channelID=2&taskid=1&type=1&uid=9964&ver=104`
let ymzhuanspbodyVal = `sign=eba6331b40aab0b739b4f4a7298827e7&channelID=2&taskid=2&type=2&uid=8717&ver=104
sign=ad6becc36c579629c0cc5a0d4b7643b4&channelID=2&taskid=2&type=2&uid=9852&ver=104
sign=666f51b6bae4e3393c8b1ed7c47a4553&channelID=2&taskid=2&type=2&uid=9964&ver=104`
let ymzhuantxbodyVal = ``

let ymzhuancookie = {

    ymzhuanggbodyVal: ymzhuanggbodyVal,
    ymzhuanspbodyVal: ymzhuanspbodyVal,
    ymzhuantxbodyVal: ymzhuantxbodyVal,


}

module.exports = ymzhuancookie
