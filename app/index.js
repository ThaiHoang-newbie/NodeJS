// Cách tải thư viện yargs: npm i yargs
// import yargs, { require } from "yargs"; // import thư viện yargs bản e6

const yargs = require("yargs"); //Import thư viện yargs bản es5 (common js)
                                //Cách chạy: npm run dev




// "CRUD"

//Create: node index.js create --title="Đây là title được truyền vào" --description="Đây là description được truyền vào"
yargs.command( {
    command: "create", //Key quan trọng
    builder: { //Key dùng để truyền tham số vào
        title: {
            type: "string",
        },
        description: {
            type: "string",
        },
    },
    handler: (args) =>{ //Key quan trọng  //args là tham số được truyền vào
        const {title, description} = args;
        console.log("Title: ", title);
        console.log("Description: ", description);
    },
});

//Delete
yargs.command({
    command: "delete",
    builder:{
        id:{
            type: "string",
        },
    },
    handler: () => {
        console.log("delete")
    },
})

//Read-all
yargs.command({
    command: "read-all",
    handler: (args) => {
        const {id} = args;
        console.log("Id: ", id)
    },
})

//Read-detail: node index.js read-detail --id="123"
yargs.command({
    command: "read-detail",
    builder:{
        id:{
            type: "string",
        },
    },
    handler: (args) => {
        const {id} = args;
        console.log("Id: ", id)
        console.log("read-detail")
    },
})

//Update: node index.js update --title="Title of update" --description="Description of update" --id="Id of update"
yargs.command({
    command: "update",
    builder: { //Key dùng để truyền tham số vào
        title: {
            type: "string",
        },
        description: {
            type: "string",
        },
        id: {
            type: "string",
        },
    },
    handler: (args) => {
        const {id, title, description} = args;
        console.log("Id: ", id)
        console.log("Title: ", title)
        console.log("Description: ", description)
    },
})



// Lưu lại lệnh đã tạo
yargs.parse()





// const fs =  require('fs');
// fs.writeFileSync('create_text.txt', 'Tạo file text bằng cách khai báo biến 1 phương thức rồi gọi phương thức đó  .writeFileSync (tên file, nội dung)');

// var abc = require('abc');
// abc.writeFileSync('test1.txt','Test from NodeJs');