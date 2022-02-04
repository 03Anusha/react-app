import React, { useState, useEffect } from 'react'
/*import axios from 'axios'*/
import MaterialTable from 'material-table'
/*import { Tooltip } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';*/


function Table()  { 


    const [data, setData] = useState([])
    const columns = [
      {title: "Id", field: "id",align:"left" },
        {title: "Crust", field: "Crust",align:"left",validate:rowData=>{
        if(rowData.crust===undefined || rowData.crust===" "){
          return"Required" 
        }
        return true
        }},
        {title: "Flavor", field: "Flavor",align:"left",validate:rowData=> {
        if(rowData.crust===undefined || rowData.crust===" "){
          return"Required" 
        }
        return true
      }},
        {title: "Size", field: "Size",align:"left",validate:rowData=> {
        if(rowData.crust===undefined || rowData.crust===" "){
          return"Required" 
        }
        return true
      }},
        {title: "Table_No", field: "Table_No",align:"left" }

    ]
   useEffect(()=>{
         fetch("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza")
        .then (resp=>resp.json())
        .then(resp => {
            console.log(resp)
            setData(resp)
          })
            
    }, [])

    return (
        <div className="table-container">
      <MaterialTable
      title="Ordering list"
      columns={columns}
        data={data}
      
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
         setData([...data,newRow])
         setTimeout(() => {
           
           resolve()
         },2000)
      
         }),
         onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
        
          const updatedData=[...data]
          updatedData[oldRow,data.id]=newRow
          setTimeout(() => {
            setData(updatedData)
            resolve()
          }, 2000)
        }),
      
         
        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          console.log(selectedRow)
          setTimeout(() => {
          
            resolve()
          }, 2000)
          
        })
        
      
      }}
      /*actions={[
        {icon:()=><DeleteIcon/>,
        tooltip:"clickme",
        onClick(e,data)=>console.log(data),
        isFreeAction:true
        }
      ]}
     /* { <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton >
</Tooltip>
      }*/
     

      options={{search:true,searchFieldAlignment:"left",searchFieldVariant:"outlined",
        paging:true,pageSizeOptions:[5,10,15,20,25,50,100],
      showFirstLastPageButtons:false,
    paginationPosition:"bottom",
    actionsColumnIndex:-1,addRowPosition:"first",
     }}
      />
        </div> 
    );
}
    export default Table; 