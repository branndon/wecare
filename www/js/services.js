angular.module('starter.services', [])
    .factory('retornaInstituicoes', function($http){
        var url = 'http://apiwecare.azurewebsites.net/api/instituicao';

        return {
            getData: function(){
                return $http.get(url);
            }
        }
    })

.factory('EmployeeService', function($q,retornaInstituicoes) {

    var employees = [
        {
            "celular": 1,
            "cep": "11030251",
            "cidade": "São Vicente",
            "cnpj": "0000000-1",
            "descricao": "lorem ipsum dolor sit amen",
            "email": "lar.vicentino@email.com.br",
            "endereco": "Av. Conselheiro Nébias, 185",
            "estado": "",
            "facebook": "",
            "fotoLar": "",
            "id": "",
            "instagram": "",
            "necessidade": "",
            "nome": "Lar Vicentino",
            "razaoSocial": "Lar Vicentino",
            "responsavel": "João",
            "siteUrl": "",
            "telefone": "(13) 8888-8888",
            "celular": "(13) 98888-8888"
        },
        {
            "celular": 2,
            "cep": "11030251",
            "cidade": "Santos",
            "cnpj": "0000000-1",
            "descricao": "lorem ipsum dolor sit amen",
            "email": "lar.vicentino@email.com.br",
            "endereco": "Av. Conselheiro Nébias, 185",
            "estado": "",
            "facebook": "",
            "fotoLar": "",
            "id": "",
            "instagram": "",
            "necessidade": "",
            "nome": "Lar Santos",
            "razaoSocial": "Lar Santos",
            "responsavel": "João",
            "siteUrl": "",
            "telefone": "(13) 8888-8888",
            "celular": "(13) 98888-8888"
        }
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
