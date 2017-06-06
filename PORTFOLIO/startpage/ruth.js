var ruth;
(function (ruth) {
    window.addEventListener("load", init);
    function init() {
        let rays = document.getElementById("rays");
        document.getElementById("button").addEventListener("click", openMenu);
        document.getElementById("button").addEventListener("mouseenter", raysVisible);
        document.getElementById("button").addEventListener("mouseout", raysHidden);
        function openMenu() {
            let nav = document.getElementsByTagName("nav")[0];
            nav.style.visibility = "visible";
        }
        function raysVisible() {
            rays.style.visibility = "visible";
        }
        function raysHidden() {
            rays.style.visibility = "hidden";
        }
    }
})(ruth || (ruth = {}));
//# sourceMappingURL=ruth.js.map