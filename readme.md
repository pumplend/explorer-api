# Pumplend Explorer Api

This system is to provide an restful-api interface about all the position information of [PUMPMAX](https://pumpmax.fun/) protocol .

All the data source form solana chain . And clean by [pumplend-liquidator](https://github.com/pumplend/pumplend-liquidator) . 

Currently , the official pumpmax explorer api `https://api.pumpmax.fun/` is free to use .

## Interface support 

- `/explorer/positions`
    - Description : 
        This interface is to find all alive position by query 
    - Method : `GET`
    - Query : 
        - `pageSize` : require
        - `page`    : require
        - `user`    : optional
        - `token`   : optional
        - `userBorrowData`  : optional
        - `hash`    : optional
        - `deadline`  : optional

- `/explorer/actives`
    - Description : 
        This interface is to find all the history actives with query . 
    - Method : `GET`
    - Query : 
        - `pageSize` : require
        - `page`    : require
        - `user`    : optional
        - `token`   : optional
        - `userBorrowData`  : optional
        - `hash`    : optional
        - `type`    : optional

- `/explorer/liquidations`
    - Description : 
        This interface is to find all the alive position by query deadline , default time will be `Date.now`
    - Method : `GET`
    - Query : 
        - `pageSize` : require
        - `page`    : require
        - `user`    : optional
        - `token`   : optional
        - `userBorrowData`  : optional
        
## How to run ?

Simple. 

```
npm install
```

And 

```
npm run serve
```
