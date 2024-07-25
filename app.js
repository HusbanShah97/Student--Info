let rollNum = 1000
rollNum++

let serialNum = 0

serialNum++


function summit() {
    
   let input1 = document.getElementById('info-Name1') 
   let input2 = document.getElementById('info-Name2')
   let input3 = document.getElementById('info-Age')
    let input4 = document.getElementById('info-Email')

    let div1 = document.getElementById('div-1')

    div1.innerHTML += `
    
    
    <table class = "table-js">  
    <tr>
    
   <td>${serialNum++}</td>
   <td>${rollNum++}</td>
   <td>${input1.value}</td>
    <td>${input2.value}</td>
    <td>${input3.value}</td>
    <td>${input4.value}</td>
    </tr> 
    </table>`
    

    
}



/* <p>Name: ${input1}</p>
<p>Age: ${input3} years old</p>
<p>Email: ${input4}</p>
</tr> */
