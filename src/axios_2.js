import axios from "axios";
//We use axios to make HTTP Requests.
/*Base url to make requests to the movie database */
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
    //timeout:#in milliseconds
    //headers:#..
});

/*This below is a GET Request:
A GET Request is basically a way to grab data from a data source with the help of the internet.
Important Point-> It is done using the GET request method , which is very common HTTP request method(like POST,PUT,or DELETE)

Example of this GET method is :

say we type -> instance.get('/foo-bar');

Then we get our baseURL as -> https://api.themoviedb.org/3/foo-bar
we got the baseURL changed because of that -> instance.get('/whatever written').

This is a simple GET method Explanation.

Summary:
The instance.get() appends it's ''(single quote text) to the baseURL.
*/


export default instance;//SPECIAL NOTE-> We can have only one default export at a time for a file.
//SPECIAL NOTE-> When we use the export default then when we import it in another file we can use it's name whatever as we wish , we imported instance with the name ->axios in the Row.js file but still the Row.js file would pick up the variable instance for work.