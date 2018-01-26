Ext.define('openFlair.view.pageelements.ImageWithCenterTitle', {
    extend: 'Ext.Container',
    xtype: 'imageWithCenterTitle',
    layout: 'vbox',

    constructor: function(config){
        var me = this;
        console.log(config);
        this.items = [{
        //     xtype: 'image',
        //     src: 'http://www.open-flair.de' + config.image,
        //     height: 200
        // }, {
            xtype: 'label',
            style: 'font-size: 16px; font-weight: bold; padding-bottom: 20px; color: #ffffff; margin: -30px 0 0 10px;',        
            html: config.title
        }];
    },
    // items: [{
    //     xtype: 'image',
    //     //src: 'http://www.open-flair.de/data/image_attachments/52/9d/8f/2019/large/ANTILOPEN_GANG_Robert_Eikelpoth.jpg',
    //    // src: 'http://www.open-flair.de/' + image,
    //     height: 200
    // }, {
    //     xtype: 'label',
    //     style: 'font-size: 16px; font-weight: bold; padding-bottom: 20px; color: #ffffff; margin: -30px 0 0 10px;',        
    //     //html: 'Antilopen Gang'
    //    // html: title
    //     // html: '{title}'
    // }]
});