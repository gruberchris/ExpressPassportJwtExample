# ExpressPassportJwtExample
Example of an Express API secured by Passport using JWT based authentication

## Get A Token
```
curl -X POST -H 'content-type: application/json' -d '{"email":"chris@chrisgruber.com", "password":"chris"}' http://localhost:3000/token
```
