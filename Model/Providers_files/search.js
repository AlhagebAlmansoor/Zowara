define(function(require, exports, module) {
    'use strict';
    var Redux = require('redux');
    var thunk = require('redux-thunk')['default'];
    var devToolsExtension = window.devToolsExtension;

    var compose = Redux.compose;
    var combineReducers = Redux.combineReducers;
    var applyMiddleware = Redux.applyMiddleware;
    var createStore = Redux.createStore;

    var itemsReducer = require('../reducers/items');
    var queryReducer = require('../reducers/query');
    var visibleReducer = require('../reducers/visible');
    var loadingReducer = require('../reducers/loading');
    var isMobileReducer = require('../reducers/isMobile');

    var createStoreWithMiddleware =
        devToolsExtension ?
            compose(applyMiddleware(thunk), devToolsExtension())(createStore) :
            compose(applyMiddleware(thunk))(createStore);

    module.exports = function() {
        return createStoreWithMiddleware(
            combineReducers({
                items: itemsReducer,
                query: queryReducer,
                visible: visibleReducer,
                loading: loadingReducer,
                isMobile: isMobileReducer
            })
        );
    }
});
