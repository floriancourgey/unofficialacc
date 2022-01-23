if(release_name){
    $(function(){
        var url = "https://api.github.com/repos/floriancourgey/unofficialacc/releases";
        $.getJSON(url, function(data){
            console.log(data);
            var totalDownloadCount = 0;
            $.each(data, function(index, item) {
                if(!_.startsWith(item.name, release_name)){
                    return;
                }
                var releaseAssets = item.assets;
                if(releaseAssets.length) {
                        $.each(releaseAssets, function(index, asset) {
                            totalDownloadCount += asset.download_count;
                        });
                    }
            });
            $("#download_count").text(totalDownloadCount);
        });
    });
}
