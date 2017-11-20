Ext.define('openFlair.view.news.News', {
    extend: 'Ext.grid.Grid',
    xtype: 'news',

    requires: [
        'Ext.grid.Grid',
        'openFlair.store.News'
    ],
    title: 'News',
    store: Ext.create('openFlair.store.News'),
    columns: [{
        text: 'ID',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Erstellt am',
        dataIndex: 'created_at',
        flex: 1,
        renderer: function(value) {
            return Date.parse(value);
        }
    }, {
        text: 'Titel',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Aktualisiert am',
        dataIndex: 'updated_at',
        flex: 1, 
        renderer: function(value){
            return Date.parse(value);
        }
    }, {
        text: 'Veröffentlicht am',
        dataIndex: 'published_at',
        flex: 1,
        renderer: function(value) {
            return Date.parse(value);
        }
    }]
});