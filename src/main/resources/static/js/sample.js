window.addEventListener("beforeunload", function(event) {
    return event.returnValue = "before unload";
});
function submit_add_action(event, element, to) {
    var form = element.form;
    form.action = to;
    form.submit();
    return false;
}
function submit_google(event, element) {
    return submit_add_action(event, element, "http://google.com");
}
function submit_delete(event, element) {
    return submit_add_action(event, element, "/customers/delete");
}