/*! ShowMoreChilren
 *  
 * */
(function () {
  var showMoreNChildren = function ($children, n) {
    //find hidden children and show them
    var $hiddenChildren = $children.filter(":hidden");
    var cnt = $hiddenChildren.length;
    for (var i = 0; i < n && i < cnt ; i++) {
      $hiddenChildren.eq(i).show();
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
          $children.eq(i).hide();
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
/* End of showmore */