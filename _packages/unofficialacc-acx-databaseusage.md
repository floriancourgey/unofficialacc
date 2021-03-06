---
title: ACX Database Usage
download_link: https://github.com/floriancourgey/unofficialacc/releases/download/unofficialacc-acx-databaseusage-2.2.0/unofficialacc-acx-databaseusage.xml
author: ACX
release_name: unofficialacc-acx-databaseusage
created_at: 2016-01-01
updated_at: 2016-01-01
last_version: 2.2.0
short_description: ACX package to review and monitor ACC Database Usage
entities:
  - option acxCustomerName
  - option acxInstanceName
  - option acxSFTPUserName
  - option acxDatabaseUsageReportVersion
  - jssp acx:databaseUsage.jssp
  - javascript acx:core.js
  - javascript acx:database.js
  - javascript acx:net.js
  - javascript acx:workflow.js
  - sql acx:postgresql-aggruvspace.sql
  - sql acx:postgresql-pgbloat.sql
  - sql acx:postgresql-pglocks.sql
  - sql acx:postgresql-uvspace.sql
  - sql acx:sqlserver-uvspace.sql
---

<!--more-->

## Demo

![]({{ site.baseurl }}/assets/unofficialacc-acx-databaseusage/unofficialacc-acx-databaseusage-tables.jpg)
![]({{ site.baseurl }}/assets/unofficialacc-acx-databaseusage/unofficialacc-acx-databaseusage-workflows.jpg)

## Usage

- Go to https://yourinstance/acx/databaseUsage.jssp

## Installation

- Import package
- Run SQL Scripts in Administration>Configuration>SQL Scripts:
  - acx:postgresql-uvspace.sql
  - acx:postgresql-aggruvspace.sql
