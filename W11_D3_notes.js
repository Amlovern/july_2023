/*

There are a few query methods that are built into our models
    findOne
        Useful when we want to find one record
    findAll
        Useful when we want to find multiple records
        Always returns an array
    findByPk
        Also used to find just a single record
        Basically a findOne, but shortcuts to searching via Primary Key


If we want to add ORDER BY, there's an option for that

If we want to add LIKE, there's an option for that
    https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

Creating record
    Build
    Validate
    Save
    Create
        Does all 3

Update
    <model>.update - NOT Recommended
        Requires a where
    Object property assignment - MAJOR PREFERENCE
        Must save()
    Instance.set()
        Must save()
    Instance.update()


Delete
    <model>.destroy() - NOT Recommended
    <instance>.destroy()

*/