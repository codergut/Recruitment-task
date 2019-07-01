// Informacje do osiągnięcia API
const url="https://api.openaq.org/v1/cities";
const queryParams="country";

// Wybór elementów strony
const inputField=document.querySelector("#input");
const submit=document.querySelector("#submit");
const responseField=document.querySelector("#responseField");

// Funkcja AJAX
const getInformations=() => {
	const countryCode={
		Poland: 'PL',
		Germany: 'DE',
		Spain: 'ES',
		France: 'FR',
	}[inputField.value]
	if (countryCode) {
		const endpoint=`${url}?country=${countryCode}&limit=10`;
		fetch(endpoint)
			.then(response => response.json())
			.then(response => {
				const {results}=response;
				renderResponse(results);
			})
			.catch(error => {
				console.log(error)
			})
	}
}

// Czyszczenie poprzednich wyników i wyświetlanie ich na stronie internetowej
const displayInformations=(event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	}
	getInformations();
};

submit.addEventListener("click", displayInformations);
