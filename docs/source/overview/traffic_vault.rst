..
..
.. Licensed under the Apache License, Version 2.0 (the "License");
.. you may not use this file except in compliance with the License.
.. You may obtain a copy of the License at
..
..     http://www.apache.org/licenses/LICENSE-2.0
..
.. Unless required by applicable law or agreed to in writing, software
.. distributed under the License is distributed on an "AS IS" BASIS,
.. WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
.. See the License for the specific language governing permissions and
.. limitations under the License.
..

.. _tv-overview:

*************
Traffic Vault
*************
Traffic Vault is a key/value store used for storing the following types of information:

* SSL Certificates

	- Private Key
	- Certificate
	- :abbr:`CSR (Certificate Signing Request)`

* :abbr:`DNSSEC (DNS Security Extensions)` Keys

	- Key Signing Key

		- private key
		- public key

	- Zone Signing Key

		- private key
		- public key

* URL Signing Keys

As the name suggests, Traffic Vault is meant to be a "vault" of private keys that only certain users are allowed to access. In order to create, add, and retrieve keys a user must have administrative privileges. Keys can be created via the :ref:`tp-overview` UI, but they can only be retrieved via the :ref:`to-api`. The keystore used by Traffic Vault is `Riak <http://basho.com/products/riak-kv/>`_. :ref:`to-overview` accesses Riak via HTTPS on port 8088. :ref:`to-overview` uses Riak's REST API with username/password authentication.

.. seealso:: Information on the Riak API can be found in `their documentation <http://docs.riak.com/riak/latest/dev/references/http/>`_.
