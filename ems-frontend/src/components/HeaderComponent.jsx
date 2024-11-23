import React from 'react'

export default function HeaderComponent() {
    return (

        <header>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class=" text-light navbar-brand" href="/">EMS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                            
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-light" href="/employees" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Employee
                                </a>
                                <ul class="dropdown-menu  text-light">
                                    <li><a class="dropdown-item" href="/add">Add Employees</a></li>
                                    <li><a class="dropdown-item" href="/employees">View Employees</a></li>
                                    
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departement
                                </a>
                                <ul class="dropdown-menu text-light">
                                    <li><a class="dropdown-item" href="#">Add</a></li>
                                    <li><a class="dropdown-item" href="#">View Departements</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
