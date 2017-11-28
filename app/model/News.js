Ext.define('openFlair.model.News', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'created_at',
        type: 'date',
        convert: function (value, record) {
            return record.data.blog_post.created_at;
        }
    }, {
        name: 'title',
        type: 'string',
        convert: function (value, record) {
            return record.data.blog_post.title;
        }
    }, {
        name: 'updated_at',
        type: 'date',
        convert: function (value, record) {
            return record.data.blog_post.updated_at;
        }
    }, {
        name: 'excerpt',
        type: 'string',
        convert: function (value, record) {
            return record.data.blog_post.excerpt;
        }
    }, {
        name: 'sub_title',
        type: 'string',
        convert: function (value, record) {
            return record.data.blog_post.sub_title;
        }
    }, {
        name: 'id',
        type: 'int',
        convert: function (value, record) {
            //FIXME: Id zeigt : "openFlair.model.News-1"
            return record.data.blog_post.id;
        },
    }, {
        name: 'published_at',
        type: 'date',
        convert: function (value, record) {
            return record.data.blog_post.published_at;
        }
    }, {
        name: 'body_text',
        type: 'string',
        convert: function (value, record) {
            return record.data.blog_post.body_text;
        }
    }],
});