const calcTable= document.querySelector('.calcTable');
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

var calcIO,oldIO, result=0;
const operators=['+','-','/','X'];
const params=[];

function init (){
    let html=``;
    calcKeys.forEach(row => {
        let rowHTML='<div class="row">';
        row.forEach(key => (rowHTML+= `<button id='${map[key]}' class='btn ${map[key]}' value='${key}'> ${key} </button>`))
        rowHTML+= '</div>';
        html+=rowHTML;
    });
    calcTable.innerHTML=html;
    addClickListeners();
}

function addClickListeners(){
    calcIO=document.querySelector('.calcIO');
    oldCalcIO=document.querySelector('.oldCalcIO')
    calcIO.innerHTML='';
    var keys=[...document.querySelectorAll('.btn')];
    keys.forEach(key =>{
        switch(key.id){
            case 'reset':
                key.addEventListener('click',resetCalc);
                break;
            case 'delete': 
                key.addEventListener('click',deleteCalc);
                break;
            case 'equal':
                key.addEventListener('click',resultCalc);
                break;
            default:
                key.addEventListener('click',showInput);
        }   
    })
}

function showInput(e){
    let char=e.target.outerText;
    calcIO.innerHTML+=char;
    if(operators.includes(char) && params[1]==undefined){
        params[0]= parseFloat(calcIO.innerHTML);
        params[1]=char;
        oldCalcIO.innerHTML=calcIO.innerHTML;
        calcIO.innerHTML='';
    }
}

function resetCalc(){
    calcIO.innerHTML='';
    oldCalcIO.innerHTML='';
    params.length=0;
}

function deleteCalc(){
    var val=calcIO.innerHTML;
    calcIO.innerHTML=(val).substring(0,val.length-1);
}

function resultCalc(){
    if(params[0]==undefined || params[1]==undefined) return;
    params[2]= parseFloat(calcIO.innerHTML);
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
    params[0]=result;
    params[1]=undefined;
    oldCalcIO.innerHTML='';
    calcIO.innerHTML=result;
}

init();

