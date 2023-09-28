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

JWT - JSON Web Token

This is how we handle user auth

How can we keep data safe as we transport it across the web?
    Encoding
        Not very secure. Can be easily decoded.
    Encrypting
        More secure. Can't be decrypted unless they have the password/secret key
        If a bad actor get the secret key, we are in trouble
    Hash
        Cannot be reverse engineered
        Hashing is deterministic
        There is a problem here:
            There is a possibility the multiple strings could end up with same hash value
            This is called a hash collision
        We use "Salt" to solve this problem

A JWT consists of 3 parts:
    Header
        Contains the type of token
        Indicator for the algo the we use for the hash
    Payload
        The data - ONLY encoded
        Can add claims - such as an expiration
    Signature
        Hash of the header, payload, and a secret key
        Allows us to validate that our token hasn't been tampered with

    JWT can be easily decoded using something like jwt.io

    jwt.sign is used to create a token
    jwt.verify is used to verify a token
        verify takes in an optional 3rd arg: a callback function

Bcrypt

A tool to allow us to hash information
Broken down into parts
    Hashing algo
    Cost factor
        Tells bcrypt how many times to hash our password
    Salt(22 chars)
    Hash

A high cost factor is more secure, but worst UX

*/