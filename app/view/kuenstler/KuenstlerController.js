Ext.define('openFlair.view.kuenstler.KuenstlerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kuenstler',

    onBeforeshow: function(container){
        var store = Ext.create('openFlair.store.Kuenstler');
        var artistCards = [];
        var artistList = container.down('[name=artistList]');
        store.load(function(records){
            for(var i = 0; i < records.length; i++){
                var currentRecord = records[i].data;
                var artistCard = Ext.create('openFlair.view.pageelements.ArtistCard', {
                    artist: currentRecord
                })
                container.items.add(
                //     {
                //     xtype: 'artistCard',
                //     artist: currentRecord
                // }
                    artistCard
                );
                //     {
                //     xtype: 'artistCard',
                //     artist: currentRecord
                //     // title: currentRecord.name,
                //     // description: currentRecord.description,
                //     // image: 'http://www.open-flair.de' + currentRecord.image_attachment_urls_large
                // });
            }
        });
    }
});