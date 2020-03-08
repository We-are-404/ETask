import pointTaskList from '../pointModule/pointTaskList.js'

var pointStatus = 0;


function changeButton() {
    // 不优雅的处理方式
    $(".item-task").click(function(){
        $(".sidebar-box").removeClass("change-one");
        $(".sidebar-box").removeClass("change-two");
        $(".sidebar-box").addClass("change-zero");
        $(".main-task").show();
    })
    $(".item-point").click(function(){
        $(".sidebar-box").removeClass("change-zero");
        $(".sidebar-box").removeClass("change-two");
        $(".sidebar-box").addClass("change-one");
        $(".main-task").hide();
        if(!pointStatus) {                     // 防止多次请求重复渲染
            axios.get("http://127.0.0.1:5500/static/api/pointlist.json",{
                username:"Uni"
            })
            .then((res) => {
                console.log(res.data);
                let taskNums = res.data.data;
                for(let i = 0; i<taskNums.length; i++) {
                    pointTaskList(taskNums[i]["taskname"]);
                }
            });
            pointStatus = 1;
        }
    })
    $(".item-list").click(function(){
        $(".sidebar-box").removeClass("change-one");
        $(".sidebar-box").removeClass("change-zero");
        $(".sidebar-box").addClass("change-two");
    })
}

export default changeButton;