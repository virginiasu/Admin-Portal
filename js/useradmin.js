$(function () {
//    datatable
    var dataSetIdleUser = [
        ["User 1", "SOA123456@subaru.com", "Internal IT", "07/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 2", "SOA123556@subaru.com", "Internal IT", "01/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 3", "SOA124656@subaru.com", "Internal IT", "08/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 4", "SOA121456@subaru.com", "Internal IT", "07/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 5", "SOA1238556@subaru.com", "Internal IT", "01/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 6", "SOA189456@subaru.com", "Retailers", "07/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 7", "SOA125656@subaru.com", "Retailers", "07/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 8", "SOA136456@subaru.com", "Retailers", "07/14/15", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 9", "SOA123436@subaru.com", "Marketing", "01/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 10", "SOA123428@subaru.com", "Marketing", "11/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 11", "SOA654926@subaru.com", "Marketing", "07/14/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"],
        ["User 12", "SOA122056@subaru.com", "Marketing", "07/13/16", "<a class='item_link primary'>Edit<a><a class='item_link remove'>Delete<a>"]
    ];
    $('#idleUserList').DataTable({
        data: dataSetIdleUser,
        columns: [
            {title: "Name"},
            {title: "Email Address"},
            {title: "Team"},
            {title: "Last Login"},
            {title: "Action"}
        ],
        "oLanguage": {
            "sSearch": "Filter "
        },
        autoWidth: false
    });
});


