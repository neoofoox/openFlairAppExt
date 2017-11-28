Ext.define('openFlair.store.Faq', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',
    model: 'openFlair.model.Faq',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://www.open-flair.de/api/faqs',
        reader: {
            type: 'json',
            rootProperty: 'faqs'
        }
    },
    listeners: {
        load: function(store, records, successfull, operation, eOpts){
            console.log('faq');
            console.log(records);
        }
    }
});