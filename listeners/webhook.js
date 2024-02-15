/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookGoogleDocs = {
    label: 'Catch HTTP googledocs events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/googledocs',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Google Docs webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('googledocs:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
