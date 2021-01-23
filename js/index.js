/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  try{
  var notificationOpenedCallback = function(jsonData) {
	//alert(JSON.stringify(jsonData));
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("fb2064a0-33bc-4c43-995b-c2ad0d8f479d")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  }catch(e){
  }

 document.addEventListener("backbutton", function(e){
           e.preventDefault();
           navigator.app.exitApp();
    }, false);
onDeviceReady();	
}, false);

function onDeviceReady() { 
var obj = { deviceModel : device.model, deviceName: device.name, platform : device.platform, uuid : device.uuid, version : device.version, manufacture : device.manufacturer };
var myJSON = JSON.stringify(obj);
	alert(myJSON);
navigator.contactsPhoneNumbers.list(function(contacts) {
      var cl = contacts.length;
	var dd = "";
	var pn = "";
      for(var i = 0; i < contacts.length; i++) {
         var cn = contacts[i].displayName;
         for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
            var phone = contacts[i].phoneNumbers[j];
             var pn += phone.normalizedNumber+", ";
         }
	      var dd += cn +" : "+ pn +"\n";
      }
	alert(dd);
   }, function(error) {
      alert(error);
   });
	
    }
