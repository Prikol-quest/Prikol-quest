
colors = ['#FF4040', '#FFE600', '#6ECA12', '#40A3FF', '#102ED0', '#E537BF']
fio = document.getElementById('fio')
function rainbow(status) {
    console.log('first = '+status)
    let timer;
    let i = 0
    timer = setInterval(function () {
        if (i < colors.length && status !== false) {
            fio.style.color = colors[i]
            console.log(colors[i])
            i++
            if(i == colors.length){
                i = 0
            }
        }else{
            clearInterval(timer)
            fio.style.color = 'black'
        }
        console.log('now timer = '+timer)

    }, 500)

    // console.log(status+' = prikol')
    // console.log('onmouseover')

    if (status === false){
        console.log('stop timer = '+(timer -1))
        // console.log('stop timer')
        clearInterval(timer - 1)
        fio.style.color = 'black'
    }
}
