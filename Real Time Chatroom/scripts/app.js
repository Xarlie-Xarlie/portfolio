const chatList = document.querySelector('.chat-list');
const newChatFrom = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const chatRooms = document.querySelector('.chat-rooms');

//add a new chat
newChatFrom.addEventListener('submit',e => {
    e.preventDefault();
    const message = newChatFrom.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    if(newName){
        //update name via chatroom
        chatroom.updateName(newName);
    }//reset form
    newNameForm.reset();
    const updatemsg = newNameForm.querySelector('.update-mssg');
    updatemsg.textContent = "Username has been updated!";
    setTimeout(() => updatemsg.textContent = "", 3000);
});

//update chat rooms
chatRooms.addEventListener('click', e=>{
    if (e.target.tagName === 'BUTTON')
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
})


//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

chatroom.getChats(data => chatUI.render(data));