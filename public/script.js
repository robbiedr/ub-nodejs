  
(function() {
    console.log(caps);
    $('.btn-edit').click(function(ev) {
        var dataName = ev.target.getAttribute('data-id');
        var cap = caps.find(function(c) { return c.id === dataName; });
        if(cap) {
        //- Hide current modal
        $('#' + cap.id).modal('hide');
        //- Show edit modal
        $('#editform-' + cap.id).modal('show');
        }
    });
//console.log(caps);
/*caps.forEach((cap) => {
    console.log(cap);
    $('#edit-' + cap.id).addEventListener('click', () => {
    $('#' + cap.id).modal('hide');
    //$('#editform-' + cap.id).modal('show');
    });
});*/
})