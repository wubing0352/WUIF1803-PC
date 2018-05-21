window.onload=function(){
    let img=document.querySelectorAll('.pic >img');
    let picBox=document.querySelector('.picBox');
    let button=document.querySelectorAll('.push-button');
    let LBtn=document.querySelector('.leftBtn');
    let RBtn=document.querySelector('.rightBtn');
    let index=0;
    let t=setInterval(move,1000);
    LBtn.onclick=function(){
        move();
    }
    function move(){
        index++;
        if(index===img.length){
            index=0;
        }
        for(let i=0;i<img.length;i++){
            img[i].style.display='none';
            button[i].className = 'push-button';
        }
        img[index].style.display='block';
        button[index].className = 'push-button hot';
    }
    RBtn.onclick=function(){
        moveR();
    }
    function moveR(){
        index--;
        if(index<0){
            index=img.length-1;
        }
        for(let i=0;i<img.length;i++){
            img[i].style.display='none';
            button[i].className = 'push-button';
        }
        img[index].style.display='block';
        button[index].className = 'push-button hot';
    }
    picBox.onmouseover=function(){
        clearInterval(t);
    }
    picBox.onmouseout=function(){
        t=setInterval(move,1000);
    }
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            for (let j = 0; j < button.length; j++) {
                button[j].className = 'push-button';
                img[j].style.display='none';
            }
            button[i].className = 'push-button hot';
            img[i].style.display='block';
            index=i;
        }
    }

}