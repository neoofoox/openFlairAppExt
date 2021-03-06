Ext.define('openFlair.store.News', {
    extend: 'Ext.data.Store',
    alias: 'store.news',
    model: 'openFlair.model.News',
    proxy: {
        type: 'rest',
        url: 'http://www.open-flair.de/api/news',
        reader: {
            type: 'json',
            //TODO: prüfen und abändern, damit man im Store die converter nicht braucht. Für die anderen Stores auch.
            rootProperty: 'blog_post'
        }
    },
    listeners: {
        load: function(store, records, successfull, operation, eOpts){
            console.log('news');
            console.log(records);
        }
    }
});