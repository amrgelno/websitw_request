

  var formy= document.getElementById('quickForm');

  formy.addEventListener("submit",function(error){

  var results=document.querySelectorAll('.data');

  results.forEach((result) => {

  var symbol= new Array ("$","?","^",">","<","#","&","*","!","%");

  var email= new Array ("gmail","yahoo");
  //var csymbol=count[symbol];

   for (i = 0; i<= 10; i++) {

  if(result.value.indexOf(symbol[i])!=-1){

  error.preventDefault();

    result.setCustomValidity('invaild formate you must  not contain any symbol such as : $ ?  ^ > <  # & *  ! % ');

   // result.style.background='red';


  }


        }


      });


  });

