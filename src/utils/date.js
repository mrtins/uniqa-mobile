const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
const dias = ["domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export const formatarData = (str) => {
  str = parseDate(str);
  let partes = str.split('/').map(Number);
  let data = new Date('20' + partes[2], partes[1] - 1, partes[0]);
  let mes = meses[data.getMonth()];
  return [data.getDate(), mes.slice(0, 3).toLowerCase()].join(' ');
}

export const parseDate = (input) => {
  let datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];

  return day + '/' + month + '/' + year;
}