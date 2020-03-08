import createTask from './taskModule/createtask.js'
import getTaskList from './taskModule/getTaskList.js'
import changeButton from './taskModule/changeButton.js'
import pointPageCreate from './pointModule/pointPageCreate.js'


let pointAxios = 0, // 任务节点侧边栏是否请求渲染
    listAxios = 0; //  个人备忘录侧边栏是否请求渲染




var taskNums = 0,  // 获取任务个数
    username

// 功能页渲染时便发送请求，获取相关任务列表
window.onload = function(){
    axios.get("http://127.0.0.1:5500/static/api/tasklist.json",{
        "username": username
    })
    .then( (res) => {
        console.log(res.data);   
        setTimeout(() => {
            $("#sidebar_loading").hide();
            taskNums = res.data.data.length;
            for(let i = 0; i<taskNums; i++) {
                let taskname = res.data.data[i]["taskname"],
                    taskid = res.data.data[i]["taskid"];
                getTaskList(taskname,taskid);
            }
        },1000)
    } )
    .catch(()=>{
        //服务器报错提示
        console.log("服务器错误！")
    });
}


// 创建任务模块
createTask();


// 功能侧边栏渲染转化模块
changeButton();


// 单个任务的任务节点渲染
pointPageCreate(document);


