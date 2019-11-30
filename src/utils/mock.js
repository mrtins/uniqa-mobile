export const questionList = [
  {
    id: 1,
    usuario: {
      nome: 'Vitor Martins',
      titulo: 'Iniciante'
    },
    title: 'Como comparar duas listas diferentes em Java?',
    description: 'Tenho duas listas que compartilham de um valor em comum entre elas. Eu queria que que esses objetos selecionados fossem filtrados para que ele seja adicionado em um outra lista',
    votes: 10,
    answers: 2,
    tags: [
      {
        id: 1,
        tag: 'java'
      },
      {
        id: 2,
        tag: 'arraylist'
      }
    ],
    date: '17 Out',
  },
  {
    id: 2,
    title: 'Como ordenar uma lista?',
    description: 'Crie uma classe Aluno que possui os atributos: matricula, nome, id e curso. Nessa mesma classe crie um construtor que receba valores como parâmetro para cada atributo da classe. • Crie uma classe CadastroAluno que possui uma lista como atributo. • Adicione métodos para adicionar novos Alunos, outro para ordenar a lista através da matricula dos alunos e outro para imprimir os elementos presentes na lista. • Crie o método main para executar a classe, nele vocês devem digitar os dados de 10 Alunos, ordenar e imprimir a lista (usando os métodos criados). Estou com duvida nessa parte de ordenar a lista através da matricula dos alunos, como faço isso? o resto do código eu consegui menos essa parte',
    votes: -12,
    answers: 0,
    tags: [
      {
        id: 1,
        tag: 'java'
      }
    ],
    date: '2 dias atrás',
  },
];

export const answerList = [
  {
    id: 2,
    resposta: "TEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteeeTEsteee",
    dataPublicacao: "2019-11-30",
    likes: null,
    dislikes: null,
    idUsuario: 1,
    idPergunta: 1,
    usuario: {
      id: 1,
      nomeUsuario: "teste",
      nome: "Teste",
      sobrenome: "Teste",
      senha: "123",
      dataNascimento: "2019-05-15",
      experiencia: 0,
      idCurso: 1,
      idNivel: 1,
      idPerfil: 1
    },
  },
]