import React from "react";
import "./graph.css";
import { IoAddCircle, IoRemoveCircleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
const Graph = (props) => {
  const [drink, setDrink] = useState("");
  const [food, setFood] = useState("");
  const [admin, setAdmin] = useState("");
  const [developer, setDeveloper] = useState("");
  const [waiters, setWaiters] = useState("");
  const [officeBoy, setOfficeBoy] = useState("");
  const [cashier, setCashier] = useState("");

  useEffect(() => {
    getStructure();
  }, []);

  const getStructure = async () => {
    const response = await axios.get(
      `http://127.0.0.1:5000/structure/63a81c48d2166be1b25c5c0d`
    );
    setDrink(response.data.drink);
    setFood(response.data.food);
    setAdmin(response.data.admin);
    setDeveloper(response.data.developer);
    setWaiters(response.data.waiters);
    setOfficeBoy(response.data.officeBoy);
    setCashier(response.data.cashier);
  };
  const updateStructure = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://127.0.0.1:5000/structure/63a81c48d2166be1b25c5c0d`,
        {
          drink,
          food,
          admin,
          developer,
          waiters,
          officeBoy,
          cashier,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bungkusGrafik">
        <div className="grafiksekarang">
          <div className="grafikMinumanSekarang">
            <p>Drink</p>
            <div className="isiGrafikMinumanSekarang">
              <div
                className="isiGrafikMinumanSekarangJuga"
                style={{
                  backgroundColor: "#0099FF",
                  height: `${props.tinggiminuman}%`,
                }}
              ></div>
            </div>
            <p>
              {props.structure.drink}/{props.targetminuman}
            </p>
          </div>
          <div className="grafikMinumanSekarang">
            <p>Food</p>
            <div className="isiGrafikMinumanSekarang">
              <div
                className="isiGrafikMakananSekarangJuga"
                style={{
                  backgroundColor: "#FFB800",
                  height: `${props.tinggimakanan}%`,
                }}
              ></div>
            </div>
            <p>
             {props.structure.food}/ {props.targetmakanan}
            </p>
          </div>
        </div>
        <div className="ubahGrafik">
          <h2>Report</h2>
          <form onSubmit={updateStructure}>
            <div className="isiForm">
              <label htmlFor="drink">Drinks</label>
              <input
                type="number"
                id="drink"
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
              />
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setDrink(drink + 1);
                }}
              />
            </div>
            <div className="isiForm">
              <label htmlFor="food">Foods</label>
              <input
                type="number"
                id="food"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setFood(food + 1);
                }}
              />
            </div>
            <button
              onClick={() => {
                if (window.confirm("Are You Sure Reset This Data?")) {
                  setDrink(0);
                  setFood(0);
                }
              }}
            >
              Reset Data
            </button>
            <button type="submit" onClick={()=>window.location.href="/graph"}>Submit</button>
          </form>
        </div>
        <div className="ubahLowongan">
          <h2>ADD (Looking For)</h2>
          <form onSubmit={updateStructure}>
            <div className="isiFormLowongan">
              <label htmlFor="developer">Developer</label>
              <IoRemoveCircleSharp
                className="tombolTambah"
                onClick={() => {
                  setDeveloper(developer - 1);
                }}
              />
              <input type="number" readOnly id="developer" value={developer} onChange={(e) => setDeveloper(e.target.value)}/>
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setDeveloper(developer + 1);
                }}
              />
            </div>
            <div className="isiFormLowongan">
              <label htmlFor="admin">Admin</label>
              <IoRemoveCircleSharp
                className="tombolTambah"
                onClick={() => {
                  setAdmin(admin - 1);
                }}
              />
              <input
              onChange={(e) => setAdmin(e.target.value)}
                type="number"
                readOnly
                min={0}
                max={20}
                id="admin"
                value={admin}
              />
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setAdmin(admin + 1);
                }}
              />
            </div>
            <div className="isiFormLowongan">
              <label htmlFor="waiter">Waiters</label>
              <IoRemoveCircleSharp
                className="tombolTambah"
                onClick={() => {
                  setWaiters(waiters - 1);
                }}
              />
              <input type="number" readOnly id="waiter" onChange={(e) => setWaiters(e.target.value)} value={waiters} />
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setWaiters(waiters + 1);
                }}
              />
            </div>
            <div className="isiFormLowongan">
              <label htmlFor="cashier">Cashier</label>
              <IoRemoveCircleSharp
                className="tombolTambah"
                onClick={() => {
                  setCashier(cashier - 1);
                }}
              />
              <input type="number" readOnly id="cashier" value={cashier}  onChange={(e) => setCashier(e.target.value)}/>
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setCashier(cashier + 1);
                }}
              />
            </div>
            <div className="isiFormLowongan">
              <label htmlFor="ob">Office Boy</label>
              <IoRemoveCircleSharp
                className="tombolTambah"
                onClick={() => {
                  setOfficeBoy(officeBoy - 1);
                }}
              />
              <input
                type="number"
                min={0}
                max={30}
                readOnly
                onChange={(e) => setOfficeBoy(e.target.value)}
                id="ob"
                value={officeBoy}
              />
              <IoAddCircle
                className="tombolTambah"
                onClick={() => {
                  setOfficeBoy(officeBoy + 1);
                }}
              />
            </div>
            <button className="submitLowongan" type="submit" onClick={()=>window.location.href="/graph"}>Edit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Graph;
