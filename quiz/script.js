const perguntas = [
  {
    pergunta: "What is the name of the wizard who lives in the tower near the mountains?",
    respostas: [
      "Gandalf",
      "Merlin",
      "Wizard Rasmodius"
    ],
    correta: 2
  },
  {
    pergunta: "Which of the following is not a type of fish that can be caught in Stardew Valley?",
    respostas: [
      "Sardine",
      "Salmon",
      "Starfish"
    ],
    correta: 2
  },
  {
    pergunta: "What is the name of the underground mine in Stardew Valley?",
    respostas: [
      "Skull Cavern",
      "Diamond Mine",
      "Emerald Cave"
    ],
    correta: 0
  },
  {
    pergunta: "Which festival takes place on the 27th of every Summer?",
    respostas: [
      "Egg Festival",
      "Luau",
      "Dance of the Moonlight Jellies"
    ],
    correta: 1
  },
  {
    pergunta: "What is the name of the scientist who studies the local environment?",
    respostas: [
      "Dr. Harvey",
      "Dr. Demetrius",
      "Dr. Maru"
    ],
    correta: 1
  },
  {
    pergunta: "Which of the following crops continues to produce after being harvested?",
    respostas: [
      "Tomato",
      "Blueberry",
      "Pumpkin"
    ],
    correta: 1
  },
  {
    pergunta: "What is the name of the bartender at the Stardrop Saloon?",
    respostas: [
      "Gus",
      "Sam",
      "Clint"
    ],
    correta: 0
  },
  {
    pergunta: "Which of the following minerals is the most valuable?",
    respostas: [
      "Quartz",
      "Emerald",
      "Prismatic Shard"
    ],
    correta: 2
  },
  {
    pergunta: "What is the name of the character who owns the carpentry shop?",
    respostas: [
      "Robin",
      "Penny",
      "Caroline"
    ],
    correta: 0
  },
  {
    pergunta: "What is the name of the mysterious old man who sells rare goods on Fridays and Sundays?",
    respostas: [
      "Willy",
      "Krobus",
      "Linus"
    ],
    correta: 1
  }
];

//document.addEventListener("DOMContentLoaded", function(event) {

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const buttonCheck = document.getElementById('submit')

buttonCheck.addEventListener('click', function(){
  const element = document.getElementById('acertos')
  element.classList.remove('hidden')

  buttonCheck.classList.add('hidden')
  
  console.log('alou')
})

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
//});

