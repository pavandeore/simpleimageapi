function execute(){
    url = 'https://source.unsplash.com/random';
    
    let btn = document.querySelector('#btn');
    let img = document.createElement('img');
    let imgdiv = document.querySelector('#imgdiv');
    let select = document.querySelector('#sct').value;
    
    
    switch(select){
      case '1' : 
      btn.style.display = "block";
      btn.addEventListener("click",function(){
      imgdiv.append(img);
      fetch(url)
      .then(res => {
      img.setAttribute('src',res.url);
      });  
      })
    
      break;
        
       case '2' :
       btn.style.display = "none";
       setInterval(function(){
       imgdiv.append(img);
       fetch(url)
       .then(res => {
       img.setAttribute('src',res.url);
       })
       },2000);  
     
       break;
        
    } 
    
    }