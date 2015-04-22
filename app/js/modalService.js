(function () {
    angular.module('katerbergApp').factory('modalService', function($modal) {
        return {
            open: $modal.open,
            spell: {
                url: 'partials/modals/spellbook-detail.html',
                controller: 'SpellModalCtrl'
            }
        };
    });
})();

