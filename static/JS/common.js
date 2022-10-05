function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

docReady(function() {
    // DOM is loaded and ready for manipulation here
    resizeIFrameToFitContent(document.getElementsByClassName('kioskVid')[0]);
});

function resizeIFrameToFitContent( iFrame ){
    iFrame.width  = '98%';
    iFrame.height = '98%';
    // iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    // iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}
// resizeIFrameToFitContent(document.getElementById('columbusVid'));

