---
---
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

var header = document.querySelector('.Chaos-Header');
var main = document.querySelector('main');
var navbarHeight = header.offsetHeight;

window.onscroll = function(event){
    didScroll = true;
};

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled()
{
    var scrollPos = -main.getBoundingClientRect().top;

    if (Math.abs(lastScrollTop - scrollPos) <= delta)
        return;

    if (scrollPos > lastScrollTop)
    {
        if (scrollPos > navbarHeight)
        {
            header.classList.add("nav-hide");
            header.classList.remove("nav-visible");
        }
    } else
    {
        header.classList.remove("nav-hide");
        header.classList.add("nav-visible");
    }

    lastScrollTop = scrollPos;
}
// Share button
function sharePage(e){
  console.log(e)
  console.log(e.currentTarget.attributes.share_title.value)
  navigator = window.navigator;
  navigator.share({
    title: e.currentTarget.attributes.share_title.value,
    text: e.currentTarget.attributes.share_text.value ,
    url: e.currentTarget.attributes.share_url.value
  })
}
$('.Web-Share-Button').on('click',sharePage)


// Open Accordion if targeted
function openAccordion(target_id){
  var target = $(target_id);
  var checkbox = target.find("input.Chaos-Accordion-Toggle")
  console.log(checkbox)
  checkbox.prop("checked",true);
}
// Linked externally
$( document ).ready(function(){
  openAccordion(window.location.hash);
  navigator = window.navigator;
  if (!navigator.canShare){
    // $('.Web-Share-Button').addClass('hide')
  }
});
// Linked internally
$("a").on("click", function(){
  console.log(this)
  openAccordion(this.hash);
});
