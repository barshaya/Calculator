const table= document.getElementById('calcTable');
const map={
    0: 'zero',
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
    'X': 'mul',
    'RESET': 'reset',
    '=': 'equal'
};

let calcKeys=[
    [7,8,9,'DEL'],
    [4,5,6,'+'],
    [1,2,3,'-'],
    ['.',0,'/','X'],
    ['RESET','=']
];

var ioScreen, result=0;
const operators=['+','-','/','X'];
const params=[];

function init (){
    let html=``;
    calcKeys.forEach(row => {
        let rowHTML='<tr>';
        row.forEach(key => (rowHTML+= `<td><button id=${map[key]} class='btn' value='${key}'> ${key} </button></td>`))
        rowHTML+= '</tr>';
        html+=rowHTML;
    });
    table.innerHTML=html;
    addClickListeners();
}

function addClickListeners(){
    ioScreen=document.getElementById('calcInput');
    ioScreen.value='';
    var keys=[...document.getElementsByClassName('btn')];
    keys.forEach(key =>{
        if(key.id!='reset' && key.id!='delete' && key.id!='equal'){
            key.addEventListener('click',showInput);
        }
    })
    document.getElementById('reset').addEventListener('click',resetCalc);
    document.getElementById('delete').addEventListener('click',deleteCalc);
    document.getElementById('equal').addEventListener('click',resultCalc);
}

function showInput(e){
    let char=e.target.outerText;
    ioScreen.value+=char;
    if(operators.includes(char)){
        params[0]= parseInt(ioScreen.value);
        params[1]=char;
        ioScreen.value='';
    }
}

function resetCalc(){
    ioScreen.value='';
}

function deleteCalc(){
    var val=ioScreen.value;
    ioScreen.value=  (val).substring(0,val.length-1);
}

function resultCalc(){
    params[2]= parseInt(ioScreen.value);
    switch(params[1]){
        case '+':
            result=params[0]+params[2];
            break;
        case '-':
            result=params[0]-params[2];
            break;
        case 'X':
            result=params[0]*params[2];
            break;
        case '/':
            result=params[0]/params[2];   
            break;        
    }
    params[1]+=result;
    ioScreen.value=result;
}

init();