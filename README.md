# ExpressPassportJwtExample
Example of an Express API secured by Passport using JWT based authentication

## Get A Token
```
curl -X POST -H 'content-type: application/json' -d '{"email":"chris@chrisgruber.com", "password":"chris"}' http://localhost:3000/token
```

## Get user example
```
curl -H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.kHZQ03yhLOPC1c7f6CdItQbT2ljvMQLbucdJVkqwEKs' http://localhost:3000/user
```