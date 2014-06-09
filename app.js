//We've added a third and final item to our tab panel - scroll down to see it
Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [

                {
                    scrollable: {
                        direction: 'vertical'
                    },
                    title: 'باش بەت',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<style>*{direction: rtl;}</style>',
                    '<img width="65%" src="http://staging.sencha.com/img/sencha.png" />',
                    '<h1>ئەسسەلامۇ ئەلەيكۇم</h1>',
                    "<p>بۇ ئەپ ئارقىلىق بىلوگىمىزدىكى مەزمۇنلاردىن خەۋەردار بولالايسىز ",
                    "كومپيۇتېردا توركۆرگۈچنى ئىچشىڭىزنىڭ ھاجىتى يوق</p>",
                    '<h2>خۇشال ئىشلىتىڭ</h2>'
                ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'شاھ بىلوگى',
                    iconCls: 'compose',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://shahblog.net/?feed=rss2',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },


                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },{
                    xtype: 'nestedlist',
                    title:'تورخۇمارلار',
                    iconCls: 'compose',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.torhumar.com/feed',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },


                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                }
                //this is the new item
                
            ]
        });
    }
});
