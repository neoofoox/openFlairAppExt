Ext.define('openFlair.view.kuenstler.KuenstlerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kuenstler',

    onBeforeshow: function(container){
        console.log('controllermethode');
        var store = Ext.create('openFlair.store.Kuenstler');
        var artistCards = [];
        store.load(function(records){
            for(var i = 0; i < records.length; i++){
                var currentRecord = records[i].data;
                container.add({
                    xtype: 'artistCard',
                    // title: currentRecord.name,
                    // description: currentRecord.description,
                    // image: 'http://www.open-flair.de' + currentRecord.image_attachment_urls_large
                });
            }
        });
    }
});