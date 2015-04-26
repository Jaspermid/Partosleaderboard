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

    this.route('orgPage', { path: '/organisation/:_id',
        data: function() {

            if (Session.get('Published')) {
                return Published.findOne(this.params._id)
            }
            else {
                return Implementing.findOne(this.params._id);
            }
            }
    });
});