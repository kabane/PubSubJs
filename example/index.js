PubSub.subscribe('index/newMessage', function (topic, data) {
    console.log(topic + ':' + data)
});

PubSub.publish("index/newMessage", "Hello world")
PubSub.publish("index/newMessage", "My name is Ken")