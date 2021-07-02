var myClick = document.querySelectorAll('.click');
for(let i=0 ; i< myClick.length;i++){
    myClick[i].onclick=()=>{
        let j=0;
        while(j<myClick.length){
            myClick[j].className='click';
            j++;
        }
        myClick[i].className='click active';
    }
}


var toggle=document.querySelector('.toggle-size');
var nar =document.querySelector('.container-navar');
var navar =document.querySelector('.narvar');
toggle.onclick=()=>{
    toggle.classList.toggle('active')
    nar.classList.toggle('active');
    navar.classList.toggle('active')
}