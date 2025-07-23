let smallImagges=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImagges.length;i++){ 
    smallImagges[i].src="spiderman_img.png";
    console.dir(`value of image no.${i} is changed.`);
    
}