// Your code here
const dodger = document.getElementById('dodger')
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('pixel','')
    const left = parseInt(leftNumbers, 10)

    if(left>0)
    {
        dodger.style.left = `${left -1}px`
    }
}
document.addEventListener('keydown', function(element){
    if(element.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
})
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace('pixel','')
    const right = parseInt(rightNumbers,10)

    if (right<360){
        dodger.style.left =`${right +1}px`
    }
}
document.addEventListener('keydown',function (element){
    if(element.key === 'ArrowRight'){
        moveDodgerRight()
    }
})