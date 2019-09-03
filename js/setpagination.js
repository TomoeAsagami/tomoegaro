$(function() {
    $(".items").pagination({
        itemElement             : '> .item',
        displayItemCount        : 5,
        firstEndPageBtnMode     : true,
        pageNumberLinkPrefix    : "#Page:",
        paginationClassName     : "pagination",
        paginationInnerClassName: "foo",
        pageNumberClassName     : "a",
    });
});