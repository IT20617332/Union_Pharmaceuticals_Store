import React, {useState, useEffect} from "react";

import {getAllDrugs} from "./DrugServicers"
import { useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import PrintIcon from '@material-ui/icons/Print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



export default function Report(){
    
    const navigate = useNavigate()

    const [drugss, setDrug] = useState([]);
    

    useEffect(() => {
        getAllDrugs().then((data) => {
            console.log("data>>", data.data.sups)
            setDrug(data.data.sups)
        })
    },[])


    
  /*get data from database*/
  const columns=[
    {title: "DrugID" , field:"drugID" , type:"string"},
    {title: "DrugName" , field:"drugName" , type:"string"},
    {title: "MFD" , field:"manufactureDate" , type:"string"},
    {title: "EXD" , field:"expireDate" , type:"string"},
    {title: "Amount" , field:"amount" , type:"string"},
    {title: "Price(Rs.)" , field:"price" , type:"string"},
    {title: "Description" , field:"discription" , type:"string"},
    
]
 
/*downlord PDF function*/
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("All Drug Details", 30, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body:drugss
    })
    doc.save('All Drugs.pdf')
  }

    


    return(
      <>
      <div className="container">
             

{/*
  <input type="text"
   placeholder="Search.." 
   className="text111"
   name="search2"
   onChange ={(e)=>{
       setSearch(e.target.value);
   }}
   style={{border:"none",color:"black"}}
  
  
  />
<button type="submit" style={{color:"black"}}><i class="fa fa-search"></i></button>*/}

 <div className="containerPrint">

  <div class="container-fluid" style={{ marginBottom:"40px" ,marginTop:"60px" }} >
  <MaterialTable  style={{background:"#e1e5ee", marginBottom:"40px"}}
              title="All Drug Details "
              columns={columns}
              data={drugss}
              actions={[
                    {
                      icon: () => <PrintIcon />,// you can pass icon too
                      tooltip: "Export to Drug Details Pdf",
                      onClick: () => downloadPdf(),
                      isFreeAction: true
                    }
                  ]}
              options={{
                    sorting: false,
                    search: false,
                    paging : false,
                    filtering : false,
                    actionsColumnIndex: -1}}/>      
  </div>
  </div>
  </div>
      </>
    )
}

