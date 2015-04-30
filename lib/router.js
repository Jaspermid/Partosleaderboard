/**
 * Created by Jasper on 04/11/14.
 */

Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function()
{
    this.route('leaderboard', {path: '/'});
    this.route('admin', {path: '/admin'});
    this.route('published', {path: '/published'});

    this.route('publishedPage', { path: '/published/:_id',
        data: function() {

                return Published.findOne(this.params._id)


            }
    }),

    this.route('implementingPage', {path: '/implementing/:_id',

    data: function(){
        return Implementing.findOne(this.params._id);
    }
    })

    ;
});