Ext.define('openFlair.view.faq.Faq', {
    extend: 'Ext.grid.Grid',
    xtype: 'faq',

    requires: [
        'Ext.grid.Grid',
    ],
    title: 'Faq',
    store: {
        type: 'faq'
    },
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: 'Frage',
        dataIndex: 'question'
    }, {
        text: 'Antwort',
        dataIndex: 'answer'
    }]
});