const addItemBtn = document.getElementById("add-btn");
const list = document.querySelector(".list");
const userInput = document.getElementById("user-input");

class AddItems {
	constructor(item) {
		this.item = item;
	}

	addItem() {
		if (this.item.value) {
			this.addItemUI();
		}
	}

	addItemUI() {
		const item = document.createElement("li");
		item.textContent = this.item.value;
		list.prepend(item);
		this.addDelBtn(item);
		const del = list.querySelector("#delete");
		this.delItem(del, item);
	}

	addDelBtn(parent) {
		let delBtn = document.createElement("span");
		delBtn.textContent = "Delete";
		delBtn.setAttribute("id", "delete");
		parent.append(delBtn);
	}

	delItem(btn, item) {
		btn.addEventListener("click", () => {
			item.remove();
		});
	}
}

addItemBtn.addEventListener("click", () => {
	const newItem = new AddItems(userInput);
	newItem.addItem();
});

userInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		const newItem = new AddItems(userInput);
		newItem.addItem();
	}
});

