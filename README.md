# Gerador de Calendário Mensal 🗓️

## 📝 Descrição
<p>Sexto projeto do meu plano de estudos de JavaScript. Esta é uma aplicação que gera e exibe dinamicamente um calendário mensal completo com base no mês e ano selecionados pelo usuário. Este projeto é um desafio clássico de front-end, focado em lógica de datas avançada e manipulação intensiva do DOM para criar interfaces dinâmicas.</p>

## 🚀 Funcionalidades
-   Permite ao usuário selecionar um mês e um ano específicos.
-   Gera dinamicamente uma grade de calendário precisa para o período selecionado.
-   Posiciona corretamente o primeiro dia do mês na coluna correspondente da semana.
-   Exibe o número correto de dias, lidando com meses de 28, 29, 30 ou 31 dias (incluindo anos bissextos).
-   Destaca visualmente o dia atual se o calendário exibido for do mês e ano correntes.

## 💻 Tecnologias Utilizadas
-   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
-   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
-   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🖼️ Screenshot
![Screenshot da Aplicação](https://github.com/AbismoDev/Gerador-de-Calend-rio-Mensal/blob/main/assets/img/screenshot.png?raw=true)

## 🔗 Links
-   **Deploy:** https://gerador-de-calend-rio-mensal.vercel.app/
-   **Repositório:** https://github.com/AbismoDev/Gerador-de-Calend-rio-Mensal

## 🧠 Aprendizados
<p>Este projeto foi um mergulho profundo na lógica de datas e na manipulação do DOM. Os principais desafios foram resolver os dois quebra-cabeças centrais: 1) descobrir em qual dia da semana um mês começa e 2) descobrir o número exato de dias de um mês, utilizando os truques do objeto <code>Date</code> para obter respostas precisas.</p>
<p>A parte mais instrutiva foi a construção do algoritmo para renderizar a grade do calendário dinamicamente. Isso exigiu o uso de laços aninhados e uma estratégia para adicionar as "células vazias" no início do mês para o alinhamento correto. Também foi um ótimo exercício de performance, onde optei por construir toda a estrutura HTML do calendário em memória antes de injetá-la no DOM de uma só vez, evitando múltiplas manipulações.</p>