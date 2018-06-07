/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var FormOriginController = function(origin, $scope, $location, formUtils, locationUtils, tenantUtils, deliveryServiceService, profileService, tenantService, coordinateService, cacheGroupService, originService) {

    var getProfiles = function() {
        profileService.getProfiles({ orderby: 'name' })
            .then(function(result) {
                $scope.profiles = _.filter(result, function(profile) {
                    return profile.type == 'ORG_PROFILE';
                });
            });
    };

    var getTenants = function() {
        tenantService.getTenants()
            .then(function(result) {
                $scope.tenants = result;
                tenantUtils.addLevels($scope.tenants);
            });
    };

    var getCacheGroups = function() {
        cacheGroupService.getCacheGroups()
            .then(function(result) {
                $scope.cacheGroups = result;
            });
    };

    var getCoordinates = function() {
        coordinateService.getCoordinates()
            .then(function(result) {
                $scope.coordinates = result;
            });
    };

    var getDeliveryServices = function() {
        deliveryServiceService.getDeliveryServices()
            .then(function(result) {
                $scope.deliveryServices = result;
            });
    };

    $scope.origin = origin;

    $scope.protocols = [
        { value: 'http', label: 'http' },
        { value: 'https', label: 'https' }
    ];

    $scope.tenantLabel = function(tenant) {
        return '-'.repeat(tenant.level) + ' ' + tenant.name;
    };

    $scope.navigateToPath = locationUtils.navigateToPath;

    $scope.hasError = formUtils.hasError;

    $scope.hasPropertyError = formUtils.hasPropertyError;

    var init = function () {
        getProfiles();
        getTenants();
        getCacheGroups();
        getCoordinates();
        getDeliveryServices();
    };
    init();

};

FormOriginController.$inject = ['origin', '$scope', '$location', 'formUtils', 'locationUtils', 'tenantUtils', 'deliveryServiceService', 'profileService', 'tenantService', 'coordinateService', 'cacheGroupService', 'originService'];
module.exports = FormOriginController;
