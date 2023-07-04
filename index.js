const scrollContainer = document.querySelector('.scrollable-container');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -200, // Adjust the scroll distance as needed
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 200, // Adjust the scroll distance as needed
    behavior: 'smooth'
  });
});

{/* <script>
  let scrollContainer=document.querySelector(".gallery")
  let backBtn=document.getElementById("backBtn")
  let nextBtn=document.getElementById("nextBtn")


  scrollContainer.addEventListener("wheel",(evt)=>{

  })
</script> */}
