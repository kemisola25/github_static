  
  //selecting input value
let emailInput = document.querySelector(".email");

let PasswordInput = document.querySelector(".password");

let Submit = document.querySelector(".button-wrapper");

let cardholder = document.querySelector('#cards-holder');




Submit.addEventListener('click', function(e){
   debugger
   e.preventDefault();

         let trainee =[];

        const email = emailInput.value;
        const Password = passwordInput.value;
        

        const trainees = 
        {email: email, 
        Password: Password, 
        
      }
         trainee.push(trainees);

         console.log(trainees);
         

         createCard(email, Password)
         formReset()

         })
         
         function formReset() {
            emailInput.value = '';
            passwordInput.value = '';
            
         }

            function createCard(email, Password){
                  const parentDiv = document.createElement('div');
                  parentDiv.setAttribute('class', 'card');
          
                  const div = document.createElement('div');
                  div.setAttribute('class', Password);
          
                  //const skillDiv = document.createElement('div');
                 // skillDiv.setAttribute('class','skill-set');

                  //for a comma separated info, use the code below
                  // let skill = skills.split(",");
                  //for(let i = 0; i < skill.length ; i++ ){
                    //    const span = document.createElement('span');
                      //  span.textContent = skill[i];
                       // skillDiv.append(span);
                 // }


   //introducing a collection of array "trainees"



//<div class="card">
  //                          <img src= "https://images.unsplash.com/photo-1618085220188-b4f210d22703?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
  //                      <div class="skill-set">
  //                         <span>HTML</span>
   //                            <span>CSS</span>
      //                         <span>ANGULAR</span> 
       //                 </div>
      //                  <h2>Kukoyi Oluwakemi</h2>
     //                   <p>I am a jolly good fellow. Bring me some food</p>
      //                  <div class="button-wrapper">
      //                      <button>Read more</button>
       //                    </div>
        //                </div>

       

        //h2 kukoyi oluwakemi
        const h2 = document.createElement('h2');
        h2.textContent = email;

        //p i am a jolly good fellow
        const p = document.createElement('p');
        p.textContent = Password;
        // read more
        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'button-wrapper');
        
        const button = document.createElement('button');
        button.setAttribute('class', 'button-wrapper');
        button.textContent = "Read More"
        button.addEventListener('click', () => {
            alert(email);
       });
       buttonDiv.append(button);


        parentDiv.append(div);
       // parentDiv.append(skillDiv);
        parentDiv.append(h2);
        parentDiv.append(p);
        parentDiv.append(buttonDiv);
        cardholder.append(parentDiv);

        
}