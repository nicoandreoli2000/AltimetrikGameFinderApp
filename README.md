# GameFINDER

Webpage for searching games.


## JSON server instructions

1. Download the source code from Github.

2. Download Node in your computer.

3. Install json-server and json-server-auth locally just by running:
```
npm install
```

4. Raise a json-server (verify you are on port 3000, if not change the url at src/js/login.js):
```
npx json-server db.json
```

5. For logging in, use the following credentials:

```
email: probando@hotmail.com
```
```
password: password
```


## Considerations

1. In the main view at the mobile breakpoint, two rows are left for the first 200px, because it looks better that just keeping one too streched.
2. ...

## Still need to finish

1. Connection Modal to API
2. Color variables in main and modal
3. Separate scripts if they are too long
4. Autocomplete search suggestions