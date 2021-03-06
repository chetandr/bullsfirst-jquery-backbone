﻿/**
 * Copyright 2012 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * bullsfirst/views/AccountsTabView
 *
 * @author Naresh Bhatia
 */
define(['bullsfirst/domain/UserContext',
        'bullsfirst/views/AccountChartView',
        'bullsfirst/views/AccountTableView',
        'bullsfirst/views/AccountTotalsView'],
       function(UserContext, AccountChartView, AccountTableView, AccountTotalsView) {

    return Backbone.View.extend({

        el: '#accounts-tab',

        events: {
            'click #add-account-button': 'addAccount',
            'click #refresh-accounts-button': 'refreshAccounts'
        },

        initialize: function(options) {
            new AccountTableView({collection: UserContext.getBrokerageAccounts()});
            new AccountTotalsView({collection: UserContext.getBrokerageAccounts()});
            new AccountChartView({collection: UserContext.getBrokerageAccounts()});
        },

        addAccount: function() {
            alert('Add Account');
            return false;
        },

        refreshAccounts: function() {
            UserContext.updateAccounts();
            return false;
        }
    });
});