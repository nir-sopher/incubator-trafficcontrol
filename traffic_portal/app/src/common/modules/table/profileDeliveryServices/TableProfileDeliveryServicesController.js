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

var TableProfileDeliveryServicesController = function(profile, deliveryServices, $controller, $scope) {

	// extends the TableDeliveryServicesController to inherit common methods
	angular.extend(this, $controller('TableDeliveryServicesController', { deliveryServices: deliveryServices, $scope: $scope }));

	let profileDeliveryServicesTable;

	$scope.profile = profile;

	$scope.toggleVisibility = function(colName) {
		const col = profileDeliveryServicesTable.column(colName + ':name');
		col.visible(!col.visible());
		profileDeliveryServicesTable.rows().invalidate().draw();
	};

	angular.element(document).ready(function () {
		profileDeliveryServicesTable = $('#profileDeliveryServicesTable').DataTable({
			"lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
			"iDisplayLength": 25,
			"aaSorting": [],
			"columns": $scope.columns,
			"colReorder": {
				realtime: false
			},
			"initComplete": function(settings, json) {
				try {
					// need to create the show/hide column checkboxes and bind to the current visibility
					$scope.columns = JSON.parse(localStorage.getItem('DataTables_profileDeliveryServicesTable_/')).columns;
				} catch (e) {
					console.error("Failure to retrieve required column info from localStorage (key=DataTables_profileDeliveryServicesTable_/):", e);
				}
			}
		});
	});

};

TableProfileDeliveryServicesController.$inject = ['profile', 'deliveryServices', '$controller', '$scope'];
module.exports = TableProfileDeliveryServicesController;
