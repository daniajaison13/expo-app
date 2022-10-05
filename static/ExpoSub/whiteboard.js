//Functionality for submitting and listing out the feedbacks
$( document ).ready(function() {
    var $cachedFeedback= $('#message-text');
    $('#addFeedbackButton').on('click',function(){
    if($cachedFeedback.val().length==0) {return;}
    var sendJson = {
    feedback: $cachedFeedback.val()
    };


    var urlSubmit = HostURL+'/post/?report_type=submitfeedback';

    $.ajax({
       type:'POST',
       url: urlSubmit,
       dataType: 'json',
       data: sendJson,
       async: false,
      success:function(result){
      var data =result;
      $("#container").empty();
      document.getElementById('message-text').value='';
      FeedbacksList();
      }
    });
    });

    var urlGet = HostURL+'/get/?report_type=listfeedback';

    $.ajax({
      type:'GET',
      url: urlGet,
     beforeSend: function(){
      $('.ajax-loader').css("visibility", "visible");
      },
      success: function(feedbacks){ 
      $.each(feedbacks,function(i,item)
      { 
      addToContainer(item.Feedback,item.assoc_name,item.order,'', item.avatar, item.assoc_org)});
      },
      complete: function(){
        $('.ajax-loader').css("visibility", "hidden");
     },
     error: function(){ alert("Error loading feedbacks");}
    });
    });


    //Listing feedbacks after submit
function FeedbacksList(){
     var urlGet = HostURL+'/get/?report_type=listfeedback';

    $.ajax({
      type:'GET',
      url: urlGet,
      beforeSend: function(){
        $('.ajax-loader').css("visibility", "visible");
      },
      success: function(feedbacks){
      $.each(feedbacks,function(i,item)
      { 
      submitThought(item.Feedback,item.assoc_name,item.order,'',item.avatar,item.assoc_org)});
      },
      complete: function(){
        $('.ajax-loader').css("visibility", "hidden");
       },   
         error: function(){ alert("Error loading feedbacks");}
    });
    
  }
    
    
   /* For alert on 280 characters limit on feedback>=280 characters */
    
   $('#message-text').on('input',limitReached);
    
   function limitReached(){
    var feedback = $('#message-text');
    if(feedback.val().length>=280) {
      document.getElementById("alert").textContent= "You've reached the word limit :)";
    }
   else{
    document.getElementById("alert").textContent="";
   }
   if(feedback.val().length<4) {
       document.getElementById("addFeedbackButton").disabled=true;
   }
   else{
    document.getElementById("addFeedbackButton").disabled=false;
   }
   }

 $(".fa-angle-double-right").click(function(){
    document.getElementById("container").scrollLeft += 700;
});
$(".fa-angle-double-left").click(function(){ 
    document.getElementById("container").scrollLeft -= 700;
});   

function submitThought(feedback,assocName,order,time,assocPic,orgName){
    addToContainer(feedback,assocName,order,time,assocPic,orgName);
    // document.getElementById("container").scrollLeft=10000000000000000000000000000000000;
    var elmnt = document.getElementById("container");
     elmnt.scrollLeft=elmnt.scrollWidth;
 }
 function addToContainer(feedback,assocName,order,time,assocPic,orgName){
  
 var newd = document.createElement("div");
 newd.classList.add("hvr-grow-rotate");
 newd.classList.add("content");
 /*random pastel color generator: */
 var hue = Math.floor(Math.random() * 360);
 var pastel = 'hsl(' + hue + ', 100%, 85%)';
 newd.style.backgroundColor=pastel;
 
 document.querySelector("#container").appendChild(newd);

 var txtnode=document.createTextNode(feedback);
 var newp= document.createElement("p");
 newp.appendChild(txtnode);
 //newd.appendChild(newp);
 var encloseD = document.createElement("div");
 encloseD.classList.add("enclose");
 var encloseBadge= document.createElement("img");
 encloseBadge.classList.add("enclosedBadge");
 
 var encloseImg= document.createElement("img");
 encloseImg.setAttribute("src","data:image/png;base64,"+assocPic);
  //encloseImg.setAttribute("src","teamsDp.jpeg");
 encloseImg.setAttribute("alt","teamsDp");
 var encloseName= document.createElement("span");
 encloseName.classList.add("assocName");
 encloseD.appendChild(encloseImg);
 encloseImg.classList.add("teamsDp");
 var txtnode2=document.createTextNode(assocName);
 encloseName.appendChild(txtnode2);
 encloseD.appendChild(encloseName);
 newd.appendChild(encloseD);
 newd.classList.add("hvr-curl-bottom-right");
 newd.appendChild(newp);
 encloseD.appendChild(encloseBadge);
 encloseBadge.classList.add("enclosedBadge");
 
 if(order < 0){
     newd.style.order=order;
     encloseBadge.setAttribute("src",exec_sse);
     
 }
 else{
 if(orgName.includes("Shared Services Engineering")==true)
   encloseBadge.setAttribute("src",static_sse);
 else
 encloseBadge.setAttribute("src",guest_sse);
 }
 }

