# params_for_HTMX
small lib to add uri params in htmx 

## how to connect?
```html
<script src="https://withoutasecondthought.github.io/params_for_HTMX/paramsForHTMX.js" defer></script>
```
or you can download it and add as simple js file

## how does it work?

```html
<script src="https://unpkg.com/htmx.org@1.9.10"></script>
<script src="https://withoutasecondthought.github.io/params_for_HTMX/paramsForHTMX.js" defer></script>
<div>
    <input name="hello" placeholder="uri param">
    <input name="goodbye" placeholder="query param">
    <button hx-get="/log/:hello" hx-target=".target" hx-include="[name='hello'],[name='goodbye']">send</button>
</div>
<div class="target"></div>
```

#### if you want to pass as a uri param add it to hx-* route
like this 
```html
<button hx-get="/log/:<name-of-your-param>" hx-include="[name='<name-of-your-param>'], ..."> some txt </button>
```
#### if you want to pass as a query param add it only to hx-include
like this
```html
<button hx-get="/log" hx-include="[name='<name-of-your-param>'], ..."> some txt </button>
```


### log example
```bash
5:32PM INF incoming request elapsed_ms=0.161416 method=GET status_code=200 url=/log/how_to_be_happy?goodbye=idk
```
