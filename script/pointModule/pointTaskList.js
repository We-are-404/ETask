function pointTaskList(taskname) {
    let item = $(`
        <div class="sidebar-point-item">${taskname}</div>
    `);
    $(".sidebar-point").append(item);
}

export default pointTaskList;