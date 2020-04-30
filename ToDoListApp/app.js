const addItemBtn = document.getElementById("add-btn");
const list = document.querySelector(".list");
const userInput = document.getElementById("user-input");
const tasks = document.getElementById("task");
const completed = document.getElementById("task-completed");
let task = 0;
let taskCompleted = 0;

class AddItems {
	constructor(item) {
		this.item = item;
	}

	addItem() {
		if (this.item.value) {
			this.addItemUI();
			this.updateTasks("+");
		}
	}

	addItemUI() {
		const item = document.createElement("li");
		const itemTitle = document.createElement("h3");
		itemTitle.setAttribute("id", "item-title");
		itemTitle.textContent = this.item.value;
		item.append(itemTitle);
		list.prepend(item);

		// delete item
		this.addDelBtn(item);
		const del = list.querySelector("#delete");
		this.delItem(del, item);

		// task completed
		item.addEventListener("click", () => {
			this.taskCompleted(item);
		});
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
			this.updateTasks("-");
		});
	}

	updateTasks(operator) {
		if (operator === "+") {
			task++;
		} else if (operator === "-") {
			task--;
		}
		tasks.textContent = task.toString();
	}

	taskCompleted(task) {
		task.classList.toggle("active");
		if (task.classList.contains("active")) {
			taskCompleted++;
		} else {
			taskCompleted--;
		}
		completed.textContent = taskCompleted;
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
