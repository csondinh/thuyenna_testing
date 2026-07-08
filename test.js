(function () {
    if (window.TESTING_WIDGET_LOADED) return;
    window.TESTING_WIDGET_LOADED = true;

    var style = document.createElement("style");
    style.innerHTML = `
        .testing-js-widget {
            position: fixed;
            right: 20px;
            bottom: 20px;
            z-index: 999999;
            background: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-family: Arial, sans-serif;
        }

        .testing-js-widget input {
            width: 240px;
            padding: 10px;
            border: 1px solid #999999;
            border-radius: 6px;
            font-size: 14px;
        }
    `;

    document.head.appendChild(style);

    var wrapper = document.createElement("div");
    wrapper.className = "testing-js-widget";

    var input = document.createElement("input");
    input.type = "text";
    input.value = "TESTING JAVASCRIP";

    wrapper.appendChild(input);
    document.body.appendChild(wrapper);
})();