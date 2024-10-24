import { getCss } from "./comum.js";
import { tickfont } from "./comum.js";
async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resultado = await fetch(url);
    const dados = await resultado.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);
    
    const infos =[
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type:'bar',
            marker:{
                color:getCss (--cor-primaria)
            }
        }
    ]
    const layout ={
        plot_bgcolor:getCss( '--cor-de-fundo'),
        paper_bgcolor:getCss('--cor-de-fundo'),
        title:{
            text:'Redes sociais com mais usuatioss no mundo',
            x:0, //Coloco o titulo mais a esquerda
            font:{
                color:getCss(' --cor-primaria'),
                family:getCss('--fonte'),
                size:30
            }
        }
    }
       const graficos = document.createElement('div') ;
       graficos.className = 'grafico';
       document.getElementById('graficos-container').appendChild(graficos)
        Plotly.newPlot(graficos,infos)
        
    }
    quantidadeDeUsuarios()