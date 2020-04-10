async function genius(){
	let result = ((await fetch('https://api.covid19api.com/summary')).json())
	 a = await result,
	 inf = document.getElementById('infected'),
	heal = document.getElementById('healed'),
	death = document.getElementById('dead')
	inf.innerHTML = a.Global.TotalConfirmed + ` (новых заражений: ${a.Global.NewConfirmed})`
	heal.innerHTML = a.Global.TotalRecovered + ` (новых спасений: ${a.Global.NewRecovered})`
	death.innerHTML = a.Global.TotalDeaths + ` (новых смертей: ${a.Global.NewDeaths})`
}
window.onload = genius