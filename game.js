let boxes= document.querySelectorAll(".box");

let reset= document.querySelector(".reset");
let newbtn= document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnX=true;
let count=0;
let winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
         [2,4,6],[2,5,8],[3,4,5],[6,7,8]];

         const resetgame=() =>{
            turnX= true;
            count=0;
            enabledboxes();
            msgcontainer.classList.add("hide")
          };        

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnX)
        {
           box.innerText="X"
            
            turnX=false
        }
      else{
        box.innerText="O"
        turnX=true;
      }
      box.disabled=true;
      count++;
       let iswinner = checkwinner();
       if(!iswinner && count===9)
       {
        gameDraw();
       }
     
    });
    
});



const gameDraw = ()=>{
    msg.innerText="The game was a Draw";
    msgcontainer.classList.remove("hide");
    disabledboxes();
};


const disabledboxes = () =>{
 for(let box of boxes)
    box.disabled=true;
};
const enabledboxes = () =>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText=""
    }}
   
const showwinner=(winner)=>{
    msg.innerText=`Congratulation the winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

     const checkwinner =() => {
            for (let pattern of winpatterns) {
                let pos1val = boxes[pattern[0]].innerText;
                let pos2val = boxes[pattern[1]].innerText;
                let pos3val = boxes[pattern[2]].innerText;

                if (pos1val != "" && pos2val != "" && pos3val != "") {
                    if (pos1val === pos2val && pos2val === pos3val){
                        showwinner(pos1val);
                        return true;
                    }

                }

            }
        };
    

        newbtn.addEventListener("click", resetgame);
        reset.addEventListener("click", resetgame);
      




