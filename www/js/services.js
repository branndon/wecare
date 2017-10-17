angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var employees = [
            {"id": 1, "firstName": "Lar Vicentino", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "São Vicente - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Lar Nossa Senhora das Graças - Casa de Repouso", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Casa de Repouso Bem Estar", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "América Residencial", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Casa de Repouso Renascer", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Lar Santos", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Lar Evangélica de Amparo A Velhice", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Residencial para Idosos Lar Alcina", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Santos - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Lar Portugal", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Bertioga - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Lar Praia Grande", "lastName": "", "managerId": 0, "managerName": "", "reports": "Fulano de Tal", "title": "Praia Grande - SP", "department": "Corporate", "cellPhone": "(13) 98888-8888", "officePhone": "(13) 8888-8888", "email": "lar.vicentino@gmail.com", "city": "Av. Copacabana, 1065", "pic": "idoso-1.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = employees[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });