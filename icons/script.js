function subscribe(event){

    event.preventDefault();
   // console.log(event);
   console.log(event.target);
   console.log(event.target.email);
   const email= event.target.email.value;
   console.log(email);
   const success_container=document.getElementById("success");
   console.log(success_container);
   console.log(document);
   const paragraph=document.createElement("p");
   paragraph.innerText=`Your email: ${email}`;
   console.log(paragraph);
    success_container.appendChild(paragraph);

}
const imageArray=[
    {
        url: "./images/donation1.png";
    },
    {
        url: "./images/donation2.png"; 
    }
]