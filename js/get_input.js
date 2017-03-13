//获取div中的数据
function get_input_json(cont_div){
    var info = "{";
    $("#"+ cont_div +" :input[name]").each(function(i){
        if($(this).attr("type") == "text" || $(this).attr("type") == "password"){//如果为文本框时
            var new_val = $(this).val();
            new_val = new_val.replace(/'/g, "\\'");
            info += "'"+$(this).attr('name')+"':'"+new_val+"',";
            //info += "'"+$(this).attr('name')+"':'"+$(this).val()+"',";
        }else if($(this).attr("type") == "radio"){//如果为单选框时
            //if($(this).attr("checked") == "checked"){
            if(($(this)[0]).checked == true){
                info += "'"+$(this).attr('name')+"':'"+$(this).val()+"',";
            };
        }else if($(this).attr("type") == "checkbox"){
            /*if($(this).attr("checked") == "checked"){
             info += "'"+$(this).attr('name')+"':'"+$(this).val()+"',";
             };*/
        }else if($(this).attr("type") == "hidden"){
            info += "'"+$(this).attr('name')+"':'"+$(this).val()+"',";
        }
    });
    $("#"+ cont_div +" :checkbox").each(function(i){
        var cont = $(this).is(":checked");
        if(cont == true){
            info += "'"+$(this).attr('name')+"':'"+$(this).val()+"',";
        };
    });
    $("#"+ cont_div +" select").each(function(i){
        var multiple = $(this).attr("multiple");
        if(multiple != "multiple"){
            info += "'"+$(this).attr('name')+"':'"+$(this).find("option:selected").attr('value')+"',";
        }else{
            var will = $(this).attr('name');
            if(will != undefined){
                info += "'"+$(this).attr('name')+"':'";
                $(this).find("option").each(function(i){
                    info += $(this).val()+",";
                });
                info += "',";
            }
        }
    });
    $("#"+ cont_div +" textarea").each(function(i){
        var new_val = $(this).val();
        new_val = new_val.replace("'", "\\'");
        new_val = new_val.replace(/\n/g, "\\n");
        info += "'"+$(this).attr('name')+"':'"+new_val+"',";
    });
    info += "'':''";//去掉最后一个逗号，不然不能json
    info += "}";
    info = eval('('+ info +')');
    return info;
}
