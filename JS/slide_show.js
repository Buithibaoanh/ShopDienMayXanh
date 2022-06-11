var index = 0;
var sliders = document.querySelectorAll('.sildeshow_img1')
var sliderlength = sliders.length
function slidershow(){
    for( var i = 0; i < sliderlength; i++){
        sliders[i].style.display = 'none'
    }
    index ++
    if(index > sliderlength){
        index = 1
    }
    sliders[index-1].style.display = 'block'
    setTimeout(slidershow, 3000)
}
slidershow()
function currenindex(n){
    sliderbtn(index += n)
}
function sliderbtn(n){
    if( n > sliderlength){
        index = 1
    }
    if( n <1 ){
        index = sliderlength
    }
    for(var i =0; i < sliderlength; i ++){
        sliders[i].style.display = 'none'
    }
    sliders[index-1].style.display = 'block'
}