function hidegardensectionifpropertytypeisflat(executionContext) {
    var formContext = executionContext.getFormContext();

    var propertytype = formContext.getAttribute("ntt_propertytype").getText();

    var generaltab = formContext.ui.tabs.get("propertygeneraltab");
    var gardensection = generaltab.sections.get("propertygeneralgardeninfosection");

    if (propertytype == "Flat") {
        gardensection.setVisible(false);
    } else {
        gardensection.setVisible(true);
    }
}