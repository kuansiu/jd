import json

response_body = {}
original_response = json.loads(response.body)

namea = 'com.goodnotes.gn6_one_time_unlock_3999'  
nameb = 'com.goodnotes.gn6_one_time_unlock_299'
jsid = 'com.goodnotes.gn6_one_time_unlock_3999'

if response:

  del request.headers['X-RevenueCat-UserToken']
  del request.headers['X-RevenueCat-ETag']

  response_body['headers'] = request.headers

elif original_response and original_response['subscriber']:

  data = {
    'purchase_date': '2022-09-09T09:09:09Z' 
  }

  original_response['subscriber']['entitlements'][namea] = json.loads(json.dumps(data))
  original_response['subscriber']['entitlements'][namea]['product_identifier'] = jsid

  original_response['subscriber']['subscriptions'][jsid] = {
    'original_purchase_date': '2022-09-09T09:09:09Z',
    'purchase_date': '2022-09-09T09:09:09Z',
    'store': 'app_store',
    'ownership_type': 'PURCHASED'
  }

  original_response['subscriber']['non_subscriptions']['entitlements'][nameb] = json.loads(json.dumps(data))

  response_body['headers'] = json.dumps(original_response)

print(response_body)
