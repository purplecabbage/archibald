

// Slack = require('node-slackr');


// slack = new Slack('https://hooks.slack.com/services/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',{
//   channel: "@purplecabbage",
//   username: "archibald"
// });


// slack.notify("Message", function(err, result){
//     console.log(err,result);
// });

var token = require('./secret-token');


var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: token
});

bot.startRTM(function(err,bot,payload) {
  console.log("err=" + err);
  console.log("bot=" + bot);
  console.log("payload=" + payload);

  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears("test",
                 ["direct_message","direct_mention","mention","ambient"],
                 function(bot,message) {
    // do something to respond to message
    // all of the fields available in a normal Slack message object are available
    // https://api.slack.com/events/message
    console.log("message = " + JSON.stringify(message,null,"\t"));
    //bot.reply(message,'You used a keyword!');
});