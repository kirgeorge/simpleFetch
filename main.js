customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      
      const template = document.getElementById('my-paragraph');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);


const user_url = 'https://hr.oat.taocloud.org/v1/users'

function fetchUsers(){
            // using fetch to simplify the process
            fetch(user_url)
                .then(response => response.json())
                .then(users => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    //get all the users from our object
                    users.forEach(function(user) {
                      //display the content
                        output += `
                            <li>
                                ${user.firstName}  ${user.lastName}
                            </li>
                        `;
                        console.log(user.firstName +' ' + user.lastName);
                    });
                    output += '</ul>'
                    document.getElementById("users").innerHTML = output;

                });
        }
        //call the function
        fetchUsers();

      
//const slottedSpan = document.querySelector('my-paragraph span');

//console.log(slottedSpan.assignedSlot);
//console.log(slottedSpan.slot);