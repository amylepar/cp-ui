import React, {  useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';
import { CounterParty } from './api/cp-api/Counterparty';
import { ColDef, GridReadyEvent, ICellRendererParams, IDatasource } from 'ag-grid-community';


function App() {

  const gridRef = useRef<AgGridReact<CounterParty>>(null);
  
  const [columnDefs] = useState([
      // example from https://www.ag-grid.com/react-data-grid/infinite-scrolling/
      { header: 'LEI', 
        field: 'lei', 
        valueGetter: 'node.id', 
        cellRenderer: (props: ICellRendererParams) => {
        if (props.value !== undefined) {
          return props.value;
        } else {
          return (
            <img src="loading.gif" />
          );
        }
      }, },
      { header: 'Legal Name', field: 'legalName'},      
      { header: 'Country', field: 'legalAddress.country' },
      { header: 'City', field: 'legalAddress.city' },
      { header: 'Entity Category', field: 'entityCategory' },
      { header: 'Registration Date', field: 'registrationDetails.initialRegistrationDate' },
      { header: 'Renewal Date', field: 'registrationDetails.nextRenewalDate' }
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      resizable: true,
      minWidth: 100,
      flex: 1,
      filter: true, 
      sortable: true 
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch('json/cptestdata.json')
    .then(result => result.json())
    .then(data => 
      {
        const dataSource: IDatasource = {
          rowCount: undefined,
          getRows: (params) => {
            console.log(
              'asking for ' + params.startRow + ' to ' + params.endRow
            );
            // At this point in your code, you would call the server.
            // To make the demo look real, wait for 500ms before returning
            setTimeout(function () {
              // take a slice of the total rows
              const rowsThisPage = data.slice(params.startRow, params.endRow);
              // if on or after the last page, work out the last row.
              let lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              // call the success callback
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api.setDatasource(dataSource);
      })
  }, []);

  const onBtExport = useCallback(() => {
    gridRef.current!.api.exportDataAsExcel();
  }, []);


  const containerStyle = useMemo(() => ({width: '100%', height:'100%'}), []);
  const gridStyle = useMemo(() => ({width: '100%', height:'100vh'}), []);

  return (
    <div className="App" style={containerStyle}>
      <div className="App-header">
        <h2>Counterparty Management Application</h2>
        <div>
          <button
            onClick={onBtExport}
            style={{ marginBottom: '5px', fontWeight: 'bold' }}
          >
            Export to Excel
          </button>
        </div>
      <div className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact<CounterParty>
              ref={gridRef}              
              defaultColDef={defaultColDef}
              columnDefs={columnDefs}
              rowBuffer={0}
              rowSelection={'multiple'}
              rowModelType={'infinite'}
              cacheBlockSize={100}
              cacheOverflowSize={2}
              maxConcurrentDatasourceRequests={1}
              infiniteInitialRowCount={1000}
              maxBlocksInCache={10}
              onGridReady={onGridReady}
              >
          </AgGridReact>
      </div>
      </div>
  </div>    

  );
}

export default App;
