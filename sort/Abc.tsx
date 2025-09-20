
lazy("../components/Header");
lazy("../components/Persona");

[
    {
        elemt: "/abc/:id"
    compn: <Header>
            <AppBar></AppBar>
        </Header>,
        children: [
            {
                element: "/:id",

            }
        ],
    }, {
        elemt: "/xyz/:id"
    compn: <Header>
            <Persona
    </Header>,
        children: [
            {
                element: "/:id"
            }
        ],
    },
}

]