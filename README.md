# GameFINDER

Webpage for searching games.


## JSON server instructions

1. Download the source code from Github.

2. Download Node in your computer.

3. Install json-server and json-server-auth locally:
```
npm install
```

4. Raise a json-server (verify you are on port 3000):
```
npm run serve
```

5. For logging in, use the following credentials:

```
email: nicolas@altimetrik.com
```
```
password: password
```


## Considerations and Issues

1. In the main view at the mobile breakpoint, two rows are left for the first 200px, because it looks better that just keeping one too streched.
2. Issues in the console are due to CORS and Alvaro told us to obvious them.
3. I opt for using a page size of 12 beause otherwise, when doing the infinite scroll, the page becomes REALLY slow when having lot of cards.
4. CSS animations are great, but I chose to optimize my code and prioritize other issues rather than wasting my time on them.
5. Modal title tooltip is not great, but is what we agreed with David.