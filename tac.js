let box=document.querySelectorAll(".box");
let rebtn=document.querySelector("#reset");

let turno = true;
const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turno===true)
            {
                turno=false;
                box.innerText="X";
            }
        else
        {
            turno=true;
            box.innerText="O";
        }
    })
})