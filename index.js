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
var headerName=document.querySelector('.header-name');
toggle.onclick=()=>{
    toggle.classList.toggle('active')
    nar.classList.toggle('active');
    navar.classList.toggle('active')
    headerName.classList.toggle('active');
}


var table = document.querySelectorAll('.table-list');
for(let i=0 ; i< table.length;i++){
    table[i].onclick=()=>{
        let j=0;
        while(j<table.length){
            table[j].className='table-list';
            j++;
        }
        table[i].className='table-list active';
    }
}
