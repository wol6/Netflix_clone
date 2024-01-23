
console.log('test')

let qstBoxs = document.querySelectorAll('.qstBox')

qstBoxs.forEach((qst)=>{
//    console.log(q)
  qst.addEventListener('click',()=>{
   // console.log("clicked")
   if(qst.classList.contains('active')){
       qst.classList.remove('active')
   }
   else{
       qst.classList.add('active')
   }

  })
   
})