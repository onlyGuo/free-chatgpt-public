import {reactive} from "vue";

let chats = {
    chats: [
        {
            title: '未命名会话',
            messages: [
                // {
                //     content: '你好',
                //     role: 'assistant',
                // }
            ]
        }
    ],
    selectChat: undefined,
    restore(){
        localStorage.setItem("free_chats", JSON.stringify(this.chats));
    }
}
let freeChats = localStorage.getItem("free_chats");
if (freeChats) {
    chats.chats = JSON.parse(freeChats);
}
chats.selectChat = chats.chats[0] || undefined;
export default reactive(chats)