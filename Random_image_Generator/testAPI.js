$(document).ready(function(){
    $('button').click(function(){
        const a = $('#nameid').val();
        alert(a);
        $('#imgchange').attr('src',`https://joesch.moe/api/v1/${a}`);
    });
});