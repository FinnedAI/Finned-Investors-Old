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
        
        document.querySelector("#pane").innerHTML += `
            <div class="file">
            <i class="fa-solid fa-file`+filetype+`"></i>
                <a href="`+url+`">`+filename+`</a>
            </div>
        `
    }
}