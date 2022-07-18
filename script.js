var tableData = [

  ]
  buildTable()
function buildTable() {
    $("#table-body").empty();
    var table = $('#table-body')
    

    var myList = tableData
    
    for (i in myList) {
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${myList[i].Firstname}</td>
                  <td>${myList[i].lastname}</td>
                  <td>${myList[i].address}</td>
                  <td>${myList[i].pincode}</td>
                  <td>${myList[i].gender}</td>
                  <td>${myList[i].food}</td>
                  <td>${myList[i].state}</td>
                  <td>${myList[i].country}</td>
                  `
        
                  table.append(row)

    }
}
/// form
var form=document.getElementById('form')
var gender
var food
function check(){
    var rdb1= document.getElementById("male");
    var rdb2= document.getElementById("female");
    if(rdb1.checked==true)
    {
         gender =rdb1.value
    }
    else
    if(rdb2.checked==true)
    {
         gender =rdb2.value
    }
}
function checkfood(){
    var rdb1= document.getElementById("veg");
    var rdb2= document.getElementById("nonveg");
    if(rdb1.checked==true)
    {
         food =rdb1.value
    }
    else
    if(rdb2.checked==true)
    {
         food =rdb2.value
    }
}
addEventListener('submit',function(event){
event.preventDefault()// it prevent form from auto submit
check()
checkfood()
var lastname =document.getElementById('lastname').value
var firstname =document.getElementById('firstname').value


var address =document.getElementById('address').value
var country =document.getElementById('country').value
var State =document.getElementById('State').value
var pin =document.getElementById('pin').value

console.log(pin)
data={
    "Firstname":firstname,
    "lastname":lastname,
    "address":address,
    "pincode":pin,
    "gender":gender,
    "food":food,
    "state":State,
    "country":country


}

tableData.push(data)

buildTable()
    })
