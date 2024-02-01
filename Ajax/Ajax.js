console.log("Ajax Learnings Starts here")

//fetched the button using id
let fbtn=document.getElementById('fetch')

//added event listener - onclick
fbtn.addEventListener('click',fetchdata)

//this function will get executed once the fetchdata button is clicked
function fetchdata()
{
    const xhr=new XMLHttpRequest(); //initialized xhr object 
    //open the object

    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
    //Three parameters - last parameter is async which we have set to true.
    //Non blocking requests

    //what to do on progress
    xhr.onprogress=function()
    {
        console.log("Please wait Your data is being fetched")
    }

    xhr.onreadystatechange=function()
    {
        //generally there are 5 ready states 
        // 0 - 4 .... 0 means nothing is done, 4 signifies operation done
        console.log(this.readyState)
    }

    //what to do when response is ready
    xhr.onload=function()
    {
        //status code 200 signifies everything is ok
        if(this.status===200)
        console.log(this.responseText)
        else
        console.log("ERROR")
    }

    //send request
    xhr.send();
}