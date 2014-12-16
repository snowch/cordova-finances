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
        $("#button").on('click', this.onSubmit);
    },

    onSubmit: function() {
        console.log('in onSubmit');
        alert('in onSubmit');
        var receivedElement = $( "#basic" ).val();
            
        var db = new PouchDB('dbname');
    
        db.put({
          _id: receivedElement,
          name: receivedElement,
          age: 67
        }); 
            
        PouchDB.replicate('https://whestarawasingemateddese:QmFCvmnVfay6J06B32ctF0LO@snowch.cloudant.com/pdb') 
            .on('change', function (info) { alert('change ' + info) })
            .on('complete', function (info) { alert('complete ' + info) })
            .on('uptodate', function (info) { alert('uptodate ' + info) })
            .on('error', function (err) { alert('error ' + err) }); 
   } 
};
