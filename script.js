import { users } from "./data.js"

const content = document.getElementById("content")
const main = document.getElementById("container")
let score = ""
let message = ""

setTimeout(loadingScreen,0)

function loadingScreen(){
 content.innerHTML = `<img class="svg" src="https://cdn.dribbble.com/users/895367/screenshots/4239559/media/23fe85493d5f204ce8e71d21d46ab07d.gif" alt="figma gif picture">`
 
 setTimeout(render, 3000);
}   

function render(){
    let myHtml = ``
        
    users[0].grades.forEach(gradeEntry =>{
        myHtml +=
        `
        <div class="container-of-subj1">
            <p class="subject">${gradeEntry.subject}</p>
        
            <div class="container-of-subj11">
            <p class="grades">Grades:</p>
            <p>${gradeEntry.grade}</p>
            </div>
        </div>
        `
    })

    const theUsers = users.map(function(user){
        content.innerHTML = 
        `<div class ="container1">
        <h3 id="user-name">Hi ${user.name},</h3>
         <div class="container11">
        <p>You have <span class"user-tests">${user.tests[0]} pending test</span> this week</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_12_1393)">
<path d="M11.4123 20.0671C6.58261 20.0671 2.66763 16.1521 2.66763 11.3224C2.66763 6.49273 6.58261 2.57775 11.4123 2.57775C16.242 2.57775 20.1569 6.49273 20.1569 11.3224C20.1569 16.1521 16.242 20.0671 11.4123 20.0671ZM11.4123 18.3181C13.2677 18.3181 15.0471 17.5811 16.359 16.2691C17.671 14.9572 18.408 13.1778 18.408 11.3224C18.408 9.46702 17.671 7.68763 16.359 6.37568C15.0471 5.06373 13.2677 4.32668 11.4123 4.32668C9.5569 4.32668 7.77751 5.06373 6.46556 6.37568C5.15361 7.68763 4.41656 9.46702 4.41656 11.3224C4.41656 13.1778 5.15361 14.9572 6.46556 16.2691C7.77751 17.5811 9.5569 18.3181 11.4123 18.3181ZM10.5378 6.95007H12.2867V8.69901H10.5378V6.95007ZM10.5378 10.4479H12.2867V15.6947H10.5378V10.4479Z" fill="#D52A2A"/>
</g>
<defs>
<clipPath id="clip0_12_1393">
<rect width="20.9872" height="20.9872" fill="white" transform="translate(0.918701 0.828819)"/>
</clipPath>
</defs>
</svg>
</div>
        </div>

        <div class="container2">
            <div class="container-21">
            
            <h2>    <span class"points">${score}</span> </h2>
            <p>${message}</p>
            
            </div>
            <div class="container-22">
            <button>Calculate Your Grade</button>
            </div>
        </div>
        

        <h3 class="grades-length">You have ${user.grades.length} Subjects</h3>

        <div class="container-of-subj">
            ${myHtml}
        </div>
        `
    })

}

