(function () {
    var Searcher = {};

    Searcher.construct = function () {
        Searcher.findSearchBar();
    };

    Searcher.findSearchBar = function () {
        $("input[data-em-search='true']").each(function () {
            Searcher.searchToLife($(this));
        });
    };

    Searcher.searchToLife = function (inputSearch) {
        if (
            !inputSearch.data('em-search-parent-searchable-selector') ||
                !inputSearch.data('em-search-searchable-selector') ||
                !$(inputSearch.data('em-search-parent-searchable-selector')).length ||
                !$(inputSearch.data('em-search-searchable-selector')).length
            ) {
            console.log('Error on of the mandatory selector is not provided!');
            return;
        }


        inputSearch.keyup(function(){Searcher.search(inputSearch)});
    };

    Searcher.search = function(inputSearch){
        var entries = $(inputSearch.data('em-search-parent-searchable-selector'));

        entries.each(function () {
            var entry = $(this);
            var requestText = inputSearch.val().toLowerCase();
            var searchable = $(this).find($(inputSearch.data('em-search-searchable-selector')));
            var text = searchable.text().toLowerCase();

            if (text.indexOf(requestText) > -1) {
                entry.show();
            } else {
                entry.hide();
            }
        });
    };

    Searcher.construct();
})();