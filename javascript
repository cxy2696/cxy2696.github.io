check:
<div id="lorenz-container"></div>
<script>
    const lorenzFrame = document.createElement("iframe");
    lorenzFrame.src = "https://cxy2696.github.io/LorenzAttractor/lorenz_attractor_plotly.html";
    lorenzFrame.width = "100%";
    lorenzFrame.height = "600px";
    lorenzFrame.style.border = "none";
    document.getElementById("lorenz-container").appendChild(lorenzFrame);
</script>
