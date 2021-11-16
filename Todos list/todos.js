const addTodo = document.querySelector(".add");
const searchTodo = document.querySelector(".search");
const todos = document.querySelector(".todos");

searchTodo.addEventListener('keyup', e=> {
    Array.from(todos.children)
        .filter(todo =>  !todo.textContent.toLowerCase().includes(searchTodo.search.value.toLowerCase()))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todos.children)
        .filter(todo =>  todo.textContent.toLowerCase().includes(searchTodo.search.value.toLowerCase()))
        .forEach(todo => todo.classList.remove('filtered'));
});


addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value;
    if (todo.trim().length)
        todos.innerHTML += `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
                        <span>${todo}</span>
                        <i class="fas fa-check delete"></i>`;
    addTodo.add.value = "";
});

todos.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete'))
        e.target.parentElement.remove();
});

