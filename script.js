import { users } from "./data.js"

const content = document.getElementById("content")
const main = document.getElementById("container")
let score = ""
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
        <p>You have <span class"user-tests">${user.tests[0]} pending test</span> this week</p>
        </div>

        <div class="container2">
            <div class="container-21">
            <h2>Your Grade is <span class"points"></span></h2>
            <p>Calculate your grade by this simple app</p>
            </div>
            <div class="container-22">
            <button>Calculate Your Grade</button>
            </div>
        </div>
        

        <h3>You have ${user.grades.length} Subjects</h3>
      `
    })

}

