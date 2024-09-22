---
title: ACC web
download_link: https://github.com/floriancourgey/acc-web/releases/download/0.1.2/unofficialacc-acc_web.xml
release_name: new-package
created_at: 2024-09-01
updated_at: 2024-09-20
last_version: 0.1.2
short_description: Powerful web portal to manage your Adobe Campaign instance!
---

<!--more-->

# acc-web

Access Adobe Campaign best features from anywhere with ACC Web: Explorer, Generic Query Editor, Manage Operators/Workflows/Deliveries and more!

Advanced features include CodeMirror IDE for enhanced syntax highlighting (XML, HTML, JSSP, JS), Deployment Wizard options display, Schemas list with MD5

Compatible with any browser, including mobile (iOS, Android), Linux and Windows.

## Explorer
![](https://github.com/floriancourgey/acc-web/raw/main/doc/explorer.png)

## Workflow
![](https://github.com/floriancourgey/acc-web/raw/main/doc/workflow-execution.png)

## Query
![](https://github.com/floriancourgey/acc-web/raw/main/doc/generic-query-editor.png)

## Current features

|Scope|Features|Techno|
|-|-|-|
|Explorer|- Folders<br>- Current folder path<br>- Folder view<br>- List Commands|GetEntityIfMoreRecent, LoadChildren|
|Records list |- List records from schema<br>- Get enum|ExecuteQuery, GetEntityIfMoreRecent|
|Record details|- Get XML data<br>- Save record|ExecuteQuery, Write|
|Delivery|- Get logs|ExecuteQuery|
|Worklow|- Start, Stop, Execute pending task, Unconditionnal stop<br>- Display activities & transitions<br>- Get logs|ExecuteQuery|
|Setup|- All schemas<br>- All server options|ExecuteQuery, LoadOptions|

## Features TBD

- Mass update selected lines
- Manage Operator: Create, Update, Reset
- Manage Delivery: Start, Stop
- "Dashboard" Campaign with N deliveries
- "Dashboard" Delivery with broadlogs, trackinglogs
- "Dashboard" Workflows with N activities
- "Dashboard" Webapp with N activities
- "Dashboard" Operator with N rights

