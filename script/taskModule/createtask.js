import pointPageCreate from '../pointModule/pointPageCreate.js'

var taskName,
    taskMark,
    taskBeginTime,
    taskEndTime;

var createTask = () => {
    
    $("#creatTaskBtn").click(() => {
        $(".main-welcome").hide();
        $(".main-task-create").addClass("main-task-create-show")
    });

    $(".main-task").click(function(e){
        if(e.target.className === "main-task"){
            $(".main-task-create").removeClass("main-task-create-show")
        }
    })

    $("#taskName").blur((e) => {
        taskName = e.target.value;
    })
    $("#taskMark").blur((e) => {
        console.log(e.target.innerHTML)
        taskMark = e.target.innerHTML
    })
    $("#task_begin_time").blur((e) => {
        console.log(e.target.value)

        taskBeginTime = e.target.value;
    })
    $("#task_end_time").blur((e) => {
        console.log(e.target.value)
        taskEndTime = e.target.value;
    });

    $(".main-task-create-btn").click(()=>{
        // axios.post();
    });

    pointPageCreate();
}

export default createTask;