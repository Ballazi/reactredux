import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, storeData, updateStoreData } from './action/action';


function App() {
  const data = useSelector(state => state.incrementDecrement);
  const custData = useSelector(state => state.dataStorage);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [toogle, setToogle] = useState("");

  const handleSubmit = () => {
    if (name === "" && address === "") {
      alert("Please enter name and address");
    }
    else if (name === "") {
      alert("please enter name");
    }
    else if (address === "") {
      alert("please enter address");
    }
    else {
      dispatch(storeData(name, address));
      setAddress("");
      setName("");
    }

  }

  const editClicked = (obj) => {
    setToogle(obj.id);
    setChangedAddress(obj.address);
    setChangedName(obj.name);
  }

  const [changedName, setChangedName] = useState("");
  const [changedAddress, setChangedAddress] = useState("");

  const updateData = () => {
    const obj = {
      id: toogle,
      name: changedName,
      address: changedAddress
    }
    dispatch(updateStoreData(obj))
    setToogle("");
    setChangedAddress("");
    setChangedName("");
  }



  return (
    <div className="App">
      <h1>
        Redux best examples
      </h1>
      <div style={{ margin: "10px", padding: "10px", border: "1px solid green" }}>
        <button style={{ padding: "10px" }} onClick={() => dispatch(decrement())}>-</button>
        <span style={{ padding: "10px" }}>{data}</span>
        <button style={{ padding: "10px" }} onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={{ margin: "10px", padding: "10px", border: "1px solid green" }}>
        <input type="text" style={{ padding: "10px" }} placeholder='Name' value={name} onChange={e => setName(e.target.value)} id="input-1" />
        <input style={{ padding: "10px", margin: "0 5px" }} type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} id="input-2" />
        <button style={{ padding: "10px" }} onClick={() => handleSubmit()}>SUBMIT</button>
      </div>
      <div style={{ margin: "10px", border: "1px solid green", height: "400px", overflowY: "scroll" }}>
        {custData.length === 0 ? (<div>Data not found</div>) :
          <table border="1" align="center" cellPadding="6" cellSpacing="0" bgcolor="lightgray" style={{ width: "100%" }} >
            <thead>
              <tr>
                <th>SI NO.</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                custData.map((ele, ind) => {
                  return toogle !== ele.id ? (
                    <tr key={ele.id}>
                      <td>{ind + 1}</td>
                      <td>{ele.name}</td>
                      <td>{ele.address}</td>
                      <td style={{ cursor: "pointer" }} onClick={() => editClicked(ele)}>Edit</td>
                    </tr>
                  ) :
                    (
                      <tr key={ele.id}>
                        <td>{ind + 1}</td>
                        <td><input value={changedName} onChange={e => setChangedName(e.target.value)} id="input-2" /></td>
                        <td>
                          <input value={changedAddress} onChange={e => setChangedAddress(e.target.value)} id="input-2" />
                        </td>
                        <td style={{ cursor: "pointer" }} onClick={() => updateData()}>Update</td>
                      </tr>
                    )
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default App;
