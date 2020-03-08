const getTaskList = (taskname, taskid) => {
    var taskitem = $(`
        <div class="sidebar-task-item">${taskname}==${taskid}</div>
    `);
    $(".sidebar-task").append(taskitem);
}

export default getTaskList;