document.querySelector('.links-list').querySelectorAll('figure').forEach(link => {
    link.addEventListener('click', () => {
        if (link.querySelector('ul').style.display == "block") {
            link.querySelector('ul').style.display = "none";
            link.querySelector('figcaption').querySelector('i').className = `fa-solid fa-caret-right`;
        } else {
            link.querySelector('ul').style.display = "block";
            link.querySelector('figcaption').querySelector('i').className = `fa-solid fa-caret-down`;
        }
    });
});

var supported = ['pptx', 'docx', 'xlsx', 'txt', 'zip']
var supported_word = ['-powerpoint', '-word', '-chart-column', '-lines', '-zipper']

async function contents(dir) {
    const folder = await fetch('https://api.github.com/repos/Finned-Ad-Services/Finned-Investors/contents/'+dir);
    
    var res = await folder.json();
        
    for (var i=0; i < res.length; i++) {
        var url = res[i].download_url;
        var filename = res[i].name;

        if (supported.includes(filename.split('.')[1])) {
            var num = supported.indexOf(filename.split(".")[1]);
            var filetype = supported_word[num];
        } else {
            var filetype = "-"
        }

        document.querySelector("#pane").innerHTML = "";
        
        document.querySelector("#pane").innerHTML += `
            <div class="file">
            <i class="fa-solid fa-file`+filetype+`"></i>
                <a href="`+url+`">`+filename+`</a>
            </div>
        `
    }
}