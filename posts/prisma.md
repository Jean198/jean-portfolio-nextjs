---
title: 'Connecting to MySql database from Node js Using Prisma'
date: 'October 1, 2021'
excerpt: 'Are you working with react and Next js frameworks and looking for an easier way to connect to your mysql database? Prisma is probably your solution!'
cover_image: '/images/posts/prisma.png'
---

<font size="5" color="green"> **What is prisma in the first place?**</font> 
\
\
Prisma is an open-source Node.js and Typescript ORM (Object Relational Mapper) that plays the role of middleware between your application and the database helping you to manage and work with your database in a smooth and easy way!
\
\
<font size="5" color="green"> **Setting up Prisma**</font> 
\
\
Start by installing the Prisma CLI as a development dependency in your project:
\
\
**$npm install prisma --save-dev** then **$npx prisma**
\
\
Now create your initial Prisma setup using the init command of the Prisma CLI:
\
\
**$ npx prisma init**
\
\
<font size="5" color="green"> **Connecting Prisma to the database**</font> 
\
\
Go to **schema.prisma** file and modify the **provider** to match your database. By default, this is set to **PostgreSQL**.
\
\
<font color="green">
```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
</font>

Add your database URL link into the .env file as follows:
\
\
**DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"**
\
\
<font size="5" color="green"> **Generating data models from your database**</font> 
\
\
Once connected to the database Prisma creates our database schemas automatically using the following command:
\
\
**$npx prisma db pull**
\
\
<font size="5" color="green"> **Querying the database with Prisma**</font>
\
\
First install **@prisma/client** package.
\
\
Create an instance of Prisma and export it, so that we don't have we avoid creating many instances of Prisma.


<font  color="green"> 

```
import { PrismaClient } from "@prisma/client";
let prisma;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
}
// `stg` or `dev`
else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
}

export default prisma;
```
</font> 

to make querries, you have to import the prisma instance created above and make the querries in an **async** function as follows:
\
\
<font  color="green"> 
```
import prisma from "....";

export default async function handler(req, res) {
    try {
        const results = await prisma.users.findMany();
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

``` 
</font> 
