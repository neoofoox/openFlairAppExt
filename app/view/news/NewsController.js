Ext.define('openFlair.view.news.NewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.news',

    onBeforeshow: function(container){
        var store = Ext.create('openFlair.store.News');
        var artistCards = [];
        store.load(function(records){
            for(var i = 0; i < records.length; i++){
                var currentRecord = records[i].data;
                container.add({
                    xtype: 'container',
                    width: '300',
                    margin: '5',
                    padding: '10 15',
                    style: 'background-color: #fbfbfb; border: 1px solid #f2f2f2',
                    items: [{
                        xtype: 'label',
                        style: 'font-size: 16px; font-weight: bold;',
                        html: currentRecord.title
                    }, {
                        xtype: 'label',
                        style: 'font-size: 12px; font-style: italic; padding-bottom: 5px;',
                        html: currentRecord.sub_title
                    }, {
                        xtype: 'label',
                        style: 'font-size: 14px;',
                        html: currentRecord.excerpt
                    }]
                });
            }
        });
    }
});