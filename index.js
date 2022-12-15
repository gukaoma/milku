// $(document).ready(function() { // this waits until the document is fully loaded
//     console.log("it works");


    (function( $ ){
       $.fn.getPosts = function(forum) {
           var container = this;

        $.getJSON('/posts.json', function(posts) {
            console.log("inside the posts wrapper");

            $.each(posts[forum], function(k, v) {

                console.log("it truley works " + k);


                    var p = document.createElement("article.post.col_8");
                    var r = document.createElement("div.row");
                    var c1 = document.createElement("div.col");
                    var c2 = document.createElement("div.col");

                    var items = []

                    items.push("<div class='row justify-content-between'>");

                    items.push("<div class='col-2'>")
                    items.push("<img src='" + v["pfp"] + "' class='pfp' />")
                    items.push("<div class='username>'>" + v["name"] + "</div>")
                    items.push("</div>")

                    items.push("<div class='col-10'>")
                    items.push(v["content"])
                    items.push("<div class='date'>" + v["date"] + "</div>")
                    items.push("</div>")


                    $( "<article/>", {
                        "class": "post",
                        html: items.join( "" )
                    }).appendTo( container );


                    // $("#posts").append(p);


            });
        }); // get JSON
        return this;
    }; // function
    }) ( jQuery );
// });
