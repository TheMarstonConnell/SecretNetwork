(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(e,t,s){"use strict";s.r(t);var a=s(43),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sentry-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sentry-nodes"}},[e._v("#")]),e._v(" Sentry Nodes")]),e._v(" "),s("h3",{attrs:{id:"make-your-node-resilient-to-ddos-attacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-your-node-resilient-to-ddos-attacks"}},[e._v("#")]),e._v(" Make your node resilient to DDoS attacks!")]),e._v(" "),s("p",[e._v("The Sentry Node Architecture is an infrastructure example for DDoS mitigation on Tendermint-based networks.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry Node Architecture Overview."),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Secret Nodes (Validators) are responsible for ensuring that the network can sustain denial of service attacks.")]),e._v(" "),s("p",[e._v("One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture.")]),e._v(" "),s("p",[e._v("Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones.")]),e._v(" "),s("p",[e._v("Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network.")]),e._v(" "),s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),s("p",[e._v("For those implementing Sentry's on Validators who already have Public IP exposed. Currently any peer, be it a validator or full node, is given 16 attempts with exponential backoff, which in total amounts to around 35 hours, to connect. If the node remains unreachable then it is automatically removed from the address book..\nAn unreachable validator node is not gossiped across the network i.e. all other nodes will each try to connect to the unreachable validator node before removing it from their address book.")]),e._v(" "),s("p",[e._v("To setup your sentry node architecture you can follow the instructions below:")]),e._v(" "),s("p",[e._v("Validators nodes should edit their .secretd/config/config.toml:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" /.secretd/config/config.toml\n")])])]),s("p",[e._v("Proceed to make the following changes.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of nodes to keep persistent connections to")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Do not add private peers to this list if you don't want them advertised")]),e._v("\npersistent_peers "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("list of sentry nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set true to enable the peer-exchange reactor")]),e._v("\npex "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),s("p",[e._v("Sentry Nodes should edit their config.toml:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656")]),e._v("\nprivate_peer_ids "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"node_ids_of_private_peers"')]),e._v("\n")])])]),s("h3",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/master/docs/validators/security.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cosmos/gaia/blob/master/docs/validators/security.md"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);