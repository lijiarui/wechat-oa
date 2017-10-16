# Using express and nginx to connect with wechatOa

## Using pm2
```
npm install pm2 --global
pm2 start app.js
pm2 logs

```
## Install Nginx
```
yum install nginx -y
nginx
```

## Config HTTP Reverse Proxy
Nginx provide the web service. We should config reverse proxy to forward web request to local node service.

Nginx config directory: `/etc/nginx/conf.d`.     
We add `wechat.conf` under the directory.

```
server {
    listen 80;
    server_name test.botorange.com; # Change to the domain

    location / {
        proxy_pass http://127.0.0.1:5050;
    }
}
```
Restart nginx
```
nginx -s reload
```

## See
[wechat](https://github.com/node-webot/wechat)    Wechat Official recommand.