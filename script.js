let users=0;
let comps=0;
let keys=document.querySelectorAll(".imgs");
let users_p=document.querySelector("#usersroce");
let comps_p=document.querySelector("#compsroce");
let msg=document.querySelector(".winnermsg");
const showwinner =(win,userchoice,compchoice)=>{
    if(win)
    {
        users++;
        users_p.innerText=`your sroce: ${users}`;
        msg.innerText=`you won..your choice: ${userchoice} and computer choice: ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        comps++;
        comps_p.innerText=`computer sroce: ${comps}`;
        msg.innerText=`computer won..your choice: ${userchoice} and computer choice: ${compchoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawgame=(userchoice)=>{
    msg.innerText=`draw game..your choice: ${userchoice} and computer choice: ${userchoice}`;
    msg.style.backgroundColor="aquamarine"
}
const randomchoice=()=>{
    const options= ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random()*3);
    return options[ranidx];
}
const playgame=(userchoice)=>
{
    const compchoice=randomchoice();
    if( userchoice=== compchoice)
    {
        drawgame(userchoice);
    }
    else
    {
        let win=true;
        if(userchoice==="paper")
        {
            win=compchoice==="scissors"?false:true;
        }
        else if(userchoice==="rock")
        {
            win=compchoice==="paper"?false:true;
        }
        else{
            win=compchoice==="rock"?false:true;
       }
       showwinner(win,userchoice,compchoice);
    }
}
keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        console.dir(key.innerText);
        playgame(key.innerText);
    })
})
