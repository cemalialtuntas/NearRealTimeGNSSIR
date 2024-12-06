function selectDirectory(targetId) {
    const { dialog } = require('electron').remote;
    dialog.showOpenDialog({ properties: ['openDirectory'] }).then(result => {
        if (!result.canceled) {
            document.getElementById(targetId).value = result.filePaths[0];
        }
    }).catch(err => {
        console.log(err);
    });
}

function runAnalysis() {
    alert('Running analysis... (To be implemented)');
}

function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
