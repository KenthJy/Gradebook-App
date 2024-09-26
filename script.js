import { users } from "./data.js"

const content = document.getElementById("content")
const main = document.getElementById("container")

setTimeout(loadingScreen,0)

function loadingScreen(){
 content.innerHTML = `<img class="svg" src="https://cdn.dribbble.com/users/895367/screenshots/4239559/media/23fe85493d5f204ce8e71d21d46ab07d.gif" alt="figma gif picture">`
 
 setTimeout(render, 3000);
}   

function render(){
    const theUsers = users.map(function(user){
        content.innerHTML = 
        `<div class ="container1">
        <h3>Hi ${user.name},</h3>
        <p>You have <span>${user.tests[0]} pending test</span> this week</p>
        <div>
        
        </div>
        </div>`
    })

}

