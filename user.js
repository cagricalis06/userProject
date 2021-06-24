var userList = new Array();
var user;
var table = $('#userList tbody')
var hideUsers = false;


function saveUser(){
  
    user = {
    userName: $('#userName').val(),
    displayName: $('#displayName').val(),
    phone: $('#phone').val(),
    email: $('#email').val(),
    userRoles: $('#userRoles').val(),
    enabled: $('#enabled').is(':checked'),
  }
  console.log( $('#enabled').is(':checked'))
  
  userList.push(user);

 list(); 

}

function list(){
  table.html('');
  userList.forEach(function(elem, index){ 
    let tr = `<tr>
      <td>` + index + `</td> 
      <td>` + elem.userName + `</td> 
      <td>` + elem.email + `</td> 
      <td>` + elem.enabled + `</td> 
    </tr>`
      table.append(tr)
  })
}

function listusers(){
    
  table.html('');
  var filteredList;
    filteredList = userList.filter(function(elem){
      if(elem.enabled) return elem;
    })
    filteredList.forEach(function(elem, index){ 
    let tr = `<tr>
      <td>` + index + `</td> 
      <td>` + elem.userName + `</td> 
      <td>` + elem.email + `</td> 
      <td>` + elem.enabled + `</td> 
    </tr>`
      table.append(tr)
  })
}

function changeInput(elem){
  hideUsers = $(elem).is(':checked')
  if(!hideUsers) list()
  if(hideUsers) listusers()
}