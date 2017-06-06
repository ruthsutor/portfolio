namespace ruth {
    window.addEventListener("load", init);
    function init(): void {
        let rays: HTMLElement = document.getElementById("rays");
        document.getElementById("button").addEventListener("click", openMenu);
        document.getElementById("button").addEventListener("mouseenter", raysVisible);
        document.getElementById("button").addEventListener("mouseout", raysHidden);
        function openMenu(): void {
            let nav: HTMLElement = document.getElementsByTagName("nav")[0];
            nav.style.visibility = "visible";
        }
        function raysVisible(): void {
            rays.style.visibility = "visible";    
        }
        function raysHidden(): void {
            rays.style.visibility = "hidden";   
        }
    }
}
