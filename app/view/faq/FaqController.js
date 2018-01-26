Ext.define('openFlair.view.faq.FaqController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.faq',
    
    onBeforeshow: function(container){
        var store = Ext.create('openFlair.store.Faq');
        store.load(function(records){
            for(var i = 0; i < records.length; i++){
                var currentRecord = records[i].data;
                container.add({
                    xtype: 'panel',
                    title: currentRecord.question,
                    collapsed: true,
                    collapsible: 'top', 
                    style: 'background-color: #fbfbfb; border: 1px solid #f2f2f2',
                    items: [{
                    //     xtype: 'label',
                    //     style: 'font-size: 16px; font-weight: bold; padding-bottom: 10px;',                        
                    //     html: currentRecord.question
                    // }, {
                        xtype: 'label',
                        html: currentRecord.answer
                    }]

                    // title: currentRecord.name,
                    // description: currentRecord.description,
                    // image: 'http://www.open-flair.de' + currentRecord.image_attachment_urls_large
                });
            }
        });
    }
});