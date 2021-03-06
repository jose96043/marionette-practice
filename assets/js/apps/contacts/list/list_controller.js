ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
    List.Controller = {
        listContacts: function(){
            var contacts = ContactManager.request("contact:entities");
            var contactsListView = new List.Contacts({
               collection: contacts
            });

            contactsListView.on("itemview:contact:show", function(childView,model){
                console.log("contact:show", model.get("id"));
                ContactManager.trigger("contact:show", model.get("id"))
                // ContactManager.ContactsApp.Show.Controller.showContact(model);
            });

            contactsListView.on("itemview:contact:delete", function(childView, model){
                contacts.remove(model);
            });

            ContactManager.mainRegion.show(contactsListView);
        }
    };
});