
//selecting input value
let nameInput = document.querySelector(".name");

let aboutInput = document.querySelector(".about");

let skillInput = document.querySelector("#skill");

let avatarInput = document.querySelector(".avatar");

let cardholder = document.querySelector('#cards-holder')

let Submit = document.querySelector(".button-wrapper");


Submit.addEventListener('click', function(e){
   debugger
         e.preventDefault();

         let trainee =[];

        const name = nameInput.value;
        const about = aboutInput.value;
        const skills = skillInput.value;
      
        const avatar = avatarInput.value;

        const trainees = 
        {name: name, 
        skill: skills, 
        about:  about,
        avatar: avatar
      }
         trainee.push(trainees);

         console.log(trainees);


         createCard(name, about, skills, avatar)
         formReset()

         })
         
         function formReset() {
            nameInput.value = '';
            aboutInput.value = '';
            skillInput.value = '';
            avatarInput.value = '';
         }

            function createCard(name, about, skills, avatar){
                  const parentDiv = document.createElement('div');
                  parentDiv.setAttribute('class', 'card');
          
                  const img = document.createElement('img');
                  img.setAttribute('src', avatar);
          
                  const skillDiv = document.createElement('div');
                  skillDiv.setAttribute('class','skill-set');

                  //for a comma separated info, use the code below
                   let skill = skills.split(",");
                  for(let i = 0; i < skill.length ; i++ ){
                        const span = document.createElement('span');
                        span.textContent = skill[i];
                        skillDiv.append(span);
                  }


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
        h2.textContent = name;

        //p i am a jolly good fellow
        const p = document.createElement('p');
        p.textContent = about;
        // read more
        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'button-wrapper');
        
        const button = document.createElement('button');
        button.setAttribute('class', 'button-wrapper');
        button.textContent = "Read More"
        button.addEventListener('click', () => {
            alert(name);
       });
       buttonDiv.append(button);


        parentDiv.append(img);
        parentDiv.append(skillDiv);
        parentDiv.append(h2);
        parentDiv.append(p);
        parentDiv.append(buttonDiv);
        cardholder.append(parentDiv);

        
}


   
  /*submitButton.addEventListener('click', (e) => {
      const name = nameInput.value;
      const about = aboutInput.value;
      const skills = skillsetInput.value;
      const avatar = avatarInput.value;
      
      let traineeObject = {name:name, about:about, skills:skills, avatar:avatar}
      traineeArray.push(traineeObject);
      // console.log(traineeObject);
      
      
     
//listen for events
//
    

   
     // skillInput.Value = "";
     // avatarInput.Value = "";
     // aboutInput.Value = "";
     // nameInput.Value= "";

     // console.log(traineeObject);
     // e.preventDefault();
//});*/