//document.body.style.backgroundColor = 'white'
//document.querySelector("input").click()

const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-07"],
  takePills: ["01-03"],
  journal: ['01-04', '01-07']
}

nlwSetup.setData(data)

nlwSetup.load()