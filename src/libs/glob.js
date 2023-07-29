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
        localStorage.setItem("free_settings", JSON.stringify(this.settings));
    },
    settings: {
        apiHost: '',
        apiKey: '',
        open: false,
    }
}
let freeChats = localStorage.getItem("free_chats");
if (freeChats) {
    chats.chats = JSON.parse(freeChats);
}
chats.selectChat = chats.chats[0] || undefined;

let settings = localStorage.getItem("free_settings");
if (settings) {
    const setting = JSON.parse(settings);
    chats.settings.apiHost = setting.apiHost ? setting.apiHost : '';
    chats.settings.apiKey = setting.apiKey ? setting.apiKey : '';
}
export default reactive(chats)