// Vars
const gitUserName = document.querySelector(".get-repo input");
const getBtn = document.getElementById("get-btn");
const showData = document.querySelector(".show-data");

// UI
class UI {
	createElem(repo) {
		const div = document.createElement("div");
		div.textContent = repo.name;
		return div;
	}

	createLink(parent, href) {
		const link = document.createElement("a");
		link.textContent = "Visit";
		link.href = href;
		link.setAttribute("target", "_blank");
		parent.append(link);
		return link;
	}
}

class GetRepo {
	static getRepo(url) {
		const fetchedRepo = fetch(url).then((response) => response.json());
		return fetchedRepo;
	}
}

class FetchRepo {
	getUserRepo() {
		if (gitUserName.value === "") {
			showData.innerHTML = `<span>Please Fill the username value</span>`;
		} else {
			GetRepo.getRepo(`https://api.github.com/users/${gitUserName.value}/repos`)
				.then((response) => {
					console.log(response);
					showData.innerHTML = "";
					return response;
				})
				.then((response) => {
					const ui = new UI();
					response.forEach((repo) => {
						const parentDiv = ui.createElem(repo);
						ui.createLink(parentDiv, repo.html_url);
						showData.append(parentDiv);
					});
				})
				.catch((error) => {
					throw error;
				});
		}
	}
}

class App {
	static init() {
		const fetchRepo = new FetchRepo();
		getBtn.addEventListener("click", fetchRepo.getUserRepo);
	}
}

App.init();
