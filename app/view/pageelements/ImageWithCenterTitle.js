Ext.define('openFlair.view.pageelements.ImageWithCenterTitle', {
    extend: 'Ext.Container',
    xtype: 'imageWithCenterTitle',
    layout: 'vbox',
    
    items: [{
        xtype: 'image',
        // src: this.imageUrlPraefix + this.image,
        src: '{image}',
        width: 200,
        height: 200
    }, {
        xtype: 'label',
        html: '{title}'
    }]
});