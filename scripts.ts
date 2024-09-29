const toggle_button=document.getElementById("toogle-skills") as HTMLButtonElement;
const skills=document.getElementById("skill") as HTMLElement;

toggle_button.addEventListener("click", ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display='none'
    }
})

