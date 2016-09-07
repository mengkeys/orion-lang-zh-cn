/**
 * Created by mengkeys on 16-8-29.
 */


translateDataTablesSimpleChinese = function () {
    $.extend(true, $.fn.dataTable.defaults, {
        language: {
            "decimal":i18n("tableDef.decimal"),
            "emptyTable":i18n("tableDef.emptyTable"),
            "info": i18n("tableDef.info"),
            "infoEmpty": i18n("tableDef.infoEmpty"),
            "infoFiltered": i18n("tableDef.infoFiltered"),
            "infoPostFix": i18n("tableDef.infoPostFix"),
            "thousands": i18n("tableDef.thousands"),
            "lengthMenu": i18n("tableDef.lengthMenu"),
            "loadingRecords": i18n("tableDef.loadingRecords"),
            "processing": i18n("tableDef.processing"),
            "search": i18n("tableDef.search"),
            "zeroRecords": i18n("tableDef.zeroRecords"),
            "paginate":{
                "first": i18n("tableDef.paginate.first"),
                "last": i18n("tableDef.paginate.last"),
                "next":i18n("tableDef.paginate.next"),
                "previous":i18n("tableDef.paginate.previous")
            },
            "aria": {
                "sortAscending": i18n("tableDef.aria.sortAscending"),
                "sortDescending": i18n("tableDef.aria.sortDescending")
            }
        }
    });
};