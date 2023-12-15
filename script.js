let inputNum = document.querySelector('#fnum')
let seList = document.querySelector('#flist')
let divRes = document.querySelector('div#res')
let values = []

function newfNum(num){
    if (Number(num) >= 1 && Number(num) <= 100){
        return true
    }else {
        return false
    }

}
function infList(num, val){
    if(val.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }

}
function toadd() {
    if (newfNum(inputNum.value) && !infList(inputNum.value, values)) {
        values.push(Number(inputNum.value))
        let item = document.createElement('option')
        item.text = `value  ${inputNum.value} added`
        seList.appendChild(item)
        divRes.innerHTML = ''

    }else {
        window.alert('Invalid value or not found in the list!')
    }
    inputNum.value = ''
    inputNum.focus()
}
function finish() {
    if(values.length == 0){
        window.alert('add values before finalizing!')
    } else {
        let tot = values.length
        let bigger = values[0]
        let smaller = values[0]
        let average = 0
        let sum = 0
        for(let pos in values) {
            sum += values[pos]
            if (values[pos] > bigger) 
                bigger = values[pos]

            if (values[pos] < smaller) 
                smaller = values[pos]
               
            }
        average = sum / tot
        divRes.innerHTML = ''
        divRes.innerHTML += `<p>in total, we have ${tot} numbers registered.</p>`
        divRes.innerHTML +=  `<p> the highest value is ${bigger} bigger </p>`
        divRes.innerHTML += `<p> the lowest value is ${smaller} smaller </p>`
        divRes.innerHTML += `<p>adding all the values result is  ${sum}</p>`
        divRes.innerHTML += `<P>the sum of the average is ${average}`

    }
}