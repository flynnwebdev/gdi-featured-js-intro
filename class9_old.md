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

---

## AJAX via fetch

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

## Post via fetch

As strange as it sounds, we can also make POST requests with the fetch API.

```
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

## Demonstration

To demonstrate AJAX via fetch, let's go back to one of our old Rails blog examples and see if we can use fetch to get and post articles to/from the Rails app.

---

## AJAX via jQuery

We can also make AJAX requests via jQuery.

In it's simplest form, load() will get the URL via AJAX and insert the response text into the selected element.

```
$( "#result" ).load( "ajax/test.html" );
```

We can optionally specify a callback if we want to do some additional processing once the request completes.

```
$( "#result" ).load( "ajax/test.html", function() {
  alert( "Load was performed." );
});
```

---

## AJAX via jQuery

We can also request part of a resource.

```
$( "#result" ).load( "ajax/test.html #container" );
```

When this method executes, it retrieves the content of ajax/test.html, but then jQuery parses the returned document to find the element with an ID of container.

This element, along with its contents, is inserted into the element with an ID of result, and the rest of the retrieved document is discarded.

---

## Error handling

What about handling errors? We can do that by accepting 3 parameters in the callback - the response itself, a status message, and an XHR object which contains details about the request and response.

```html
<b>Successful Response (should be blank):</b>
<div id="success"></div>
<b>Error Response:</b>
<div id="error"></div>
 
<script>
  $( "#success" ).load( "/not-here.php", function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
  });
<script>
```

Let's try this one to see what it does.

---

## Request parameters

Often the URL we're requesting will require additional parameters to be sent.

For example, if we want to fetch data about a given product, we generally need to pass the product ID (think about Rails routes)

```
$("#product-info").load("/products", { id: 5 })
```

We can do this by passing an object with the required params.

---

## Get JSON

Because the vast majority of AJAX requests are to a JSON API, jQuery provides a shorthand for this use case.

```
$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  for key in data {
    items.push( "<li id='" + key + "'>" + data[key] + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
```

Here we dynamically build an unordered list from items retrieved from a JSON endpoint.

Note that getJSON() automatically parses the JSON to an object for us.

---

## jQuery meets Promises

All of the jQuery AJAX functions return a Promise, which provides methods for dealing with various outcomes of the request.

```
$.getJSON( "example.json", function() {
  console.log( "success" );
})
.done(function() {
  console.log( "second success" );
})
.fail(function() {
  console.log( "error" );
})
.always(function() {
  console.log( "complete" );
});
```

As implied by it's name, the always() will always execute, whether the request succeeded or failed, and will also execute last.

All of these methods are optional.

---

## Post to a server

We can also send POST requests.

For example, this will send data to create a new article.

```
$.post("/articles/create", { title: "Test Article", content: "Hello there!" })
```

Data can also be posted from a HTML form.

```
$.post("/articles/create", $("form").serialize())
```

---

## Post to a server

We can use the promise methods in the same way as we did with $.getJSON

```
$.post("/articles/create", $("form").serialize())
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

---

## Resources

[W3Schools jQuery Tutorial](https://www.w3schools.com/jquery/default.asp)

[Official jQuery reference](https://api.jquery.com/)

[Official Learn jQuery](https://learn.jquery.com/)


---

# Questions?

---

## AFTERNOON CHALLENGE

### [Canvas Unit: Callbacks](https://coderacademy.instructure.com/courses/144/pages/unit-jquery)

### [Canvas Unit: jQuery](https://coderacademy.instructure.com/courses/144/pages/unit-jquery)

