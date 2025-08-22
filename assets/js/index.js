document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputData = document.querySelector("#input--data");
        const valorInputData = inputData.value;

        if(inputData.value == "") {
            // Erro
            alert("Insira uma data para gerar o calendario!");
            return;
        }

        const dataEscolhida = new Date(valorInputData + "T00:00:00");
        const mesDataEscolhida = dataEscolhida.getMonth();
        const mesGerado = gerarMes(mesDataEscolhida);

        gerarCalendario(dataEscolhida, mesDataEscolhida, mesGerado);

        const diaClick = document.querySelectorAll(".dia");
        for(let i = 0; i < diaClick.length; i++){
            diaClick[i].addEventListener("click", (e) => {
                const id = e.target.id;
                alert(`Você clicou no dia ${id} de ${mesGerado} de ${dataEscolhida.getFullYear()}`)
            })
        }
                 
    });

    function gerarCalendario (dataEscolhida, mesDataEscolhida) {

        const caracterVazio = `&nbsp;`;
        dataEscolhida.setDate(1);      

        const semanasNoMes = gerarSemanas(dataEscolhida);   
        const dataAtual = new Date();
        let tableRow = [];
        let tableData =[];

        for(let r = 0; r < semanasNoMes.diaSemana; r++) {
            // Aqui vamos criar a tr
            for(let d = 0; d < 7; d++) {
                // Aqui vamos criar a td
                // Verificar que dia da semana é a data
                if(dataEscolhida.getDay() != d) {
                    tableData.push(`<td>${caracterVazio}</td>`);
                    continue;
                }
                
                if(dataEscolhida.getDate() <= semanasNoMes.diaMes && dataEscolhida.getMonth() === mesDataEscolhida) {              

                    if(dataEscolhida.getDate() === dataAtual.getDate() && mesDataEscolhida === dataAtual.getMonth()){
                        tableData.push(`<td class="dia dia--atual" id="${dataEscolhida.getDate()}" >${dataEscolhida.getDate()}</td>`);                        
                    }
                    else if(dataEscolhida.getDay() === 0 || dataEscolhida.getDay() === 6) {
                        tableData.push(`<td class="dia fim--de--semana" id="${dataEscolhida.getDate()}" >${dataEscolhida.getDate()}</td>`);
                    }
                    else {
                        tableData.push(`<td class="dia" id="${dataEscolhida.getDate()}" >${dataEscolhida.getDate()}</td>`);
                    }

                    dataEscolhida.setDate(dataEscolhida.getDate() + 1); 
                    continue;
                }

                tableData.push(`<td>${caracterVazio}</td>`);
            }
            tableRow.push(`<tr>${tableData}</tr>`);
            tableData = [];
        }
         
        const htmlCalendario = tableRow.join(" ").replaceAll(",", " ");

        exibeCalenadarioMes(htmlCalendario, dataEscolhida, mesDataEscolhida);        
    }

    function gerarSemanas (dataEscolhida) {
        const dataParaVerDias = new Date(dataEscolhida);

        dataParaVerDias.setDate(0);
        const diasMes = dataParaVerDias.getDate();
        dataParaVerDias.setMonth(dataEscolhida.getMonth());

        // Precisamos pegar agora o numero de semanas para aquele mês;        
        dataParaVerDias.setDate(1);
        const diaSemana = dataParaVerDias.getDay();
        let diaVazio = 0;
        switch(diaSemana) {
            case 1:
                diaVazio++;
                break;
            case 2:
                diaVazio += 2;
                break;
            case 3:
                diaVazio += 3;
                break;
            case 4:
                diaVazio += 4;
                break;
            case 5:
                diaVazio += 5;
                break;
            case 6:
                diaVazio += 6;
                break;
        }

        return {diaSemana: Math.ceil((diasMes + diaVazio) / 7), diaMes: diasMes};
    }

    function gerarMes(mes) {
        const mesGerado = [
            "Janeiro", "Fevereiro", "Março", 
            "Abril", "Maio", "Junho", 
            "Julho", "Agosto", "Setembro", 
            "Outubro", "Novembro", "Dezembro"
        ];

        return mesGerado[mes];
    }

    function exibeCalenadarioMes(calendario, data, mesData) {
        const res = document.querySelector("#res");
        const anoEscolhido = data.getFullYear(); 

        res.innerHTML = `
            <div class="container--calendario">
                <div class="container--texto">
                    <h2>${gerarMes(mesData)} de ${anoEscolhido}</h2>
                </div>
                <div class="calendario">
                    <table>
                        <thead>
                            <tr>
                                <th>Dom.</th>
                                <th>Seg.</th>
                                <th>Ter.</th>
                                <th>Qua.</th>
                                <th>Qui.</th>
                                <th>Sex.</th>
                                <th>Sáb.</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${calendario}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

});