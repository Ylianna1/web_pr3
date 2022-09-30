const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
let letter = prompt('Введите літеру', "а");
//const phone = '+71234567890';
let phone = prompt('Введите номер', 71234567890);

function getRow(firstRow, secondRow) {       
    if((firstRow.match(letter)||[]).length > (secondRow.match(letter)||[]).length ){
        return firstRow; 
    }
    if((firstRow.match(letter)||[]).length < (secondRow.match(letter)||[]).length ){
        return secondRow;
    }
    else {
        return console.log("Літер однакова кількість");
    }
}

function formattedPhone(phone) {
    if(phone.length < 10 || phone.length > 11 && phone[0-9]){
        return console.log('Невірний формат номеру');
    }
    else{
        return phone = '+7'+ ' (' +phone.charAt(1)+phone.charAt(2)+phone.charAt(3)+ ') ' +phone.charAt(4) +phone.charAt(5)+ phone.charAt(6) +'-'+phone.charAt(7) + phone.charAt(8) + '-' + phone.charAt(9) + phone.charAt(10);
    }
    //+7 (123) 456-78-90
    // for (let i = 0; i < phone.length; i++){
    //     phone.charAt(i);
    // }   
}

console.log(getRow(firstRow, secondRow));
console.log(formattedPhone(phone));