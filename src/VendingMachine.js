import React from "react"
import Soda from "./Soda"
import Chips from "./Chips"
import Sardines from "./Sardines"
import { BrowserRouter, Route, Link } from "react-router-dom"

const VendingMachine = () => {
    return (
        <main>
            <BrowserRouter>

                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/sardines">Sardines</Link>

                <Route exact path="/soda" ><Soda /><Link to="/">Go back</Link></Route>
                <Route exact path="/chips"><Chips /><Link to="/">Go back</Link></Route>
                <Route exact path="/sardines"><Sardines /><Link to="/">Go back</Link></Route>

            </BrowserRouter >
        </main>
    )
}

export default VendingMachine