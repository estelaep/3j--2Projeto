import { getCSS } from "./comum.js";
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
            type: 'bar',
            marker: {
                color: getCSS('--cor-primaria')
            }
        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        tittle:{
            Text: 'Redes sociais com mais usuários no mundo',
            x:0,
            font:{
                color: getCSS ('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickfont,
            tittle:{
                text: 'Nome das redes sociais',
                font:{
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis:{
            tickfont:tickfont,
            tittle:{
                text:'Milhões de usuarios',
                font:{
                    color:  getCSS('--cor-secundaria')
                }
            }
        }
    }
        
    const grafico = document.createElement('div');
    grafico.className = 'grafico';       
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,infos)
    }

quantidadeDeUsuarios()