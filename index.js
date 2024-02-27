document.addEventListener("DOMContentLoaded", function () {
    const optionButtons = document.querySelectorAll(".option");
    const contentDivs = document.querySelectorAll(".content");
    const halfBorders = document.querySelectorAll(".half-a-border-on-top");

    optionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedOptionId = this.id;
            const contentId = "content" + selectedOptionId.slice(6);
            const contentDiv = document.getElementById(contentId);

            optionButtons.forEach(function (btn) {
                btn.classList.remove("selectedContent");
            });

            halfBorders.forEach(function (halfBorder) {
                halfBorder.style.display = "none";
            });

            this.classList.add("selectedContent");
            contentDivs.forEach(function (content) {
                content.style.display = "none";
            });

            contentDiv.style.display = "block";

            const halfBorderId = "half-a-border-on-top" + selectedOptionId.slice(6);
            document.getElementById(halfBorderId).style.display = "block";
        });
    });

    optionButtons[0].click();
});


function selectTab(event) {
    document.querySelectorAll('.topHeader a').forEach(function (link) {
        link.classList.remove('selected');
    });

    event.target.classList.add('selected');
}