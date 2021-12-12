
// var bt = document.getElementById('button')
// bt.addEventListener('click', getData)
// function getData(e){
//     fetch('https://api.weatherapi.com/v1/current.json?key=9578884fd9d54252b15171042210912&q=Juba&aqi=no', {
//         method: 'GET'
//     }).then(response => {return response.json()}).then(json => {
//         return json.content
//     }).catch(err => {return 'api not valid'})
    
// }


// var btn = document.getElementById('trigger')
var city = document.getElementById('city-input') //input
var btn = document.getElementById('go') //go button
var cityValue = document.getElementById('city-value') //card city heading
var cityCond = document.getElementById('con')
var cityDegree = document.getElementById('degrees')

value = city.value
btn.addEventListener('click', getData)
var url =  `https://api.weatherapi.com/v1/current.json?key=9578884fd9d54252b15171042210912&q={value}&aqi=no`
function getData(e){
    fetch(url, {method: 'GET'}).then((response) => {return response.json()}).then(json => {
        current = json.current.condition
        condition = current.text
        cityValue.innerText = city.value
        degrees = json.current.feelslike_c
        cityCond.innerText = condition
        cityDegree.innerText = degrees
        // console.log(condition)
        // console.log(degrees)

    }).catch((err) => {
        return 'response failed'
    })
}


//then(json).then(json.attr).catch()
// button = document.getElementById('checkall')
// input = document.querySelectorAll('inp')


// function func(){
//     alert('hello world')
// }



// button.addEventListener('click', checkAll)

// function checkAll(e){
//     for(i=0; i < inp.length; i++){
//         if (!inp[i].checked){
//             inp[i].checked = true            
//         }
//         else{
//             inp[i].checked = false
//         }

//     }

// }
       
// //lessons to select all element with the specific id value use queryselectorAll if its for getting a single element then use getelemetbyid

// var btn = document.getElementById('bt')
// var textbox = document.getElementById('browse')

// //get whats in the textbox
// //insert in browser tab
// function search(e){
//     console.log(window.geolocation)
//     // window.location = textbox.value
//     // console.log(textbox.value)
// }

// btn.addEventListener('click', search)

