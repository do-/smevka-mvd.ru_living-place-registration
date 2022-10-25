const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_living_place_registration:

    function () {

		return path.join (__dirname, '..', 'Static/guvm-living-place-registration-1.1.0.xsd')
    
    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_living_place_registration:

    function () {
/*
    	throw new Error (`
			<faultcode>SOAP-ENV:Server</faultcode>
			<faultstring xml:lang=\"en\">Очередь, в которую должно быть отправлено сообщение, переполнена.</faultstring>
			<detail><ns3:DestinationOverflow xmlns:ns3=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/faults/1.1\" xmlns:ns2=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/basic/1.1\" xmlns:ns4=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/1.1\"><ns2:Code>fed0:PRODUCTION_AREA:FED0_CORE2 : TR:SYNC:PP:15</ns2:Code><ns2:Description>SMEV-600:Очередь, в которую должно быть отправлено сообщение, переполнена.</ns2:Description><ns3:MessageBrokerAddress>unknown</ns3:MessageBrokerAddress><ns3:DestinationName>delivery.it_315626_MNSV14_3S._REQUEST_</ns3:DestinationName></ns3:DestinationOverflow></detail>
    	`)
*/
		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_living_place_registration:

    function () {
    
    	let {rq: {data}} = this

/*
    	return {
    	
    		livingPlaceRegistrationResponse: {
    			notFoundRegistration: {},
    		},

    	}
*/

		return {
		  "livingPlaceRegistrationResponse": {
			"registrationInfo": {
			  "regionOktmo": "40300000",
			  "settlement": "г. Санкт-Петербург",
			  "street": "ул. Садовая",
			  "house": "д. 11",
			  "flat": "кв. 20",
			  "registrationDateFrom": "2008-09-29",
			  "unstructuredAddress": "г. Санкт-Петербург, ул. Садовая, д. 11, кв. 20"
			}
		  }
		}

    },
        
}