const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const galleryImgs=document.querySelectorAll('.gallery-img')
let currentSelect=0

prevBtn.addEventListener('click',function(){
   
    galleryImgs[currentSelect].classList.remove("active")
    currentSelect--;
    galleryImgs[currentSelect].classList.add("active")

  nextBtn.disabled=false;
  if(currentSelect===0)
{
    prevBtn.disabled=true;
} 
})

nextBtn.addEventListener('click',function(){

    galleryImgs[currentSelect].classList.remove("active")
    currentSelect++;
    galleryImgs[currentSelect].classList.add("active")

  prevBtn.disabled=false;
  if(galleryImgs.length === currentSelect+1)
{
    nextBtn.disabled=true;
}
})
