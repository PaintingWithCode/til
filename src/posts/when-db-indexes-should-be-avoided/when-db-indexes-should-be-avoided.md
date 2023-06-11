---
id: kRbcCHhn
title: When DB indexes should be avoided
date: '2023-06-11'
topic: databases
additionalTags: 
  - 'SQL'
  - 'Postgres'
isPublished: true
---

- Indexes should not be used on small tables.
- Indexes should not be used on columns that return a high percentage of data rows when used as a filter condition in a query's WHERE clause. 
  - For instance, on a `status` column that has enum-like string values such as `'ACTIVE'` and `'DISABLED'`.
- Indexes should not be used on columns that contain a high number of `NULL` values. 
  - This can be alleviated by using a partial index that omits those values.
- Indexes should not be used on columns that are frequently manipulated.