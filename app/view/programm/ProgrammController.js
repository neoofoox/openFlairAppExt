Ext.define('openFlair.view.programm.ProgrammController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.programm',

    onBeforeshow: function(container){
        var store = Ext.create('openFlair.store.kuenstler');
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