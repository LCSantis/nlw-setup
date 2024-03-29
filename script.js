//document.body.style.backgroundColor = 'white'
//document.querySelector("input").click()

const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso!!!")
    return
  }

  alert('Adicionado com sucesso!')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('Santis@db', JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-07"],
//   takePills: ["01-03"],
//   journal: ['01-04', '01-07']
// }

const data = JSON.parse(localStorage.getItem("Santis@db")) || {}
nlwSetup.setData(data)
nlwSetup.load()