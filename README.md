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
```