global = this;
(function (modules) {

    // Bundle allows the run-time to extract already-loaded modules from the
    // boot bundle.
    var bundle = {};
    var main;

    // Unpack module tuples into module objects.
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        module = modules[i] = new Module(
            module[0],
            module[1],
            module[2],
            module[3],
            module[4]
        );
        bundle[module.filename] = module;
    }

    function Module(id, dirname, basename, dependencies, factory) {
        this.id = id;
        this.dirname = dirname;
        this.filename = dirname + "/" + basename;
        // Dependency map and factory are used to instantiate bundled modules.
        this.dependencies = dependencies;
        this.factory = factory;
    }

    Module.prototype._require = function () {
        var module = this;
        if (module.exports === void 0) {
            module.exports = {};
            var require = function (id) {
                var index = module.dependencies[id];
                var dependency = modules[index];
                if (!dependency)
                    throw new Error("Bundle is missing a dependency: " + id);
                return dependency._require();
            };
            require.main = main;
            module.exports = module.factory(
                require,
                module.exports,
                module,
                module.filename,
                module.dirname
            ) || module.exports;
        }
        return module.exports;
    };

    // Communicate the bundle to all bundled modules
    Module.prototype.modules = bundle;

    return function require(filename) {
        main = bundle[filename];
        main._require();
    }
})([["airship.json","airship.aelf.land","airship.json",{},function (require, exports, module, __filename, __dirname){

// airship.aelf.land/airship.json
// ------------------------------

module.exports = {
    "start": {
        "type": "text",
        "text": "A rigid-manifold airship sits before you on its keel and a pair of webbèd feet. The gondola’s brightly painted prow is the head of a mallard drake. Fixèd wings extend from the flank and tail for stability and control in flight. A drive shaft runs along the center line between fore and stern propellers, with an engine and boiler amidships. In bold letters, the hull is paintèd “",
        "lift": "",
        "drop": "",
        "next": "start.1"
    },
    "start.1": {
        "type": "switch",
        "expression": [
            "get",
            "start.1"
        ],
        "variable": null,
        "value": 0,
        "mode": "rand",
        "branches": [
            "start.1.1",
            "start.1.2",
            "start.1.3"
        ]
    },
    "start.1.1": {
        "type": "text",
        "text": "A",
        "lift": "",
        "drop": "",
        "next": "start.2"
    },
    "start.1.2": {
        "type": "text",
        "text": "D",
        "lift": "",
        "drop": "",
        "next": "start.2"
    },
    "start.1.3": {
        "type": "text",
        "text": "M",
        "lift": "",
        "drop": "",
        "next": "start.2"
    },
    "start.2": {
        "type": "print",
        "lift": "",
        "drop": "",
        "expression": [
            "+",
            [
                "~",
                [
                    "val",
                    1
                ],
                [
                    "val",
                    1000
                ]
            ],
            [
                "val",
                1
            ]
        ],
        "next": "start.3"
    },
    "start.3": {
        "type": "text",
        "text": "”.",
        "lift": "",
        "drop": " ",
        "next": "start.4"
    },
    "start.4": {
        "type": "option",
        "label": "Board the airship.",
        "keywords": [],
        "branch": "start.4.1",
        "next": "start.5"
    },
    "start.4.1": {
        "type": "text",
        "text": "You b",
        "lift": "",
        "drop": "",
        "next": "start.4.2"
    },
    "start.4.2": {
        "type": "text",
        "text": "oard the airship.",
        "lift": "",
        "drop": " ",
        "next": "start.4.3"
    },
    "start.4.3": {
        "type": "call",
        "label": "init",
        "branch": "init",
        "next": "deck"
    },
    "start.5": {
        "type": "prompt"
    },
    "deck": {
        "type": "text",
        "text": "On the deck of the airship, the wood shed is forward, the boiler is amidships, its engine abaft, and the helm astern. The water and gas reservoirs are in the keel and the framèd manifold flies over all, supported by flanking masts. Various controls, instruments, tanks, and tackle clutter the deck. There is little space to spare for crew and cargo.",
        "lift": " ",
        "drop": " ",
        "next": "deck.options"
    },
    "deck.options": {
        "type": "option",
        "label": "Enter the boiler shed.",
        "keywords": [],
        "branch": "deck.options.0.1",
        "next": "deck.options.1"
    },
    "deck.options.0.1": {
        "type": "text",
        "text": "You e",
        "lift": "",
        "drop": "",
        "next": "deck.options.0.2"
    },
    "deck.options.0.2": {
        "type": "text",
        "text": "nter the boiler shed.",
        "lift": "",
        "drop": " ",
        "next": "amidships"
    },
    "deck.options.1": {
        "type": "option",
        "label": "Walk to the port rail.",
        "keywords": [],
        "branch": "deck.options.1.1",
        "next": "deck.options.2"
    },
    "deck.options.1.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "deck.options.1.2"
    },
    "deck.options.1.2": {
        "type": "text",
        "text": "alk to the port rail.",
        "lift": "",
        "drop": " ",
        "next": "port"
    },
    "deck.options.2": {
        "type": "option",
        "label": "Walk to the starboard rail.",
        "keywords": [],
        "branch": "deck.options.2.1",
        "next": "deck.options.3"
    },
    "deck.options.2.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "deck.options.2.2"
    },
    "deck.options.2.2": {
        "type": "text",
        "text": "alk to the starboard rail.",
        "lift": "",
        "drop": " ",
        "next": "starboard"
    },
    "deck.options.3": {
        "type": "option",
        "label": "Walk forward.",
        "keywords": [],
        "branch": "deck.options.3.1",
        "next": "deck.options.4"
    },
    "deck.options.3.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "deck.options.3.2"
    },
    "deck.options.3.2": {
        "type": "text",
        "text": "alk forward.",
        "lift": "",
        "drop": " ",
        "next": "forward"
    },
    "deck.options.4": {
        "type": "option",
        "label": "Walk astern.",
        "keywords": [],
        "branch": "deck.options.4.1",
        "next": "deck.options.5"
    },
    "deck.options.4.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "deck.options.4.2"
    },
    "deck.options.4.2": {
        "type": "text",
        "text": "alk astern.",
        "lift": "",
        "drop": " ",
        "next": "stern"
    },
    "deck.options.5": {
        "type": "prompt"
    },
    "forward": {
        "type": "text",
        "text": "The water and solarium reservoir instruments and controls are here.",
        "lift": " ",
        "drop": " ",
        "next": "forward.options"
    },
    "forward.options": {
        "type": "text",
        "text": "The water reservoir depth gauge reads",
        "lift": "",
        "drop": " ",
        "next": "forward.options.1"
    },
    "forward.options.1": {
        "type": "print",
        "expression": [
            "get",
            "reservoir.water"
        ],
        "next": "forward.options.2"
    },
    "forward.options.2": {
        "type": "text",
        "text": "gallons.",
        "lift": " ",
        "drop": " ",
        "next": "forward.options.3"
    },
    "forward.options.3": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "nozzle"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "forward.options.4",
        "next": "forward.options.5"
    },
    "forward.options.4": {
        "type": "option",
        "label": "Pull the keel nozzle lever.",
        "keywords": [],
        "branch": "forward.options.4.1",
        "next": "forward.options.5"
    },
    "forward.options.4.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "forward.options.4.2"
    },
    "forward.options.4.2": {
        "type": "text",
        "text": "ull the keel nozzle lever.",
        "lift": "",
        "drop": " ",
        "next": "forward.options.4.3"
    },
    "forward.options.4.3": {
        "type": "set",
        "variable": "nozzle",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "forward.options"
    },
    "forward.options.5": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "nozzle"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "forward.options.6",
        "next": "forward.options.8"
    },
    "forward.options.6": {
        "type": "option",
        "label": "Push the keel nozzle lever.",
        "keywords": [],
        "branch": "forward.options.6.1",
        "next": "forward.options.7"
    },
    "forward.options.6.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "forward.options.6.2"
    },
    "forward.options.6.2": {
        "type": "text",
        "text": "ush the keel nozzle lever.",
        "lift": "",
        "drop": " ",
        "next": "forward.options.6.3"
    },
    "forward.options.6.3": {
        "type": "set",
        "variable": "nozzle",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "forward.options"
    },
    "forward.options.7": {
        "type": "option",
        "label": "Wait a bit for the water reservoir to disgorge.",
        "keywords": [],
        "branch": "forward.options.7.1",
        "next": "forward.options.8"
    },
    "forward.options.7.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "forward.options.7.2"
    },
    "forward.options.7.2": {
        "type": "text",
        "text": "ait a bit for the water reservoir to disgorge.",
        "lift": "",
        "drop": " ",
        "next": "forward.options.7.3"
    },
    "forward.options.7.3": {
        "type": "call",
        "label": "tick",
        "branch": "tick",
        "next": "forward.options.7.4"
    },
    "forward.options.7.4": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "forward.options.7.4.1",
            "forward.options.7.4.2"
        ]
    },
    "forward.options.7.4.1": {
        "type": "goto",
        "next": null
    },
    "forward.options.7.4.2": {
        "type": "goto",
        "next": "forward.options"
    },
    "forward.options.8": {
        "type": "option",
        "label": "Approach the manifold control station.",
        "keywords": [],
        "branch": "forward.options.8.1",
        "next": "forward.options.9"
    },
    "forward.options.8.1": {
        "type": "text",
        "text": "You a",
        "lift": "",
        "drop": "",
        "next": "forward.options.8.2"
    },
    "forward.options.8.2": {
        "type": "text",
        "text": "pproach the manifold control station.",
        "lift": "",
        "drop": " ",
        "next": "manifold"
    },
    "forward.options.9": {
        "type": "option",
        "label": "Walk aft along the starboard rail.",
        "keywords": [],
        "branch": "forward.options.9.1",
        "next": "forward.options.10"
    },
    "forward.options.9.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "forward.options.9.2"
    },
    "forward.options.9.2": {
        "type": "text",
        "text": "alk aft along the starboard rail.",
        "lift": "",
        "drop": " ",
        "next": "starboard"
    },
    "forward.options.10": {
        "type": "option",
        "label": "Walk aft along the port rail.",
        "keywords": [],
        "branch": "forward.options.10.1",
        "next": "forward.options.11"
    },
    "forward.options.10.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "forward.options.10.2"
    },
    "forward.options.10.2": {
        "type": "text",
        "text": "alk aft along the port rail.",
        "lift": "",
        "drop": " ",
        "next": "port"
    },
    "forward.options.11": {
        "type": "prompt"
    },
    "manifold": {
        "type": "text",
        "text": "The manifold control booth contains the solarion gas valve, a barometric altimeter, and a vertical anemometer. Unlike the common lateral anemometer which you can view over the helm, the vertical anemometer is a propellor rotating about a vertical axis, indicating the speed of altitude change relative to the surrounding air.",
        "lift": " ",
        "drop": " ",
        "next": "manifold.1"
    },
    "manifold.1": {
        "type": "paragraph",
        "next": "manifold.options"
    },
    "manifold.options": {
        "type": "text",
        "text": "The altimeter reads",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.1"
    },
    "manifold.options.1": {
        "type": "print",
        "expression": [
            "get",
            "altimeter"
        ],
        "next": "manifold.options.2"
    },
    "manifold.options.2": {
        "type": "text",
        "text": ". The solarion tank’s pressure gauge reads",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.3"
    },
    "manifold.options.3": {
        "type": "print",
        "expression": [
            "/",
            [
                "get",
                "tank.helium"
            ],
            [
                "val",
                100
            ]
        ],
        "next": "manifold.options.4"
    },
    "manifold.options.4": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.5"
    },
    "manifold.options.5": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "anemometer.vertical"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "manifold.options.5.1",
            "manifold.options.5.2"
        ]
    },
    "manifold.options.5.1": {
        "type": "text",
        "text": "The anemometer spins",
        "lift": " ",
        "drop": " ",
        "next": "manifold.options.5.1.1"
    },
    "manifold.options.5.1.1": {
        "type": "switch",
        "expression": [
            "get",
            "anemometer.vertical"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "manifold.options.5.1.1.1",
            "manifold.options.5.1.1.2",
            "manifold.options.5.1.1.3",
            "manifold.options.5.1.1.4"
        ]
    },
    "manifold.options.5.1.1.1": {
        "type": "text",
        "text": "languidly",
        "lift": " ",
        "drop": " ",
        "next": "manifold.options.5.1.2"
    },
    "manifold.options.5.1.1.2": {
        "type": "goto",
        "next": "manifold.options.5.1.2"
    },
    "manifold.options.5.1.1.3": {
        "type": "text",
        "text": "forcefully",
        "lift": " ",
        "drop": " ",
        "next": "manifold.options.5.1.2"
    },
    "manifold.options.5.1.1.4": {
        "type": "text",
        "text": "wildly",
        "lift": " ",
        "drop": " ",
        "next": "manifold.options.5.1.2"
    },
    "manifold.options.5.1.2": {
        "type": "switch",
        "expression": [
            "get",
            "anemometer.vertical.direction"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "manifold.options.5.1.2.1",
            "manifold.options.5.1.2.2"
        ]
    },
    "manifold.options.5.1.2.1": {
        "type": "text",
        "text": "clockwise",
        "lift": "",
        "drop": "",
        "next": "manifold.options.5.1.3"
    },
    "manifold.options.5.1.2.2": {
        "type": "text",
        "text": "counter-clockwise",
        "lift": "",
        "drop": "",
        "next": "manifold.options.5.1.3"
    },
    "manifold.options.5.1.3": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.6"
    },
    "manifold.options.5.2": {
        "type": "text",
        "text": "The anemometer does not stir.",
        "lift": " ",
        "drop": " ",
        "next": "manifold.options.6"
    },
    "manifold.options.6": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "manifold.options.7",
        "next": "manifold.options.11"
    },
    "manifold.options.7": {
        "type": "option",
        "label": "Close the manifold gas valve.",
        "keywords": [],
        "branch": "manifold.options.7.1",
        "next": "manifold.options.8"
    },
    "manifold.options.7.1": {
        "type": "text",
        "text": "You c",
        "lift": "",
        "drop": "",
        "next": "manifold.options.7.2"
    },
    "manifold.options.7.2": {
        "type": "text",
        "text": "lose the manifold gas valve.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.7.3"
    },
    "manifold.options.7.3": {
        "type": "set",
        "variable": "manifold.valve",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.8": {
        "type": "jump",
        "condition": [
            "<",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                500
            ]
        ],
        "branch": "manifold.options.9",
        "next": "manifold.options.10"
    },
    "manifold.options.9": {
        "type": "option",
        "label": "Turn the manifold gas valve further open.",
        "keywords": [],
        "branch": "manifold.options.9.1",
        "next": "manifold.options.10"
    },
    "manifold.options.9.1": {
        "type": "text",
        "text": "You t",
        "lift": "",
        "drop": "",
        "next": "manifold.options.9.2"
    },
    "manifold.options.9.2": {
        "type": "text",
        "text": "urn the manifold gas valve further open.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.9.3"
    },
    "manifold.options.9.3": {
        "type": "set",
        "variable": "manifold.valve",
        "expression": [
            "+",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                100
            ]
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.10": {
        "type": "option",
        "label": "Turn the manifold gas valve one turn toward closed.",
        "keywords": [],
        "branch": "manifold.options.10.1",
        "next": "manifold.options.11"
    },
    "manifold.options.10.1": {
        "type": "text",
        "text": "You t",
        "lift": "",
        "drop": "",
        "next": "manifold.options.10.2"
    },
    "manifold.options.10.2": {
        "type": "text",
        "text": "urn the manifold gas valve one turn toward closed.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.10.3"
    },
    "manifold.options.10.3": {
        "type": "set",
        "variable": "manifold.valve",
        "expression": [
            "-",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                100
            ]
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.11": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "manifold.options.12",
        "next": "manifold.options.13"
    },
    "manifold.options.12": {
        "type": "option",
        "label": "Crack open the manifold gas valve.",
        "keywords": [],
        "branch": "manifold.options.12.1",
        "next": "manifold.options.13"
    },
    "manifold.options.12.1": {
        "type": "text",
        "text": "You c",
        "lift": "",
        "drop": "",
        "next": "manifold.options.12.2"
    },
    "manifold.options.12.2": {
        "type": "text",
        "text": "rack open the manifold gas valve.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.12.3"
    },
    "manifold.options.12.3": {
        "type": "set",
        "variable": "manifold.valve",
        "expression": [
            "val",
            100
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.13": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                500
            ]
        ],
        "branch": "manifold.options.14",
        "next": "manifold.options.15"
    },
    "manifold.options.14": {
        "type": "option",
        "label": "Open the manifold gas valve wide.",
        "keywords": [],
        "branch": "manifold.options.14.1",
        "next": "manifold.options.15"
    },
    "manifold.options.14.1": {
        "type": "text",
        "text": "You o",
        "lift": "",
        "drop": "",
        "next": "manifold.options.14.2"
    },
    "manifold.options.14.2": {
        "type": "text",
        "text": "pen the manifold gas valve wide.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.14.3"
    },
    "manifold.options.14.3": {
        "type": "set",
        "variable": "manifold.valve",
        "expression": [
            "val",
            500
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.15": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "manifold.vent"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "manifold.options.16",
        "next": "manifold.options.17"
    },
    "manifold.options.16": {
        "type": "option",
        "label": "Pull and secure the manifold vent sheet.",
        "keywords": [],
        "branch": "manifold.options.16.1",
        "next": "manifold.options.17"
    },
    "manifold.options.16.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "manifold.options.16.2"
    },
    "manifold.options.16.2": {
        "type": "text",
        "text": "ull and secure the manifold vent sheet.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.16.3"
    },
    "manifold.options.16.3": {
        "type": "set",
        "variable": "manifold.vent",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.17": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "manifold.vent"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "manifold.options.18",
        "next": "manifold.options.19"
    },
    "manifold.options.18": {
        "type": "option",
        "label": "Loosen the manifold vent sheet, allowing bouyant gasses to escape.",
        "keywords": [],
        "branch": "manifold.options.18.1",
        "next": "manifold.options.19"
    },
    "manifold.options.18.1": {
        "type": "text",
        "text": "You l",
        "lift": "",
        "drop": "",
        "next": "manifold.options.18.2"
    },
    "manifold.options.18.2": {
        "type": "text",
        "text": "oosen the manifold vent sheet, allowing bouyant gasses to escape.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.18.3"
    },
    "manifold.options.18.3": {
        "type": "set",
        "variable": "manifold.vent",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.19": {
        "type": "option",
        "label": "“Steady as she goes.”",
        "keywords": [],
        "branch": "manifold.options.19.1",
        "next": "manifold.options.20"
    },
    "manifold.options.19.1": {
        "type": "text",
        "text": "“Steady as she goes",
        "lift": "",
        "drop": "",
        "next": "manifold.options.19.2"
    },
    "manifold.options.19.2": {
        "type": "text",
        "text": ",” you say.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.19.3"
    },
    "manifold.options.19.3": {
        "type": "call",
        "label": "tick",
        "branch": "tick",
        "next": "manifold.options.19.4"
    },
    "manifold.options.19.4": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "manifold.options.19.4.1",
            "manifold.options.19.4.2"
        ]
    },
    "manifold.options.19.4.1": {
        "type": "goto",
        "next": null
    },
    "manifold.options.19.4.2": {
        "type": "goto",
        "next": "manifold.options"
    },
    "manifold.options.20": {
        "type": "option",
        "label": "Tare the altimeter to the ambient barometric pressure.",
        "keywords": [],
        "branch": "manifold.options.20.1",
        "next": "manifold.options.21"
    },
    "manifold.options.20.1": {
        "type": "text",
        "text": "You t",
        "lift": "",
        "drop": "",
        "next": "manifold.options.20.2"
    },
    "manifold.options.20.2": {
        "type": "text",
        "text": "are the altimeter to the ambient barometric pressure.",
        "lift": "",
        "drop": " ",
        "next": "manifold.options.20.3"
    },
    "manifold.options.20.3": {
        "type": "set",
        "variable": "altimeter.tare",
        "expression": [
            "get",
            "barometric.pressure"
        ],
        "parameter": false,
        "next": "manifold.options.20.4"
    },
    "manifold.options.20.4": {
        "type": "set",
        "variable": "altimeter",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "manifold.options"
    },
    "manifold.options.21": {
        "type": "option",
        "label": "Exit the manifold control booth.",
        "keywords": [],
        "branch": "manifold.options.21.1",
        "next": "manifold.options.22"
    },
    "manifold.options.21.1": {
        "type": "text",
        "text": "You e",
        "lift": "",
        "drop": "",
        "next": "manifold.options.21.2"
    },
    "manifold.options.21.2": {
        "type": "text",
        "text": "xit the manifold control booth.",
        "lift": "",
        "drop": " ",
        "next": "forward"
    },
    "manifold.options.22": {
        "type": "prompt"
    },
    "stern": {
        "type": "text",
        "text": "The helm and various gauges, instruments, and controls are here, astern.",
        "lift": " ",
        "drop": " ",
        "next": "stern.1"
    },
    "stern.1": {
        "type": "option",
        "label": "Approach the helm.",
        "keywords": [],
        "branch": "stern.1.1",
        "next": "stern.2"
    },
    "stern.1.1": {
        "type": "text",
        "text": "You a",
        "lift": "",
        "drop": "",
        "next": "stern.1.2"
    },
    "stern.1.2": {
        "type": "text",
        "text": "pproach the helm.",
        "lift": "",
        "drop": " ",
        "next": "helm"
    },
    "stern.2": {
        "type": "option",
        "label": "Walk forward along the port rail.",
        "keywords": [],
        "branch": "stern.2.1",
        "next": "stern.3"
    },
    "stern.2.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "stern.2.2"
    },
    "stern.2.2": {
        "type": "text",
        "text": "alk forward along the port rail.",
        "lift": "",
        "drop": " ",
        "next": "port"
    },
    "stern.3": {
        "type": "option",
        "label": "Walk forward along the starboard rail.",
        "keywords": [],
        "branch": "stern.3.1",
        "next": "stern.4"
    },
    "stern.3.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "stern.3.2"
    },
    "stern.3.2": {
        "type": "text",
        "text": "alk forward along the starboard rail.",
        "lift": "",
        "drop": " ",
        "next": "starboard"
    },
    "stern.4": {
        "type": "prompt"
    },
    "helm": {
        "type": "text",
        "text": "The helm consists of a large spokèd outer wheel that governs the rudder, and a pair of smaller wheels that control the port and starboard elevators. The helm is flanked by the æleron lever on your portside and the throttle to starboard, both with a lever in the handle that releases a locking pin when clasped. An anemometer indicates lateral wind speed relative to the craft. A pennant hung from the mizzen indicates the wind direction.",
        "lift": " ",
        "drop": " ",
        "next": "helm.1"
    },
    "helm.1": {
        "type": "paragraph",
        "next": "helm.instruments"
    },
    "helm.instruments": {
        "type": "text",
        "text": "The throttle is",
        "lift": "",
        "drop": " ",
        "next": "helm.instruments.1"
    },
    "helm.instruments.1": {
        "type": "switch",
        "expression": [
            "get",
            "throttle"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.1.1",
            "helm.instruments.1.2"
        ]
    },
    "helm.instruments.1.1": {
        "type": "text",
        "text": "closed",
        "lift": "",
        "drop": "",
        "next": "helm.instruments.2"
    },
    "helm.instruments.1.2": {
        "type": "text",
        "text": "open",
        "lift": "",
        "drop": "",
        "next": "helm.instruments.2"
    },
    "helm.instruments.2": {
        "type": "text",
        "text": "at position",
        "lift": " ",
        "drop": " ",
        "next": "helm.instruments.3"
    },
    "helm.instruments.3": {
        "type": "print",
        "expression": [
            "get",
            "throttle"
        ],
        "next": "helm.instruments.4"
    },
    "helm.instruments.4": {
        "type": "text",
        "text": ". The steam pressure gauge reads",
        "lift": "",
        "drop": " ",
        "next": "helm.instruments.5"
    },
    "helm.instruments.5": {
        "type": "print",
        "expression": [
            "get",
            "boiler.pressure"
        ],
        "next": "helm.instruments.6"
    },
    "helm.instruments.6": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": "helm.instruments.7"
    },
    "helm.instruments.7": {
        "type": "switch",
        "expression": [
            "==",
            [
                "/",
                [
                    "get",
                    "drive.speed"
                ],
                [
                    "val",
                    10
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.7.1",
            "helm.instruments.7.2"
        ]
    },
    "helm.instruments.7.1": {
        "type": "text",
        "text": "The propellor turns",
        "lift": " ",
        "drop": " ",
        "next": "helm.instruments.7.1.1"
    },
    "helm.instruments.7.1.1": {
        "type": "switch",
        "expression": [
            "get",
            "drive.direction"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.7.1.1.1",
            "helm.instruments.7.1.1.2"
        ]
    },
    "helm.instruments.7.1.1.1": {
        "type": "text",
        "text": "clockwise",
        "lift": " ",
        "drop": " ",
        "next": "helm.instruments.7.1.2"
    },
    "helm.instruments.7.1.1.2": {
        "type": "text",
        "text": "counter-clockwise",
        "lift": " ",
        "drop": " ",
        "next": "helm.instruments.7.1.2"
    },
    "helm.instruments.7.1.2": {
        "type": "switch",
        "expression": [
            "get",
            "drive.speed"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.7.1.2.1",
            "helm.instruments.7.1.2.2",
            "helm.instruments.7.1.2.3",
            "helm.instruments.7.1.2.4"
        ]
    },
    "helm.instruments.7.1.2.1": {
        "type": "text",
        "text": "slowly",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.7.1.3"
    },
    "helm.instruments.7.1.2.2": {
        "type": "goto",
        "next": "helm.instruments.7.1.3"
    },
    "helm.instruments.7.1.2.3": {
        "type": "text",
        "text": "forcefully",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.7.1.3"
    },
    "helm.instruments.7.1.2.4": {
        "type": "text",
        "text": "with abandon",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.7.1.3"
    },
    "helm.instruments.7.1.3": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": "helm.instruments.8"
    },
    "helm.instruments.7.2": {
        "type": "text",
        "text": "The propellor is idle.",
        "lift": " ",
        "drop": " ",
        "next": "helm.instruments.8"
    },
    "helm.instruments.8": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "anemometer.lateral"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.8.1",
            "helm.instruments.8.2"
        ]
    },
    "helm.instruments.8.1": {
        "type": "text",
        "text": "The anemometer spins",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.8.1.1"
    },
    "helm.instruments.8.1.1": {
        "type": "switch",
        "expression": [
            "get",
            "anemometer.lateral"
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.instruments.8.1.1.1",
            "helm.instruments.8.1.1.2",
            "helm.instruments.8.1.1.3",
            "helm.instruments.8.1.1.4"
        ]
    },
    "helm.instruments.8.1.1.1": {
        "type": "text",
        "text": "languidly",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.8.1.2"
    },
    "helm.instruments.8.1.1.2": {
        "type": "goto",
        "next": "helm.instruments.8.1.2"
    },
    "helm.instruments.8.1.1.3": {
        "type": "text",
        "text": "forcefully",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.8.1.2"
    },
    "helm.instruments.8.1.1.4": {
        "type": "text",
        "text": "wildly",
        "lift": " ",
        "drop": "",
        "next": "helm.instruments.8.1.2"
    },
    "helm.instruments.8.1.2": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": "helm.options"
    },
    "helm.instruments.8.2": {
        "type": "text",
        "text": "The anemometer does not stir.",
        "lift": " ",
        "drop": " ",
        "next": "helm.options"
    },
    "helm.options": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "helm.options.1",
        "next": "helm.options.2"
    },
    "helm.options.1": {
        "type": "option",
        "label": "Crack open the throttle.",
        "keywords": [],
        "branch": "helm.options.1.1",
        "next": "helm.options.2"
    },
    "helm.options.1.1": {
        "type": "text",
        "text": "You c",
        "lift": "",
        "drop": "",
        "next": "helm.options.1.2"
    },
    "helm.options.1.2": {
        "type": "text",
        "text": "rack open the throttle.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.1.3"
    },
    "helm.options.1.3": {
        "type": "set",
        "variable": "throttle",
        "expression": [
            "+",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "helm.instruments"
    },
    "helm.options.2": {
        "type": "jump",
        "condition": [
            "<",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                11
            ]
        ],
        "branch": "helm.options.3",
        "next": "helm.options.4"
    },
    "helm.options.3": {
        "type": "option",
        "label": "Open the throttle wide.",
        "keywords": [],
        "branch": "helm.options.3.1",
        "next": "helm.options.4"
    },
    "helm.options.3.1": {
        "type": "text",
        "text": "You o",
        "lift": "",
        "drop": "",
        "next": "helm.options.3.2"
    },
    "helm.options.3.2": {
        "type": "text",
        "text": "pen the throttle wide.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.3.3"
    },
    "helm.options.3.3": {
        "type": "set",
        "variable": "throttle",
        "expression": [
            "val",
            11
        ],
        "parameter": false,
        "next": "helm.instruments"
    },
    "helm.options.4": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "helm.options.5",
        "next": "helm.options.7"
    },
    "helm.options.5": {
        "type": "option",
        "label": "Pull the throttle one notch closed.",
        "keywords": [],
        "branch": "helm.options.5.1",
        "next": "helm.options.6"
    },
    "helm.options.5.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "helm.options.5.2"
    },
    "helm.options.5.2": {
        "type": "text",
        "text": "ull the throttle one notch closed.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.5.3"
    },
    "helm.options.5.3": {
        "type": "set",
        "variable": "throttle",
        "expression": [
            "-",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "helm.instruments"
    },
    "helm.options.6": {
        "type": "option",
        "label": "Pull the throttle fully closed.",
        "keywords": [],
        "branch": "helm.options.6.1",
        "next": "helm.options.7"
    },
    "helm.options.6.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "helm.options.6.2"
    },
    "helm.options.6.2": {
        "type": "text",
        "text": "ull the throttle fully closed.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.6.3"
    },
    "helm.options.6.3": {
        "type": "set",
        "variable": "throttle",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "helm.instruments"
    },
    "helm.options.7": {
        "type": "option",
        "label": "“Steady as she goes.”",
        "keywords": [],
        "branch": "helm.options.7.1",
        "next": "helm.options.8"
    },
    "helm.options.7.1": {
        "type": "text",
        "text": "“Steady as she goes",
        "lift": "",
        "drop": "",
        "next": "helm.options.7.2"
    },
    "helm.options.7.2": {
        "type": "text",
        "text": ",” you say.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.7.3"
    },
    "helm.options.7.3": {
        "type": "call",
        "label": "tick",
        "branch": "tick",
        "next": "helm.options.7.4"
    },
    "helm.options.7.4": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "helm.options.7.4.1",
            "helm.options.7.4.2"
        ]
    },
    "helm.options.7.4.1": {
        "type": "goto",
        "next": null
    },
    "helm.options.7.4.2": {
        "type": "goto",
        "next": "helm.instruments"
    },
    "helm.options.8": {
        "type": "option",
        "label": "Inspect the boiler gauges.",
        "keywords": [],
        "branch": "helm.options.8.1",
        "next": "helm.options.9"
    },
    "helm.options.8.1": {
        "type": "text",
        "text": "You i",
        "lift": "",
        "drop": "",
        "next": "helm.options.8.2"
    },
    "helm.options.8.2": {
        "type": "text",
        "text": "nspect the boiler gauges.",
        "lift": "",
        "drop": " ",
        "next": "helm.options.8.3"
    },
    "helm.options.8.3": {
        "type": "call",
        "label": "boiler.gauges",
        "branch": "boiler.gauges",
        "next": "helm.options"
    },
    "helm.options.9": {
        "type": "option",
        "label": "Step away from the helm.",
        "keywords": [],
        "branch": "helm.options.9.1",
        "next": "helm.options.10"
    },
    "helm.options.9.1": {
        "type": "text",
        "text": "You s",
        "lift": "",
        "drop": "",
        "next": "helm.options.9.2"
    },
    "helm.options.9.2": {
        "type": "text",
        "text": "tep away from the helm.",
        "lift": "",
        "drop": " ",
        "next": "stern"
    },
    "helm.options.10": {
        "type": "prompt"
    },
    "port": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "ballast.port"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "port.1",
        "next": "port.3"
    },
    "port.1": {
        "type": "option",
        "label": "Let slip port ballast.",
        "keywords": [],
        "branch": "port.1.1",
        "next": "port.2"
    },
    "port.1.1": {
        "type": "text",
        "text": "You l",
        "lift": "",
        "drop": "",
        "next": "port.1.2"
    },
    "port.1.2": {
        "type": "text",
        "text": "et slip port ballast.",
        "lift": "",
        "drop": " ",
        "next": "port.1.3"
    },
    "port.1.3": {
        "type": "set",
        "variable": "ballast.port",
        "expression": [
            "-",
            [
                "get",
                "ballast.port"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "port.1.4"
    },
    "port.1.4": {
        "type": "switch",
        "expression": [
            "!=",
            [
                "get",
                "ballast.port"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "port.1.4.1",
            "port.1.4.2"
        ]
    },
    "port.1.4.1": {
        "type": "text",
        "text": "There are no more bags to drop on the port side.",
        "lift": " ",
        "drop": " ",
        "next": "port.1.5"
    },
    "port.1.4.2": {
        "type": "text",
        "text": "There are",
        "lift": " ",
        "drop": " ",
        "next": "port.1.4.2.1"
    },
    "port.1.4.2.1": {
        "type": "print",
        "expression": [
            "get",
            "ballast.port"
        ],
        "next": "port.1.4.2.2"
    },
    "port.1.4.2.2": {
        "type": "text",
        "text": "remaining bags to port.",
        "lift": " ",
        "drop": " ",
        "next": "port.1.5"
    },
    "port.1.5": {
        "type": "call",
        "label": "roll",
        "branch": "roll",
        "next": "port.1.6"
    },
    "port.1.6": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "port.1.6.1",
            "port.1.6.2"
        ]
    },
    "port.1.6.1": {
        "type": "goto",
        "next": null
    },
    "port.1.6.2": {
        "type": "goto",
        "next": "port"
    },
    "port.2": {
        "type": "option",
        "label": "Let slip all remaining port ballast.",
        "keywords": [],
        "branch": "port.2.1",
        "next": "port.3"
    },
    "port.2.1": {
        "type": "text",
        "text": "You l",
        "lift": "",
        "drop": "",
        "next": "port.2.2"
    },
    "port.2.2": {
        "type": "text",
        "text": "et slip all remaining port ballast.",
        "lift": "",
        "drop": " ",
        "next": "port.2.3"
    },
    "port.2.3": {
        "type": "set",
        "variable": "ballast.port",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "port"
    },
    "port.3": {
        "type": "option",
        "label": "Enter the boiler shed admiships.",
        "keywords": [],
        "branch": "port.3.1",
        "next": "port.4"
    },
    "port.3.1": {
        "type": "text",
        "text": "You e",
        "lift": "",
        "drop": "",
        "next": "port.3.2"
    },
    "port.3.2": {
        "type": "text",
        "text": "nter the boiler shed admiships.",
        "lift": "",
        "drop": " ",
        "next": "amidships"
    },
    "port.4": {
        "type": "option",
        "label": "Walk forward.",
        "keywords": [],
        "branch": "port.4.1",
        "next": "port.5"
    },
    "port.4.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "port.4.2"
    },
    "port.4.2": {
        "type": "text",
        "text": "alk forward.",
        "lift": "",
        "drop": " ",
        "next": "forward"
    },
    "port.5": {
        "type": "option",
        "label": "Walk astern.",
        "keywords": [],
        "branch": "port.5.1",
        "next": "port.6"
    },
    "port.5.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "port.5.2"
    },
    "port.5.2": {
        "type": "text",
        "text": "alk astern.",
        "lift": "",
        "drop": " ",
        "next": "stern"
    },
    "port.6": {
        "type": "prompt"
    },
    "starboard": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "ballast.starboard"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "starboard.1",
        "next": "starboard.3"
    },
    "starboard.1": {
        "type": "option",
        "label": "Let slip starboard ballast.",
        "keywords": [],
        "branch": "starboard.1.1",
        "next": "starboard.2"
    },
    "starboard.1.1": {
        "type": "text",
        "text": "You l",
        "lift": "",
        "drop": "",
        "next": "starboard.1.2"
    },
    "starboard.1.2": {
        "type": "text",
        "text": "et slip starboard ballast.",
        "lift": "",
        "drop": " ",
        "next": "starboard.1.3"
    },
    "starboard.1.3": {
        "type": "set",
        "variable": "ballast.starboard",
        "expression": [
            "-",
            [
                "get",
                "ballast.starboard"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "starboard.1.4"
    },
    "starboard.1.4": {
        "type": "switch",
        "expression": [
            "!=",
            [
                "get",
                "ballast.starboard"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "starboard.1.4.1",
            "starboard.1.4.2"
        ]
    },
    "starboard.1.4.1": {
        "type": "text",
        "text": "There are no more bags to drop on the starboard side.",
        "lift": " ",
        "drop": " ",
        "next": "starboard.1.5"
    },
    "starboard.1.4.2": {
        "type": "text",
        "text": "There are",
        "lift": " ",
        "drop": " ",
        "next": "starboard.1.4.2.1"
    },
    "starboard.1.4.2.1": {
        "type": "print",
        "expression": [
            "get",
            "ballast.starboard"
        ],
        "next": "starboard.1.4.2.2"
    },
    "starboard.1.4.2.2": {
        "type": "text",
        "text": "remaining bags to starboard.",
        "lift": " ",
        "drop": " ",
        "next": "starboard.1.5"
    },
    "starboard.1.5": {
        "type": "call",
        "label": "roll",
        "branch": "roll",
        "next": "starboard.1.6"
    },
    "starboard.1.6": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "starboard.1.6.1",
            "starboard.1.6.2"
        ]
    },
    "starboard.1.6.1": {
        "type": "goto",
        "next": null
    },
    "starboard.1.6.2": {
        "type": "goto",
        "next": "starboard"
    },
    "starboard.2": {
        "type": "option",
        "label": "Let slip all remaining starboard ballast.",
        "keywords": [],
        "branch": "starboard.2.1",
        "next": "starboard.3"
    },
    "starboard.2.1": {
        "type": "text",
        "text": "You l",
        "lift": "",
        "drop": "",
        "next": "starboard.2.2"
    },
    "starboard.2.2": {
        "type": "text",
        "text": "et slip all remaining starboard ballast.",
        "lift": "",
        "drop": " ",
        "next": "starboard.2.3"
    },
    "starboard.2.3": {
        "type": "set",
        "variable": "ballast.starboard",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "starboard"
    },
    "starboard.3": {
        "type": "option",
        "label": "Enter the boiler shed admiships.",
        "keywords": [],
        "branch": "starboard.3.1",
        "next": "starboard.4"
    },
    "starboard.3.1": {
        "type": "text",
        "text": "You e",
        "lift": "",
        "drop": "",
        "next": "starboard.3.2"
    },
    "starboard.3.2": {
        "type": "text",
        "text": "nter the boiler shed admiships.",
        "lift": "",
        "drop": " ",
        "next": "amidships"
    },
    "starboard.4": {
        "type": "option",
        "label": "Walk forward.",
        "keywords": [],
        "branch": "starboard.4.1",
        "next": "starboard.5"
    },
    "starboard.4.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "starboard.4.2"
    },
    "starboard.4.2": {
        "type": "text",
        "text": "alk forward.",
        "lift": "",
        "drop": " ",
        "next": "forward"
    },
    "starboard.5": {
        "type": "option",
        "label": "Walk astern.",
        "keywords": [],
        "branch": "starboard.5.1",
        "next": "starboard.6"
    },
    "starboard.5.1": {
        "type": "text",
        "text": "You w",
        "lift": "",
        "drop": "",
        "next": "starboard.5.2"
    },
    "starboard.5.2": {
        "type": "text",
        "text": "alk astern.",
        "lift": "",
        "drop": " ",
        "next": "stern"
    },
    "starboard.6": {
        "type": "prompt"
    },
    "amidships": {
        "type": "text",
        "text": "There is a boiler here. The engine and works are behind the boiler.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options"
    },
    "engine.options": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "boiler.cracked"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.1",
        "next": "engine.options.2"
    },
    "engine.options.1": {
        "type": "text",
        "text": "A crack has rent through the boiler’s casing, rendering it useless.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.2"
    },
    "engine.options.2": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "boiler.cracked"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.3",
        "next": "amidships.exits.6"
    },
    "engine.options.3": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "boiler.door"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.4",
        "next": "engine.options.17"
    },
    "engine.options.4": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.5",
        "next": "engine.options.8"
    },
    "engine.options.5": {
        "type": "text",
        "text": "Wood burns in the boiler’s fire box.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.6"
    },
    "engine.options.6": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "wood"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.7",
        "next": "engine.options.8"
    },
    "engine.options.7": {
        "type": "option",
        "label": "Add wood to the fire.",
        "keywords": [],
        "branch": "engine.options.7.1",
        "next": "engine.options.8"
    },
    "engine.options.7.1": {
        "type": "text",
        "text": "You a",
        "lift": "",
        "drop": "",
        "next": "engine.options.7.2"
    },
    "engine.options.7.2": {
        "type": "text",
        "text": "dd wood to the fire.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.7.3"
    },
    "engine.options.7.3": {
        "type": "call",
        "label": "boiler.wood",
        "branch": "boiler.wood",
        "next": "engine.options"
    },
    "engine.options.8": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.9",
        "next": "engine.options.16"
    },
    "engine.options.9": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "boiler.wood"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.10",
        "next": "engine.options.12"
    },
    "engine.options.10": {
        "type": "text",
        "text": "Wood stands ready for ignition in the fire box.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.11"
    },
    "engine.options.11": {
        "type": "option",
        "label": "Use the match to ignite the boiler.",
        "keywords": [],
        "branch": "engine.options.11.1",
        "next": "engine.options.12"
    },
    "engine.options.11.1": {
        "type": "text",
        "text": "You u",
        "lift": "",
        "drop": "",
        "next": "engine.options.11.2"
    },
    "engine.options.11.2": {
        "type": "text",
        "text": "se the match to ignite the boiler.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.11.3"
    },
    "engine.options.11.3": {
        "type": "set",
        "variable": "boiler.fire",
        "expression": [
            "+",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "engine.options"
    },
    "engine.options.12": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "boiler.wood"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.13",
        "next": "engine.options.16"
    },
    "engine.options.13": {
        "type": "text",
        "text": "Naught but cold ash fills the boiler’s fire box.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.14"
    },
    "engine.options.14": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "wood"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.15",
        "next": "engine.options.16"
    },
    "engine.options.15": {
        "type": "option",
        "label": "Place wood to the fire box.",
        "keywords": [],
        "branch": "engine.options.15.1",
        "next": "engine.options.16"
    },
    "engine.options.15.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "engine.options.15.2"
    },
    "engine.options.15.2": {
        "type": "text",
        "text": "lace wood to the fire box.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.15.3"
    },
    "engine.options.15.3": {
        "type": "call",
        "label": "boiler.wood",
        "branch": "boiler.wood",
        "next": "engine.options.15.4"
    },
    "engine.options.15.4": {
        "type": "text",
        "text": "The engineer’s match, an oiled length of rope with a burning wick, smoulders in a hasp.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.15.5"
    },
    "engine.options.15.5": {
        "type": "option",
        "label": "Use the match to ignite the boiler.",
        "keywords": [],
        "branch": "engine.options.15.5.1",
        "next": "amidships.exits"
    },
    "engine.options.15.5.1": {
        "type": "text",
        "text": "You u",
        "lift": "",
        "drop": "",
        "next": "engine.options.15.5.2"
    },
    "engine.options.15.5.2": {
        "type": "text",
        "text": "se the match to ignite the boiler.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.15.5.3"
    },
    "engine.options.15.5.3": {
        "type": "set",
        "variable": "boiler.fire",
        "expression": [
            "+",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "amidships.exits"
    },
    "engine.options.16": {
        "type": "option",
        "label": "Close the boiler door.",
        "keywords": [],
        "branch": "engine.options.16.1",
        "next": "engine.options.17"
    },
    "engine.options.16.1": {
        "type": "text",
        "text": "You c",
        "lift": "",
        "drop": "",
        "next": "engine.options.16.2"
    },
    "engine.options.16.2": {
        "type": "text",
        "text": "lose the boiler door.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.16.3"
    },
    "engine.options.16.3": {
        "type": "set",
        "variable": "boiler.door",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "engine.options"
    },
    "engine.options.17": {
        "type": "jump",
        "condition": [
            "==",
            [
                "get",
                "boiler.door"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "engine.options.18",
        "next": "amidships.exits"
    },
    "engine.options.18": {
        "type": "text",
        "text": "The fire box hatch is closed.",
        "lift": " ",
        "drop": " ",
        "next": "engine.options.19"
    },
    "engine.options.19": {
        "type": "option",
        "label": "Open the boiler door.",
        "keywords": [],
        "branch": "engine.options.19.1",
        "next": "amidships.exits"
    },
    "engine.options.19.1": {
        "type": "text",
        "text": "You o",
        "lift": "",
        "drop": "",
        "next": "engine.options.19.2"
    },
    "engine.options.19.2": {
        "type": "text",
        "text": "pen the boiler door.",
        "lift": "",
        "drop": " ",
        "next": "engine.options.19.3"
    },
    "engine.options.19.3": {
        "type": "set",
        "variable": "boiler.door",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "engine.options"
    },
    "amidships.exits": {
        "type": "call",
        "label": "boiler.gauges",
        "branch": "boiler.gauges",
        "next": "amidships.exits.1"
    },
    "amidships.exits.1": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "^",
                [
                    "<",
                    [
                        "get",
                        "boiler.water"
                    ],
                    [
                        "get",
                        "boiler.capacity.water"
                    ]
                ],
                [
                    ">",
                    [
                        "get",
                        "reservoir.water"
                    ],
                    [
                        "val",
                        0
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "amidships.exits.2",
        "next": "amidships.exits.4"
    },
    "amidships.exits.2": {
        "type": "text",
        "text": "A water pump stands ready to fill the boiler.",
        "lift": " ",
        "drop": " ",
        "next": "amidships.exits.3"
    },
    "amidships.exits.3": {
        "type": "option",
        "label": "Pump water into the boiler.",
        "keywords": [],
        "branch": "amidships.exits.3.1",
        "next": "amidships.exits.4"
    },
    "amidships.exits.3.1": {
        "type": "text",
        "text": "You p",
        "lift": "",
        "drop": "",
        "next": "amidships.exits.3.2"
    },
    "amidships.exits.3.2": {
        "type": "text",
        "text": "ump water into the boiler.",
        "lift": "",
        "drop": " ",
        "next": "amidships.exits.3.3"
    },
    "amidships.exits.3.3": {
        "type": "call",
        "label": "boiler.water",
        "branch": "boiler.water",
        "next": "engine.options"
    },
    "amidships.exits.4": {
        "type": "jump",
        "condition": [
            "!=",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                0
            ]
        ],
        "branch": "amidships.exits.5",
        "next": "amidships.exits.6"
    },
    "amidships.exits.5": {
        "type": "option",
        "label": "Stand for a bit and wait for the boiler’s gauges to change.",
        "keywords": [],
        "branch": "amidships.exits.5.1",
        "next": "amidships.exits.6"
    },
    "amidships.exits.5.1": {
        "type": "text",
        "text": "You s",
        "lift": "",
        "drop": "",
        "next": "amidships.exits.5.2"
    },
    "amidships.exits.5.2": {
        "type": "text",
        "text": "tand for a bit and wait for the boiler’s gauges to change.",
        "lift": "",
        "drop": " ",
        "next": "amidships.exits.5.3"
    },
    "amidships.exits.5.3": {
        "type": "call",
        "label": "tick",
        "branch": "tick",
        "next": "amidships.exits.5.4"
    },
    "amidships.exits.5.4": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "amidships.exits.5.4.1",
            "amidships.exits.5.4.2"
        ]
    },
    "amidships.exits.5.4.1": {
        "type": "goto",
        "next": null
    },
    "amidships.exits.5.4.2": {
        "type": "goto",
        "next": "engine.options"
    },
    "amidships.exits.6": {
        "type": "option",
        "label": "Depart the boiler shed on the port side.",
        "keywords": [],
        "branch": "amidships.exits.6.1",
        "next": "amidships.exits.7"
    },
    "amidships.exits.6.1": {
        "type": "text",
        "text": "You d",
        "lift": "",
        "drop": "",
        "next": "amidships.exits.6.2"
    },
    "amidships.exits.6.2": {
        "type": "text",
        "text": "epart the boiler shed on the port side.",
        "lift": "",
        "drop": " ",
        "next": "port"
    },
    "amidships.exits.7": {
        "type": "option",
        "label": "Depart the boiler shed on the starboard side.",
        "keywords": [],
        "branch": "amidships.exits.7.1",
        "next": "amidships.exits.8"
    },
    "amidships.exits.7.1": {
        "type": "text",
        "text": "You d",
        "lift": "",
        "drop": "",
        "next": "amidships.exits.7.2"
    },
    "amidships.exits.7.2": {
        "type": "text",
        "text": "epart the boiler shed on the starboard side.",
        "lift": "",
        "drop": " ",
        "next": "starboard"
    },
    "amidships.exits.8": {
        "type": "prompt"
    },
    "boiler.gauges": {
        "type": "text",
        "text": "The boiler’s water level gauge shows",
        "lift": " ",
        "drop": " ",
        "next": "boiler.gauges.1"
    },
    "boiler.gauges.1": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "boiler.water"
            ],
            [
                "val",
                900
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "boiler.gauges.1.1",
            "boiler.gauges.1.2"
        ]
    },
    "boiler.gauges.1.1": {
        "type": "text",
        "text": "the meniscus right up to the top",
        "lift": " ",
        "drop": "",
        "next": "boiler.gauges.2"
    },
    "boiler.gauges.1.2": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "boiler.water"
            ],
            [
                "val",
                100
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "boiler.gauges.1.2.0.1",
            "boiler.gauges.1.2.0.2"
        ]
    },
    "boiler.gauges.1.2.0.1": {
        "type": "text",
        "text": "the meniscus in the window around",
        "lift": " ",
        "drop": " ",
        "next": "boiler.gauges.1.2.0.1.1"
    },
    "boiler.gauges.1.2.0.1.1": {
        "type": "print",
        "expression": [
            "/",
            [
                "get",
                "boiler.water"
            ],
            [
                "val",
                10
            ]
        ],
        "next": "boiler.gauges.1.2.0.1.2"
    },
    "boiler.gauges.1.2.0.1.2": {
        "type": "text",
        "text": "gallons",
        "lift": " ",
        "drop": "",
        "next": "boiler.gauges.2"
    },
    "boiler.gauges.1.2.0.2": {
        "type": "text",
        "text": "nothing",
        "lift": " ",
        "drop": "",
        "next": "boiler.gauges.2"
    },
    "boiler.gauges.2": {
        "type": "text",
        "text": ". The temperature gauge reads",
        "lift": "",
        "drop": " ",
        "next": "boiler.gauges.3"
    },
    "boiler.gauges.3": {
        "type": "print",
        "expression": [
            "get",
            "boiler.temperature"
        ],
        "next": "boiler.gauges.4"
    },
    "boiler.gauges.4": {
        "type": "text",
        "text": ". The pressure gauge reads",
        "lift": "",
        "drop": " ",
        "next": "boiler.gauges.5"
    },
    "boiler.gauges.5": {
        "type": "print",
        "expression": [
            "get",
            "boiler.pressure"
        ],
        "next": "boiler.gauges.6"
    },
    "boiler.gauges.6": {
        "type": "text",
        "text": ".",
        "lift": "",
        "drop": " ",
        "next": null
    },
    "boiler.wood": {
        "type": "switch",
        "expression": [
            "==",
            [
                "<",
                [
                    "get",
                    "wood"
                ],
                [
                    "-",
                    [
                        "get",
                        "boiler.capacity.wood"
                    ],
                    [
                        "get",
                        "boiler.wood"
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "boiler.wood.0.1",
            "boiler.wood.0.2"
        ]
    },
    "boiler.wood.0.1": {
        "type": "text",
        "text": "These are the last",
        "lift": " ",
        "drop": " ",
        "next": "boiler.wood.0.1.1"
    },
    "boiler.wood.0.1.1": {
        "type": "print",
        "expression": [
            "/",
            [
                "get",
                "wood"
            ],
            [
                "val",
                10
            ]
        ],
        "next": "boiler.wood.0.1.2"
    },
    "boiler.wood.0.1.2": {
        "type": "text",
        "text": "logs aboard.",
        "lift": " ",
        "drop": " ",
        "next": "boiler.wood.0.1.3"
    },
    "boiler.wood.0.1.3": {
        "type": "set",
        "variable": "wood",
        "expression": [
            "get",
            "boiler.wood"
        ],
        "parameter": false,
        "next": "boiler.wood.0.1.4"
    },
    "boiler.wood.0.1.4": {
        "type": "set",
        "variable": "wood",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": null
    },
    "boiler.wood.0.2": {
        "type": "text",
        "text": "The wood fills the boiler.",
        "lift": " ",
        "drop": " ",
        "next": "boiler.wood.0.2.1"
    },
    "boiler.wood.0.2.1": {
        "type": "set",
        "variable": "wood",
        "expression": [
            "-",
            [
                "get",
                "wood"
            ],
            [
                "-",
                [
                    "get",
                    "boiler.capacity.wood"
                ],
                [
                    "get",
                    "boiler.wood"
                ]
            ]
        ],
        "parameter": false,
        "next": "boiler.wood.0.2.2"
    },
    "boiler.wood.0.2.2": {
        "type": "set",
        "variable": "boiler.wood",
        "expression": [
            "val",
            100
        ],
        "parameter": false,
        "next": "boiler.wood.0.2.3"
    },
    "boiler.wood.0.2.3": {
        "type": "print",
        "expression": [
            "/",
            [
                "get",
                "wood"
            ],
            [
                "val",
                10
            ]
        ],
        "next": "boiler.wood.0.2.4"
    },
    "boiler.wood.0.2.4": {
        "type": "text",
        "text": "split logs remain aboard.",
        "lift": " ",
        "drop": " ",
        "next": null
    },
    "boiler.water": {
        "type": "switch",
        "expression": [
            "==",
            [
                "<",
                [
                    "get",
                    "reservoir.water"
                ],
                [
                    "-",
                    [
                        "get",
                        "boiler.capacity.water"
                    ],
                    [
                        "get",
                        "boiler.water"
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "boiler.water.0.1",
            "boiler.water.0.2"
        ]
    },
    "boiler.water.0.1": {
        "type": "text",
        "text": "You pump water into the boiler until the reservoir runs dry.",
        "lift": " ",
        "drop": " ",
        "next": "boiler.water.0.1.1"
    },
    "boiler.water.0.1.1": {
        "type": "set",
        "variable": "boiler.water",
        "expression": [
            "get",
            "reservoir.water"
        ],
        "parameter": false,
        "next": "boiler.water.0.1.2"
    },
    "boiler.water.0.1.2": {
        "type": "set",
        "variable": "reservoir.water",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": null
    },
    "boiler.water.0.2": {
        "type": "text",
        "text": "You pump water until the boiler is full.",
        "lift": " ",
        "drop": " ",
        "next": "boiler.water.0.2.1"
    },
    "boiler.water.0.2.1": {
        "type": "set",
        "variable": "reservoir.water",
        "expression": [
            "-",
            [
                "get",
                "reservoir.water"
            ],
            [
                "-",
                [
                    "get",
                    "boiler.capacity.water"
                ],
                [
                    "get",
                    "boiler.water"
                ]
            ]
        ],
        "parameter": false,
        "next": "boiler.water.0.2.2"
    },
    "boiler.water.0.2.2": {
        "type": "set",
        "variable": "boiler.water",
        "expression": [
            "get",
            "boiler.capacity.water"
        ],
        "parameter": false,
        "next": null
    },
    "init": {
        "type": "set",
        "variable": "wood",
        "expression": [
            "val",
            1000
        ],
        "parameter": false,
        "next": "init.1"
    },
    "init.1": {
        "type": "set",
        "variable": "reservoir.water",
        "expression": [
            "val",
            1000
        ],
        "parameter": false,
        "next": "init.2"
    },
    "init.2": {
        "type": "set",
        "variable": "boiler.capacity.wood",
        "expression": [
            "val",
            100
        ],
        "parameter": false,
        "next": "init.3"
    },
    "init.3": {
        "type": "set",
        "variable": "boiler.capacity.water",
        "expression": [
            "val",
            1000
        ],
        "parameter": false,
        "next": "init.4"
    },
    "init.4": {
        "type": "set",
        "variable": "boiler.volume",
        "expression": [
            "val",
            1200
        ],
        "parameter": false,
        "next": "init.5"
    },
    "init.5": {
        "type": "set",
        "variable": "tank.helium",
        "expression": [
            "val",
            30000
        ],
        "parameter": false,
        "next": "init.6"
    },
    "init.6": {
        "type": "set",
        "variable": "manifold.volume",
        "expression": [
            "val",
            10000
        ],
        "parameter": false,
        "next": "init.7"
    },
    "init.7": {
        "type": "set",
        "variable": "ballast.starboard",
        "expression": [
            "val",
            5
        ],
        "parameter": false,
        "next": "init.8"
    },
    "init.8": {
        "type": "set",
        "variable": "ballast.port",
        "expression": [
            "val",
            5
        ],
        "parameter": false,
        "next": "init.9"
    },
    "init.9": {
        "type": "set",
        "variable": "barometric.pressure",
        "expression": [
            "+",
            [
                "val",
                50
            ],
            [
                "~",
                [
                    "val",
                    10
                ],
                [
                    "val",
                    10
                ]
            ]
        ],
        "parameter": false,
        "next": "init.10"
    },
    "init.10": {
        "type": "set",
        "variable": "altimeter.tare",
        "expression": [
            "+",
            [
                "val",
                50
            ],
            [
                "~",
                [
                    "val",
                    10
                ],
                [
                    "val",
                    10
                ]
            ]
        ],
        "parameter": false,
        "next": "init.11"
    },
    "init.11": {
        "type": "call",
        "label": "tick",
        "branch": "tick",
        "next": null
    },
    "roll": {
        "type": "set",
        "variable": "roll.next",
        "expression": [
            "-",
            [
                "get",
                "ballast.port"
            ],
            [
                "get",
                "ballast.starboard"
            ]
        ],
        "parameter": false,
        "next": "roll.1"
    },
    "roll.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                "==",
                [
                    "get",
                    "altitude"
                ],
                [
                    "val",
                    0
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.1.1",
            "roll.1.2"
        ]
    },
    "roll.1.1": {
        "type": "set",
        "variable": "roll.next",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "roll.2"
    },
    "roll.1.2": {
        "type": "goto",
        "next": "roll.2"
    },
    "roll.2": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "roll.next"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.2.1",
            "roll.2.2"
        ]
    },
    "roll.2.1": {
        "type": "set",
        "variable": "roll.magnitude",
        "expression": [
            "-",
            [
                "val",
                0
            ],
            [
                "get",
                "roll.next"
            ]
        ],
        "parameter": false,
        "next": "roll.2.1.1"
    },
    "roll.2.1.1": {
        "type": "set",
        "variable": "roll.next",
        "expression": [
            "-",
            [
                "val",
                0
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "roll.3"
    },
    "roll.2.2": {
        "type": "goto",
        "next": "roll.3"
    },
    "roll.3": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "roll.next"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.3.1",
            "roll.3.2"
        ]
    },
    "roll.3.1": {
        "type": "set",
        "variable": "roll.magnitude",
        "expression": [
            "get",
            "roll.next"
        ],
        "parameter": false,
        "next": "roll.3.1.1"
    },
    "roll.3.1.1": {
        "type": "set",
        "variable": "roll.next",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "roll.4"
    },
    "roll.3.2": {
        "type": "goto",
        "next": "roll.4"
    },
    "roll.4": {
        "type": "switch",
        "expression": [
            "==",
            [
                "!=",
                [
                    "get",
                    "roll"
                ],
                [
                    "get",
                    "roll.next"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.1",
            "roll.4.2"
        ]
    },
    "roll.4.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "get",
                    "roll.next"
                ],
                [
                    "get",
                    "0"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.1.0.1",
            "roll.4.1.0.2"
        ]
    },
    "roll.4.1.0.1": {
        "type": "text",
        "text": "The airship lists to port.",
        "lift": " ",
        "drop": " ",
        "next": "roll.4.1.1"
    },
    "roll.4.1.0.2": {
        "type": "goto",
        "next": "roll.4.1.1"
    },
    "roll.4.1.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                "<",
                [
                    "get",
                    "roll.next"
                ],
                [
                    "get",
                    "0"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.1.1.1",
            "roll.4.1.1.2"
        ]
    },
    "roll.4.1.1.1": {
        "type": "text",
        "text": "The airship lists to starboard.",
        "lift": " ",
        "drop": " ",
        "next": "roll.4.1.2"
    },
    "roll.4.1.1.2": {
        "type": "goto",
        "next": "roll.4.1.2"
    },
    "roll.4.1.2": {
        "type": "switch",
        "expression": [
            "==",
            [
                "==",
                [
                    "get",
                    "roll.next"
                ],
                [
                    "get",
                    "0"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.1.2.1",
            "roll.4.1.2.2"
        ]
    },
    "roll.4.1.2.1": {
        "type": "text",
        "text": "The airship’s listing stabilizes.",
        "lift": " ",
        "drop": " ",
        "next": "roll.5"
    },
    "roll.4.1.2.2": {
        "type": "goto",
        "next": "roll.5"
    },
    "roll.4.2": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "get",
                    "roll.next"
                ],
                [
                    "get",
                    "0"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.2.0.1",
            "roll.4.2.0.2"
        ]
    },
    "roll.4.2.0.1": {
        "type": "text",
        "text": "The airship still lists to port.",
        "lift": " ",
        "drop": " ",
        "next": "roll.4.2.1"
    },
    "roll.4.2.0.2": {
        "type": "goto",
        "next": "roll.4.2.1"
    },
    "roll.4.2.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                "<",
                [
                    "get",
                    "roll.next"
                ],
                [
                    "get",
                    "0"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.4.2.1.1",
            "roll.4.2.1.2"
        ]
    },
    "roll.4.2.1.1": {
        "type": "text",
        "text": "The airship still lists to starboard.",
        "lift": " ",
        "drop": " ",
        "next": "roll.5"
    },
    "roll.4.2.1.2": {
        "type": "goto",
        "next": "roll.5"
    },
    "roll.5": {
        "type": "set",
        "variable": "roll",
        "expression": [
            "get",
            "roll.next"
        ],
        "parameter": false,
        "next": "roll.6"
    },
    "roll.6": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "roll.magnitude"
            ],
            [
                "val",
                2
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "roll.6.1",
            "roll.6.2"
        ]
    },
    "roll.6.1": {
        "type": "text",
        "text": "The angle becomes too steep and the masts explode in splinters. You plummet from the sky.",
        "lift": " ",
        "drop": " ",
        "next": "roll.6.1.1"
    },
    "roll.6.1.1": {
        "type": "set",
        "variable": "conclusion",
        "expression": [
            "val",
            3
        ],
        "parameter": false,
        "next": null
    },
    "roll.6.2": {
        "type": "goto",
        "next": null
    },
    "tick": {
        "type": "set",
        "variable": "time",
        "expression": [
            "+",
            [
                "get",
                "time"
            ],
            [
                "val",
                1
            ]
        ],
        "parameter": false,
        "next": "tick.1"
    },
    "tick.1": {
        "type": "text",
        "text": "Time passes.",
        "lift": " ",
        "drop": " ",
        "next": "tick.2"
    },
    "tick.2": {
        "type": "set",
        "variable": "barometric.pressure",
        "expression": [
            "+",
            [
                "get",
                "barometric.pressure"
            ],
            [
                "-",
                [
                    "~",
                    [
                        "val",
                        1
                    ],
                    [
                        "val",
                        6
                    ]
                ],
                [
                    "val",
                    3
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.3"
    },
    "tick.3": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "barometric.pressure"
            ],
            [
                "val",
                150
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.3.1",
            "tick.3.2"
        ]
    },
    "tick.3.1": {
        "type": "set",
        "variable": "barometric.pressure",
        "expression": [
            "+",
            [
                "val",
                150
            ],
            [
                "~",
                [
                    "val",
                    1
                ],
                [
                    "val",
                    10
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.4"
    },
    "tick.3.2": {
        "type": "goto",
        "next": "tick.4"
    },
    "tick.4": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "barometric.pressure"
            ],
            [
                "val",
                250
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.4.1",
            "tick.4.2"
        ]
    },
    "tick.4.1": {
        "type": "set",
        "variable": "barometric.pressure",
        "expression": [
            "-",
            [
                "val",
                250
            ],
            [
                "~",
                [
                    "val",
                    1
                ],
                [
                    "val",
                    10
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.5"
    },
    "tick.4.2": {
        "type": "goto",
        "next": "tick.5"
    },
    "tick.5": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "nozzle"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.5.1",
            "tick.5.2"
        ]
    },
    "tick.5.1": {
        "type": "text",
        "text": "Water rushes out of the keel.",
        "lift": " ",
        "drop": " ",
        "next": "tick.5.1.1"
    },
    "tick.5.1.1": {
        "type": "set",
        "variable": "reservoir.water",
        "expression": [
            "-",
            [
                "get",
                "reservoir.water"
            ],
            [
                "val",
                100
            ]
        ],
        "parameter": false,
        "next": "tick.5.1.2"
    },
    "tick.5.1.2": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "reservoir.water"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.5.1.2.1",
            "tick.5.1.2.2"
        ]
    },
    "tick.5.1.2.1": {
        "type": "set",
        "variable": "reservoir.water",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.6"
    },
    "tick.5.1.2.2": {
        "type": "goto",
        "next": "tick.6"
    },
    "tick.5.2": {
        "type": "goto",
        "next": "tick.6"
    },
    "tick.6": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "manifold.valve"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.6.1",
            "tick.6.2"
        ]
    },
    "tick.6.1": {
        "type": "set",
        "variable": "manifold.valve.flow",
        "expression": [
            "get",
            "manifold.valve"
        ],
        "parameter": false,
        "next": "tick.6.1.1"
    },
    "tick.6.1.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "get",
                    "manifold.valve.flow"
                ],
                [
                    "get",
                    "tank.helium"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.6.1.1.1",
            "tick.6.1.1.2"
        ]
    },
    "tick.6.1.1.1": {
        "type": "set",
        "variable": "manifold.valve.flow",
        "expression": [
            "get",
            "tank.helium"
        ],
        "parameter": false,
        "next": "tick.6.1.2"
    },
    "tick.6.1.1.2": {
        "type": "goto",
        "next": "tick.6.1.2"
    },
    "tick.6.1.2": {
        "type": "switch",
        "expression": [
            "==",
            [
                "<",
                [
                    "get",
                    "manifold.volume"
                ],
                [
                    "+",
                    [
                        "get",
                        "manifold.helium"
                    ],
                    [
                        "get",
                        "manifold.valve.flow"
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.6.1.2.1",
            "tick.6.1.2.2"
        ]
    },
    "tick.6.1.2.1": {
        "type": "set",
        "variable": "manifold.valve.flow",
        "expression": [
            "-",
            [
                "get",
                "manifold.volume"
            ],
            [
                "get",
                "manifold.helium"
            ]
        ],
        "parameter": false,
        "next": "tick.6.1.3"
    },
    "tick.6.1.2.2": {
        "type": "goto",
        "next": "tick.6.1.3"
    },
    "tick.6.1.3": {
        "type": "set",
        "variable": "manifold.helium",
        "expression": [
            "+",
            [
                "get",
                "manifold.helium"
            ],
            [
                "get",
                "manifold.valve.flow"
            ]
        ],
        "parameter": false,
        "next": "tick.6.1.4"
    },
    "tick.6.1.4": {
        "type": "set",
        "variable": "tank.helium",
        "expression": [
            "-",
            [
                "get",
                "tank.helium"
            ],
            [
                "get",
                "manifold.valve.flow"
            ]
        ],
        "parameter": false,
        "next": "tick.7"
    },
    "tick.6.2": {
        "type": "goto",
        "next": "tick.7"
    },
    "tick.7": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "manifold.vent"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.7.1",
            "tick.7.2"
        ]
    },
    "tick.7.1": {
        "type": "set",
        "variable": "manifold.helium",
        "expression": [
            "*",
            [
                "get",
                "manifold.helium"
            ],
            [
                "val",
                5
            ]
        ],
        "parameter": false,
        "next": "tick.7.1.1"
    },
    "tick.7.1.1": {
        "type": "set",
        "variable": "manifold.helium",
        "expression": [
            "/",
            [
                "get",
                "manifold.helium"
            ],
            [
                "val",
                6
            ]
        ],
        "parameter": false,
        "next": "tick.8"
    },
    "tick.7.2": {
        "type": "goto",
        "next": "tick.8"
    },
    "tick.8": {
        "type": "set",
        "variable": "manifold.helium",
        "expression": [
            "*",
            [
                "get",
                "manifold.helium"
            ],
            [
                "val",
                20
            ]
        ],
        "parameter": false,
        "next": "tick.9"
    },
    "tick.9": {
        "type": "set",
        "variable": "manifold.helium",
        "expression": [
            "/",
            [
                "get",
                "manifold.helium"
            ],
            [
                "val",
                21
            ]
        ],
        "parameter": false,
        "next": "tick.10"
    },
    "tick.10": {
        "type": "set",
        "variable": "altitude.target",
        "expression": [
            "-",
            [
                "-",
                [
                    "-",
                    [
                        "-",
                        [
                            "-",
                            [
                                "-",
                                [
                                    "*",
                                    [
                                        "get",
                                        "manifold.helium"
                                    ],
                                    [
                                        "val",
                                        2
                                    ]
                                ],
                                [
                                    "*",
                                    [
                                        "get",
                                        "ballast.starboard"
                                    ],
                                    [
                                        "val",
                                        50
                                    ]
                                ]
                            ],
                            [
                                "*",
                                [
                                    "get",
                                    "ballast.port"
                                ],
                                [
                                    "val",
                                    50
                                ]
                            ]
                        ],
                        [
                            "get",
                            "bolier.water"
                        ]
                    ],
                    [
                        "get",
                        "boiler.ash"
                    ]
                ],
                [
                    "get",
                    "wood"
                ]
            ],
            [
                "get",
                "reservoir.water"
            ]
        ],
        "parameter": false,
        "next": "tick.11"
    },
    "tick.11": {
        "type": "set",
        "variable": "altitude.next",
        "expression": [
            "/",
            [
                "+",
                [
                    "*",
                    [
                        "get",
                        "altitude"
                    ],
                    [
                        "val",
                        10
                    ]
                ],
                [
                    "get",
                    "altitude.target"
                ]
            ],
            [
                "val",
                11
            ]
        ],
        "parameter": false,
        "next": "tick.12"
    },
    "tick.12": {
        "type": "set",
        "variable": "altitude.change",
        "expression": [
            "-",
            [
                "get",
                "altitude.next"
            ],
            [
                "get",
                "altitude"
            ]
        ],
        "parameter": false,
        "next": "tick.13"
    },
    "tick.13": {
        "type": "switch",
        "expression": [
            "==",
            [
                "^",
                [
                    "<",
                    [
                        "get",
                        "altitude.next"
                    ],
                    [
                        "val",
                        0
                    ]
                ],
                [
                    ">",
                    [
                        "get",
                        "altitude"
                    ],
                    [
                        "val",
                        0
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.13.1",
            "tick.13.2"
        ]
    },
    "tick.13.1": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "altitude.change"
            ],
            [
                "-",
                [
                    "val",
                    0
                ],
                [
                    "val",
                    20
                ]
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.13.1.0.1",
            "tick.13.1.0.2"
        ]
    },
    "tick.13.1.0.1": {
        "type": "text",
        "text": "The airship plummets into land with devestating force, terminating your voyage and immediately also your story.",
        "lift": " ",
        "drop": " ",
        "next": "tick.13.1.0.1.1"
    },
    "tick.13.1.0.1.1": {
        "type": "set",
        "variable": "conclusion",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "tick.13.1.1"
    },
    "tick.13.1.0.2": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "speed"
            ],
            [
                "val",
                10
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.13.1.0.2.0.1",
            "tick.13.1.0.2.0.2"
        ]
    },
    "tick.13.1.0.2.0.1": {
        "type": "text",
        "text": "The airship plows into the ground with its momentum, ruining what might otherwise have been a gentle landing.",
        "lift": " ",
        "drop": " ",
        "next": "tick.13.1.1"
    },
    "tick.13.1.0.2.0.2": {
        "type": "text",
        "text": "The airship’s keel gently touches down. You have travelled",
        "lift": " ",
        "drop": " ",
        "next": "tick.13.1.0.2.0.2.1"
    },
    "tick.13.1.0.2.0.2.1": {
        "type": "print",
        "expression": [
            "/",
            [
                "get",
                "position"
            ],
            [
                "val",
                10
            ]
        ],
        "next": "tick.13.1.0.2.0.2.2"
    },
    "tick.13.1.0.2.0.2.2": {
        "type": "text",
        "text": "leagues since your ascent.",
        "lift": " ",
        "drop": " ",
        "next": "tick.13.1.0.2.0.2.3"
    },
    "tick.13.1.0.2.0.2.3": {
        "type": "set",
        "variable": "position",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.13.1.1"
    },
    "tick.13.1.1": {
        "type": "set",
        "variable": "altitude.next",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.14"
    },
    "tick.13.2": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "altitude.next"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.13.2.0.1",
            "tick.13.2.0.2"
        ]
    },
    "tick.13.2.0.1": {
        "type": "set",
        "variable": "altitude.next",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.13.2.1"
    },
    "tick.13.2.0.2": {
        "type": "goto",
        "next": "tick.13.2.1"
    },
    "tick.13.2.1": {
        "type": "set",
        "variable": "altitude.change",
        "expression": [
            "-",
            [
                "get",
                "altitude.next"
            ],
            [
                "get",
                "altitude"
            ]
        ],
        "parameter": false,
        "next": "tick.14"
    },
    "tick.14": {
        "type": "switch",
        "expression": [
            "==",
            [
                "^",
                [
                    ">",
                    [
                        "get",
                        "altitude.next"
                    ],
                    [
                        "val",
                        0
                    ]
                ],
                [
                    "<",
                    [
                        "get",
                        "altitude"
                    ],
                    [
                        "val",
                        0
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.14.1",
            "tick.14.2"
        ]
    },
    "tick.14.1": {
        "type": "text",
        "text": "The deck lurches upward and the ground falls away beneat the airship.",
        "lift": " ",
        "drop": " ",
        "next": "tick.15"
    },
    "tick.14.2": {
        "type": "goto",
        "next": "tick.15"
    },
    "tick.15": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "altitude.change"
            ],
            [
                "val",
                87
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.15.1",
            "tick.15.2"
        ]
    },
    "tick.15.1": {
        "type": "set",
        "variable": "altitude.change",
        "expression": [
            "val",
            87
        ],
        "parameter": false,
        "next": "tick.16"
    },
    "tick.15.2": {
        "type": "goto",
        "next": "tick.16"
    },
    "tick.16": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "altitude.change"
            ],
            [
                "-",
                [
                    "val",
                    0
                ],
                [
                    "val",
                    87
                ]
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.16.1",
            "tick.16.2"
        ]
    },
    "tick.16.1": {
        "type": "set",
        "variable": "altitude.change",
        "expression": [
            "-",
            [
                "val",
                0
            ],
            [
                "val",
                87
            ]
        ],
        "parameter": false,
        "next": "tick.17"
    },
    "tick.16.2": {
        "type": "goto",
        "next": "tick.17"
    },
    "tick.17": {
        "type": "set",
        "variable": "altitude",
        "expression": [
            "+",
            [
                "get",
                "altitude"
            ],
            [
                "get",
                "altitude.change"
            ]
        ],
        "parameter": false,
        "next": "tick.18"
    },
    "tick.18": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "altitude"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.18.1",
            "tick.18.2"
        ]
    },
    "tick.18.1": {
        "type": "set",
        "variable": "altitude",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.19"
    },
    "tick.18.2": {
        "type": "goto",
        "next": "tick.19"
    },
    "tick.19": {
        "type": "set",
        "variable": "anemometer.vertical",
        "expression": [
            "/",
            [
                "get",
                "altitude.change"
            ],
            [
                "val",
                20
            ]
        ],
        "parameter": false,
        "next": "tick.20"
    },
    "tick.20": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "anemometer.vertical"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.20.1",
            "tick.20.2"
        ]
    },
    "tick.20.1": {
        "type": "set",
        "variable": "anemometer.vertical.direction",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.21"
    },
    "tick.20.2": {
        "type": "set",
        "variable": "anemometer.vertical.direction",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "tick.20.2.1"
    },
    "tick.20.2.1": {
        "type": "set",
        "variable": "anemometer.vertical",
        "expression": [
            "*",
            [
                "get",
                "anemometer.vertical"
            ],
            [
                "-",
                [
                    "val",
                    0
                ],
                [
                    "val",
                    1
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.21"
    },
    "tick.21": {
        "type": "set",
        "variable": "altimeter",
        "expression": [
            "-",
            [
                "+",
                [
                    "get",
                    "altitude"
                ],
                [
                    "get",
                    "barometric.pressure"
                ]
            ],
            [
                "get",
                "altimeter.tare"
            ]
        ],
        "parameter": false,
        "next": "tick.22"
    },
    "tick.22": {
        "type": "call",
        "label": "roll",
        "branch": "roll",
        "next": "tick.23"
    },
    "tick.23": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "conclusion"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.23.1",
            "tick.23.2"
        ]
    },
    "tick.23.1": {
        "type": "goto",
        "next": null
    },
    "tick.23.2": {
        "type": "goto",
        "next": "tick.24"
    },
    "tick.24": {
        "type": "switch",
        "expression": [
            "!=",
            [
                "get",
                "boiler.cracked"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1",
            "tick.24.2"
        ]
    },
    "tick.24.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.0.1",
            "tick.24.1.0.2"
        ]
    },
    "tick.24.1.0.1": {
        "type": "set",
        "variable": "boiler.fire",
        "expression": [
            "*",
            [
                "get",
                "boiler.fire"
            ],
            [
                "val",
                2
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.0.1.1"
    },
    "tick.24.1.0.1.1": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "boiler.fire"
            ],
            [
                "get",
                "boiler.wood"
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.0.1.1.1",
            "tick.24.1.0.1.1.2"
        ]
    },
    "tick.24.1.0.1.1.1": {
        "type": "set",
        "variable": "boiler.fire",
        "expression": [
            "get",
            "boiler.wood"
        ],
        "parameter": false,
        "next": "tick.24.1.0.1.2"
    },
    "tick.24.1.0.1.1.2": {
        "type": "goto",
        "next": "tick.24.1.0.1.2"
    },
    "tick.24.1.0.1.2": {
        "type": "switch",
        "expression": [
            "<",
            [
                "get",
                "boiler.wood"
            ],
            [
                "val",
                5
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.0.1.2.1",
            "tick.24.1.0.1.2.2"
        ]
    },
    "tick.24.1.0.1.2.1": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "+",
            [
                "get",
                "boiler.heat"
            ],
            [
                "*",
                [
                    "get",
                    "boiler.fire"
                ],
                [
                    "val",
                    20
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.0.1.2.1.1"
    },
    "tick.24.1.0.1.2.1.1": {
        "type": "set",
        "variable": "boiler.wood",
        "expression": [
            "-",
            [
                "get",
                "boiler.wood"
            ],
            [
                "val",
                5
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.0.1.2.1.2"
    },
    "tick.24.1.0.1.2.1.2": {
        "type": "set",
        "variable": "boiler.ash",
        "expression": [
            "+",
            [
                "get",
                "boiler.ash"
            ],
            [
                "val",
                2
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.1"
    },
    "tick.24.1.0.1.2.2": {
        "type": "goto",
        "next": "tick.24.1.1"
    },
    "tick.24.1.0.2": {
        "type": "goto",
        "next": "tick.24.1.1"
    },
    "tick.24.1.1": {
        "type": "set",
        "variable": "boiler.equilibrium",
        "expression": [
            "+",
            [
                "get",
                "boiler.water"
            ],
            [
                "get",
                "boiler.steam"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.2"
    },
    "tick.24.1.2": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "+",
                    [
                        "get",
                        "boiler.heat"
                    ],
                    [
                        "get",
                        "boiler.water"
                    ]
                ],
                [
                    "get",
                    "boiler.equilibrium"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.2.1",
            "tick.24.1.2.2"
        ]
    },
    "tick.24.1.2.1": {
        "type": "set",
        "variable": "boiler.equilibrium",
        "expression": [
            "+",
            [
                "get",
                "boiler.water"
            ],
            [
                "get",
                "boiler.steam"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.3"
    },
    "tick.24.1.2.2": {
        "type": "goto",
        "next": "tick.24.1.3"
    },
    "tick.24.1.3": {
        "type": "set",
        "variable": "boiler.steam.next",
        "expression": [
            "/",
            [
                "+",
                [
                    "*",
                    [
                        "get",
                        "boiler.steam"
                    ],
                    [
                        "val",
                        4
                    ]
                ],
                [
                    "get",
                    "boiler.equilibrium"
                ]
            ],
            [
                "val",
                5
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.4"
    },
    "tick.24.1.4": {
        "type": "set",
        "variable": "boiler.delta",
        "expression": [
            "-",
            [
                "get",
                "boiler.steam.next"
            ],
            [
                "get",
                "boiler.steam"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.5"
    },
    "tick.24.1.5": {
        "type": "set",
        "variable": "boiler.water",
        "expression": [
            "-",
            [
                "get",
                "boiler.water"
            ],
            [
                "get",
                "boiler.delta"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.6"
    },
    "tick.24.1.6": {
        "type": "set",
        "variable": "boiler.steam",
        "expression": [
            "+",
            [
                "get",
                "boiler.steam"
            ],
            [
                "get",
                "boiler.delta"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.7"
    },
    "tick.24.1.7": {
        "type": "set",
        "variable": "boiler.pressure",
        "expression": [
            "/",
            [
                "*",
                [
                    "val",
                    100
                ],
                [
                    "get",
                    "boiler.steam"
                ]
            ],
            [
                "-",
                [
                    "get",
                    "boiler.volume"
                ],
                [
                    "get",
                    "boiler.water"
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.8"
    },
    "tick.24.1.8": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "*",
            [
                "get",
                "boiler.heat"
            ],
            [
                "val",
                6
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.9"
    },
    "tick.24.1.9": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "boiler.door"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.9.1",
            "tick.24.1.9.2"
        ]
    },
    "tick.24.1.9.1": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "/",
            [
                "get",
                "boiler.heat"
            ],
            [
                "val",
                9
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.10"
    },
    "tick.24.1.9.2": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "/",
            [
                "get",
                "boiler.heat"
            ],
            [
                "val",
                7
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.10"
    },
    "tick.24.1.10": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "get",
                    "boiler.heat"
                ],
                [
                    "get",
                    "boiler.water"
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.10.1",
            "tick.24.1.10.2"
        ]
    },
    "tick.24.1.10.1": {
        "type": "set",
        "variable": "boiler.temperature",
        "expression": [
            "val",
            100
        ],
        "parameter": false,
        "next": "tick.24.1.11"
    },
    "tick.24.1.10.2": {
        "type": "set",
        "variable": "boiler.temperature",
        "expression": [
            "/",
            [
                "*",
                [
                    "val",
                    100
                ],
                [
                    "get",
                    "boiler.heat"
                ]
            ],
            [
                "get",
                "boiler.water"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.11"
    },
    "tick.24.1.11": {
        "type": "switch",
        "expression": [
            "==",
            [
                "^",
                [
                    ">",
                    [
                        "get",
                        "boiler.heat"
                    ],
                    [
                        "val",
                        1000
                    ]
                ],
                [
                    "<",
                    [
                        "+",
                        [
                            "get",
                            "boiler.water"
                        ],
                        [
                            "get",
                            "boiler.steam"
                        ]
                    ],
                    [
                        "val",
                        100
                    ]
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.11.1",
            "tick.24.1.11.2"
        ]
    },
    "tick.24.1.11.1": {
        "type": "set",
        "variable": "boiler.cracked",
        "expression": [
            "val",
            1
        ],
        "parameter": false,
        "next": "tick.24.1.11.1.1"
    },
    "tick.24.1.11.1.1": {
        "type": "switch",
        "expression": [
            "==",
            [
                ">",
                [
                    "get",
                    "boiler.steam"
                ],
                [
                    "val",
                    100
                ]
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.11.1.1.1",
            "tick.24.1.11.1.1.2"
        ]
    },
    "tick.24.1.11.1.1.1": {
        "type": "text",
        "text": "The boiler explodes as steam vents through numerous cracks in its heat-brittled shell.",
        "lift": " ",
        "drop": " ",
        "next": "tick.24.1.11.1.1.1.1"
    },
    "tick.24.1.11.1.1.1.1": {
        "type": "switch",
        "expression": [
            "<=",
            [
                "get",
                "altitude"
            ],
            [
                "val",
                40
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.11.1.1.1.1.1",
            "tick.24.1.11.1.1.1.1.2"
        ]
    },
    "tick.24.1.11.1.1.1.1.1": {
        "type": "text",
        "text": "Shards of the ruptured pressure tank shred through the vessel’s tackle and manifold, leaving you briefly weightless and suddenly deceased.",
        "lift": " ",
        "drop": " ",
        "next": "tick.24.1.11.1.1.1.1.1.1"
    },
    "tick.24.1.11.1.1.1.1.1.1": {
        "type": "set",
        "variable": "conclusion",
        "expression": [
            "val",
            2
        ],
        "parameter": false,
        "next": "tick.24.1.11.1.2"
    },
    "tick.24.1.11.1.1.1.1.2": {
        "type": "text",
        "text": "You are fortunate to escape the cataclysm with your life.",
        "lift": " ",
        "drop": " ",
        "next": "tick.24.1.11.1.2"
    },
    "tick.24.1.11.1.1.2": {
        "type": "text",
        "text": "The boiler rings like a bell and a crack appears along its side.",
        "lift": " ",
        "drop": " ",
        "next": "tick.24.1.11.1.2"
    },
    "tick.24.1.11.1.2": {
        "type": "paragraph",
        "next": "tick.24.1.12"
    },
    "tick.24.1.11.2": {
        "type": "goto",
        "next": "tick.24.1.12"
    },
    "tick.24.1.12": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "throttle"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.12.1",
            "tick.24.1.12.2"
        ]
    },
    "tick.24.1.12.1": {
        "type": "set",
        "variable": "engine.pressure",
        "expression": [
            "/",
            [
                "get",
                "boiler.pressure"
            ],
            [
                "-",
                [
                    "val",
                    12
                ],
                [
                    "get",
                    "throttle"
                ]
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.13"
    },
    "tick.24.1.12.2": {
        "type": "set",
        "variable": "engine.pressure",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.24.1.13"
    },
    "tick.24.1.13": {
        "type": "set",
        "variable": "drive.speed.target",
        "expression": [
            "get",
            "engine.pressure"
        ],
        "parameter": false,
        "next": "tick.24.1.14"
    },
    "tick.24.1.14": {
        "type": "set",
        "variable": "drive.speed",
        "expression": [
            "/",
            [
                "+",
                [
                    "*",
                    [
                        "get",
                        "drive.speed"
                    ],
                    [
                        "val",
                        4
                    ]
                ],
                [
                    "get",
                    "drive.speed.target"
                ]
            ],
            [
                "val",
                5
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.15"
    },
    "tick.24.1.15": {
        "type": "set",
        "variable": "boiler.steam",
        "expression": [
            "-",
            [
                "get",
                "boiler.steam"
            ],
            [
                "get",
                "drive.speed"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.16"
    },
    "tick.24.1.16": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "-",
            [
                "get",
                "boiler.heat"
            ],
            [
                "get",
                "drive.speed"
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.17"
    },
    "tick.24.1.17": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "boiler.steam"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.17.1",
            "tick.24.1.17.2"
        ]
    },
    "tick.24.1.17.1": {
        "type": "set",
        "variable": "boiler.steam",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.24.1.18"
    },
    "tick.24.1.17.2": {
        "type": "goto",
        "next": "tick.24.1.18"
    },
    "tick.24.1.18": {
        "type": "switch",
        "expression": [
            ">=",
            [
                "get",
                "boiler.heat"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.18.1",
            "tick.24.1.18.2"
        ]
    },
    "tick.24.1.18.1": {
        "type": "set",
        "variable": "boiler.heat",
        "expression": [
            "val",
            0
        ],
        "parameter": false,
        "next": "tick.24.1.19"
    },
    "tick.24.1.18.2": {
        "type": "goto",
        "next": "tick.24.1.19"
    },
    "tick.24.1.19": {
        "type": "set",
        "variable": "anemometer.lateral",
        "expression": [
            "/",
            [
                "get",
                "speed"
            ],
            [
                "val",
                10
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.20"
    },
    "tick.24.1.20": {
        "type": "switch",
        "expression": [
            "==",
            [
                "get",
                "altitude"
            ],
            [
                "val",
                0
            ]
        ],
        "variable": null,
        "value": 0,
        "mode": "walk",
        "branches": [
            "tick.24.1.20.1",
            "tick.24.1.20.2"
        ]
    },
    "tick.24.1.20.1": {
        "type": "set",
        "variable": "speed",
        "expression": [
            "*",
            [
                "get",
                "speed"
            ],
            [
                "val",
                10
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.20.1.1"
    },
    "tick.24.1.20.1.1": {
        "type": "set",
        "variable": "speed",
        "expression": [
            "/",
            [
                "get",
                "speed"
            ],
            [
                "val",
                11
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.20.1.2"
    },
    "tick.24.1.20.1.2": {
        "type": "set",
        "variable": "speed",
        "expression": [
            "/",
            [
                "+",
                [
                    "*",
                    [
                        "get",
                        "speed"
                    ],
                    [
                        "val",
                        3
                    ]
                ],
                [
                    "get",
                    "drive.speed"
                ]
            ],
            [
                "val",
                4
            ]
        ],
        "parameter": false,
        "next": "tick.24.1.20.1.3"
    },
    "tick.24.1.20.1.3": {
        "type": "set",
        "variable": "position",
        "expression": [
            "+",
            [
                "get",
                "position"
            ],
            [
                "get",
                "speed"
            ]
        ],
        "parameter": false,
        "next": null
    },
    "tick.24.1.20.2": {
        "type": "goto",
        "next": null
    },
    "tick.24.2": {
        "type": "goto",
        "next": null
    }
}

}],["document.js","airship.aelf.land","document.js",{},function (require, exports, module, __filename, __dirname){

// airship.aelf.land/document.js
// -----------------------------

'use strict';

module.exports = Document;

function Document(element, redraw) {
    var self = this;
    this.document = element.ownerDocument;
    this.parent = element;
    this.container = null;
    this.element = null;
    this.engine = null;
    this.carry = '';
    this.cursor = null;
    this.next = null;
    this.options = null;
    this.p = false;
    this.br = false;
    this.onclick = onclick;
    this.redraw = redraw;
    function onclick(event) {
        self.answer(event.target.number);
    }
    Object.seal(this);
}

Document.prototype.write = function write(lift, text, drop) {
    var document = this.element.ownerDocument;
    if (this.p) {
        this.cursor = document.createElement("p");
        this.element.insertBefore(this.cursor, this.options);
        this.p = false;
        this.br = false;
    }
    if (this.br) {
        this.cursor.appendChild(document.createElement("br"));
        this.br = false;
    }
    this.cursor.appendChild(document.createTextNode((this.carry || lift) + text));
    this.carry = drop;
};

Document.prototype.break = function _break() {
    this.br = true;
};

Document.prototype.paragraph = function paragraph() {
    this.p = true;
};

Document.prototype.option = function option(number, label) {
    var document = this.element.ownerDocument;
    var tr = document.createElement("tr");
    this.options.appendChild(tr);
    var th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = number + '.';
    var td = document.createElement("td");
    td.innerText = label;
    td.number = number;
    td.onclick = this.onclick;
    tr.appendChild(td);
};

Document.prototype.flush = function flush() {
    this.redraw();
    // No-op (for console only)
};

Document.prototype.pardon = function pardon() {
    this.options.innerHTML = '';
};

Document.prototype.display = function display() {
    this.redraw();
    this.container.style.opacity = 0;
    this.container.style.transform = 'translateX(2ex)';
    this.parent.appendChild(this.container);

    // TODO not this
    var container = this.container;
    setTimeout(function () {
        container.style.opacity = 1;
        container.style.transform = 'translateX(0)';
    }, 10);
};

Document.prototype.clear = function clear() {
    if (this.container) {
        this.container.style.opacity = 0;
        this.container.style.transform = 'translateX(-2ex)';
        this.container.addEventListener("transitionend", this);
    }

    this.container = this.document.createElement("div");
    this.container.classList.add("parent");
    this.container.style.opacity = 0;
    var child = this.document.createElement("div");
    child.classList.add("child");
    this.container.appendChild(child);
    var outer = this.document.createElement("outer");
    outer.classList.add("outer");
    child.appendChild(outer);
    this.element = this.document.createElement("inner");
    this.element.classList.add("inner");
    outer.appendChild(this.element);
    this.options = this.document.createElement("table");
    this.element.appendChild(this.options);

    this.cursor = null;
    this.br = false;
    this.p = true;
    this.carry = '';
};

Document.prototype.handleEvent = function handleEvent(event) {
    if (event.target.parentNode !== this.parent) {
        this.parent.removeChild(event.target);
    }
};

Document.prototype.question = function question() {
};

Document.prototype.answer = function answer(text) {
    this.engine.answer(text);
};

Document.prototype.close = function close() {
};

}],["heavens.js","airship.aelf.land","heavens.js",{"ndim/point2":11},function (require, exports, module, __filename, __dirname){

// airship.aelf.land/heavens.js
// ----------------------------

"use strict";

var Point2 = require("ndim/point2");

var windowSize = new Point2();
var sceneSize = new Point2();
var documentSize = new Point2(2000, 1000);
var offset = new Point2();
var ratio = new Point2();

var solar = new Point2();
var lunar = new Point2();

module.exports = Heavens;

function Heavens(body, scope) {
    this.animator = scope.animator.add(this);
    this.animator.requestAnimation();
    this.window = scope.window;
    this.document = this.window.document;
    this.day = 0.5 / 14;
    this.day$ = 0;
    this.month = 0.5;
    this.phase = 'day';
    this.sheet = null;
    Object.seal(this);
}

Heavens.prototype.setSheet = function (sheet) {
    sheet.insertRule('body { color: black }', 0);
    this.sheet = sheet;
};

Heavens.prototype.animate = function animate() {
    var r = 0.99;
    this.day$ = this.day$ * r + this.day * (1 - r);

    var d = this.day - this.day$;
    if (Math.abs(d) > 0.001) {
        this.redraw();
    }
};

Heavens.prototype.redraw = function redraw() {
    var day = this.day$ % 1.0;
    var month = this.month;

    var scene = this.document.querySelector("#scene");
    windowSize.x = this.window.innerWidth;
    windowSize.y = this.window.innerHeight;
    ratio.x = windowSize.x / 2000;
    ratio.y = windowSize.y / 1000;
    var scale = ratio.x < ratio.y ? ratio.y : ratio.x;
    sceneSize.become(documentSize).scaleThis(scale);
    offset.become(windowSize).subThis(sceneSize).scaleThis(0.5);
    scene.setAttribute("transform",
        "translate(" + offset.x.toFixed(2) + ", " + offset.y.toFixed(2) + ")" +
        " " +
        "scale(" + scale.toFixed(2) + ")" +
        ""
    );
    scene.style.display = "inline";

    var breadth = windowSize.x / documentSize.x / scale * 500;

    //window.document.querySelector("#atmosphere").style.opacity = 0;
    solar.y = (-Math.sin(2 * Math.PI * day) * 1000 + 1000).toFixed(2);
    lunar.y = (-Math.sin(2 * Math.PI * day + 2 * Math.PI * month) * 1000 + 1000).toFixed(2);
    solar.x = (-Math.cos(2 * Math.PI * day) * breadth + 1000).toFixed(2);
    lunar.x = (-Math.cos(2 * Math.PI * day + 2 * Math.PI * month) * breadth + 1000).toFixed(2);
    var cycle =
        Math.sin(2 * Math.PI * day) / 1 +
        Math.sin(6 * Math.PI * day) / 3 +
        Math.sin(10 * Math.PI * day) / 5 +
        Math.sin(14 * Math.PI * day) / 7;
        //Math.sin(18 * Math.PI * day) / 9;
    var clamped = Math.min(1, Math.max(-1, cycle * 1.5));
    var opacity = clamped / 2 + .5;
    this.document.querySelector("#atmosphere").style.opacity = opacity;
    var rotation = (day * 360).toFixed(2);
    this.document.querySelector("#stars").setAttribute("transform", "translate(1000, 750) rotate(" + rotation + ")");
    this.document.querySelector("#sun").setAttribute("transform", "translate(" + solar.x + ", " + solar.y + ")");
    this.document.querySelector("#moon").setAttribute("transform", "translate(" + lunar.x + ", " + lunar.y + ")");

    var phase = day < 0.5 ? 'day' : 'night';
    if (phase !== this.phase) {
        this.sheet.deleteRule(0);
        if (day < 0.5) {
            this.sheet.insertRule('body { color: black; }', 0);
        } else {
            this.sheet.insertRule('body { color: hsla(240, 25.00%, 83.00%, 1); text-shadow: black 0 0 5pt; }', 0);
        }
        this.phase = phase;
    }
};

}],["index.js","airship.aelf.land","index.js",{"blick":4,"inkblot/engine":5,"./document":1,"./airship.json":0,"./heavens":2},function (require, exports, module, __filename, __dirname){

// airship.aelf.land/index.js
// --------------------------

'use strict';
var Animator = require('blick');;
var Engine = require('inkblot/engine');
var Document = require('./document');
var story = require('./airship.json');
var Heavens = require('./heavens');

var scope = {};
scope.window = window;
scope.animator = new Animator();

var style = document.getElementById('style');

var heavens = new Heavens(null, scope);
heavens.setSheet(style.sheet);
var doc = new Document(document.body, redraw);
var engine = new Engine({
    story: story, 
    render: doc, 
    dialog: doc
});

doc.clear();
engine.continue();

function redraw() {
    var hour = engine.top.get('time') / 2;
    var day = (hour + 0.5) / 14;
    heavens.day = day;
    heavens.month = 0.5;
}
redraw();

window.onkeypress = function onkeypress(event) {
    if (engine.top.get('end')) {
        return;
    }
    var key = event.key || String.fromCharCode(event.charCode);
    var match = /^(\d+)$/.exec(key);
    if (match) {
        engine.answer(match[1]);
    }
    redraw();
};

}],["animator.js","blick","animator.js",{"raf":14},function (require, exports, module, __filename, __dirname){

// blick/animator.js
// -----------------

"use strict";

var defaultRequestAnimation = require("raf");

module.exports = Animator;

function Animator(requestAnimation) {
    var self = this;
    self._requestAnimation = requestAnimation || defaultRequestAnimation;
    self.controllers = [];
    // This thunk is doomed to deoptimization for multiple reasons, but passes
    // off as quickly as possible to the unrolled animation loop.
    self._animate = function () {
        try {
            self.animate(Date.now());
        } catch (error) {
            self.requestAnimation();
            throw error;
        }
    };
}

Animator.prototype.requestAnimation = function () {
    if (!this.requested) {
        this._requestAnimation(this._animate);
    }
    this.requested = true;
};

Animator.prototype.animate = function (now) {
    var node, temp;

    this.requested = false;

    // Measure
    for (var index = 0; index < this.controllers.length; index++) {
        var controller = this.controllers[index];
        if (controller.measure) {
            controller.component.measure(now);
            controller.measure = false;
        }
    }

    // Transition
    for (var index = 0; index < this.controllers.length; index++) {
        var controller = this.controllers[index];
        // Unlke others, skipped if draw or redraw are scheduled and left on
        // the schedule for the next animation frame.
        if (controller.transition) {
            if (!controller.draw && !controller.redraw) {
                controller.component.transition(now);
                controller.transition = false;
            } else {
                this.requestAnimation();
            }
        }
    }

    // Animate
    // If any components have animation set, continue animation.
    for (var index = 0; index < this.controllers.length; index++) {
        var controller = this.controllers[index];
        if (controller.animate) {
            controller.component.animate(now);
            this.requestAnimation();
            // Unlike others, not reset implicitly.
        }
    }

    // Draw
    for (var index = 0; index < this.controllers.length; index++) {
        var controller = this.controllers[index];
        if (controller.draw) {
            controller.component.draw(now);
            controller.draw = false;
        }
    }

    // Redraw
    for (var index = 0; index < this.controllers.length; index++) {
        var controller = this.controllers[index];
        if (controller.redraw) {
            controller.component.redraw(now);
            controller.redraw = false;
        }
    }
};

Animator.prototype.add = function (component) {
    var controller = new AnimationController(component, this);
    this.controllers.push(controller);
    return controller;
};

function AnimationController(component, controller) {
    this.component = component;
    this.controller = controller;

    this.measure = false;
    this.transition = false;
    this.animate = false;
    this.draw = false;
    this.redraw = false;
}

AnimationController.prototype.destroy = function () {
};

AnimationController.prototype.requestMeasure = function () {
    if (!this.component.measure) {
        throw new Error("Can't requestMeasure because component does not implement measure");
    }
    this.measure = true;
    this.controller.requestAnimation();
};

AnimationController.prototype.cancelMeasure = function () {
    this.measure = false;
};

AnimationController.prototype.requestTransition = function () {
    if (!this.component.transition) {
        throw new Error("Can't requestTransition because component does not implement transition");
    }
    this.transition = true;
    this.controller.requestAnimation();
};

AnimationController.prototype.cancelTransition = function () {
    this.transition = false;
};

AnimationController.prototype.requestAnimation = function () {
    if (!this.component.animate) {
        throw new Error("Can't requestAnimation because component does not implement animate");
    }
    this.animate = true;
    this.controller.requestAnimation();
};

AnimationController.prototype.cancelAnimation = function () {
    this.animate = false;
};

AnimationController.prototype.requestDraw = function () {
    if (!this.component.draw) {
        throw new Error("Can't requestDraw because component does not implement draw");
    }
    this.draw = true;
    this.controller.requestAnimation();
};

AnimationController.prototype.cancelDraw = function () {
    this.draw = false;
};

AnimationController.prototype.requestRedraw = function () {
    if (!this.component.redraw) {
        throw new Error("Can't requestRedraw because component does not implement redraw");
    }
    this.redraw = true;
    this.controller.requestAnimation();
};

AnimationController.prototype.cancelRedraw = function () {
    this.redraw = false;
};

}],["engine.js","inkblot","engine.js",{"./story":8,"./evaluate":6},function (require, exports, module, __filename, __dirname){

// inkblot/engine.js
// -----------------

'use strict';

var Story = require('./story');
var evaluate = require('./evaluate');

module.exports = Engine;

var debug = typeof process === 'object' && process.env.DEBUG_ENGINE;

function Engine(args) {
    // istanbul ignore next
    var start = args.start || 'start';
    var self = this;
    this.story = args.story;
    this.options = [];
    this.keywords = {};
    this.storage = args.storage || new Global();
    this.top = this.storage;
    this.stack = [this.top];
    this.label = '';
    this.instruction = new Story.constructors.goto(start);
    this.render = args.render;
    this.dialog = args.dialog;
    this.dialog.engine = this;
    // istanbul ignore next
    this.randomer = args.randomer || Math;
    this.debug = debug;
    Object.seal(this);
}

Engine.prototype.continue = function _continue() {
    var _continue;
    do {
        // istanbul ignore if
        if (this.debug) {
            console.log(this.top.at() + '/' + this.label + ' ' + this.instruction.type + ' ' + this.instruction.describe());
        }
        // istanbul ignore if
        if (!this['$' + this.instruction.type]) {
            throw new Error('Unexpected instruction type: ' + this.instruction.type);
        }
        _continue = this['$' + this.instruction.type](this.instruction);
    } while (_continue);
};

Engine.prototype.print = function print(text) {
    this.render.write(this.instruction.lift, text, this.instruction.drop);
    return this.goto(this.instruction.next);
};

Engine.prototype.$text = function text() {
    return this.print(this.instruction.text);
};

Engine.prototype.$print = function print() {
    return this.print('' + evaluate(this.top, this.randomer, this.instruction.expression));
};

Engine.prototype.$break = function $break() {
    this.render.break();
    return this.goto(this.instruction.next);
};

Engine.prototype.$paragraph = function $paragraph() {
    this.render.paragraph();
    return this.goto(this.instruction.next);
};

Engine.prototype.$startJoin = function $startJoin() {
    this.render.startJoin(
        this.instruction.lift,
        this.instruction.delimiter,
        this.instruction.text
    );
    return this.goto(this.instruction.next);
};

Engine.prototype.$delimit = function $delimit() {
    this.render.delimit(this.instruction.delimiter);
    return this.goto(this.instruction.next);
};

Engine.prototype.$stopJoin = function $stopJoin() {
    // TODO thread for "if no delimits"
    this.render.stopJoin();
    return this.goto(this.instruction.next);
};

Engine.prototype.$goto = function $goto() {
    return this.goto(this.instruction.next);
};

Engine.prototype.$call = function $call() {
    var routine = this.story[this.instruction.label];
    // istanbul ignore if
    if (!routine) {
        throw new Error('no such routine ' + this.instruction.label);
    }
    // TODO replace this.storage with closure scope if scoped procedures become
    // viable. This will require that the engine create references to closures
    // when entering a new scope (calling a procedure), in addition to
    // capturing locals. As such the parser will need to retain a reference to
    // the enclosing procedure and note all of the child procedures as they are
    // encountered.
    this.top = new Frame(this.storage, routine.locals || [], this.instruction.next, this.label);
    this.stack.push(this.top);
    return this.goto(this.instruction.branch);
};

Engine.prototype.$subroutine = function $subroutine() {
    // Subroutines exist as targets for labels as well as for reference to
    // locals in calls.
    return this.goto(this.instruction.next);
};

Engine.prototype.$option = function option() {
    this.options.push(this.instruction);
    // for (var i = 0; i < this.instruction.keywords.length; i++) {
    //     var keyword = this.instruction.keywords[i];
    //     this.keywords[keyword] = this.instruction.branch;
    // }
    return this.goto(this.instruction.next);
};

Engine.prototype.$set = function set() {
    var value = evaluate(this.top, this.randomer, this.instruction.expression);
    // istanbul ignore if
    if (this.debug) {
        console.log(this.top.at() + '/' + this.label + ' ' + this.instruction.variable + ' = ' + value);
    }
    this.top.set(this.instruction.variable, value);
    return this.goto(this.instruction.next);
};

Engine.prototype.$mov = function mov() {
    var value = evaluate(this.top, this.randomer, this.instruction.source);
    var name = evaluate.nominate(this.top, this.randomer, this.instruction.target);
    // istanbul ignore if
    if (this.debug) {
        console.log(this.top.at() + '/' + this.label + ' ' + name + ' = ' + value);
    }
    this.top.set(name, value);
    return this.goto(this.instruction.next);
};

Engine.prototype.$jump = function jump() {
    var j = this.instruction;
    if (evaluate(this.top, this.randomer, j.condition)) {
        return this.goto(this.instruction.branch);
    } else {
        return this.goto(this.instruction.next);
    }
};

Engine.prototype.$switch = function _switch() {
    var branches = this.instruction.branches;
    var value;
    if (this.instruction.mode === 'rand') {
        value = Math.floor(this.randomer.random() * branches.length);
    } else {
        value = evaluate(this.top, this.randomer, this.instruction.expression);
        this.top.set(this.instruction.variable, value + this.instruction.value);
    }
    if (this.instruction.mode === 'loop') {
        value = value % branches.length;
    } else if (this.instruction.mode === 'hash') {
        value = evaluate.hash(value) % branches.length;
    }
    value = Math.min(value, branches.length - 1);
    value = Math.max(value, 0);
    var next = branches[value];
    // istanbul ignore if
    if (this.debug) {
        console.log(this.top.at() + '/' + this.label + ' ' + value + ' -> ' + next);
    }
    return this.goto(next);
};

Engine.prototype.$prompt = function prompt() {
    this.prompt();
    return false;
};

Engine.prototype.goto = function _goto(name) {
    while (name === null && this.stack.length > 1) {
        var top = this.stack.pop();
        this.top = this.stack[this.stack.length - 1];
        name = top.next;
    }
    if (name == null) {
        this.display();
        this.render.break();
        this.dialog.close();
        return false;
    }
    var next = this.story[name];
    // istanbul ignore if
    if (!next) {
        throw new Error('Story missing knot for name: ' + name);
    }
    this.label = name;
    this.instruction = next;
    return true;
};

Engine.prototype.answer = function answer(text) {
    this.render.flush();
    if (text === 'quit') {
        this.dialog.close();
        return;
    }
    // istanbul ignore next
    if (text === 'bt') {
        this.render.clear();
        this.top.log();
        this.prompt();
        return;
    }
    var n = +text;
    if (n >= 1 && n <= this.options.length) {
        this.render.clear();
        if (this.goto(this.options[n - 1].branch)) {
            this.flush();
            this.continue();
        }
    // istanbul ignore next
    } else if (this.keywords[text]) {
        this.render.clear();
        if (this.goto(this.keywords[text])) {
            this.flush();
            this.continue();
        }
    } else {
        this.render.pardon();
        this.prompt();
    }
};

Engine.prototype.display = function display() {
    this.render.display();
};

Engine.prototype.prompt = function prompt() {
    this.display();
    for (var i = 0; i < this.options.length; i++) {
        var option = this.options[i];
        this.render.option(i + 1, option.label);
    }
    this.dialog.question();
};

Engine.prototype.flush = function flush() {
    this.options.length = 0;
    this.keywords = {};
};

function Global() {
    this.scope = Object.create(null);
    this.next = null;
}

Global.prototype.get = function get(name) {
    return this.scope[name] || 0;
};

Global.prototype.set = function set(name, value) {
    this.scope[name] = value;
};

// istanbul ignore next
Global.prototype.log = function log() {
    var globals = Object.keys(this.scope);
    globals.sort();
    for (var i = 0; i < globals.length; i++) {
        var name = globals[i];
        var value = this.scope[name];
        console.log(name + ' = ' + value);
    }
    console.log('');
};

// istanbul ignore next
Global.prototype.at = function at() {
    return '';
};

function Frame(caller, locals, next, branch) {
    this.locals = locals;
    this.scope = Object.create(null);
    for (var i = 0; i < locals.length; i++) {
        this.scope[locals[i]] = 0;
    }
    this.caller = caller;
    this.next = next;
    this.branch = branch;
}

Frame.prototype.get = function get(name) {
    if (this.locals.indexOf(name) >= 0) {
        return this.scope[name];
    }
    return this.caller.get(name);
};

Frame.prototype.set = function set(name, value) {
    // istanbul ignore else
    if (this.locals.indexOf(name) >= 0) {
        this.scope[name] = value;
        return;
    }
    this.caller.set(name, value);
};

// istanbul ignore next
Frame.prototype.log = function log() {
    console.log('--- ' + this.branch + ' -> ' + this.next);
    for (var i = 0; i < this.locals.length; i++) {
        var name = this.locals[i];
        var value = this.scope[name];
        console.log(name + ' = ' + value);
    }
};

// istanbul ignore next
Frame.prototype.at = function at() {
    return this.caller.at() + '/' + this.branch;
};

}],["evaluate.js","inkblot","evaluate.js",{},function (require, exports, module, __filename, __dirname){

// inkblot/evaluate.js
// -------------------

'use strict';

module.exports = evaluate;

function evaluate(scope, randomer, args) {
    var name = args[0];
    if (binary[name]) {
        return binary[name](
            evaluate(scope, randomer, args[1]),
            evaluate(scope, randomer, args[2]),
            scope,
            randomer
        );
    // istanbul ignore next
    } else if (unary[name]) {
        return unary[name](
            evaluate(scope, randomer, args[1]),
            scope,
            randomer
        );
    } else if (name === 'val') {
        return args[1];
    } else if (name === 'get') {
        return scope.get(args[1]);
    // istanbul ignore else
    } else if (name === 'var') {
        return scope.get(nominate(scope, randomer, args));
    }
    // istanbul ignore next
    throw new Error('Unexpected operator ' + args[0]);
}

evaluate.nominate = nominate;
function nominate(scope, randomer, args) {
    var literals = args[1];
    var variables = args[2];
    var name = '';
    for (var i = 0; i < variables.length; i++) {
        name += literals[i] + scope.get(variables[i]);
    }
    name += literals[i];
    return name;
}

var binary = {
    '+': function (x, y) {
        return x + y;
    },
    '-': function (x, y) {
        return x - y;
    },
    '*': function (x, y) {
        return x * y;
    },
    '/': function (x, y) {
        return (x / y) >> 0;
    },
    '%': function (x, y) {
        return x % y;
    },
    'v': function (x, y) {
        return x || y ? 1 : 0;
    },
    '^': function (x, y) {
        return x && y ? 1 : 0;
    },
    '>=': function (x, y) {
        return x >= y ? 1 : 0;
    },
    '>': function (x, y) {
        return x > y ? 1 : 0;
    },
    '<=': function (x, y) {
        return x <= y ? 1 : 0;
    },
    '<': function (x, y) {
        return x < y ? 1 : 0;
    },
    '==': function (x, y) {
        return x === y ? 1 : 0;
    },
    '!=': function (x, y) {
        return x != y ? 1 : 0;
    },
    '#': function (x, y) {
        return hilbert(x, y);
    },
    '~': function (x, y, scope, randomer) {
        var r = 0;
        for (var i = 0; i < x; i++) {
            r += randomer.random() * y;
        }
        return Math.floor(r);
    }
};

// istanbul ignore next
var unary = {
    '!': function (x) {
        return x ? 0 : 1;
    }
};

evaluate.hash = hash;
function hash(x) {
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = ((x >> 16) ^ x) * 0x45d9f3b;
    x = ((x >> 16) ^ x);
    return x >> 0;
}

var msb = (-1 >>> 1) + 1;
var hsb = (-1 >>> 16) + 1;

function hilbert(x, y) {
    if (x < 0) {
        x += hsb;
    }
    if (y < 0) {
        y += hsb;
    }
    var rx = 0;
    var ry = y;
    var scalar = 0;
    for (var scale = msb; scale > 0; scale /= 2) {
        rx = x & scale;
        ry = y & scale;
        scalar += scale * ((3 * rx) ^ ry);
        // rotate
        if (!ry) {
            if (rx) {
                x = scale - 1 - x;
                y = scale - 1 - y;
            }
            // transpose
            var t = x;
            x = y;
            y = t;
        }
    }
    return scalar;
}

}],["path.js","inkblot","path.js",{},function (require, exports, module, __filename, __dirname){

// inkblot/path.js
// ---------------

'use strict';

exports.toName = pathToName;

function pathToName(path) {
    var name = path[0];
    var i;
    for (i = 1; i < path.length - 1; i++) {
        name += '.' + path[i];
    }
    var last = path[i];
    if (path.length > 1 && last !== 0) {
        name += '.' + last;
    }
    return name;
}

exports.next = nextPath;

function nextPath(path) {
    path = path.slice();
    path[path.length - 1]++;
    return path;
}

exports.firstChild = firstChildPath;

function firstChildPath(path) {
    path = path.slice();
    path.push(1);
    return path;
}

exports.zerothChild = zerothChildPath;

function zerothChildPath(path) {
    path = path.slice();
    path.push(0);
    return path;
}

}],["story.js","inkblot","story.js",{"pop-equals":13,"./path":7},function (require, exports, module, __filename, __dirname){

// inkblot/story.js
// ----------------

'use strict';

var equals = require('pop-equals');
var Path = require('./path');

var constructors = {};

module.exports = Story;

function Story() {
    this.states = {};
    Object.seal(this);
}

Story.constructors = constructors;

Story.prototype.create = function create(path, type, text) {
    var name = Path.toName(path);
    var Node = constructors[type];
    // istanbul ignore if
    if (!Node) {
        throw new Error('No node constructor for type: ' + type);
    }
    var node = new Node(text);
    this.states[name] = node;
    return node;
};

constructors.text = Text;
function Text(text) {
    this.type = 'text';
    this.text = text;
    this.lift = ' ';
    this.drop = ' ';
    this.next = null;
    Object.seal(this);
}
Text.prototype.tie = tie;
// istanbul ignore next
Text.prototype.describe = function describe() {
    return (this.lift ? '' : '-') +
        this.text.slice(0, 30) +
        (this.drop ? '' : '-');
};
Text.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.text === that.text &&
        this.lift === that.lift &&
        this.drop === that.drop &&
        this.next === that.next;
};

constructors.print = Print;
function Print(expression) {
    this.type = 'print';
    this.expression = expression;
    this.next = null;
    Object.seal(this);
}
Print.prototype.tie = tie;
// istanbul ignore next
Print.prototype.describe = function describe() {
    return S(this.expression);
};
Print.prototype.equals = function _equals(that) {
    return this.type === that.type &&
        equals(this.expression, that.expression) &&
        this.next === that.next;
};

constructors.option = Option;
function Option(label) {
    this.type = 'option';
    this.label = label;
    this.keywords = [];
    this.branch = null;
    this.next = null;
    Object.seal(this);
}
Option.prototype.tie = tie;
// istanbul ignore next
Option.prototype.describe = function describe() {
    return this.label + ' ' + A(this.branch);
};
Option.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.label === that.label &&
        // Don't care about keywords for the nonce
        this.branch == that.branch &&
        this.next === that.next;
};

constructors.goto = Goto;
function Goto(next) {
    this.type = 'goto';
    this.next = next || null;
    Object.seal(this);
}
Goto.prototype.tie = tie;
// istanbul ignore next
Goto.prototype.describe = function describe() {
    return this.next;
};
Goto.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.next === that.next;
};

constructors.call = Call;
function Call(label) {
    this.type = 'call';
    this.label = label;
    this.branch = null;
    this.next = null;
    Object.seal(this);
}
Call.prototype.tie = tie;
// istanbul ignore next
Call.prototype.describe = function describe() {
    return this.label + ' ' + this.branch + '() -> ' + this.next;
};
Call.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.label === that.label &&
        this.branch === that.branch &&
        this.next === that.next;
};

constructors.subroutine = Subroutine;
function Subroutine(locals) {
    this.type = 'subroutine';
    this.locals = locals;
    this.next = null;
    Object.seal(this);
};
Subroutine.prototype.tie = tie;
// istanbul ignore next
Subroutine.prototype.describe = function describe() {
    return '(' + this.locals.join(', ') + ')';
};
Subroutine.prototype.equals = function _equals(that) {
    return this.type === that.type &&
        equals(this.locals, that.locals) &&
        this.next === that.next;
};

constructors.jump = Jump;
function Jump(condition) {
    this.type = 'jump';
    this.condition = condition;
    this.branch = null;
    this.next = null;
    Object.seal(this);
}
Jump.prototype.tie = tie;
// istanbul ignore next
Jump.prototype.describe = function describe() {
    return this.branch + ' if ' + S(this.condition);
};
Jump.prototype.equals = function _equals(that) {
    return this.type === that.type &&
        equals(this.condition, that.condition) &&
        this.branch === that.branch &&
        this.next === that.next;
};

constructors.switch = Switch;
function Switch(expression) {
    this.type = 'switch';
    this.expression = expression;
    this.variable = null;
    this.value = 0;
    this.mode = null;
    this.branches = [];
    Object.seal(this);
}
Switch.prototype.tie = tie;
// istanbul ignore next
Switch.prototype.describe = function describe() {
    if (this.variable) {
        return this.mode + ' (' + this.variable + '+' +  this.value + ') ' + S(this.expression);
    } else {
        return this.mode + ' ' + S(this.expression);
    }
};
Switch.prototype.equals = function _equals(that) {
    return this.type === that.type &&
        equals(this.expression, that.expression) &&
        this.value === that.value &&
        this.mode === that.mode &&
        equals(this.branches, that.branches);
};

constructors.set = Set;
function Set(variable) {
    this.type = 'set';
    this.variable = variable;
    this.expression = null;
    this.parameter = false;
    this.next = null;
    Object.seal(this);
}
Set.prototype.tie = tie;
// istanbul ignore next
Set.prototype.describe = function describe() {
    return this.variable + ' ' + S(this.expression);
};
Set.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.variable === that.variable &&
        this.parameter === Boolean(that.parameter) &&
        this.next === that.next;
};

constructors.mov = Mov;
function Mov(variable) {
    this.type = 'mov';
    this.source = null;
    this.target = null;
    this.next = null;
    Object.seal(this);
}
Mov.prototype.tie = tie;
// istanbul ignore next
Mov.prototype.describe = function describe() {
    return S(this.source) + ' -> ' + S(this.expression);
};
Mov.prototype.equals = function _equals(that) {
    return this.type === that.type &&
        equals(this.source, that.source) &&
        equals(this.target, that.target) &&
        this.next === that.next;
};

constructors.break = Break;
function Break(variable) {
    this.type = 'break';
    this.next = null;
    Object.seal(this);
}
Break.prototype.tie = tie;
// istanbul ignore next
Break.prototype.describe = function describe() {
    return '';
};
Break.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.next === that.next;
};

constructors.paragraph = Paragraph;
function Paragraph(variable) {
    this.type = 'paragraph';
    this.next = null;
    Object.seal(this);
}
Paragraph.prototype.tie = tie;
// istanbul ignore next
Paragraph.prototype.describe = function describe() {
    return '';
};
Paragraph.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.next === that.next;
};

constructors.startJoin = StartJoin;
function StartJoin(variable) {
    this.type = 'startJoin';
    this.text = '';
    this.lift = '';
    this.drop = '';
    this.delimiter = ',';
    this.next = null;
    Object.seal(this);
}
StartJoin.prototype.tie = tie;
// istanbul ignore next
StartJoin.prototype.describe = function describe() {
    return '';
};
StartJoin.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.next === that.next;
};

constructors.stopJoin = StopJoin;
function StopJoin(variable) {
    this.type = 'stopJoin';
    this.next = null;
    Object.seal(this);
}
StopJoin.prototype.tie = tie;
// istanbul ignore next
StopJoin.prototype.describe = function describe() {
    return '';
};
StopJoin.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.next === that.next;
};

constructors.delimit = Delimit;
function Delimit(variable) {
    this.type = 'delimit';
    this.delimiter = ',';
    this.next = null;
    Object.seal(this);
}
Delimit.prototype.tie = tie;
// istanbul ignore next
Delimit.prototype.describe = function describe() {
    return ',';
};
Delimit.prototype.equals = function equals(that) {
    return this.type === that.type &&
        this.delimiter === that.delimiter &&
        this.next === that.next;
};

constructors.prompt = Prompt;
function Prompt(variable) {
    this.type = 'prompt';
    Object.seal(this);
}
Prompt.prototype.tie = tie;
// istanbul ignore next
Prompt.prototype.describe = function describe() {
    return '';
};
Prompt.prototype.equals = function equals(that) {
    return this.type === that.type;
};

function tie(end) {
    this.next = end;
}

// istanbul ignore next
function S(args) {
    if (args[0] === 'val' || args[0] === 'get') {
        return args[1];
    } else {
        return '(' + args[0] + ' ' + args.slice(1).map(S).join(' ') + ')';
    }
}

// istanbul ignore next
function A(label) {
    if (label == null) {
        return '<-';
    } else {
        return '-> ' + label;
    }
}

}],["mini-map.js","mini-map","mini-map.js",{},function (require, exports, module, __filename, __dirname){

// mini-map/mini-map.js
// --------------------

"use strict";

module.exports = MiniMap;
function MiniMap() {
    this.keys = [];
    this.values = [];
}

MiniMap.prototype.has = function (key) {
    var index = this.keys.indexOf(key);
    return index >= 0;
};

MiniMap.prototype.get = function (key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
        return this.values[index];
    }
};

MiniMap.prototype.set = function (key, value) {
    var index = this.keys.indexOf(key);
    if (index < 0) {
        index = this.keys.length;
    }
    this.keys[index] = key;
    this.values[index] = value;
};

MiniMap.prototype["delete"] = function (key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
    }
};

MiniMap.prototype.clear = function () {
    this.keys.length = 0;
    this.values.length = 0;
};


}],["point.js","ndim","point.js",{},function (require, exports, module, __filename, __dirname){

// ndim/point.js
// -------------

"use strict";

module.exports = Point;
function Point() {
}

Point.prototype.add = function (that) {
    return this.clone().addThis(that);
};

Point.prototype.sub = function (that) {
    return this.clone().addThis(that);
};

// not dot or cross, just elementwise multiplication
Point.prototype.mul = function (that) {
    return this.clone().mulThis(that);
};

Point.prototype.div = function (that) {
    return this.clone().divThis(that);
};

Point.prototype.scale = function (n) {
    return this.clone().scaleThis(n);
};

Point.prototype.bitwiseAnd = function (n) {
    return this.clone().bitwiseAndThis(n);
};

Point.prototype.bitwiseOr = function (n) {
    return this.clone().bitwiseOrThis(n);
};

Point.prototype.round = function () {
    return this.clone().roundThis();
};

Point.prototype.floor = function () {
    return this.clone().floorThis();
};

Point.prototype.ceil = function () {
    return this.clone().ceilThis();
};

Point.prototype.abs = function () {
    return this.clone().absThis();
};

Point.prototype.min = function () {
    return this.clone().minThis();
};

Point.prototype.max = function () {
    return this.clone().maxThis();
};

}],["point2.js","ndim","point2.js",{"./point":10},function (require, exports, module, __filename, __dirname){

// ndim/point2.js
// --------------

"use strict";

var Point = require("./point");

module.exports = Point2;
function Point2(x, y) {
    this.x = x;
    this.y = y;
}

Point2.prototype = Object.create(Point.prototype);
Point2.prototype.constructor = Point2;

Point2.zero = new Point2(0, 0);
Point2.one = new Point2(1, 1);

Point2.prototype.addThis = function (that) {
    this.x = this.x + that.x;
    this.y = this.y + that.y;
    return this;
};

Point2.prototype.subThis = function (that) {
    this.x = this.x - that.x;
    this.y = this.y - that.y;
    return this;
};

Point2.prototype.mulThis = function (that) {
    this.x = this.x * that.x;
    this.y = this.y * that.y;
    return this;
};

Point2.prototype.divThis = function (that) {
    this.x = this.x / that.x;
    this.y = this.y / that.y;
    return this;
};

Point2.prototype.scaleThis = function (n) {
    this.x = this.x * n;
    this.y = this.y * n;
    return this;
};

Point2.prototype.bitwiseAndThis = function (n) {
    this.x = this.x & n;
    this.y = this.y & n;
    return this;
};

Point2.prototype.bitwiseOrThis = function (n) {
    this.x = this.x | n;
    this.y = this.y | n;
    return this;
};

Point2.prototype.dot = function (that) {
    return this.x * that.x + this.y * that.y;
};

Point2.prototype.roundThis = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
};

Point2.prototype.floorThis = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
};

Point2.prototype.ceilThis = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
};

Point2.prototype.absThis = function () {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
};

Point2.prototype.minThis = function (that) {
    this.x = Math.min(this.x, that.x);
    this.y = Math.min(this.y, that.y);
};

Point2.prototype.maxThis = function (that) {
    this.x = Math.max(this.x, that.x);
    this.y = Math.max(this.y, that.y);
};

Point2.prototype.transpose = function () {
    return this.clone().transposeThis();
};

Point2.prototype.transposeThis = function () {
    var temp = this.x;
    this.x = this.y;
    this.y = temp;
    return this;
};

Point2.prototype.distance = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point2.prototype.clone = function () {
    return new Point2(this.x, this.y);
};

Point2.prototype.copyFrom = function (that) {
    this.x = that.x;
    this.y = that.y;
    return this;
};

// TODO deprecated for copyFrom
Point2.prototype.become = function (that) {
    this.x = that.x;
    this.y = that.y;
    return this;
};

Point2.prototype.toString = function () {
    return "[x=" + this.x + " y=" + this.y + "]";
};

Point2.prototype.hash = function () {
    return this.x + "," + this.y;
};

Point2.prototype.equals = function (that) {
    return this.x === that.x && this.y === that.y;
};

Point2.prototype.lessThan = function (that) {
    return this.x < that.x && this.y < that.y;
};

}],["lib/performance-now.js","performance-now/lib","performance-now.js",{},function (require, exports, module, __filename, __dirname){

// performance-now/lib/performance-now.js
// --------------------------------------

// Generated by CoffeeScript 1.6.3
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/*
//@ sourceMappingURL=performance-now.map
*/

}],["pop-equals.js","pop-equals","pop-equals.js",{"mini-map":9},function (require, exports, module, __filename, __dirname){

// pop-equals/pop-equals.js
// ------------------------

"use strict";

var MiniMap = require("mini-map");
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

/**
    Performs a polymorphic, type-sensitive deep equivalence comparison of any
    two values.

    <p>As a basic principle, any value is equivalent to itself (as in
    identity), any boxed version of itself (as a <code>new Number(10)</code> is
    to 10), and any deep clone of itself.

    <p>Equivalence has the following properties:

    <ul>
        <li><strong>polymorphic:</strong>
            If the given object is an instance of a type that implements a
            methods named "equals", this function defers to the method.  So,
            this function can safely compare any values regardless of type,
            including undefined, null, numbers, strings, any pair of objects
            where either implements "equals", or object literals that may even
            contain an "equals" key.
        <li><strong>type-sensitive:</strong>
            Incomparable types are not equal.  No object is equivalent to any
            array.  No string is equal to any other number.
        <li><strong>deep:</strong>
            Collections with equivalent content are equivalent, recursively.
        <li><strong>equivalence:</strong>
            Identical values and objects are equivalent, but so are collections
            that contain equivalent content.  Whether order is important varies
            by type.  For Arrays and lists, order is important.  For Objects,
            maps, and sets, order is not important.  Boxed objects are mutally
            equivalent with their unboxed values, by virtue of the standard
            <code>valueOf</code> method.
    </ul>
    @param this
    @param that
    @returns {Boolean} whether the values are deeply equivalent
*/
module.exports = equals;
function equals(a, b, equals, memo) {
    equals = equals || module.exports;
    // unbox objects
    if (a && typeof a.valueOf === "function") {
        a = a.valueOf();
    }
    if (b && typeof b.valueOf === "function") {
        b = b.valueOf();
    }
    if (a === b)
        return true;
    // NaN !== NaN, but they are equal.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is a NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN("foo") => true
    // We have established that a !== b, but if a !== a && b !== b, they are
    // both NaN.
    if (a !== a && b !== b)
        return true;
    if (!a || !b)
        return false;
    if (typeof a === "object") {
        memo = memo || new MiniMap();
        if (memo.has(a)) {
            return true;
        }
        memo.set(a, true);
    }
    if (typeof a.equals === "function") {
        return a.equals(b, equals, memo);
    }
    // commutative
    if (typeof b.equals === "function") {
        return b.equals(a, equals, memo);
    }
    if ((Array.isArray(a) || Array.isArray(b)) && a.length !== b.length) {
        return false;
    }
    if (typeof a === "object" && typeof b === "object") {
        if (
            getPrototypeOf(a) === objectPrototype &&
            getPrototypeOf(b) === objectPrototype ||
            Array.isArray(a) ||
            Array.isArray(b)
        ) {
            for (var name in a) {
                if (!equals(a[name], b[name], equals, memo)) {
                    return false;
                }
            }
            for (var name in b) {
                if (!(name in a)) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

// Because a return value of 0 from a `compare` function  may mean either
// "equals" or "is incomparable", `equals` cannot be defined in terms of
// `compare`.  However, `compare` *can* be defined in terms of `equals` and
// `lessThan`.  Again however, more often it would be desirable to implement
// all of the comparison functions in terms of compare rather than the other
// way around.


}],["index.js","raf","index.js",{"performance-now":12},function (require, exports, module, __filename, __dirname){

// raf/index.js
// ------------

var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
  , isNative = true

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  isNative = false

  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  if(!isNative) {
    return raf.call(global, fn)
  }
  return raf.call(global, function() {
    try{
      fn.apply(this, arguments)
    } catch(e) {
      setTimeout(function() { throw e }, 0)
    }
  })
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

}]])("airship.aelf.land/index.js")
