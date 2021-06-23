document.addEventListener("DOMContentLoaded", function() {
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
/* Milestone 1
Partendo dalla seguente struttura dati , 
mostriamo in pagina tutte le icone disponibili come da layout. */
/* Milestone 2
Coloriamo le icone per tipo */
/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone (modificato)  */


//si attiva qundo l'utente cambia la select , addEventListener change
//abbiamo bisogno di un array che cambia di volta in volta a seconda della selezione dell'utente 
//di default quest array e' uguale all'originale



//l'obbiettivo e' creare una funzione che filtra l'array originale 
//e a seconda della scelta ritorna un nuovo array
/**
 * filtra originalList a seconda della choise
 * @param {*} choise ["all", "user", "vegetable","animal" ]
 * @param {*} originalList 
 */
function filterIcons(choise, originalList){

	return  originalList.filter((icon)=>{
		//ritorniamo true solo se corrisponde al filtro
		if(choise === "all"){
			return true
		}
		
		if(choise === icon.type){
			return true
		}
		// se non e' riuscito ad attivare gli altri return allora ritornera' falso
		return false


	});
	
}

function listIconsToHTML(filter) {
	
	const iconsFiltered = filterIcons(filter, icons)

	const containerHTML = document.querySelector(".icons-content");

	
	containerHTML.innerHTML="";


	iconsFiltered.forEach((icon)=>{

		const { name,prefix,family,type }=icon;

		containerHTML.innerHTML+= `
		<div class="icon-card col-6 col-sm-4 col-xl-3">
			<div class="icon-card-inner">
				<div class="icon ${type}">
					<i class="${family} ${prefix}${name}"></i>
				</div>
				<span class="name">${name}</span>
			</div>
		</div>
		`
	});
		
}

listIconsToHTML("all");

const selectElement = document.querySelector(".type-select");

selectElement.addEventListener('change', (event)=>{
 // event è la descrizione dell'evento e contiene
// in event.target.value il valore della select selezionata.
    
    listIconsToHTML(event.target.value);  // ex. value="animal"

});
































})