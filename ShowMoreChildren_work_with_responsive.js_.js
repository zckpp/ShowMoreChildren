/*! ShowMoreChildren
 *  Use position+visibility instead of hide()
 *  to work with responsive.js
 * */
(function () {
  var showMoreNChildren = function ($children, n) {
    //find hidden children and show them
    var $hiddenChildren = $children.filter(function () {
      return $(this).css("visibility") === "hidden";
    });
    var cnt = $hiddenChildren.length;
    for (var i = 0; i < n && i < cnt ; i++) {
      $hiddenChildren.eq(i).css("position","relative");
      $hiddenChildren.eq(i).css("visibility","visible");
    }
    return cnt - n;//return the rest of hidden children element
  }

  jQuery.showMore = function (selector) {
    if (selector == undefined) { selector = ".showMoreNChildren" }
    //find the element with class="showMoreNChildren"
    $(selector).each(function () {
      var pagesize = $(this).attr("pagesize") || 10;
      var $children = $(this).children();
      if ($children.length > pagesize) {
        for (var i = pagesize; i < $children.length; i++) {
          $children.eq(i).css("position","absolute");
          $children.eq(i).css("visibility","hidden");
        }
        $(".linkLoadMore").click(function () {
          if (showMoreNChildren($children, pagesize) <= 0) {
            //hide the button if there is nomore hidden child
            $(this).hide();
          };
        });
      }
    });
  }
})();
$.showMore(".showMoreNChildren");
/* End of ShowMoreChildren */