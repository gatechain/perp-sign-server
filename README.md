# Perp Verify


## How to run The Perp Verify

1. Modify Config `config/config.local.js` or `config/config.prod.js`.

   ```
   config.local.js # Test environment configuration file
   config.prod.js  # Production environment configuration file
   
   # Modify Node runtime environment
   vim .env
   # Test environment
   # local # The test environment is commented here
   # Production environment
   # prod  # The production environment is commented here
   ```
2. `npm i` - Installing Node dependencies

3. `npm run dev` - Debug the environment and output the debug log
   
   `npm run start` - Start the environment with the log output in the log file
   
4. Access by http://127.0.0.1:3000

### 1. API 验证签名

请求URL: `POST /sign`

请求参数

```json
下单
{
   "tx" : {
        "contract": "BTC_USDT",
        "price": "13458.9",
        "size": -10000,
        "user_id": 12
   },
   "type": "order",
   "priKey": "XXXXXXX", 新账户私钥
}

撤单
{
   "tx" : {
        "order_id": "xxxxxx",
        "user_id": 12
   },
   "type": "cancelOrder",
   "priKey": "XXXXXXX", 新账户私钥
}
```

响应参数

```json
成功
{
    "code": 0,
    "message": "success",
    "sign": "0xd5b1c724d9cf3db4632df1514973b6f116189a3e76c63cf08c3e1bf345b438a36f7e61276b2606fbef9e6375a7322ed2b75259e87477a51c3941b906ffcfcc03"
}
失败
{
    "code": -1,
    "message": "Signature Error.",
    "sign": ""
}
```