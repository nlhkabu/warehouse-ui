$(document).ready(function() {

  // Toggle expanding and collapsing sections
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });

  $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();

  /* if in tab mode */
  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();

    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* if in accordion mode */
  $(".js-vertical-tab-accordion-heading").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).show();

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });

  // Launch filter popover on mobile
  $('body').on('click', '.add-filter', function(e){
    e.preventDefault();
    $('.overlay').show();
    $('.filter-packages').show();
  });

  $('body').on('click', '.close-panel', function(e){
    e.preventDefault();
    $('.overlay').hide();
    $('.filter-packages').hide();
  });

  // Position PyPI warning message
  function positionWarning(){
    var height = $('section.warning').outerHeight();
    $('body.test-pypi').css('paddingTop', height);
  }

  positionWarning();

  $(window).resize(function(){
    positionWarning();
  });



});
