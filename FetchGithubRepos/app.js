// Vars
const gitUserName = document.querySelector(".get-repo input");
const getBtn = document.getElementById("get-btn");
const showData = document.querySelector(".show-data");

const createElem = (repo) => {
	const div = document.createElement("div");
	div.textContent = repo.name;
	return div;
};

const createLink = (parent, href) => {
	const link = document.createElement("a");
	link.textContent = "Visit";
	link.href = href;
	link.setAttribute("target", "_blank");
	parent.append(link);
	return link;
};

const fetchRepo = (url) => {
	const fetchedRepo = fetch(url).then((response) => response.json());
	return fetchedRepo;
};

const getUserRepo = () => {
	if (gitUserName.value === "") {
		showData.innerHTML = `<span>Please Fill the username value</span>`;
	} else {
		fetchRepo(`https://api.github.com/users/${gitUserName.value}/repos`).then(
			(response) => {
				console.log(response);
				showData.innerHTML = "";
				response.forEach((repo) => {
					const parentDiv = createElem(repo);
					createLink(parentDiv, repo.html_url);
					showData.append(parentDiv);
				});
			}
		);
	}
};

getBtn.addEventListener("click", getUserRepo);
