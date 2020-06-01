async function genius(){
	let result = ((await fetch('https://api.thevirustracker.com/free-api?global=stats')).json())
	 a = await result,
	 inf = document.getElementById('infected'),
	heal = document.getElementById('healed'),
	death = document.getElementById('dead'),
	active = document.getElementById('act'),
	serious = document.getElementById('ser'),
	eff = document.getElementById('str')
	inf.innerHTML = a.results[0].total_cases + ` (новых заражений: ${a.results[0].total_new_cases_today})`
	heal.innerHTML = a.results[0].total_recovered
	death.innerHTML = a.results[0].total_deaths + ` (новых смертей: ${a.results[0].total_new_deaths_today})`
	active.innerHTML = a.results[0].total_active_cases
	serious.innerHTML = a.results[0].total_serious_cases
	eff.innerHTML = a.results[0].total_affected_countries
}
window.onload = genius