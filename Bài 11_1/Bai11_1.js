function CheckAll() {
    var checkboxes = document.querySelectorAll('.box');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
}

function unCheckAll() {
    var checkboxes = document.querySelectorAll('.box');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

document.getElementById('checkAllButton').addEventListener('click', CheckAll);
document.getElementById('unCheckAllButton').addEventListener('click', unCheckAll);