document.addEventListener("DOMContentLoaded", function () {
    const captureButton = document.getElementById("capture-button");

    captureButton.addEventListener("click", function () {
        // Capture the entire page using html2canvas
        html2canvas(document.body).then(function (canvas) {
            // Convert the canvas to a data URL
            const imageDataURL = canvas.toDataURL("image/png");

            // Create a temporary anchor element for downloading
            const downloadLink = document.createElement("a");
            downloadLink.href = imageDataURL;
            downloadLink.download = "page.png";

            // Trigger a click event on the anchor element to initiate the download
            downloadLink.click();
        });
    });
});
