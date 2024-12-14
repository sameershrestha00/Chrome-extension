function hideads(){
    const ads = document.querySelectorAll("shreddit-ad-post");
    ads.forEach((ad) =>{
        ad.style.display = "none";
    } );
}
const resizeObserver = new ResizeObserver(() => {
    hideads();
});
resizeObserver.observe(document.body);