let box=document.querySelectorAll(".box");
let rebtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");

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

const win= (winner) =>
    {
        msg.innerText=`Congratulations,Winner is ${winner}` ;
    }
const checkwinner = () =>
    {
        for(let pat of pattern)
            {
                let pos1=box[pat[0]].innerText;
                let pos2=box[pat[1]].innerText;
                let pos3=box[pat[2]].innerText;
                if(pos1 !="" && pos2!="" && pos3!="")
                    {
                         if(pos1===pos2 && pos2===pos3)
                            {
                                  win(pos1);
                                  for (let b of box)
                                    {
                                        b.disabled=true;
                                    }
                            }
                    }
            }
    }
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
        box.disabled=true;
        checkwinner();
    })
});
const enable=() =>
    {
        for (let x of box)
            {
                x.disabled=false;
                x.innerText="";
            }
    }
const reset =() =>
    {
        turno=true;
        enable();
        msg.innerText="";
    }
rebtn.addEventListener("click", reset);