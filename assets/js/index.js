document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const res = document.querySelector("#res");
        const inputData = document.querySelector("#input--data");
        const valorInputData = inputData.value;

        if(inputData.value == "") {
            // Erro
            alert("Insira uma data para gerar o calendario!");
            return;
        }

        const dataEscolhida = new Date(valorInputData + "T00:00:00");
        const mesDataEscolhida = dataEscolhida.getMonth();
        const anoEscolhido = dataEscolhida.getFullYear();

        const dataParaVerDias = new Date(dataEscolhida);
        dataParaVerDias.setMonth(dataEscolhida.getMonth() + 1);
        dataParaVerDias.setDate(0);
        const diasMes = dataParaVerDias.getDate();

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

        const semanasNoMes = Math.ceil((diasMes + diaVazio) / 7);
        let mesGerado;

        switch(mesDataEscolhida) {
            case 0:
                mesGerado = "Janeiro";
                break;
            case 1:
                mesGerado = "Fevereiro";
                break;
            case 2:
                mesGerado = "Março";
                break;
            case 3:
                mesGerado = "Abril";
                break;
            case 4:
                mesGerado = "Maio";
                break;
            case 5:
                mesGerado = "Junho";
                break;
            case 6:
                mesGerado = "Julho";
                break;
            case 7:
                mesGerado = "Agosto";
                break;
            case 8:
                mesGerado = "Setembro";
                break;
            case 9:
                mesGerado = "Outubro";
                break;
            case 10:
                mesGerado = "Novembro";
                break;
            case 11:
                mesGerado = "Dezembro";
                break;
        }

        const caracterVazio = `&nbsp;`;

        let htmlCalendario = [];

        dataEscolhida.setDate(1);      

        let tableRow = [];
        let tableData =[];

        for(let r = 0; r < semanasNoMes; r++) {
            // Aqui vamos criar a tr
            for(let d = 0; d < 7; d++) {
                // Aqui vamos criar a td
                // Verificar que dia da semana é a data
                if(dataEscolhida.getDay() != d) {
                    tableData.push(`<td>${caracterVazio}</td>`);
                    continue;
                }

                if(dataEscolhida.getDate() <= diasMes && dataEscolhida.getMonth() === mesDataEscolhida) {              

                    tableData.push(`<td>${dataEscolhida.getDate()}</td>`);
                    dataEscolhida.setDate(dataEscolhida.getDate() + 1); 
                    continue;
                }

                tableData.push(`<td>${caracterVazio}</td>`);
            }
            tableRow.push(`<tr>${tableData}</tr>`);
            tableData = [];
        }
         
        htmlCalendario = tableRow.join(" ").replaceAll(",", " ");

        res.innerHTML = `
            <div class="container--calendario">
                <div class="container--texto">
                    <h2>${mesGerado} de ${anoEscolhido}</h2>
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
                        ${htmlCalendario}
                        </tbody>
                    </table>
                </div>
            </div>          
        `;

    });

});