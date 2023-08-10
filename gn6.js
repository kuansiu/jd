const chxm1023 = {};
const chxm1024 = JSON.parse($response.body || null);
const namea = 'com.goodnotes.gn6_one_time_unlock_3999';
const nameb = 'com.goodnotes.gn6_one_time_unlock_299';  
const jsid = 'com.goodnotes.gn6_one_time_unlock_3999';

if (typeof $response !== 'undefined') {
  delete $request.headers['X-RevenueCat-UserToken'];
  delete $request.headers['X-RevenueCat-ETag'];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {

  let data = {    
    'Author': 'chxm1023',
    'Telegram': 'https://t.me/chxm1023',   
    'warning': '仅供学习,禁止转载或售卖',
    'purchase_date': '2022-09-09T09:09:09Z'
  };

  chxm1024.subscriber.entitlements[namea] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[namea].product_identifier = jsid;

  chxm1024.subscriber.subscriptions[jsid] = {
    'Author': 'chxm1023',
    'Telegram': 'https://t.me/chxm1023', 
    'warning': '仅供学习,禁止转载或售卖',
    'original_purchase_date': '2022-09-09T09:09:09Z',
    'purchase_date': '2022-09-09T09:09:09Z',    
    'store': 'app_store',
    'ownership_type': 'PURCHASED'
  };
  
  chxm1024.subscriber.non_subscriptions.entitlements[nameb] = JSON.parse(JSON.stringify(data));

  chxm1023.headers = JSON.stringify(chxm1024);
}

$done(chxm1023);

(function(window, _0x562f54){
  let _0x4b4da1 = 'al';
  try{
    _0x4b4da1 += 'ert';
    if(_0x562f54 !== encode_version){
      window[_0x4b4da1]('删除By chxm1023'); 
    }
  }catch(_0x265b4b){
    window[_0x4b4da1]('删除By chxm1023');
  } 
})(window, encode_version);
