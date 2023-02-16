function loadRepos() {
let user = document.getElementById('username').value;
console.log("C");
let url =`https://api.github.com/users/${user}/repos`;
const httpRequest = new  XMLHttpRequest();
	let ul = document.getElementById("repos");	
ul.innerHTML = '';
httpRequest.addEventListener('readystatechange', function (){
	if (httpRequest.readyState === 4){
		let response = JSON.parse(httpRequest.responseText);
		
		response.forEach(repo => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			
			ul.appendChild(li);
			li.appendChild(a);
			
			a.textContent = repo.full_name;
		});
		
		
	}
});

httpRequest.open('GET',url);
httpRequest.send();

}