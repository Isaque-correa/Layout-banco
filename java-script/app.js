//const filtro = document.querySelector('.main__filtro1');
const grafico = document.getElementById('myChart');

let minhaTransation = []

function obterTransation() {
    fetch('java-script/transation.json')
        .then(function(response){
            return response.json()
        })
        .then(function (response) {
            
            minhaTransation = response;
        })
       
}

obterTransation();

function dataAtual(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2,'0');
    let mes = String(data.getMonth() + 1).padStart(2,'0');
    let ano = data.getFullYear();
    dataHoje = dia + '-' + mes + '-' + ano;
    return dataHoje;
    
}

dataAtual();

function toDate(datestr){
    datestr = String(datestr).replace(/\//g, '-');
    datestr = datestr.split('-')
    return datestr.reverse().join('-');
    
}


function ObtertransationPorperiodo(a, b){
    a = Date.parse(toDate(a));
    b = Date.parse(toDate(b));
    let resultado = minhaTransation.filter(function(item){
        item.data = toDate(item.data)
        let data = Date.parse(item.data);
        console.log(data<=a, data>=b)
        return  data >= b && data <= a;
       
    });
        //let dia = new Date();
        let semana = ['Dom','Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'];

    this.labels = function(){
        let diaSemana = [];
            resultado.filter(element => {
            let elementData = element.data;
            let novaData = new Date(elementData);
            let diaStr = semana[novaData.getDay()];
            diaSemana.push(diaStr);
        });

        
        return diaSemana;
    }
    this.data = function(){
       
        let valoresTotais = [];
            resultado.filter(element => {
            let elementValor = element.valor;
            valoresTotais.push(elementValor);
        });
        
        return valoresTotais;
    }
    //console.log(novalist)
    
}
   
const wk = document.getElementById('wk');
const mn = document.getElementById('mn');
const yr = document.getElementById('yr');

wk.addEventListener('click', function () {
    
    let transation = new ObtertransationPorperiodo(dataAtual(), '21/06/2021');
       
    for(var item of transation.labels()){
        myChart.data.labels.push(item);
    }
    myChart.data.datasets.forEach(element => {
        for(var item of transation.data()){
            element.data.push(item);
            
        }
        console.log('batata', element, transation.data());
        
    });

    myChart.update()

    //console.log(dataAtual());

});