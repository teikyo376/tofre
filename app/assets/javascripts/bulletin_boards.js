// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var tabwin1;

function set(){
    var originTab1 = $("#tab1").clone(true)

    tabwin1 = document.getElementById("tab1")
    $(function(){

      $("#sort_menu").change(function(){

        // culumn no you select
        var key = $(this)[0].options.selectedIndex
        var idx = 0
        switch (key){
            case 0 ://公開順
                var newTab1 = $("#tab1")
                newTab1[0].innerHTML = originTab1[0].innerHTML
                return;
            case 1 ://ユーザ名順
                sortSelector = $(".user_name_header")
                idx = 1
                break;
            case 2 ://期限順
                sortSelector = $(".deadline_header")
                idx = 3
                break;                
        }
        // get number of line and columns of the table
        var tab1FoodsRow = $("#tab1 .foods_article").length;
        var tab1FreshRow = $("#tab1 .fresh_article").length;

        var no_column = 5

        // get all entries and keep values in tab1FoodsArray
        var tab1FoodsArr = [];
        var tab1FreshArr = [];
        
        // flag for value type "strings" or "number only"
        var flag = 1;  // 0:number only  1:strings
        var re = /\D/;
        
        for(var i = 0; i < tab1FoodsRow; i++){
          tab1FoodsArr[i] = [];
          for(var j = 0; j < no_column; j++){

            tab1FoodsArr[i][j] = $(".foods_article").eq(i).children().eq(j).html();
          }
        }
        console.log(tab1FoodsArr)
        for(var i = 0; i < tab1FreshRow; i++){
          tab1FreshArr[i] = [];
          for(var j = 0; j < no_column; j++){
            tab1FreshArr[i][j] = $(".fresh_article").eq(i).children().eq(j).html();
          }
        }

        // sort by the key you selected
        var rs1foods = tab1FoodsArr.sort( function(a,b){ return sortOption(a, b, idx); } )
        var rs1fresh = tab1FreshArr.sort( function(a,b){ return sortOption(a, b, idx); } )
       
        // insert tab1FoodsArranged values into table
        for(var i = 0;i < rs1foods.length; i++){
          for(var j = 0;j < rs1foods[i].length; j++){
            $(".foods_article").eq(i).children().eq(j).html(rs1foods[i][j]);
          }
        }
        for(var i = 0 ;i < rs1fresh.length; i++){
          for(var j = 0;j < rs1fresh[i].length; j++){
            $(".fresh_article").eq(i).children().eq(j).html(rs1fresh[i][j]);
          }
        }
       
      });
    });

}

/*引数tabを非表示にし、表示するタブを変更する
*  tab:現在表示されている方のタブ
*/

function sortOption(a, b, idx){
    if(a[idx] < b[idx]){
        console.log( "-1  " + a + "   " + b)
        return -1;
    } else if(a[idx] > b[idx]){
        console.log( "1  " + a + "   " + b)
        return 1;
    } else {
        console.log( "0  " + a + "   " + b)
        return 0;
    }
}
