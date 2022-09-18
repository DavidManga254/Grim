function tab(evt,button){
    var i,tabcontents,tablink;
    //get content and hide;
    tabcontents=document.getElementsByClassName('content');
    for(i=0;i<tabcontents.length;i++){
        tabcontents[i].style.display='none';
    }
    //get tabs and remove active state
    tablink=document.getElementsByClassName('tabs');
    for(i=0;i<tablink.length;i++){
        tablink[i].className=tablink[i].className.replace('active','');
    }
    document.getElementById(button).style.display='block';
    evt.currenTarget.className+='active';
}
document.getElementById('defaultOpen').onclick();