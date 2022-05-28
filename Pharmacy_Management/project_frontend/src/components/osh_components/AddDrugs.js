import React,{useState} from "react";
import axios from "axios";

export default function AddDrugs(){

    const[drugID, setDrugID] = useState("");
    const[drugName, setDrugName] = useState("");
    const[amount, setAmount] = useState("");
    const[manufactureDate, setManufactureDate] = useState("");
    const[expireDate, setExpireDate] = useState("");
    const[price, setPrice] = useState("");
    const[discription, setDiscription] = useState("");

    const[drugIDError, setDrugIDError] = useState("");
    const[drugNameError, setDrugNameError] = useState("");
    const[amountError, setAmountError] = useState("");
    const[manufactureDateError, setManufactureDateError] = useState("");
    const[expireDateError, setExpireDateError] = useState("");
    const[priceError, setPriceError] = useState("");
    const[discriptionError, setDiscriptionError] = useState("");

    function demofill(){
        setDrugID("0016")
        setDrugName("Salbitomole")
        setAmount("100")
        setManufactureDate("2022-05-08")
        setExpireDate("2026-05-08")
        setPrice("10")
        setDiscription("Painkiller")
    }

    function sendData(e){
        e.preventDefault();
        
        const newDrug ={
            drugID,
            drugName,
            amount,
            manufactureDate,
            expireDate,
            price,
            discription
        }

        //Validation
        if(drugID.length<=3){
            setDrugIDError("Input Valid ID number")
          }
          else if(drugName.length<=1){
            setDrugNameError("Please fill this field")
          }
          else if(amount.length<=1){
            setAmountError("Please fill this field")
          }
          else if(manufactureDate.length<=1){
            setManufactureDateError("Please fill this field")
          }
          else if(expireDate.length<=1){
            setExpireDateError("Please fill this field")
          }
          else if(price.length<=1){
            setPriceError("Please fill this field")
          }
          else if(discription.length<=1){
            setDiscriptionError("Please fill this field")
          }
          else
          {

        axios.post("http://localhost:8070/drug/add", newDrug).then(()=>{
            alert("New Drug Added !")
            setDrugID("");
            setDrugName("");
            setAmount("");
            setManufactureDate("");
            setExpireDate("");
            setPrice("");
            setDiscription("");

        }).catch((err)=>{
            alert(err)
        })
    }
    }

    return(
        <div className="container">
            <br/>
            <h2 align="center">Add Drugs</h2>
            <br/>
        <form className="row g-3" onSubmit={sendData}>

            <div className="col-md-6">
                <label for="drugID" className="form-label">Drug ID</label>
                <input type="text" className="form-control" id="drugID" value={drugID} placeholder="Enter Drug ID"
                onChange={(e)=>{
                    
                    setDrugID(e.target.value);
                }}/>
                {drugIDError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {drugIDError} </p>}
            </div>

            <div className="col-md-6">
                <label for="drugName" className="form-label">Drug Name</label>
                <input type="text" className="form-control" id="drugName" value={drugName} placeholder="Enter Drug Name"
                onChange={(e)=>{
                    
                    setDrugName(e.target.value);
                }}/>
                {drugNameError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {drugNameError} </p>}
            </div>

            <div className="col-md-6">
                <label for="amount" className="form-label">Amount</label>
                <input type="number" className="form-control" id="amount" value={amount} placeholder="Enter Drug Amount (Boxes)"
                onChange={(e)=>{
                    
                    setAmount(e.target.value);
                }}/>
                {amountError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {amountError} </p>}
            </div>

            <div className="col-md-6">
                <label for="manufactureDate" className="form-label">M.F.D:</label>
                <input type="date" className="form-control" id="manufactureDate" value={manufactureDate} placeholder="Manufacture Date"
                onChange={(e)=>{
                    
                    setManufactureDate(e.target.value);
                }}/>
                {manufactureDateError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {manufactureDateError} </p>}
            </div>

            <div className="col-md-6">
                <label for="expireDate" className="form-label">E.X.D:</label>
                <input type="date" className="form-control" id="expireDate" value={expireDate} placeholder="Expire Date"
                onChange={(e)=>{
                    
                    setExpireDate(e.target.value);
                }}/>
                {expireDateError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {expireDateError} </p>}
            </div>

            <div className="col-md-6">
                <label for="price" className="form-label">Price (Rs.)</label>
                <input type="number" className="form-control" id="price" value={price} placeholder="Price (Rs.)"
                onChange={(e)=>{
                    
                    setPrice(e.target.value);
                }}/>
                {priceError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {priceError} </p>}
            </div>

            <div className="col-md-6">
                <label for="discription" className="form-label">Discription</label>
                <input type="text" className="form-control" id="discription" value={discription} placeholder="Discription"
                onChange={(e)=>{
                    
                    setDiscription(e.target.value);
                }}/>
                {discriptionError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {discriptionError} </p>}
            </div>
            
            <div>
            <br/>
            <button type="submit" className="btn btn-success">Submit</button> &nbsp;
            <button type="reset" className="btn btn-success">Reset</button> &nbsp;
            </div>

        </form>
        <br/>
        <button onClick={()=>{demofill()}} className="btn btn-primary">DEMO</button>
        </div>
    )

}