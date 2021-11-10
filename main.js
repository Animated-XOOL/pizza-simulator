menu_list_array = ["chicken pizza","veg pizza","cheese pizza", "pinnaple pizza","pizza bread","pizza spicey","japaneese pizza"]
function getmenu (){
    var htmlsdata="";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array;i++ ){
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_name").innerhtml = htmldata;
}
function add_top (){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}