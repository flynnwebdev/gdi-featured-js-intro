---
theme : "sky"
highlightTheme : "agate"
---

<style>
    .reveal .slides {
      zoom: 1 !important;
      height: auto !important;
    }
    .reveal .slides section {
      top: 50% !important;
      transform: translateY(-50%) !important;
      zoom: 0.75 !important;
    }
    .reveal pre {
        width: 100% !important;
    }
    .reveal section pre code {
        overflow: hidden !important;
        max-height: none !important;
        white-space: pre-wrap !important;
    }
    .reveal img {
        border: none !important;
        background: none !important;
    }
</style>


# AJAX

---

## What is AJAX?

AJAX is an acronym for Asynchronous Javascript And XML, and is used to make HTTP requests to a server.

With it, we can send and receive data between our client app and one or more servers, and display or manipulate that data, without having to refresh the entire web page.

Today we'll look at doing AJAX two ways: with the fetch API, and with jQuery.

---

## AJAX get via fetch

We've already seen one way to use AJAX - the fetch API

```js
fetch('https://randomuser.me/api')
    .then(
        (res) => res.json(),
        () => console.error('Unable to fetch!')
    )
    .then((json) => console.log(json))
```

Let's run this with the Network tab open in the dev console, so we can see what actually happens at the network level.

---

## AJAX get via jQuery

We can also make AJAX requests via jQuery.

In it's simplest form, load() will get the URL via AJAX and insert the response text into the selected element.

```js
$( "#result" ).load( "ajax/test.html" );
```

We can optionally specify a callback if we want to do some additional processing once the request completes.

```js
$( "#result" ).load( "ajax/test.html", function() {
  alert( "Load was performed." );
});
```

---

## Post via fetch

As strange as it sounds, we can also make POST requests with the fetch API.

```js
let article = {
  title: 'Test Article',
  content: 'Hello World!'
}

fetch('/articles/create', {
  method: 'post',
  body: JSON.stringify(article)
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log('Created article:', data);
});
```

---

## Post via jQuery

We can do the same thing via jQuery, with slightly different syntax, and a different promise interface (done/fail/always instead of then/catch)

```js
let article = {
  title: 'Test Article',
  content: 'Hello World!'
}

$.post("/articles/create", article)
  .done(function(res) {
    console.log( "post successful: ", res );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
```

Note that, unlike fetch, we didn't need to explicitly JSON.stringify the article object - jQuery does it automatically.

---

## Post form data

We can post data from a HTML form via AJAX by using the FormData API to create the correct data structure from the data entered into the form.

```html
<form id="new-article" onsubmit="postArticle()">
  <input name="title">
  <textarea name="content"></textarea>
</form>

<script>
  function postArticle() {
    event.preventDefault()

    fetch('/articles/create', {
      method: 'post',
      body: new FormData(this)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Created article:', data);
    });
  }
</script>
```

---

## Post form data via jQuery

The jQuery version is similar to fetch, except we use the jQuery serialize() function to convert the form fields into an object that $.post() can use.

```html
<form id="new-article" onsubmit="postArticle()">
  <input name="title">
  <textarea name="content"></textarea>
</form>

<script>
  function postArticle() {
    event.preventDefault()

    $.post("/articles/create", $("#new-article").serialize())
      .done(function(data) {
          console.log('Created article:', data);
      })
      .fail(function() {
        console.log( "error" );
      })
  }
</script>
```

---

## Let's develop it

Create a .json file, and insert this JSON into it:

```json
[
  { "name" : "John", "age" : 25, "married" : true },
  { "name" : "Mary", "age" : 17, "married" : false },
  { "name" : "David", "age" : 40, "married" : true },
  { "name" : "Sally", "age" : 51, "married" : false }
]
```

1. Write a script to fetch the .json file via AJAX and parse it to an object. Log the object out to the console.

2. With the parsed object, dynamically build a HTML table to display the headings and data.
  * Headings should be generated from the object keys and have first letter capitalized.
  * For the "married" column, either display "Y" or "N" for the value, or display a checkbox or checkmark image.

---

## Same-origin policy

For security reasons, browsers prohibit a script that was loaded from one origin from accessing resources on a different origin.

```html
<!-- From localhost:3000/index.html -->
<script type="text/javascript">
  fetch("http://localhost:8000")
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
</script>
```

The above will fail with this error in the dev console:

![CORS error](https://cdn-images-1.medium.com/max/800/1*Hr7T_kBgvnZwzSDdGF3E9w.png)

This is the browser protecting us from potentially malicious code, but what if we want to legitimately access a trusted API on another server?

---

## CORS

Enter a technology called Cross Origin Resource Sharing, or CORS.

It works by having the server with the blocked resource send a HTTP header along with the response which notifies the browser which domains and protocols are allowed to access the resource.

```
Access-Control-Allow-Origin: *
```

We can specify a domain to limit access, but in this case we've used the wildcard to allow anyone to access the resource.

Run one of your scripts that accesses the randomuser.me API and go to the network tab in the dev tools in your browser. Examine the response headers - you should see the CORS directive there.

---

## Demonstration / Code-along

To demonstrate AJAX via fetch, let's go back to one of our old Rails blog examples and see if we can use fetch to get and post articles to/from the Rails app.

To enable CORS so that our front-end script can fetch data from our Rails server, we'll use a gem called [rack-cors](https://github.com/cyu/rack-cors)

---

## Polyfilla

As an aside, when a browser lacks support for a new technology (in this case, IE11 and fetch), there is often a library available that supplies the missing functionality in browsers that don't have it natively.

Such a library is termed a "polyfill", after the building product, because it "fills in the holes" in a browser's API implementation.

<figure>
  <img src="https://cdn.mos.cms.futurecdn.net/2bJQjsD3JHPUq2rtLMJzs7.jpg" alt="Web developer supporting IE"/>
  <figcaption><em><small>Web developer supporting IE</small></em></figcaption>
</figure>

It turns out there is a [polyfill for fetch](https://github.com/github/fetch), which also requires the use of a [Promise polyfill](https://github.com/taylorhakes/promise-polyfill).

---

## Resources

[Google fetch tutorial](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

[Official Fetch reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[Official jQuery AJAX reference](http://api.jquery.com/category/ajax/)

[CORS primer](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

# Questions?

---

## AFTERNOON CHALLENGE

### [Canvas Unit: AJAX](https://coderacademy.instructure.com/courses/144/pages/unit-ajax)

