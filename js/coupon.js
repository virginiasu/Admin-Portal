$(function () {
//    datatable
    var dataSet = [
        ["Coupon 1", "SOA123456", "10% off", "STARLINK&trade;", "07/14/16 - 01/14/16", "Standard", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 2", "SOA123556", "15% off", "STARLINK&trade;", "07/14/16 - 01/14/16", "Standard", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 3", "SOA124656", "10% off", "STARLINK&trade;", "08/14/16 - 01/14/16", "Standard", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 4", "SOA121456", "10% off", "STARLINK&trade;", "07/14/16 - 01/14/16", "Standard", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 5", "SOA1238556", "20% off", "STARLINK&trade;", "07/14/16 - 01/14/16", "Standard", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 6", "SOA189456", "10% off", "Dealer Name", "07/14/16 - 01/14/18", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 7", "SOA125656", "20% off", "Dealer Name", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 8", "SOA136456", "10% off", "Dealer Name", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 9", "SOA123436", "25% off", "General", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 10", "SOA123428", "30% off", "General", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 11", "SOA654926", "10% off", "General", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"],
        ["Coupon 12", "SOA122056", "20% off", "General", "07/14/16 - 01/14/16", "Goodwill", "<a class='item_link primary'>Edit<a>"]
    ];
    $('#couponList').DataTable({
        data: dataSet,
        columns: [
            {title: "Name"},
            {title: "Promo Code"},
            {title: "Discount"},
            {title: "Applicability"},
            {title: "Active Date(Expiring?)"},
            {title: "Type"},
            {title: "Action"}
        ],
        "oLanguage": {
            "sSearch": "Filter "
        }
    });
    
//    add coupon
    $(".addCouponTrigger").click(function(e){
        e.preventDefault();
        $("#AddCouponModal").show();
    });
});


