import React from "react";
import './Branches.css';
import GrassIcon from '@mui/icons-material/Grass';

function Branches() {
    return (
        <section className='branches'>
            <ul className="k">
                <li className="selected">
                    <a href="/">
                        <GrassIcon
                            className="branchIcon"
                            sx={{ fontSize: 30 }}
                        />
                        <p>Green House 1</p>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <GrassIcon
                            sx={{ fontSize: 30 }}
                        />
                        <p>Green House 2</p>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <GrassIcon
                            sx={{ fontSize: 30 }}
                        />
                        <p>Green House 3</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Branches;