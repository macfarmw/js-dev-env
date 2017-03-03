# js-dev-env
My copy of the code from following along in the Pluralsight course **Building a JavaScript Development Enviromnent** by Cory House.

# Software Used
* git scm  
  * At work configure git for proxy
  * [Config Git to use a proxy](https://gist.github.com/evantoli/f8c23a37eb3558ab8765)
* node js  
* VS Code  

# npm global installs needed
```
npm install -g nsp
npm install -g localtunnel
```

# Cloud Services
* Track.js
* TravisCI
* Appveyor
* Heroku
  * Requires free account and local install of the Heroku CLI software.
  * Follow getting started guide after account creation.
* Surge
  * [Surge](http://surge.sh)
  * Create free account from CLI on first deploy.
  ```
  surge ./dist


    Welcome to Surge! (surge.sh)
    Please login or create an account by entering your email and password:

              email: macfarmw@gmail.com
           password:
       project path: ./dist
               size: 7 files, 59.8 KB
             domain: apathetic-wish.surge.sh
             upload: [====================] 100%, eta: 0.0s
   propagate on CDN: [====================] 100%
               plan: Free
              users: macfarmw@gmail.com
         IP Address: 45.55.110.124

    Success! Project is published and running at apathetic-wish.surge.sh
  ```
