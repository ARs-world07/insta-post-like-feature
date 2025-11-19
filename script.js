var img = document.querySelector('img')
var love = document.querySelector('#like')

img.addEventListener ("dblclick", function(){
    love.style.opacity = 1
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

    setTimeout(function(){
        love.style.transform = 'translate(-50%, -400%) scale(1) rotate(0deg)'
    },700)

     setTimeout(function(){
        love.style.opacity = 0
    },800)

    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)'
    },1100)
    
   
})