export default function initFuncionamento() {

const funcionamento = document.querySelector('[data-semana]')
const diaSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

const agora = new Date()
const diaAgora = agora.getDay()
const horaAgora = agora.getHours()

const semanaAberto = diaSemana.indexOf(diaAgora) !== -1

const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1])
if(semanaAberto && horarioAberto) funcionamento.classList.add('aberto')

}