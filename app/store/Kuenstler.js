Ext.define('openFlair.store.Kuenstler', {
    extend: 'Ext.data.Store',
    alias: 'store.kuenstler',
    model: 'openFlair.model.Kuenstler',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://www.open-flair.de/api/acts',
        reader: {
            type: 'json',
            rootProperty: 'acts'
        }
    },
    listeners: {
        load: function(store, records, successfull, operation, eOpts){
            console.log('kuenstler');
            console.log(records);
        }
    }
});