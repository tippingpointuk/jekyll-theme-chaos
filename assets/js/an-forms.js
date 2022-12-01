document.addEventListener('DOMContentLoaded', function(event){
  const forms = document.getElementsByClassName('Action-Network-Form');
  const formArray = Array.from(forms);

  formArray.map(form => form.addEventListener('submit', actionNetworkFormSubmit));
});

function actionNetworkFormSubmit(event){
  event.preventDefault()
  const formInstance = event.target;
  const formParent = formInstance.parentNode;
  const sucessBox = formParent.getElementsByClassName("Action-Network-Form-Sucess")[0];
  const errorBox = formParent.getElementsByClassName("Action-Network-Form-Fail")[0];
  const formData = new FormData(formInstance); 

  let tags = formInstance.getAttribute('action-network-tags').split(',');
  let removeTags = formInstance.getAttribute('action-network-remove-tags').split(',');

  let customFields = {};
  for (k of formData.keys()){
    if (!k.search(/custom\[\w+\]/g)){
      customFields[k.split('[')[1].split(']')[0]] = formData.get(k);
    }
  }

  console.log(customFields)
  
  const xhr = new XMLHttpRequest();
	// listen for `load` event
	xhr.onload = () => {
      // print JSON response
      if (xhr.status >= 200 && xhr.status < 300) {
          // parse JSON
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          // Clear form
         formInstance.reset()
          // success message
         sucessBox.classList.add('Show');
         errorBox.classList.add('Hide');
        
      }else{
        sucessBox.classList.add('Hide');
        errorBox.classList.add('Show');
      }
  };

	// create a JSON object

  const json = {
    "person" : {
      "family_name": formData.get("family_name"),
      "given_name": formData.get("given_name"),
      "postal_addresses" : [ 
        { 
          "address_lines": [
            formData.get("address")
          ],
          "locality": formData.get("locality"),
          "postal_code" : formData.get("postal_code"),
          "country": formData.get("country")
        }
      ],
      "email_addresses" : [{"address" : formData.get("email_address")}],
      "phone_numbers" : [{"number" : formData.get("phone_number")}],
      "custom_fields": customFields
    }, 
    "triggers": {"autoresponse": {"enabled": true}},
    "add_tags": tags,
    "remove_tags": removeTags
  }

  // open request
  xhr.open('POST', event.target.getAttribute('action'));

  // set `Content-Type` header
  xhr.setRequestHeader('Content-Type', 'application/json');

  // send request with JSON payload
  xhr.send(JSON.stringify(json));
}