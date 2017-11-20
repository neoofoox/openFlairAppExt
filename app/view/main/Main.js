Ext.define('openFlair.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'openFlair.view.main.MainController', 'openFlair.view.news.News', 
        'openFlair.view.kuenstler.Kuenstler', 'openFlair.view.faq.Faq', 
    ],
    tabPosition: 'left',
    items: [{
        title: 'News',
        xtype: 'news'
    }, {
        title: 'Artists',
        xtype: 'kuenstler'
    }, {
        title: 'Programm'
    }, {
        title: 'FAQ',
        xtype: 'faq'
    }],
    listeners: {
        beforetabchange: function(tabs, newTab, oldTab) {
            console.log(newTab);
            console.log('tabchange');
        },
        tabchange: function(tabs, newTab, oldTab) {
            console.log(newTab);
            console.log('tabchange');
        },
        render: function(tab){
            console.log('render');
        }
    }
});