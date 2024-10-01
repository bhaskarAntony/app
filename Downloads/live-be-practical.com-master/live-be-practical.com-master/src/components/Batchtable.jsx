import React from 'react'
import '../styles/batchTable.css'

function Batchtable() {
  return (
    <section className='bacthTable container-xxl m-xxl-auto text-center'>
      <h4 className="fs-3 elite-yellow">Batch</h4>
        <h1 className="heading text-900 text-center text-white "><span className="elite-g-text mx-4">Choose your </span> Batch</h1>
     <div className="container mt-5">
     <table class="table text-center" border={0} cellSpacing={10}>
  <thead>
    <tr className='table-head'>
      <th scope="col">Features</th>
      <th scope="col">Standard Batch</th>
      <th scope="col">Elite Batch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Placement Assistance</th>
      <td>5 + 2 months</td>
      <td>unlimited</td>
    </tr>
    <tr>
      <th scope="row">DSA</th>
      <td><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
      <td><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
    <th scope="row">DSA (Exclusive Problems)</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill text-danger fs-4"></i></td>
      <td><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
    <th scope="row">Softskills</th>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
         <th scope="row">Internship</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill text-danger fs-4"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
    <th scope="row">Placement ready Program</th>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
    <th scope="row">Job Guaranteed</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill text-danger fs-4"></i></td>
      <td class="table-success"><i class="bi bi-check-circle-fill text-success fs-4"></i></td>
    </tr>
    <tr>
    <th scope="row">Refund</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill text-danger fs-4"></i></td>
      <td><small className='fs-6'>if not placed (50% of course fees)</small></td>
    </tr>
    <tr>
    <th scope="row">Add-On's</th>
      <td class="table-danger"><i class="bi bi-x-circle-fill text-danger fs-4"></i></td>
      <td><small className=' fs-6'>(AWS, DevOps tools(Jenkins, Git) <br /> Starting with Python)</small></td>
    </tr>
  </tbody>
</table>
     </div>
    </section>
  )
}

export default Batchtable
