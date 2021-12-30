const table= document.getElementById('calc');
const map={
    1: 'one' ,
    2: 'two' ,
    3: 'three',
    4: 'four' ,
    5: 'five', 
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    'DEL': 'delete',
    '+': 'plus',
    '-': 'minus',
    '.': 'point',
    '/': 'slash',
    'X': 'x',
    'RESET': 'reset',
    '=': 'equal'
};

function init (){
    let html=``;
    [
        [7,8,9,'DEL'],
        [4,5,6,'+'],
        [1,2,3,'-'],
        ['.',0,'/','X'],
        ['RESET','=']
    ].forEach(row => {
        let rowHTML='<tr>';
        row.forEach(key => (rowHTML+= `<td><button id=${map[key]} value="${key}"> ${key} </button></td>`))
        rowHTML+= '</tr>';
        html+=rowHTML;
    });
    table.innerHTML=html;
}

init();
