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
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Frage',
        dataIndex: 'question', 
        flex: 1
    }, {
        text: 'Antwort',
        dataIndex: 'answer',
        flex: 1
    }]
});