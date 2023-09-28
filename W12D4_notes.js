/*

SCOPES
    Ensure we are retrieving only the inteded data from our DB
    Dry up our code
    Default scope to our models:
        In last object in our init
        defaultScope: {
            <set our attributes>
        }
        ONLY applies by default if we don't specify other scopes
    Non-default scopes
        In last obj in our init
        scopes: {
            <name of scope>: {
                <set our attributes>
            }
        }
    To apply a scope to our query
        <model>.scope(<scopes>).<query method>
        Higher index scopes (in the array passed to .scope) have priority



*/