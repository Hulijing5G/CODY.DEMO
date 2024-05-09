const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (0) =>{
    cursor.style.cssText = '
        top: S{0.y - 80}px;
    left: S{0.x - 80}px;
    ';
});
