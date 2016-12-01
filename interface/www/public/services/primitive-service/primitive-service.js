primitiveService.$inject = [
    'utilityService',
    'selectionService'
]
app.factory('primitiveService', primitiveService);

var primitiveBase = function(parent, id, primitive, name, fuzzable, value) {
    return {
        "primitive": primitive,
        "properties": {
            "name": name,
            "value": value,
            "fuzzable": fuzzable,
        },
        "meta": {
            "properties": {
                "id": id,
                "parent": parent
            },
            "getParent": function() {
                return this.properties.parent;
            }
        }
    };
};

function primitiveService(utilityService, selectionService) {
    var observers = [];
    this.data = [];

    var notifyObservers = function() {
        angular.forEach(observers, function(callback){
            callback();
        });
    }

    /* This function to merge binary primitives next to
       each other. This is because binary primitives form
       a pool of parseable data.
    */
    var mergeBinaryPrimitives = function() {
    }

    this.initRoot = function(value) {
        this.data.length = 0;
        var d = [];
        for (var i = 0; i < value.length; i++) {
            d.push(value[i]);
        }
        this.data.push(new primitiveBase(
            this.data,
            utilityService.uuid(),
            "binary",
            "data",
            0,
            d));
        notifyObservers();
    }

    this.registerObserver = function(callback) {
        observers.push(callback);
    }

    this.addPrimitive = function(parent, primitive) {
        // TODO:
        //   First we have to show properties form of the new
        //   primitive region to be set up. Once that form is
        //   saved we add the new primitive.
        //   So, the input should be taken from the properties
        //   service after all.
        /*
        this.parent.primitives.push(
            new primitiveBase(
                parent,
                utilityService.uuid(),
                primitive,
                name,
                0,
                value);
        );
        */
    }
    return this;
}
