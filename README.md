# GSheetChart
Generate BI geo charts on Google Map by working as a simple add-on for Google Sheets. Google Sheets provide native charting tool, however, the part of Geo is with only limited functionality but lots of restriction. This project tries to provide another option by creating charts on Google Map, which provides more possibiliy.

### Target
1. Create a simple BI charting system with Google Sheets content as datasource, and Google Map as Geo map base.
2. This charting works as a Google Sheets add-on. The project is planned to be published as sheets add-on once ready.
3. Rendering bases on [Google Map javascript API](https://developers.google.com/maps/documentation/javascript/).

### Status
* Bubble chart is ready.
  - 3 dimension: **name(optional)**, **lat**, **lng**, and 1 value supported: **value(optional)**. 
  - Binding is according to sheets column title. 
  - If **value** is not provided, the chart goes to scatter.
* Pie/Bar/Line chart is planned.

### Deployment
* Before published as Google Sheets add-on, there are 2 ways to deploy:
  * Working as [scripts bound to Google Sheets](https://developers.google.com/apps-script/guides/bound).
  * Working as [standalone scripts](https://developers.google.com/apps-script/guides/standalone).