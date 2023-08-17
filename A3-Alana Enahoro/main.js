var client = contentful.createClient({
    space: 'z185uaf2ygi2',
    accessToken: 'RsxeIFeWNyo7uZg7PTYJa_3p2ER70FbuiqDV8cmN28w',
});

client.getEntries({ content_type: 'spotify' }).then(function (entries) {
    // log the title for all the entries that have it


    entries.items.forEach(function (entry) {
        console.log(entry.fields.title);
        var item = document.createElement("div");
        var title = document.createElement("h4")
        title.innerHTML = entry.fields.title;

        if(entry.fields.gallery){
            console.log(entry.fields.gallery.fields.file.url)
            var coverImage = document.createElement("img")
            coverImage.src = entry.fields.gallery.fields.file.url;
            coverImage.classList.add('cover-image')
            item.append(coverImage);
        }
        item.append(title);
        document.getElementById("alana").append(item);
        item.classList.add('card');
        title.classList.add('dailymixtitles');


    })
})
