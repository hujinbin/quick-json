# quick-json
快速获取div下所有input的值的jq插件
 

``` bash
##快速获取所选id下的input的数据，返回 
<div id="demo">
   <input type="text" name="name">         
   <button class="btn btn-default" id="insertData">获取数据</button>                   
</div>

<script>
    $('#insertData').click(function(){
        var moduleData = get_input_json('demo');
        //方法get_input_json('id')
        console.log(moduleData);
        //打印出取到的数据，并以name:'val'的格式返回
    });
</script>

```

 具体 方法实现请下载demo查看
