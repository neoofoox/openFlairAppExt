Ext.define('openFlair.view.kuenstler.Kuenstler', {
    extend: 'Ext.grid.Grid',
    xtype: 'kuenstler',

    requires: [
        'Ext.grid.Grid',
    ],
    title: 'Künstler',
    store: {
        type: 'kuenstler'
    },
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'Rating',
        dataIndex: 'rating'
    }, {
        text: 'Category',
        dataIndex: 'category'
    }, {
        text: 'FestivalId',
        dataIndex: 'festival_id'
    }]
});