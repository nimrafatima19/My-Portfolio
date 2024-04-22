document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll('.child1_pp1');
    var delay = 0;

    paragraphs.forEach(function(para) {
        setTimeout(function() {
            para.style.opacity = "1";
        }, delay);
        delay += 2000; // Adjust the delay as needed
    });
});