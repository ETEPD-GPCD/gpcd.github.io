const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = 5500

const studentsData = [
  {
    name: 'Sabrina',
    age: '15',
    class: '1º C',
    bio: 'Meu contato com programação começa antes de eu sequer saber da existência da ETE Porto Digital, eu sempre fui bastante interessada por jogos, ao ponto de querer saber mais como ele eram feitos, o que me fez pesquisar sobre vários tipos de programações, através de um professor da minha antiga escola eu consegui me inscrever e entrar na ETE Porto Digital, para tentar aprender bastante sobre programação e design, durante os estudos o professor Cloves criou um grupo de ciência de dados, fiquei em dúvida sobre entra, pois estava mais para o lado de design e não sabia muito sobre programação, mas vi como uma ótima oportunidade para aprender mais sobre programação e aplicar os conceitos que estou aprendendo durante as aulas de design, pretendo aprender bastante sobre programação estando no grupo e tentar deixar nossos projetos o mais visivelmente bonitos e obter experiência para me tornar uma ótima profissional.'

  },
  {
    name: 'Elisa Lima',
    age: '15',
    class: '1º B',
    bio: 'Tudo começou em 2018 quando o Porto Digital virou uma ETE, apesar que eu não tinha nenhum conhecimento do Porto Digital a minha irmã viu o grande potencial da escola e meu irmão tinha alguns conhecimentos de software, mas eu nunca tinha pensado em fazer algo na área de sistemas. Enfim, chegou 2019, época de fazer a inscrição para a prova, escolhi o Porto Digital mesmo não tendo conhecimento sobre sistemas e seria até bom aprender sobre. Passei na prova, fiz a matrícula e tudo que era necessário. Um tempo depois o professor de programação falou sobre a criação de um grupo de dados, de primeira não entrei já que meu conhecimento era bem básico, mas depois mudei de ideia já que o grupo de dados seria para aprofundar o conhecimento. Com o grupo de dados espero conseguir aumentar meu conhecimento sobre o mundo de desenvolvimento de sistemas e usar esse conhecimento na minha vida profissional.'
  },
  {
    name: 'Flávio José',
    age: '14',
    class: '1º C',
    bio: 'Bom, em 2009, quando eu tinha uns três anos de idade, meu pai comprou um computador, mais pra usar pra trabalho e tal. Quando vi, fiquei fascinado por aquilo e como tudo funcionava, e eu com minha curiosidade de criança, pedi para meu pai me ensinar a mexer naquela máquina. Meu pai me ensinou a entrar no Google e jogar no Click Jogos, o resto eu descobri sozinho. E la pelos meados de 2017/2018, terminei, sem querer, descobrindo a programação enquanto pesquisava sobre profissões que lidava com tecnologia. Estudei um pouco de lógica, mas terminei parando no meio, até que chegou o período de inscrições do ETE e IFPE. Não me encaixava em nenhum curso, até ver o Tec. Desenvolvimento de Sistemas no ETEPD, e foi paixão logo de cara. Passei na prova, e dentro do PD abriu-se a oportunidade de entrar no Grupo de Pesquisa em Ciência de Dados, ao qual entrei para aprimorar minhas habilidades com a programação e me ajudar na carreira da tecnologia, que é uma área que eu realmente amo demais.'
  },
  {
    name: 'Gustavo Souza',
    age: '15',
    class: '1º A',
    bio: 'A história começa antes da criação do grupo, quando eu tinha apenas 11 anos, quando comecei a me interessar por programação, de como as tecnologias eram feitas, pois eu gostava muito de jogar jogos eletrônicos, ficar no computador e de tecnologia, mas nunca me aprofundei. Anos se passaram, e entrei no ETE PORTO DIGITAL, procurando desenvolver mais meu conhecimento sobre informática e sistemas. Enquanto estudava, Cloves, o professor de linguagem de programação dos alunos do 1° ano, cogitou por criar um grupo de ciência de dados, fiquei recioso de entrar, pois meu entendimento era muito raso, todavia fui aceito e estou me aperfeiçoando cada vez mais. Eu estando no grupo pretendo conhecer mais a programação, programar, ter experiência e poder levar para minha vida profissional.'
  },
  {
    name: 'Lucas Fernandes',
    age: '15',
    class: '1º A',
    bio: `minha historia com a tecnologia começou desde cedo com os primeiros consoles da nitendo, desde entao só me interessei cada vez mais até que me vi na oportumidade de levar essa paixão na prática com a ETE Porto Digital, desde que entrei no PD cada vez mais percebo que é isso que eu quero pra minha vida,ser programador.`
  }
]


nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app
.get('/', (req, res) => {
  res.send('index.html')
})
.listen(port)

