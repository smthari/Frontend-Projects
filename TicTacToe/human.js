let swapping=document.querySelector("#swap");

swapping.onclick = () => {
    const img1 = document.getElementById('cross');
    const img2 = document.getElementById('circle');

    const temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
}