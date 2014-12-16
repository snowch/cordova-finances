/*
App-o-Mat jQuery Mobile Cordova starter template
https://github.com/app-o-mat/jqm-cordova-template-project
http://app-o-mat.com

MIT License
https://github.com/app-o-mat/jqm-cordova-template-project/LICENSE.md
*/

var appomat = {};

appomat.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log('in onDeviceReady');
        alert('in onDeviceReady');
		FastClick.attach(document.body);

        $("#basic-button").on('click', function() {
            console.log('in onSubmit');
            alert('in onSubmit');
            var receivedElement = $( "#basic" ).val();
                
            var db = new PouchDB('dbname');
        
            db.put({
              _id: receivedElement,
              name: receivedElement,
              age: 67
            }); 

            var api_key = 'TODO';
            var api_pass = 'TODO';
            var cl_acct = 'TODO';
            var cl_db = 'TODO'
                
            PouchDB.replicate(
                'dbname', 
                'https://' + api_key + ':' + api_pass + '@' + cl_acct + '.cloudant.com/' + cl_db) 
                .on('change', function (info) { alert('change ' + info) })
                .on('complete', function (info) { alert('complete ' + info) })
                .on('uptodate', function (info) { alert('uptodate ' + info) })
                .on('error', function (err) { alert('error ' + err) }); 
    });
   } 
};
