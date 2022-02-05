# HackerNews Javascript

The hackernews backend implementation in JavaScript with GraphQL

Apollo 3 (apollo-server-core apollo-server-express)

For the moment subscriptions is working partially

## Install

install Dependencies

```
npm install
```

Generate a prima migration

```
npx prisma migrate dev
```

Generate the Prisma Client

```
npx prisma generate
```

## Run the project

Run in dev mode

```
npm run dev
```

Run in production mode

```
npm start
```

## Working Subscriptions

After you have installed and have the project running (dev mode) try the following

Enter `localhost:4000`
![apollo-image](/assets/apollo-page.png)

Create a new User (signup)
![user-signup](/assets/user-signup.png)

Add the token from the response of signup to an Authorization field with a 'Bearer ' prefix
![adding-token](/assets/adding-token.png)

Create a new Subscription
![creating-subscription](/assets/creating-subscription.png)

Test the subscription
![testing-subscription](/assets/subs-working.png)

### Subscriptions not working with nested data

Subscriptions with nested data is not working in apollo 3. Basically does not recognize nested fields

For example
Create another kind of subscription with nested data
![bad-subscription](/assets/creating-bad-sub.png)

Testing the subscription (Not Working)
![subscription-not-working](/assets/subs-not-working.png)

