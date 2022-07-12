import React, {  useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';




function App() {
  const [rowData] = useState([
    {lei: "2111", version: 1, legalName: "test", legalJurisdiction: "Test", entityCategory: "test", 
    entityStatus: "ok", loadTime: new Date(),
    legalAddress: {
      firstAddressLine: "Test",
      city: "City test",
      region: "US-MA",
      country: "US",
      postalCode: "1232"
    },
    headquartersAddress: {
      firstAddressLine: "Test",
      city: "City test",
      region: "US-MA",
      country: "US",
      postalCode: "1232"
    },
    registrationDetails: {
      registrationStatus: "issued",
      managingLou: "string",
      validationSources: "dasda",
      initialRegistrationDate: new Date(),
      lastUpdateDate: new Date(),
      nextRenewalDate: new Date()
    }
  }
]);

const [columnDefs] = useState([
    { header: 'Legal Name', field: 'legalName', filter: true, sortable: true },
    { header: 'LEI', field: 'lei', filter: true, sortable: true },
    { header: 'Country', field: 'legalAddress.country', filter: true, sortable: true },
    { header: 'City', field: 'legalAddress.city', filter: true, sortable: true },
    { header: 'Entity Category', field: 'entityCategory', filter: true, sortable: true },
    { header: 'Registration Date', field: 'registrationDetails.initialRegistrationDate', filter: true, sortable: true },
    { header: 'Renewal Date', field: 'registrationDetails.nextRenewalDate', filter: true, sortable: true }
]);


const containerStyle = useMemo(() => ({width: '100%', height:'100%'}), []);
const gridStyle = useMemo(() => ({width: '100%', height:'100vh'}), []);

return (
  <div className="App" style={containerStyle}>
    <div className="App-header">
      <h2>Counterparty Management Application</h2>
    <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
    </div>
    </div>
</div>    

);
}

export default App;
