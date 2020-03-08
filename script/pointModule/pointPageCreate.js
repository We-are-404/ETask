var  pointPageCreate = (document) => {

    $(document).on('click', '.sidebar-point-item', function(){
        $(".main-welcome").hide();
        pointItemRes();
    })

    function pointItemRes(){
        axios.get('http://127.0.0.1:5500/static/api/pointPage.json')
        .then((res) => {
            let len = res.data.data.length;
            let a = 1;
            for(let i = len-1; i>=0; i--) {
                if(a % 2 == 0) {
                    // console.log(res.data.data[i])

                    let item = $(
                    `
                        <div class="point-right">${res.data.data[i]["content"]}</div>
                        
                    `
                    );
                    $(".main-point-box").append(item);
                    ++a;
                }else{
                    console.log(res.data.data[i])
                    let item = $(
                        `
                            <div class="point-left">${res.data.data[i]["content"]}</div>
                        `
                    );
                    $(".main-point-box").append(item);
                    ++a;
                }
            }
        })
    }

}

export default pointPageCreate;