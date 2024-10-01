import React, { useEffect, useState } from 'react';
import '../styles/training.css';
import { trainingModule } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import ApplyNow from '../Extra/ApplyNow';

const traningData = [
    {
        title:"Classroom training",
        image:"https://cdn-icons-png.flaticon.com/128/1436/1436664.png",
    },
    {
        title:"Online Training",
        image:"https://cdn-icons-png.flaticon.com/128/9167/9167026.png",
    },
    {
        title:"Corporate Training",
        image:"https://cdn-icons-png.flaticon.com/128/3048/3048654.png",
    },
    {
        title:"Campus Training",
        image:"https://cdn-icons-png.flaticon.com/128/7533/7533677.png",
    }
]

function Training() {
    return (
        // <div className='container-fluid p-0 py-1'>
        //    {/* <div className="text-center py-4">
        //    <p className="p-large1 text-main-danger">Training</p>
        //     <h3 className="fs-1 text-900">Mode Of Training</h3>
        //    </div> */}
        //     <div className="training-container overflow-hidden">
        //         <div className="row">
        //             <div className="col-12 col-md-12 col-lg-6 p-0">
        //                 <div className="training-left">
        //                     <p className="p-large1 text-white">Master classes</p>
        //                     <h1 className="display-3 fw-bold text-black">Start your Learning <br /> <span className="text-white">Journey Today!</span></h1>
        //                     <p className="text-white p-large1">with a free Master Classes</p>
        //                   <a href="/book-demo">
        //                   <button className='btn-prm'>START YOUR CAREER</button>
        //                   </a>
        //                 </div>
        //             </div>
        //             <div className="col-12 col-md-12 col-lg-6 p-0">
        //                 <div className="training-right d-flex align-items-center p-lg-5 p-4">
        //                 <div className="row align-items-center">
        //         {
        //              traningData.map((item, index) => (
        //                 <div className="col-6 col-md-6 col-lg-6" key={index}>
        //                     <div className="training-card  mb-2 text-center">
        //                     <img src={item.image} alt="traning" />
                       
        //                          <h4 className='card-heading text-900'>{item.title}</h4>
        //                     </div>
        //                 </div>
        //             ))
        //         }

        //         </div>
        //                 </div>
        //                 </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container-fluid training-container p-2 p-md-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="training-left">
                        <h5 className="fs-5 text-main-danger">Mode Of Training</h5>
                        <h1 className="fs-1">Start your Learning <br /> <span className="text-white">Journey Today! </span></h1>
                        <hr />
                        <p className="fs-6 text-secondary">with free master classes</p>
                        <ul className="training-points p-0" type="none">
                            <li className="fs-5 mb-3"><i class="bi bi-arrow-return-right"></i> Classroom training.</li>
                            <li className="fs-5 mb-3"><i class="bi bi-arrow-return-right"></i> Online Training.</li>
                            <li className="fs-5 mb-3"><i class="bi bi-arrow-return-right"></i> Corporate training.</li>
                            <li className="fs-5 mb-3"><i class="bi bi-arrow-return-right"></i> Hybrid training.</li>
                            <li className="fs-5 mb-3"><i class="bi bi-arrow-return-right"></i> Campus training.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="training-right">
                    <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne1">
                        <div className="icon">
                        <i class="bi bi-easel"></i>
                            </div>
                        Classroom training
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                           <p className="fs-6">
                           In-house training / classroom training is livelier with our excellent infrastructure and modern facilities and face to face interaction with our trainers.
                           </p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="icon">
                              <i class="bi bi-bezier"></i>
                            </div>
                        Online Training
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           <p className="fs-6">Online training lets you compete your training from any place in the world. Learn your desired course while sitting in your home</p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                        <div className="icon">
                        <i class="bi bi-check-circle"></i>
                            </div>
                        Corporate Training
                        </button>
                        </h2>
                        <div id="collapseThree1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           <p className="fs-6">
                           Our trainers provide corporate training, so you can stay up to date with the latest developments in your field.
                           </p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
                        <div className="icon">
                        <i class="bi bi-cassette"></i>
                            </div>
                        Hybrid Training
                        </button>
                        </h2>
                        <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-6">
                            We provide hybrid classes, where students can attend classes online or offline. It is great for students with a busy schedule.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                            <div className="icon">
                            <i class="bi bi-building-check"></i>
                            </div>
                        Campus Training
                        </button>
                        </h2>
                        <div id="collapseThree3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           <p className="fs-6">
                           Be Practical conducts job skill training programs for college students. It helps college students get trained and find their desired job.
                           </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Training;
