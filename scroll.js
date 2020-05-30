let section_two = section_three = section_four = section_five = true;

document.onscroll = function (event){
    // console.log('windowHeight = '+ document.documentElement.clientHeight);
    if(document.getElementById('section_two').getBoundingClientRect().top < 0 & section_two){
        section_two = false;
        console.log('Now you on section_two');    
    }else if(document.getElementById('section_two').getBoundingClientRect().top < 0 & section_three == false & section_four == false & section_five == false){
        
        console.log('Now you on section_two');
        section_two = true;
    }
    if(document.getElementById('section_three').getBoundingClientRect().top < 0 & section_three){
        section_two = false;
        console.log('Now you on section_three');    
    }
    if(document.getElementById('section_four').getBoundingClientRect().top < 0 & section_four){
        section_three = false;
        console.log('Now you on section_four');    
    }
    if(document.getElementById('section_five').getBoundingClientRect().top < 0 & section_five){
        section_four = false;
        console.log('Now you on section_five');    
        section_five = false;
    }
    
}