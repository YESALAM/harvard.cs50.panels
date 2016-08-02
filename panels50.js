define(function(require, module, exports) {
    main.consumes = ["Panel", "ui", "commands"];
    main.provides = ["panels50"];
    return main;

    function main(options, imports, register) {
        const Panel = imports.Panel;
        const ui = imports.ui;
        const command = imports.commands;
        const css = require("text!./panels50.css");

        // initialization
        const plugin = new Panel("reference50", main.consumes, {
            index: 300,
            caption: "Reference50",
            where: "right",
        });

        // load plugin and set toggle shortcut
        plugin.on("load", function(e) {
            plugin.setCommand({
                name: "referenceCommand",
                hint: "Toggle Reference50",
                bindKey: {
                    mac: "Shift-Command-K",
                    win: "Shift-Ctrl-K",
                },
            });
        });

        // draw panel on Cloud9 IDE
        plugin.on("draw", function(e) {
            ui.insertCss(css, options.staticPrefix, plugin);
            e.html.innerHTML = "<iframe src='https://reference.cs50.net/''></iframe>";
        });

        // register plugin
        plugin.freezePublicAPI({});
        register("", { panels50: plugin });
    }
});
