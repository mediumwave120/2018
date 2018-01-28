 var oDiv=document.querySelector('#nav'),
    oLi=oDiv.querySelectorAll('li'),
    oSlider=document.querySelector('.slider');
    oDiv.addEventListener('mouseleave',function(){
        //console.log('走了');
        // oSlider.style.transform='translate3d(0,0,0)';
        oSlider.style.left='400px';
    });

    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        oLi[i].addEventListener('mouseenter',function(e){
           //console.log('来了');
            // oSlider.style.transform='translate3d('+this.index*100+'px,0,0)';
           // console.log(this.index*100+300+'px');
             oSlider.style.left=this.index*100+400+'px';
        })
    }