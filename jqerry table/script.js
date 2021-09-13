// let name = document.getElementById("name");
// let position = document.getElementById("position");
// let salary = document.getElementById("salary");

// function creat(){
//  let name = document.getElementById("name");
// let position = document.getElementById("position");
// let salary = document.getElementById("salary");
// let take  = document.getElementById("tbl");
// let cvb = "";
// for( let i = 0; i<1; i++ ){
//   cvb += `<tr>`;
//   for(let j = 0; j < 4 ; j++){
//       cvb += `<td> ${name} ${position} ${salary} </td>`;
//   }
//   cvb+= `</tr>`;

// }

// take.innerHTML = cvb;
// }


  
// $('#btn').click(function(){
//     $('#tbk tr').each(function(){
//        $(this).append(`<td></td>`);
//     });
//  });





 function creat() {
    let name = document.getElementById("name");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let table = document.getElementById("tbl");
    let row = table.insertRow(0);
    let ad = row.insertCell(0);
    let peshe = row.insertCell(1);
    let maash = row.insertCell(2);
    ad.innerHTML = name.value;
    peshe.innerHTML = position.value;
    maash.innerHTML = salary.value;
  }

  function clr (){
      document.getElementById("name").value = '';
      document.getElementById("position").value = '';
      document.getElementById("salary").value = '';
  }



