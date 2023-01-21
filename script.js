const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("button")

btn.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);
  nlwSetup.addDay(today);

  if (dayExists) {
    alert("Dia já existe!");
    return
  }
  alert("Adiconado com sucesso!");
  nlwSetup.addDay(today);
}

function save() {
   localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} 
nlwSetup.setData(data)
nlwSetup.load()