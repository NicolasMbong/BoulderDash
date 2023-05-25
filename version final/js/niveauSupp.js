/*
document.getElementById("filetoRead").addEventListener("change",function(){
    var file = this.files[0];
    console.log(file);
  
    if (file) {
        var reader = new FileReader();
  
        reader.onload = function (evt) {
          console.log(evt);
          document.getElementById("editor").value = evt.target.result;
        };
  
        reader.onerror = function (evt) {
          console.error("An error ocurred reading the file",evt);
        };
  
        reader.readAsText(file, "UTF-8");
    }
},false);

*/