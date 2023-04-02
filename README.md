# Auth System

An open-source project by [Clove Software](https://clove.ie).

### Why?

[Supabase](https://supabase.com) is an excellent Backend-as-a-Service offering built upon Postgres for small teams,
with integrated features such as PostgREST and GoTrue authentication. This project allows you to use Supabase Auth while
providing a unique face for your authentication service, as well as allowing for things like signle-sign-on.

This authentication service serves as the base of our infrastructure.

### Flow

The intended flow looks a little something like this:
1. A user requests access to a page that requires the user to be logged in: `https://app.clove.ie/home`
2. The user is redirected to the authentication subdomain `https://app.clove.ie -> https://auth.clove.ie/?ref=https://app.clove.ie/home`.

> Here we're redirecting the user to a SPA with a query parameter telling us where the user came from so we can subsequently call back to that URL with the access token.

3. The user is presented with a unified login experience across all applications, on `https://auth.clove.ie` which allows for commonly required features
such as logging in with Google/Apple/Microsoft/whatever

4. On successful login, we call back to the reffering domain with the user's access token: `https://auth.clove.ie/?ref=https://app.clove.ie/home?access-token=eyFfrgg...&refresh-token=eyFfrgg...`

5. Now back in the app we can take the received access and refresh tokens and set the session data directly rather than using the login flow.
```js
const { data, error } = supabase.auth.setSession({
  access_token,
  refresh_token
})
```
