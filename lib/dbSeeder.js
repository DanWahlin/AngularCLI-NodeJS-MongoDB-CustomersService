// Module dependencies
const   mongoose = require('mongoose'),
        Customer = require('../models/customer'),
        State = require('../models/state'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    
    init() {
        mongoose.connection.db.listCollections({name: 'customers'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }
    
    seed() {

        console.log('Seeding data....');

        //Customers
        var customerNames =
        [
            "Marcus,HighTower,Male,acmecorp.com",
          
            "John,Papa,Male,gmail.com"
        ];
        var addresses =
        [
            "1234 Anywhere St.",
        
            "899 Mickey Way"
        ];

        var citiesStates =
        [
            "Phoenix,AZ,Arizona",
         
            "Orlando,FL,Florida"
        ];

        var citiesIds = [5,17];


        var zip = 85229;

        var orders =
        [
        { "product": "Basket", "price": 29.99, "quantity": 1 },
     
        { "product": "Bat", "price": 19.99, "quantity": 1 }
        ];

        Customer.remove({});

        var l = customerNames.length,
            i,
            j,
            firstOrder,
            lastOrder,
            tempOrder,
            n = orders.length;

        for (i = 0; i < l; i++) {
            var nameGenderHost = customerNames[i].split(',');
            var cityState = citiesStates[i].split(',');
            var state = { 'id': citiesIds[i], 'abbreviation': cityState[1], 'name': cityState[2] };
            var customer = new Customer({
                'firstName': nameGenderHost[0],
                'lastName': nameGenderHost[1],
                'email': nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3],
                'address': addresses[i],
                'city': cityState[0],
                'state': state,
                'stateId': citiesIds[i],
                'zip': zip + i,
                'gender': nameGenderHost[2],
                'orderCount': 0
            });
            firstOrder = Math.floor(Math.random() * orders.length);
            lastOrder = Math.floor(Math.random() * orders.length);
            if (firstOrder > lastOrder) {
                tempOrder = firstOrder;
                firstOrder = lastOrder;
                lastOrder = tempOrder;
            }

            customer.orders = [];
            //console.log('firstOrder: ' + firstOrder + ", lastOrder: " + lastOrder);
            for (j = firstOrder; j <= lastOrder && j < n; j++) {
                var today = new Date();
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + (Math.random() * 100));

                var o = {
                    "product": orders[j].product,
                    "price": orders[j].price,
                    "quantity": orders[j].quantity,
                    "date": tomorrow
                };
                customer.orders.push(o);
            }
            customer.orderCount = customer.orders.length;

            customer.save((err, cust) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted customer: ' + cust.firstName + ' ' + cust.lastName);
                }
            });
        }

        //States
        var states = [
        { "name": "Alabama", "abbreviation": "AL" },
   
        { "name": "Wyoming", "abbreviation": "WY" }
        ];

        var l = states.length,
            i;

        State.remove({});

        for (i = 0; i < l; i++) {
            var state = new State ({ 'id': i + 1, 'name': states[i].name, 'abbreviation': states[i].abbreviation });
            state.save();
        }
    }
}

module.exports = new DBSeeder();




