var PubSub = (function(){
    class PubSub {
        constructor () {
            this.topics = {}
            this.topicId = -1
        }

        subscribe (topic, func) {
            if (!this.topics[topic]) {
                this.topics[topic] = [] 
            }

            this.topics[topic].push({
                id: ++this.topicId,
                func: func
            })

            return this.topicId
        }

        publish (topic, args) {
            if (!this.topics[topic]) {
                return false
            }

            var subscribers = this.topics[topic],
                len = subscribers.length

            while (len--) {
                subscribers[len].func(topic, args);
            }
        }
    }

    return new PubSub()
})()
