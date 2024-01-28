document.body.addEventListener("htmx:configRequest", function (event) {
    let pathWithParameters = event.detail.path.replace(/:([A-Za-z0-9_]+)/g, function (_match, parameterName) {
        let parameterValue = event.detail.parameters[parameterName]
        delete event.detail.parameters[parameterName]

        return parameterValue
    })

    event.detail.path = pathWithParameters
})