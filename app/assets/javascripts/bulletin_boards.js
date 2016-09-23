// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var tabwin1, tabwin2;

function set(){
 //   renderMenuBar();
    tabwin1 = document.getElementById("tab1");
    tabwin2 = document.getElementById("tab2");
    changeTab(tabwin2);
    document.getElementById('public')
        .addEventListener('click', function(){changeTab(tabwin2)});
    document.getElementById('private')
        .addEventListener('click', function(){changeTab(tabwin1)});
    document.getElementById('sort')
        .addEventListener('click', function(){});
}

/*function renderMenuBar(){
    var blltn = document.getElementById("blltn");
    blltn.innerHTML +=   "<ul id='blltnList'>" +
                            "<li><b>公開範囲</b></li>" + 
                            "<li><a href='#' id='public'  class='tab1'>公開</a></li>" +
                            "<li><a href='#' id='private' class='tab2'>一部公開</a></li>" +
                            "<li><b>ソート</b></li>" +
                            "<li><input type='button' value='ユーザ名順'></button></li>" +
                            "<li><input type='button' value='賞味期限順'></button></li>" +
                        "</ul>";
}*/

/*引数tabを非表示にし、表示するタブを変更する
*  tab:現在表示されている方のタブ
*/
function changeTab(tab) {
    tabwin1.style.display = 'block';
    tabwin2.style.display = 'block';
    tab.style.display = 'none';
}

function sort(){


}

